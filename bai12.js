// 12. Hãy remove tất cả khoảng trắng, space và ‘enter’ trong một chuỗi
// VD: “	Hello world   ”, output: “Helloworld”

const removeSpace = (orgString)=>{

    for (let i = 0; i < orgString.length; i++) {
        let element = orgString.charAt(i);
        if(element ===' ' || element ==='\n' || element === '\t'){
            orgString = orgString.replaceAll(element,'');
        }
    }

    return orgString ;
}
console.log(removeSpace('	Hello world   '));