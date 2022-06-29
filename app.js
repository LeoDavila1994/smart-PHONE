// Data:

const smartPhone = [

    { id:1, brand:"SAMSUNG", model:"Galaxy s52", price:5200, sprite:"./assets/image\ 1.jpg"},
    { id:2, brand:"SAMSUNG", model:"Galaxy A12", price:3900, sprite:"./assets/image\ 3.jpg"},
    { id:3, brand:"SAMSUNG", model:"Galaxy A32", price:7000, sprite:"./assets/image\ 4.jpg"},
    { id:4, brand:"SAMSUNG", model:"Galaxy A01", price:4500, sprite:"./assets/image\ 13.jpg"},
    { id:5, brand:"SAMSUNG", model:"Galaxy A70", price:5300, sprite:"./assets/image\ 14.jpg"},
    { id:6, brand:"SAMSUNG", model:"Galaxy Z fold 3", price:19800, sprite:"./assets/image\ 15.jpg"},
    { id:7, brand:"SAMSUNG", model:"Galaxy s21", price:16500, sprite:"./assets/image\ 4.jpg"},
    { id:8, brand:"SAMSUNG", model:"Galaxy A31", price:2100, sprite:"./assets/image\ 3.jpg"},
    { id:9, brand:"SAMSUNG", model:"Galaxy A40", price:5700, sprite:"./assets/image\ 1.jpg"},
    { id:10, brand:"HUAWEI", model:"Mate 30 PRO", price:8250, sprite:"./assets/HuaweiMate30PRO.png"},
    { id:11, brand:"HUAWEI", model:"P40", price:7690, sprite:"./assets/HuaweiP40.png"},
    { id:12, brand:"HUAWEI", model:"P50 PRO", price:9720, sprite:"./assets/HuaweiP50PRO.png"},
    { id:13, brand:"LG", model:"K41 S", price:4250, sprite:"./assets/LGK41s.png"},
    { id:14, brand:"LG", model:"K51 S", price:5100, sprite:"./assets/LGK51S.png"},
    { id:15, brand:"LG", model:"K62", price:5750, sprite:"./assets/LGK62.png"},
    { id:16, brand:"LG", model:"Velvet", price:6350, sprite:"./assets/LGVelvet128GB.png"},
    { id:17, brand:"MOTOROLA", model:"Moto G60s", price:4350, sprite:"./assets/MotoG60s.png"},
    { id:18, brand:"MOTOROLA", model:"Edge 20PRO", price:8500, sprite:"./assets/MotorolaEdge20PRO.png"},
    { id:19, brand:"MOTOROLA", model:"Moto G200", price:6500, sprite:"./assets/MotorolaMotoG200.png"},
    { id:20, brand:"XIAOMI", model:"Poco X4", price:4720, sprite:"./assets/xiaomiPOCOX4.png"},
    { id:21, brand:"XIAOMI", model:"Readmi 9A", price:5300, sprite:"./assets/xiaomiReadmi9A.png"},
    { id:22, brand:"XIAOMI", model:"Readmi 9C", price:5750, sprite:"./assets/xiaomiReadmi9C.png"},
    { id:23, brand:"XIAOMI", model:"Note 10", price:6900, sprite:"./assets/xiaomiReadmiNote10.png"},
    { id:24, brand:"XIAOMI", model:"Note 11", price:8200, sprite:"./assets/xiaomiReadmiNOTE11.png"}

];

//Cards Home:

function generateCards(arr){

    let html ="";

    for (let i = 0; i < arr.length; i++){
        html += `<div class="card border-blue" style="width: 18rem;">
                    <div class="img-container">
                        <img src="${arr[i].sprite}" alt="cel-img">
                    </div>
                    <div class="card-body border-up">
                        <h6 class="card-title fs-6 fw-bold text-center">${arr[i].brand}</h6>
                        <p class="card-text text-secondary fw-bold fs-6 text-center">${arr[i].model}</p>
                        <p class="card-text fw-bold text-center fs-4">Precio: $${arr[i].price}.°°</p>
                        <a href="#" class="btn-card fw-bold">Add +</a>
                    </div>
                </div>`
    }
    const container =document.getElementById("products");
    container.innerHTML = html;
}

generateCards(smartPhone);