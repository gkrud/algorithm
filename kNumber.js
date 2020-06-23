function solution(array, commands) {
  var answer = [];
  commands.forEach(element => {
    answer.push(array.slice(element[0]-1,element[1]).sort(com)[element[2]-1])
  });
  
  return answer;
}

function com(a,b){
  return a-b;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]]))