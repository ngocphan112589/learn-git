/**4. Viết chương trình in ra các số là nguyên tố trong khoảng 1 đến n?
VD: n = 10, output: 2 3 5 7
 */
var n = 10;
var flag = true;
for (var i = 1; i < n; i++){
     if (i < 2){
        flag = false;
     } 
     else if (i == 2){
        flag = true;
     } 
     else if (i > 2) {
        for (var j = 2; j < n - 1; i+=2 ){
            if (i % j == 0){
                flag = false;
                break;
            } else {
                flag = true;
                // console.log(i);
            }
        }
     } 
    
    if (flag){
        console.log(i);
    }
}

