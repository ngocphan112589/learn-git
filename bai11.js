// 11. Đếm có bao nhiêu khoảng trắng trong một chuỗi?
// VD: “ Hello  world”, output: 3

const countSpace = input => {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        if(input.charAt(i) === ' ') {
            count += 1;
        }
    }
    return count;
}

console.log(countSpace(' Hello    world '));