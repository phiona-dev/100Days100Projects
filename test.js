const number = "12345";
let total = 0;
for (let x = number.length - 1; x >= 0; x--){
    //console.log(number[x])
    //total = total + Number(number[x]);
    for (let i = 0; i <= 7; i++){
        console.log(Number(number[x]) * 2 ** i)
        x--;
    }
}
//console.log(total)