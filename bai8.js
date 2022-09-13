/*8. Kiểm tra số n có toàn số lẻ tạo thành hay không?
VD1: n=1234, output: ‘NO’
VD2: n=135, output: ‘YES’
*/

let n = "131";
let flag = true;
for (let i of n) {
    if (i % 2 != 0){
        flag = true;
    } else {
        flag = false;
      
        break;
    }
}

if (flag){
    console.log("YES");
} else {
    console.log("NO");
}