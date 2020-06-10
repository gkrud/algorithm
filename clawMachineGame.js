// function solution(board, moves) {
//   let b = [];
//   let result=0;
//   while(moves.length>0){
//     for(let j=0;j<board.length;j++){
//       if(board[j][moves[0]-1]!=0){
//         b.push(board[j][moves[0]-1]);
//         board[j][moves[0]-1]=0;
//         break;
//       }
//     }
//     while(b[b.length-1]==b[b.length-2]&&b.length>1){
//       b.pop();
//       b.pop();
//       result++;
//     }
//     moves.shift();
//   }

//   return result*2;
// }

function solution(board, moves) {
  var answer = 0;
  let arr = [];
  moves.forEach(element => {
    board.some(items => {
      if(items[element-1]!=0){
        arr.push(items[element-1]);
        items[element-1]=0;
        return 1;
      }
    });
    if(arr[arr.length-1]==arr[arr.length-2]&arr.length>1) {
      arr.pop();
      arr.pop();
      answer++;
    }
  });
  return answer*2;
}

let board = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
let moves = [1,5,3,5,1,2,1,4];

console.log(solution(board,moves))