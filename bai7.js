/*7. Tính tổng các số lẻ trong khoảng 1 đến n?
VD: n = 5, output: 9
*/ 

let n = 5;
let sum = 0;
for (let i = 1; i < n+1; i++){
    if (i % 2 != 0 ){
        sum += i;
    }
}
console.log(sum);