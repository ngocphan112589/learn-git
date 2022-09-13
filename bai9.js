/* 9. Kiểm tra n có phải là số đối xứng?
VD1: n=1242343, output: ‘NO’
VD2: n = 123676321, output: ‘YES’*/

let n = "123676321";
a = n.toString().split("").join();
let b = n.split("").reverse().join();
console.log(a);
console.log(b);

let flag = true;
if (a == b){
    flag = true;
}else {
    flag = false;
}

if (flag){
    console.log("YES");
} else {
    console.log("NO");
}

