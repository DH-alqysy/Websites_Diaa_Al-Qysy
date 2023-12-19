
   function copyToClipboard(productId) {
    var productText = "0100012" + productId++;
    var tempInput = document.createElement("textarea");
    tempInput.value = productText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}
function submitOrder() {
    alert('تم إرسال الطلب بنجاح!');
    document.getElementById('names').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('productCode').value = '';
    document.getElementById('address').value = '';
}
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}
window.onscroll = () => {
    search.classList.remove('active');
    navbar.classList.remove('active');
}


let header = document.querySelector('header');

window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow', window.scrollY > 0);
} );