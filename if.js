let b = parseInt(prompt("ຝາກເງິນ"));
let w = parseInt(prompt("ຖອນເງິນ"));
if(w<=b){
document.write("ດຳເນີນການຖອນຈຳນວນ",w,"<br>");
b-=w; //b=b-w
document.write("ຍອດເງິນຂອງທ່ານຍັງເຫຼືອ",b);
}else{
    document.write("ຂໍອະໄພຈຳນວນເງິນໃນບັນຊີຂອງທ່ານບໍ່ພຽງພໍ່"); 
}