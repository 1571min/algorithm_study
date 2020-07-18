const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const [limitMultiTap,gadgets] = input[0].split(' ').map(ele=>parseInt(ele));
  const order = input[1].split(' ').map(ele=>parseInt(ele));

  let resultCount = 0 ;
  let curArr = [];
  for (let i = 0; i < order.length; i++) {
    if(curArr.length>=limitMultiTap){
      //콘센트가 이미 꽉찬 경우
      // 무엇을 뺄지 결정해야한다
      // 해당 순서 뒤로 나오는 order들을 제외하고 마지막 남은 콘센트를 뽑는다.
      if(!curArr.includes(order[i])){
        const targetIndex = getTargetIndex(curArr,order.slice(i));
        curArr[targetIndex] = order [i];
        resultCount += 1;
      }
    }else{
      if (!curArr.includes(order[i])) {
        curArr.push(order[i]);
      }
    }
  }
  console.log(resultCount);
  process.exit();
});

function getTargetIndex(curArr,order){
  let cur = JSON.parse(JSON.stringify(curArr)); 
  for (let i = 0; i < order.length; i++) {
    for (let j = 0; j < cur.length; j++) {
      const zeroÇount = cur.reduce((acc,ele,idx)=>{
        if(ele){
          acc[1]=idx;
        }else{
          acc[0] += 1;
        }
        return acc;
      },[0,0]);
      if(zeroÇount[0]===curArr.length-1){
        return zeroÇount[1];
      }
      if (order[i] === cur[j]) {
        cur[j] = 0;
      }
    }
  }
  return 0;
}