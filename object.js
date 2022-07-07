// let user = {  username:'somxai',
//             password:'#$1234',
//             email:'info@ltvc.edu.la'
//         };
//     console.log(user.username);
//     console.log(user.password);
//     console.log(user.email);
let product = {
    name: "ເມົາ",
    price:39000,
    color:"black",
    category: "computer",
    size:"2.4'",
    displayProduct:function (){
        return "ຊື່ສິນຄ້າ = "+ this.name + 
                " ລາຄາສິນຄ້າ =" +this.price + 
                " ສີສິນຄ້າ = "+ this.color+ 
                " ໝວດໝູ່ສິນຄ້າ = "+ this.category +
                " ຂະໜາດສິນຄ້າ = "+this.size;
        }  
    };
console.log(product.displayProduct());