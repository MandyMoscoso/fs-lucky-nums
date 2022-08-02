// Write your code below this line.
let luckyArr = [];
let answer =0;

const luckyNum = (n) => {
    for (i = 1; i<=n; i++) {
        answer = Math.floor(Math.random() * 10 + 1);
        const isDuplicate = (answer)=>{
            if(luckyArr.includes(answer)){
                answer = Math.floor(Math.random() * 10 + 1);
                // console.log(answer);
                isDuplicate(answer);
            } else {
                luckyArr.push(answer);
                // console.log(answer);
            }
        }
        isDuplicate(answer)
     
} return (luckyArr)
}
luckyNum(6)
console.log(luckyArr)