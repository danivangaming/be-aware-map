$(function() {
    const layerName: string = $("#layerName").text()
    const body = $("body")
    document.addEventListener('mousedown', (e) =>{e.preventDefault()});

    WA.onInit().then(() => {
        WA.room.onEnterLayer(layerName).subscribe(() => {
            body.show("slow")
        })
        WA.room.onLeaveLayer(layerName).subscribe(() => {
            body.hide("slow")
        });
    })
})