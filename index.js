// Code your solution in this file!

function distanceFromHqInBlocks(pickup) {
    if (pickup > 42) {
        return pickup - 42
    } else {
        return 42 - pickup
    }
}

function distanceFromHqInFeet(pickup) {
   return distanceFromHqInBlocks(pickup) * 264
}

 function distanceTravelledInFeet (start, finish) {
    if (start < finish) {
    return (finish - start) * 264}
    else {return (start-finish) * 264}
}


function calculatesFarePrice(start, finish) {
    const feet = distanceTravelledInFeet(start, finish)
    if (feet < 400) {
        return 0
    }
    else if (feet >=400 < 2000) {
        return (feet-400) * 0.02
    }
    else if (feet >= 2000 < 2500) {
        return 25
    }
    else if (feet >= 2500) {
        return "cannot travel that far"
    }
}