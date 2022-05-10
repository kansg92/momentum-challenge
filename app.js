const player = {
    name: "kan",
    points: 10,
    handsome: true,
    fat: true,
};

console.log(player);
console.log(player.name);

player.lastname = "potato"; // object 에추가
player.fat = false; // object 수정
console.log(player);