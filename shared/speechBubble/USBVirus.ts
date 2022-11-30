$(function () {
    const layerName: string = $("#layerName").text()
    const body = $("body")

    WA.onInit().then(() => {
        WA.room.onEnterLayer(layerName).subscribe(() => {
            WA.state.onVariableChange('inserted_into_pc').subscribe(() => {
                body.show("slow")
            })
        })
        WA.room.onLeaveLayer(layerName).subscribe(() => {
            body.hide("slow")
        });
    })
})