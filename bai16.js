// 16. Viết chương trình lấy  id name của fb.
// VD:https://www.facebook.com/tung.nguyenthac.1/, output: “tung nguyenthac”

const getIdFacebook = (input) => {
    let urlNonSpecialChar = input.split('/');
    let urlNonDot = urlNonSpecialChar[urlNonSpecialChar.length - 2].split('.');
    let idFace = urlNonDot.slice(0, urlNonDot.length - 1).join(' ');
    return idFace;
}

console.log(getIDFacebook('https://www.facebook.com/tung.nguyenthac.1/'));