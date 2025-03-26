const boycottList = [
    { name: "কোকা-কোলা", barcode: "1234567890123", image: "coca-cola.png", boycott: true },
    { name: "পেপসি", barcode: "2345678901234", image: "pepsi.png", boycott: true },
    { name: "নেসলে", barcode: "3456789012345", image: "nestle.png", boycott: true },
    { name: "ম্যাকডোনাল্ডস", barcode: "4567890123456", image: "mcdonalds.png", boycott: true },
    { name: "স্টারবাকস", barcode: "5678901234567", image: "starbucks.png", boycott: true },
    { name: "অ্যাপল", barcode: "6789012345678", image: "apple.png", boycott: true },
    { name: "এইচপি", barcode: "7890123456789", image: "hp.png", boycott: true },
    { name: "ইন্টেল", barcode: "8901234567890", image: "intel.png", boycott: true },
    { name: "ডিজনি", barcode: "9012345678901", image: "disney.png", boycott: true },
    { name: "আইবিএম", barcode: "0123456789012", image: "ibm.png", boycott: true }
    // এখানে আরও পণ্য যোগ করতে পারেন
];

function searchProduct() {
    const searchTerm = document.getElementById('search-bar').value.trim();
    const resultSection = document.getElementById('product-result');
    resultSection.innerHTML = '';

    const product = boycottList.find(p => p.name === searchTerm);

    if (product) {
        displayProduct(product);
    } else {
        resultSection.innerHTML = `<p>"${searchTerm}" পণ্যটি আমাদের তালিকায় নেই।</p>`;
    }
}

function displayProduct(product) {
    const resultSection = document.getElementById('product-result');
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productName = document.createElement('h3');
    productName.textContent = product.name;

    const productStatus = document.createElement('p');
    productStatus.textContent = product.boycott ? 'এই পণ্যটি বয়কট করুন।' : 'এই পণ্যটি বয়কট তালিকায় নেই।';
    productStatus.classList.add(product.boycott ? 'boycott' : 'not-boycott');

    productInfo.appendChild(productName);
    productInfo.appendChild(productStatus);

    productDiv.appendChild(productImage);
    productDiv.appendChild(productInfo);

    resultSection.appendChild(productDiv);
}

function onScanSuccess(decodedText) {
    document.getElementById("barcodeResult").innerHTML = `স্ক্যানকৃত বারকোড: ${decodedText}`;
    const product = boycottList.find(p => p.barcode === decodedText);
    if (product) {
        displayProduct(product);
    } else {
        document.getElementById('product-result').innerHTML = `<p>এই বারকোডের পণ্যটি আমাদের তালিকায় নেই।</p>`;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const scanner = new Html5QrcodeScanner("reader", { fps: 100
