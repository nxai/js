let a =300;//golbal

function myfn(){
    let b =200; //local 
    console.log(a);//ສະແດງຜົນໃນຟັງຊັ່ນ
    console.log(b);//ສະແດງຜົນໃນຟັງຊັ່ນ
}
myfn();
console.log(a);//ສະແດງຜົນນອກຟັງຊັ່ນ
console.log(b);//ສະແດງຜົນນອກຟັງຊັ່ນ