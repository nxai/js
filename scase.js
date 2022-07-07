let id = prompt("ລະບຸລະຫັດນັກສຶກສາ");
let stname;
let grade;
switch(id){
    case "QSM01":
        stname="ທ. ເພັດສາຄອນ ພິມມີໄຊ";
        grade ="A";
        break;
    case "QSM02":
        stname="ທ. ລິດ ຄຳຈະເລີນ";
        grade ="B+";
        break;
    default:
        console.log("ບໍ່ພົບນັກສຶກສາໃນລະບົບ");
}
document.write(stname,"<br>");
document.write("ທ່ານໄດ້ ເກຣດ: ",grade);