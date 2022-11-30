WA.onInit().then(() => {

    const elevatorSubscription3= WA.room.onEnterLayer("zones/zone3").subscribe(() => {
        WA.nav.goToRoom("../securityVulnerabilities/map.json")
    })

    const elevatorSubscription2= WA.room.onEnterLayer("zones/zone2").subscribe(() => {
        WA.nav.goToRoom("../secureCoding/secure_coding_map.json")
    })

    const elevatorSubscription1= WA.room.onEnterLayer("zones/zone1").subscribe(() => {
        WA.nav.goToRoom("../code_analysis/code_analysis.json")
    })


})