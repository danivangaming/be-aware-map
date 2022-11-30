import {LEVEL_CONSTANTS, showProgress} from "../../shared/global/LevelConstants.js";

$(function() {
    let progressContainer = $("#progress-container")
showProgress(progressContainer,LEVEL_CONSTANTS.LEVEL_2);
})