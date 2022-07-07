let numbers = Array(1,2,3,4,5,6)
console.log(numbers);
console.log("ສະແດງຂໍ້ມູນອັນດັບທີ່", numbers[5]);

let colors =[
    "red",
    "yellow",
    "white",
    "black",
    "orange",
    "blue",
];
// ການສະແດງຂໍ້ມູນຮູບແບບ For loop 
for (let color = 0; color < colors.length; color++) {
    console.log(colors[color]);  
}
// ການສະແດງຂໍ້ມູນຮູບແບບ forEach
colors.forEach(color => {
    console.log(color); 
});
