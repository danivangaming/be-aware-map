import {HtmlObject} from "./HtmlObject.js";
import {Tab} from "./Tab.js";
import {getUniqueID} from "./HtmlObjectHelper.js";

export class TabContainer implements HtmlObject{

    tabs : Tab[] = []
    id: string = getUniqueID()

    getHtml = (): JQuery => {


let nav = $("<nav></nav>")

        let htmlHeader = $("<div class='nav nav-tabs'></div>")
        htmlHeader.attr("role", "tablist");

        let htmlContent = $("<div class='tab-content'></div>")

        //alert(this.tabs[0].getHtmlContent().html())

        this.makeTabsValid(true)



        this.tabs.forEach((tab) => {

            htmlHeader.append(tab.getHtmlHeader)
            htmlContent.append(tab.getHtmlContent)

        })

        nav.append(htmlHeader);

        return $("<div></div>").append(nav).append(htmlContent)
    };

    addTab = (tab : Tab) => {
        this.tabs.push(tab)
    };


    makeTabActive = (tab : Tab) => {

        if(this.tabs.indexOf(tab) == -1){
            return
        }

        let activeIndex = this.tabs.findIndex((tab) =>{
            return tab.active;
        })

        this.tabs[activeIndex].makeTabInactive()
        tab.makeTabActive()
    };

    makeNextTabActive = () => {

        let activeIndex = this.tabs.findIndex((tab) =>{
            return tab.active;
        })

        this.tabs[activeIndex].makeTabInactive()
        this.tabs[(activeIndex + 1) % this.tabs.length].makeTabActive()
    };

    makeNextDomTabActive = () => {
        let activeIndex = this.tabs.findIndex((tab) =>{
            return tab.active;
        })

        this.tabs[activeIndex].makeTabDomElementInactive()
        this.tabs[(activeIndex + 1) % this.tabs.length].makeTabDomElementActive()
    };

    makeTabsValid = (oneTabMustBeActive : boolean = false) => {
        let tabActiveCounter = 0



        this.tabs.forEach((tab) => {

            if(tab.active){
                tabActiveCounter++

                if(tabActiveCounter > 1){
                    tab.makeTabInactive()
                    tabActiveCounter--
                }
            }
        })
        if( oneTabMustBeActive && tabActiveCounter == 0){
            this.tabs[0].makeTabActive()
        }
    };


    getActiveTab = () => this.tabs.find((tab) => {
        return tab.active;
    });
}