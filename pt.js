// function solution(n, lost, reserve) {
//   const l = [...lost];
//   lost.forEach(x=>{
//     if(reserve.indexOf(x)!=-1){
//       reserve.splice(reserve.indexOf(x),1);
//       l.splice(l.indexOf(x),1);
//     }
//   });
//   [...l].forEach(x=>{
//     if(reserve.indexOf(x-1)!=-1){
//       reserve.splice(reserve.indexOf(x-1),1);
//       l.splice(l.indexOf(x),1);
//     }else if(reserve.indexOf(x+1)!=-1){
//       reserve.splice(reserve.indexOf(x+1),1);
//       l.splice(l.indexOf(x),1);
//     }
//   });
//   return n-l.length;
// }


// console.log(solution(5, [1,2], [2,3]));


function solution(heights) {
  let answer = [];
  let temp;
  while(heights.length>1){
      temp = heights.pop();
      for(let i = heights.length-1;i>=0;i--){
      if(temp<heights[i]){
          answer.unshift(i+1);
          break;
      }
      if(i==0)
          answer.unshift(0);
      }
  }
  answer.unshift(0);
  return answer;
}

console.log(solution(	[3, 9, 9, 3, 5, 7, 2]));
