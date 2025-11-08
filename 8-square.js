const argument = process.argv.slice(2);
const setNumber = Math.floor(Number(argument[0]));
const characterToBuild = "X";

const repeat = characterToBuild.repeat(setNumber);

if (!isNaN(argument)) {
  console.log("Missing size")
}

else {
  for (let i = 0; i < setNumber; i++) {
    console.log(repeat)
  }
}