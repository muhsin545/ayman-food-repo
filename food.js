const div1 = document.getElementById('first');
const div2 = document.getElementById('second');
const div3 = document.getElementById('third');
const img = document.getElementById('art');
const desc = document.getElementById('desc');
const price = document.getElementById('price');
const totalPrice = document.getElementById('total');
const freeshipping = document.getElementById('free');
const quickshipping = document.getElementById('express');
const shippingCharge = document.getElementById('shipping');

function updateTotal() {
    const totalcost = totalPrice
    const shippingCost = parseInt(shippingCharge.innerText);
    const foodPrice = parseInt(price.innerText);
    const total = shippingCost + foodPrice;
    totalcost.innerText = total;


}

// changing images details and prices

div1.addEventListener('click', function () {
    img.src = "image/img-2.jpg";
    desc.innerText = 'The importance of a balanced diet can’t be emphasized enough for a healthy lifestyle. A healthy lifestyle can be attained by maintaining a balanced diet ';
    price.innerText = "120";
    updateTotal()

})
div2.addEventListener('click', function () {
    img.src = "image/img-3.jpg";
    desc.innerText = ' food why it is important? A propain ideal body ain ideal body er meal plan helps to attain ideal body ain ideal body ain ideal body weight and reduce the risk of chronic';
    price.innerText = "100";
    updateTotal()

})
div3.addEventListener('click', function () {
    img.src = "image/img-4.jpg";
    desc.innerText = 'significance of food why it is important? A proain ideal body ain ideal body ain ideal body per meal plan helps to attain ideal body weight and reduce the risk of chronic';
    price.innerText = "90";
    updateTotal()

});

// shipping charge 
freeshipping.addEventListener('click', function () {
    shippingCharge.innerText = '5';
    updateTotal()

})

quickshipping.addEventListener('click', function () {
    shippingCharge.innerText = '30';
    updateTotal()

});
