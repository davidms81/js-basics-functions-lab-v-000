// Code your solution in this file!
function distanceFromHqInBlocks(block){
  if (block > 42){
    return block - 42
  } else if (block < 42){
    return 42 - block
  }
}

function distanceFromHqInFeet(block){
  return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(startBlock, endBlock){
  if (startBlock > endBlock){
    return (startBlock - endBlock) * 264
  } else if (startBlock < endBlock){
    return (endBlock - startBlock) * 264
  }
}

function calculatesFarePrice(startBlock, endBlock){
  if (distanceTravelledInFeet(startBlock, endBlock) < 400){
    return 0
  } else if (distanceTravelledInFeet(startBlock, endBlock) > 400 && distanceTravelledInFeet(startBlock, endBlock) < 2000){
    return (distanceTravelledInFeet(startBlock, endBlock) - 400) * .02
  } else if (distanceTravelledInFeet(startBlock, endBlock) > 400 && distanceTravelledInFeet(startBlock, endBlock) < 2000){
    return (distanceTravelledInFeet(startBlock, endBlock) - 400) * .02
  }
}
