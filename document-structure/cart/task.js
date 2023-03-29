const products = document.querySelector('.products');
const cart = document.querySelector('.cart');
const cartProducts = cart.querySelector('.cart__products');
let productInfo = JSON.parse(localStorage.getItem('productInfo')) || []; //массив с объектами (id карточки, ссылка на img, кол-во единиц)

products.addEventListener('click', (event) => {
    let target = event.target;
    //увеличиваем-уменьшаем количество товара
    if (target.classList.contains('product__quantity-control_inc')) {
        let value = target.previousElementSibling;
        value.textContent++;
    }
    if (target.classList.contains('product__quantity-control_dec')) {
        let value = target.nextElementSibling;
        if (value.textContent < 2) {
            return;
        } 
        value.textContent--;
    }
    //добавляем товар в корзину
    if (target.classList.contains('product__add')) {
        const product = target.closest('.product');
        const productCounter = product.querySelector('.product__quantity-value');
        const productInCart = productInfo.find(el => el.id === product.dataset.id);

        if (!productInCart) {
            let cartProduct = {
                id: product.dataset.id,
                count: Number(product.querySelector('.product__quantity-value').textContent),
                img: product.querySelector('.product__image').getAttribute('src')
            }
            productInfo.push(cartProduct); // пушим объект с инфо о добавленном товаре в массив
            addProductToCart(productInfo, cartProducts); //добавляем разметку карточек товаров в корзину
            displayCart(); //показываем корзину
            localStorage.setItem('productInfo', JSON.stringify(productInfo));
            console.log('Сработала вставка через inner');
        } else {
            const productsInCart = [...cartProducts.querySelectorAll('.cart__product')];
            let currentProduct = productsInCart.find(el => el.dataset.id === productInCart.id);
            let cartValue = currentProduct.querySelector('.cart__product-count');
            cartValue.textContent = +cartValue.textContent + +productCounter.textContent;
            productInfo[productInfo.indexOf(productInCart)].count += +productCounter.textContent;
            localStorage.setItem('productInfo', JSON.stringify(productInfo));
            console.log('Объект уже вставлен');
        }
    }
})

cartProducts.addEventListener('click', (event) => { //обработчик для корзины товаров
    let target = event.target;
    if (target.classList.contains('cart-remove')) {
        event.preventDefault();
        const currentProduct = target.closest('.cart__product'); 
        const currentId = currentProduct.dataset.id;
        currentProduct.remove();
        let indexOfProductInfo = productInfo.indexOf(productInfo.find(el => el.id === currentId)); //получаю индекс элемента, который нужно удалить в массиве с объектами
        productInfo.splice(indexOfProductInfo, 1);
        localStorage.setItem('productInfo', JSON.stringify(productInfo));
        displayCart();
    }
})

//функция для отображения корзины
function displayCart() {
    !cartProducts.children.length ? cart.style.display = 'none' : cart.style.display = 'block';
}

//функция для вставки элементов корзины
function addProductToCart(objArr, cartDiv) {
    cartDiv.innerHTML = objArr.map(el => {
        return `<div class="cart__product" data-id=${el.id}>
        <img src=${el.img} alt="" class="cart__product-image">
        <div class="cart__product-count">${el.count}</div>
        <a href="#" class="cart-remove">x</a>
    </div>
        `
    }).join('');
}

addProductToCart(productInfo, cartProducts);
displayCart();
