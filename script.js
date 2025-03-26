const boycottList = [
    { name: "Coca Cola", img: "cocacola.jpg" },
    { name: "Nestle", img: "nestle.jpg" },
    { name: "Intel", img: "intel.jpg" },
    { name: "McDonald's", img: "mcdonalds.jpg" },
    { name: "Pepsi", img: "pepsi.jpg" }
];

function searchProduct() {
    let query = document.getElementById("search").value.toLowerCase();
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";  

    let foundProduct = boycottList.find(product => product.name.toLowerCase().includes(query));

    if (foundProduct) {
        resultDiv.innerHTML = `
            <div class="product">
                <img src="${foundProduct.img}" alt="${foundProduct.name}" class="product-img">
                <h3>${foundProduct.name}</h3>
                <img src="shoe-mark.png" class="mark">
            </div>
        `;
    } else {
        resultDiv.innerHTML = `
            <div class="product">
                <h3>${query} এই পণ্যটি বয়কট লিস্টে নেই</h3>
                <img src="check-mark.png" class="mark">
            </div>
        `;
    }
}
