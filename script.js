

let totalPrice = 0;
function clickHandler(target){
    const cardsEntry = document.getElementById('cards-entry')
    const card = target.childNodes[3].childNodes[3].innerHTML
    const p = document.createElement('p')
    const count = cardsEntry.childElementCount
    p.innerHTML = `${count +1}. ${card}`;
    cardsEntry.appendChild(p);

    const cardPrice = target.childNodes[3].childNodes[5].innerText.split(" ")[0]
    totalPrice = parseFloat(cardPrice) + parseFloat(totalPrice);
    const getTotalPrice = document.getElementById('total-price')
    getTotalPrice.innerText = totalPrice.toFixed(2);

    const applyButton = document.getElementById('apply-btn')
    if (totalPrice >= 200){
        applyButton.removeAttribute("disabled");
    }
    else{
        applyButton.setAttribute("disabled",  true)
    }
    
    const makePurchase = document.getElementById('purchase-btn')
    if(totalPrice > 0){
        makePurchase.removeAttribute('disabled');
        const inputField = document.getElementById
    }
    else{
        makePurchase.setAttribute("disabled",  true)
    }
    document.getElementById('grand-total').innerText = totalPrice.toFixed(2) 
}


document.getElementById('apply-btn').addEventListener('click', function(){

    const couponCode = document.getElementById('coupon-input');
    const couponValue = couponCode.value.toUpperCase();
    if(couponValue === "SELL200"){
        const discount = 20 * totalPrice / 100;
        const discountField = document.getElementById('discount')
        discountField.innerText = discount.toFixed(2)
        const grandTotal = totalPrice - discount;
        const grandTotalField = document.getElementById('grand-total')
        grandTotalField.innerText = grandTotal.toFixed(2);
    }
})

document.getElementById('go-home').addEventListener('click', function(){
    window.location.href = 'index.html'
})