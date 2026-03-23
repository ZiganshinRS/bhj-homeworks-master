const products = Array.from(document.querySelectorAll('.product'));
const cartProductsContainer = document.querySelector('.cart__products');

products.forEach(product => {
    const quantityValue = product.querySelector('.product__quantity-value');
    const btnDec = product.querySelector('.product__quantity-control_dec');
    const btnInc = product.querySelector('.product__quantity-control_inc');
    const btnAdd = product.querySelector('.product__add');

    btnDec.onclick = () => {
        let count = parseInt(quantityValue.textContent);
        if (count > 1) {
            quantityValue.textContent = count - 1;
        }
    };

    btnInc.onclick = () => {
        let count = parseInt(quantityValue.textContent);
        quantityValue.textContent = count + 1;
    };

    btnAdd.onclick = () => {
        const id = product.dataset.id;
        const imageSrc = product.querySelector('.product__image').src;
        const countToAdd = parseInt(quantityValue.textContent);

        const cartProducts = Array.from(cartProductsContainer.querySelectorAll('.cart__product'));
        const productInCart = cartProducts.find(item => item.dataset.id === id);

        if (productInCart) {
            const countElement = productInCart.querySelector('.cart__product-count');
            countElement.textContent = parseInt(countElement.textContent) + countToAdd;
        } else {
            cartProductsContainer.insertAdjacentHTML('beforeend', `
                <div class="cart__product" data-id="${id}">
                    <img class="cart__product-image" src="${imageSrc}">
                    <div class="cart__product-count">${countToAdd}</div>
                </div>
            `);
        }
    };
});