const taxRate =0.18;
const shippingPrice = 15.0;
const freeShippingLimit = 250;

window.addEventListener('load',()=>{
    localStorage.setItem('taxRate', taxRate);
    localStorage.setItem('shippingPrice', shippingPrice);
    localStorage.setItem('freeShippingLimit', freeShippingLimit);

    calculateCartPrice();
})

const productsDiv = document.querySelector('.products');

productsDiv.addEventListener('click', (e)=>{
    if(e.target.className == "fa-solid fa-minus"){
        if(e.target.nextElementSibling.innerText > 1){
            e.target.nextElementSibling.innerText--;
            calculateProductPrice(e.target);
        } else{
            if(confirm(`${e.target.closest('.product-info').querySelector('h3').innerText} almayacak mısın??`)){
                e.target.closest('.product').remove();
            }
        }
        calculateCartPrice();
    }
    else if(e.target.classList.contains('fa-plus')){
        e.target.parentElement.querySelector('.quantity').innerText++;
        calculateProductPrice(e.target);
        calculateCartPrice();
    }
    else if(e.target.getAttribute('class') == "remove-product"){
        if(confirm(`${e.target.closest('.product-info').querySelector('h3').innerText} almayacak mısın??`)){
            e.target.closest('.product').remove();
        }
        calculateCartPrice();
    }
    else{
        alert('arkadaşım kendini biraz bu işe verirsen iyi olur')
    }

});
const calculateProductPrice = (target)=>{
    const productInfoDiv = target.closest('.product-info');
    const price = productInfoDiv.querySelector('.product-price strong').innerText;
    const quantity = productInfoDiv.querySelector('.quantity').innerText;

    productInfoDiv.querySelector('.product-line-price').innerText = (price * quantity).toFixed(2);
}

const calculateCartPrice = ()=>{
    const productLinePriceDivs = document.querySelectorAll('.product-line-price');

    let subTotal = 0;
    productLinePriceDivs.forEach(div=>{
        subTotal += parseFloat(div.innerText);
    })

    const taxPrice = subTotal * localStorage.getItem('taxRate')

    const shippingPrice = parseFloat(subTotal > 0 && subTotal < localStorage.getItem('freeShippingLimit')? localStorage.getItem('shippingPrice'):0);

    const totalPrice = subTotal + taxPrice + shippingPrice;

    document.querySelector('#cart-subtotal').lastElementChild.innerText = subTotal.toFixed(2);

    document.getElementById('cart-tax').children[1].innerText = taxPrice.toFixed(2);

    document.querySelector('#cart-shipping p:nth-child(2)').innerText = shippingPrice;

    document.querySelector('#cart-total p:last-child').innerText = totalPrice.toFixed(2);
}