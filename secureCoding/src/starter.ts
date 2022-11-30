WA.onInit().then(() => {


    const elevatorSubscription= WA.room.onEnterLayer("exit").subscribe(() => {
        WA.nav.goToRoom("../starter/map.json")
    })
})