// Code your solution in this file!
function distanceFromHqInBlocks(street){
  if (street > 42){
    return street - 42;
  } else {
    return 42 - street;
  }
};

function distanceFromHqInFeet(street){
  return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(startBlock, endBlock){
  if (startBlock > endBlock){
    return (startBlock - endBlock) * 264;
  } else {
    return (endBlock - startBlock) * 264;
  }
}

function calculatesFarePrice(startBlock, endBlock){
  let distance = distanceTravelledInFeet(startBlock, endBlock)
  if (distance < 400){
    return 0;
  } else if (distance >= 400 && distance <= 2000){
    return (distance - 400) * .02;
  } else if (distance > 2000 && distance < 2500){
    return 25;
  } else {
    return 'cannot travel that far'
  }
}
