// function solution(arr)
// {
//     let answer = [];
//     let beforeNum = arr[0];
//     arr.forEach(element => {
//       if(beforeNum!=element) answer.push(beforeNum)
      
//       beforeNum=element;
//     });
//     answer.push(arr[arr.length-1])
//     return answer;
// }

function solution(arr)
{
  let list =[];

  arr.reduce((accumulator, currentValue,currentIndex)=>{
    if(accumulator!=currentValue) list.push(accumulator);
    if(currentIndex==arr.length-1) list.push(currentValue);
    
    return currentValue;
  });
  return list;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
