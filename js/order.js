let amountProduct = +document.querySelector('.card-description-amount-block__number').value,
        price = +document.querySelector('.total__price').innerHTML;
        function buttonPlus(){
            amountProduct += 1;
            document.querySelector('.card-description-amount-block__number').value = amountProduct
            document.querySelector('.footer-basket__amount').innerHTML= amountProduct
            totalPrice();
            document.querySelector('.total__price').innerHTML = price + " BYN ";
            localStorage.setItem('amount', JSON.stringify(amountProduct));
        };    
        function buttonMinus(){
            if (amountProduct>0){                
                amountProduct -= 1;
                document.querySelector('.card-description-amount-block__number').value = amountProduct;
                document.querySelector('.footer-basket__amount').innerHTML= amountProduct;
                totalPrice();
                document.querySelector('.total__price').innerHTML = price + " BYN ";
                localStorage.setItem('amount', JSON.stringify(amountProduct));
            };
        };
        document.querySelector('.card-description-amount-block__number').oninput = function() {
            amountProduct = +document.querySelector('.card-description-amount-block__number').value;
            localStorage.setItem('amount', JSON.stringify(amountProduct));
            totalPrice();
            document.querySelector('.total__price').innerHTML = price + " BYN ";
            document.querySelector('.footer-basket__amount').innerHTML= amountProduct;
        
        };
        if(localStorage.getItem('amount')){
            amountProduct = JSON.parse(localStorage.getItem('amount'));
            document.querySelector('.card-description-amount-block__number').value = amountProduct;
            totalPrice();
            document.querySelector('.footer-basket__amount').innerHTML= amountProduct;
            document.querySelector('.total__price').innerHTML = price + " BYN ";
        };
        function totalPrice(){
            price = amountProduct * 310;
        };  
