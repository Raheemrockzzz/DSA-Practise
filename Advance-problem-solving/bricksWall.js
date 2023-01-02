const lengthBrick = 24, breadthBrick = 8, thicknessBrick = 12;
let volOfBrick = lengthBrick * breadthBrick * thicknessBrick;

const lengthWall = 2400, breadthWall =800, thicknessWall = 60;
let volOfWall = lengthWall *breadthWall * thicknessWall;

//15% is filled with mortar
const percentageOfMortar = 15;
let percentageOfWall = (100 - percentageOfMortar) / 100;
let totalNumberOfBricks = (percentageOfWall * volOfWall) / volOfBrick
console.log(`Total Number Of Bricks
required ${totalNumberOfBricks}`)