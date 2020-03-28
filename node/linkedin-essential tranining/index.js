const questions = ['what is ur name?', 'how old are you?', 'what is your profession?'];
const answers = [];
const ask = (index = 0) => process.stdout.write(`

-> ${questions[index]}
`);

ask();
process.stdin.on('data', (data) => {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on('exit', () => {
  const [name, age, profession] = answers;
  process.stdout.write(`
    your name is ${name} & you are ${age} years old,
    you are a ${profession}
    thank you ${name}
  `);
});
