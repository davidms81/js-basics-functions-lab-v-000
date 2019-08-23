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

function calculatesFarePrice(){
  
}
