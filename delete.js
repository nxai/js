//1.
// function deleteData() {
//         confirm("ທ່ານຕ້ອງການລົບຂໍ້ມູນ ຫຼືບໍ່?");
//     }
    // 2.
    // function deleteData() {
    //     let rs = confirm("ທ່ານຕ້ອງການລົບຂໍ້ມູນ ຫຼືບໍ່?");
    //     console.log(rs);
    // }
    // 3
    function deleteData() {
        let rs = confirm("ທ່ານຕ້ອງການລົບຂໍ້ມູນ ຫຼືບໍ່?");
        if(rs){
            console.log("ລົບຂໍ້ມູນສຳເລັດ");
    }else {
        console.log("ລົບຂໍ້ມູນຜິດພາດ");
    }
    }
    