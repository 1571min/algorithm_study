const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.on('line', line => {

  const n = line.split(' ').map(v => Number(v));
  console.log(n[0] - n[1]);
  rl.close();
}).on('close', () => {
  process.exit();
})