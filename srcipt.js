const products = [
    {
        "id": 1,
        "name": "Iphone 16 Pro Max",
        "description": "Hệ điều hành: IOS 18; RAM: 8GB; Dung lượng: 256GB",
        "price": "31.190.000 VND"
    },
    {
        "id": 2,
        "name": "Sản phẩm 2",
        "description": "Mô tả chi tiết của sản phẩm 2.",
        "price": "200,000 VND"
    },
    {
        "id": 3,
        "name": "Sản phẩm 3",
        "description": "Mô tả chi tiết của sản phẩm 3.",
        "price": "300,000 VND"
    }
];

const productList = document.getElementById('productList');
products.forEach(product => {
    const listItem = document.createElement('li');
    listItem.classList.add('product-item');
    listItem.textContent = product.name;
    listItem.setAttribute('data-id', product.id);
    productList.appendChild(listItem);
});

const productDetail = document.getElementById('productDetail');

productList.addEventListener('click', function(event) {
    const productId = event.target.getAttribute('data-id');
    const product = products.find(p => p.id == productId);
    
    if (product) {
        productDetail.style.display = 'block';
        productDetail.innerHTML = `
            <h2>${product.name}</h2>
            <p><strong>Giá:</strong> ${product.price}</p>
            <p><strong>Mô tả:</strong> ${product.description}</p>
        `;
    }
});
