if(localStorage.getItem('amount')){
    document.querySelector('.footer-basket__amount').innerHTML = JSON.parse(localStorage.getItem('amount'));
    };