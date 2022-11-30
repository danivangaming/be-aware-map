import {CheckBox} from "../htmlObjects/CheckBox.js";

class LevelVariable{

    variableName : string;
    displayName : string;

    constructor(variableName : string, displayName : string) {
        this.variableName = variableName;
        this.displayName = displayName;
    }

}



const LEVEL_1 = {"cPrintProblem" : new LevelVariable("problem1", "C-Print"),
    "cStrCpyProblem" : new LevelVariable("problem2", "C-Str-Copy"),
    "cStrLenProblem" : new LevelVariable("problem3", "C-Str-Len"),
    "javaPasswordProblem" : new LevelVariable("problem4", "Java-Password"),
    "javaReadFileProblem" : new LevelVariable("problem5", "Java-Read-File"),
    "javaSocketProblem" : new LevelVariable("problem6", "Java-Socket"),
    "pythonEvalProblem" : new LevelVariable("problem7", "Python-Eval"),
    "pythonFactorialProblem" : new LevelVariable("problem8", "Python-Factorial"),
    "pythonInputValidationProblem" : new LevelVariable("problem9", "Python-Validation"),}


const LEVEL_2 = {
    "cPointer" : new LevelVariable("problem2_1", "C-Pointer"),
    "cScanf" : new LevelVariable("problem2_2", "C-Scan-F"),
    "cprinf" : new LevelVariable("problem2_3", "C-Print-F"),
    "cVariable" : new LevelVariable("problem2_4", "C-Variable"),
    "pythonAssert" : new LevelVariable("problem2_5", "Python-Assert"),
    "pythonDirectory" : new LevelVariable("problem2_6", "Python-Directory"),
    "pythonExec" : new LevelVariable("problem2_7", "Python-Exec"),
    "pythonTemp" : new LevelVariable("problem2_8", "Python-Temp"),}


export const LEVEL_CONSTANTS  = {
    "LEVEL_1" : LEVEL_1,
    "LEVEL_2" : LEVEL_2

}

export function showProgress(progressContainer : JQuery, levelConstant : {[p : string] : LevelVariable}){
    WA.onInit().then(() => {
        for(let problemKey in levelConstant){

            let levelVariable = levelConstant[problemKey as keyof typeof levelConstant]
            if(WA.state.hasVariable(levelVariable.variableName)){
                let boolVar = WA.state.loadVariable(levelVariable.variableName)
                if(boolVar){
                    progressContainer.append("<p>" + levelVariable.displayName + ": " + new CheckBox(true, true).getHtml().html() + "</p>")
                }
                else {
                    progressContainer.append("<p>" + levelVariable.displayName + ": " + new CheckBox(false, true).getHtml().html() + "</p>")
                }
            }
            else{
                progressContainer.append("<p>false</p>")

            }
        }


    });


}