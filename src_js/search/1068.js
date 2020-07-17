const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const N = Number(input[0]);
  const parentsNodeArr = input[1].split(' ').map((e) => parseInt(e));
  const target = Number(input[2]);
  let tree = getTree(parentsNodeArr);
  if (tree[-1][0] === target) {
    console.log(0);
  } else {
    console.log(tree);
    deleteNode(tree, target);
    console.log(tree);
    console.log(getLeafCount(tree));
  }
  process.exit();
});

function getTree(parentsArr) {
  let tree = {};
  for (let i = 0; i < parentsArr.length; i++) {
    if (tree[parentsArr[i]]) {
      tree[parentsArr[i]].push(i);
    } else {
      tree[parentsArr[i]] = [i];
    }
  }
  return tree;
}
function deleteNode(tree, target) {
  if (tree[target]) {
    for (let i = 0; i < tree[target].length; i++) {
      deleteNode(tree, tree[target][i]);
    }
    delete tree[target];
  }
  for (const key in tree) {
    const targetIndex = tree[key].indexOf(target);
    if (targetIndex > -1) {
      tree[key].splice(targetIndex, 1);
    }
  }
}
function getLeafCount(tree) {
  let result = 0;
  for (const key in tree) {
    tree[key].forEach((element) => {
      if (!tree[element]) {
        result += 1;
      }
    });
    if (tree[key].length === 0) {
      result += 1;
    }
  }
  return result;
}
