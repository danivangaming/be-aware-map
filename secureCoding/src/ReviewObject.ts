import {TabContainer} from "../../shared/htmlObjects/TabContainer.js";
import {Tab} from "../../shared/htmlObjects/Tab.js";
import {CodeBox} from "../../shared/htmlObjects/CodeBox.js";
import {Button} from "../../shared/htmlObjects/Button.js";
import {changeTabKey, keysToMap} from "../../shared/global/config.js";


export class ReviewObject {

    tabContainer = new TabContainer()
    activeBindFunctions: ((e: KeyboardEvent) => void)[] = [];


    addButton(tab: Tab, name: string, onClick: () => void) {
        let button = new Button(name, onClick)
        tab.addTabContent("button", button)
    }

    createTabWithCode(active: boolean, code: string, language: string = "javascript", tabName : string = "Problem"): Tab {
        let tab = new Tab(tabName);


        let codeBox = new CodeBox(code, language)
        tab.addTabContent("codeBox", codeBox)

        if (active) {
            tab.makeTabActive()
        }
        this.tabContainer.addTab(tab)

        let tabsCount = this.tabContainer.tabs.length;

        if(tabsCount > 1){
            let tabCounter = 1

            this.tabContainer.tabs.forEach((tab) =>{
                tab.changeName(tabName + " " + tabCounter++)
            })
        }



        return tab
    }




    getHtml(): JQuery {
        return this.tabContainer.getHtml()
    }



    bindButtonsToKeys = () => {

        this.activeBindFunctions.forEach((bindFunction) => {
            document.removeEventListener('keydown', bindFunction);
        })


        const bindFunction = (e: KeyboardEvent) => {
            e.preventDefault();

            if(e.key == changeTabKey){
                this.tabContainer.makeNextDomTabActive();
            }
            let activeTab = this.tabContainer.getActiveTab();
            if (activeTab != undefined) {

                let buttons = activeTab.getTabContentsByIdentifier("button") as Button[];


                let index = 0
                buttons.forEach((button) => {
                    if(index >= keysToMap.length){
                        return;
                    }
                        else if(e.key == keysToMap[index]){
                            button.triggerButton();
                        }
                    index++;
                })

            }
        };

        document.addEventListener('keydown', bindFunction);
        this.activeBindFunctions.push(bindFunction)


    };



    unbindButtons = () => {
        this.activeBindFunctions.forEach((bindFunction) => {
            document.removeEventListener('keydown', bindFunction);
        });
    };
}