if(localStorage.getItem('amount')){
    let basket = document.querySelector('.buy-product-img__amount').innerHTML = JSON.parse(localStorage.getItem('amount'));
        document.querySelector('.buy-product__number').innerHTML = basket;
        document.querySelector('.total__price').innerHTML = basket * 300 + " BYN";

    };
