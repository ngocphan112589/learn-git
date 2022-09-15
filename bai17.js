// 17.  Viết hàm số tính min, max của 3 số?
// VD: min(2,4,7) => output: 7

const minNo = (a, b, c)=>{
    return (a >=b ? b>=c ? c : b : a>=c ? c : a) ;
}

const maxNo = (a,b,c) => {
    return (a<=b ? b<=c ? c :b : a<=c ? c : a)
}

console.log('Min: ',minNo(2,4,7));
console.log('Max: ',maxNo(2,4,7));