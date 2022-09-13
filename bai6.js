/*6. Viết chương trình tính tổng bình phương của các số từ 1 đến n?
VD: n = 3, output: 14
*/

let n = 3;
let sum = 0;
for (let i = 1; i < n+1; i++){
    sum = sum + Math.pow(i, 2 );
}
console.log(sum);