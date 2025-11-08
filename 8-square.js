const argument = process.argv.slice(2);
const setNumber = Math.floor(Number(argument[0]));
const characterToBuild = "X";



if (isNaN(setNumber)) {
  console.log("Missing size")
}
else {
  const repeat = characterToBuild.repeat(setNumber);
  for (let i = 0; i < setNumber; i++) {
    console.log(repeat)
  }
}