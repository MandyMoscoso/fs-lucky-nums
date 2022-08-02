// Write your code below this line.


const luckyNum = (n) => {
    let luckyArr = [];
    let answer =0;
    for (i = 1; i<=n && n> 0 && n <= 10; i++) {

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
luckyNum(4)
console.log(luckyNum(4))

let answerArr = [1,2,3,4,5,6,7,8,9,10];
const luckyNum2 = (n) =>{
    let luckyArr = [];
    let answer =0;
    let randomIndex = 0;
    
    for (i = 1; i<=n && n> 0 && n <= 10; i++){
        
        randomIndex = Math.floor(Math.random() * (answerArr.length));
        luckyArr.push(answerArr[randomIndex]);
        answerArr.splice(randomIndex,1)
        
    }
    return (luckyArr)
}
console.log(luckyNum2(5))