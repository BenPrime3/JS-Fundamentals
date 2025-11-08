const argument = process.argv.slice(2);
const firstInteger = Number(argument[0]);
const secondInteger = Number(argument[1]);

function add(x, y) {
  console.log(x + y)
};

const answer = add(firstInteger, secondInteger);