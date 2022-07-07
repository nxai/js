let colors = ["red","black","tomato"];
// colors.push("orange");//ການເພີ່ມຕົວສຸດທ້າຍ
// colors.unshift("yellow");//ການເພີ່ມຕົວທຳອິດ
// colors.shift()//ການລົບຕົວທຳອິດ
// colors.pop()//ການລົບຕົວສຸດທ້າຍ

colors.splice(0,0,"orange");
//ການເພີ່ມ(ຕຳແໜ່ງທີ່ 0,ຈຳນວນລົບ0,"orange")

//ສະແດງຂໍ້ມູນ
colors.forEach(mydata);
function mydata(item){
    console.log("color = ",item);
}

