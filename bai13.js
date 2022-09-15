// 13. Hãy viết chương trình đảo ngược sau s.
// VD: “This is a beautiful day”, output: ”yad lufituaeb a si sihT”

const reverseString = (orgString)=>{
   
    let finalString = '';    
    for (let i = orgString.length -1 ; i >=0 ; i--) {
        finalString += orgString[i];
    }    
    return finalString;    
}
console.log(reverseString('This is a beautiful day') ,'|', 'yad lufituaeb a si sihT');