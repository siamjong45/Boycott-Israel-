
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const productName = document.getElementById('product-name').value;

    if (productName) {
        fetchProductData(productName);
    }
});

function fetchProductData(productName) {
    const products = [
        { name: 'McDonald's', boycott: true },
        { name: 'Coca-Cola', boycott: false },
        { name: 'Apple', boycott: true },
    ];

    const productResults = document.getElementById('productResults');
    productResults.innerHTML = ''; // পুরানো ফলাফল মুছে ফেলুন

    products.forEach(product => {
        if (product.name.toLowerCase().includes(productName.toLowerCase())) {
            const li = document.createElement('li');
            li.textContent = product.name + (product.boycott ? ' (বয়কট)' : ' (অনুমোদিত)');
            productResults.appendChild(li);
        }
    });
}
