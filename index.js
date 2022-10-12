// Code your solution in this file!
let blocks;
function distanceFromHqInBlocks(pickUp){
    let blocks = Math.abs(42 - pickUp);
    return blocks;
}

function distanceFromHqInFeet(pickUp){
    let blocks = distanceFromHqInBlocks(pickUp);
    return blocks * 264;
}

function distanceTravelledInFeet(start, end){
    let blocks = Math.abs(start - end);
    return blocks * 264;
}

function calculatesFarePrice(start, end){
    let fare =0;
    let feetDistance = distanceTravelledInFeet(start, end);
    if (feetDistance <=400){
        return fare;
    } else if (feetDistance>=401 && feetDistance<=2000){
        let fareDistance = feetDistance - 400;
        let fare = fareDistance * .02;
        return fare;
    } else if (feetDistance>=2001 && feetDistance<2500){
        let fare = 25;
        return fare;
    } else return 'cannot travel that far';
}