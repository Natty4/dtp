let search_form = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    search_form.classList.toggle('active');
    navbar.classList.remove('active');
    shopping_cart.classList.remove('active');
    login_form.classList.remove('active');
    sidemenu.classList.remove('active');
}

document.querySelector('#cart-btn').onclick = () =>{
    navbar.classList.remove('active');
    login_form.classList.remove('active');
    shopping_cart.classList.remove('active');
    search_form.classList.remove('active');
    sidemenu.classList.remove('active');
}

let login_form = document.querySelector('.login-form');
document.querySelector('#user-btn').onclick = () =>{
    login_form.classList.toggle('active');
    navbar.classList.remove('active');
    search_form.classList.remove('active');
    shopping_cart.classList.remove('active');
    sidemenu.classList.remove('active');

}

let shopping_cart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>{
    shopping_cart.classList.toggle('active');
    navbar.classList.remove('active');
    login_form.classList.remove('active');
    search_form.classList.remove('active');
    sidemenu.classList.remove('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    login_form.classList.remove('active');
    search_form.classList.remove('active');
    shopping_cart.classList.remove('active');
    sidemenu.classList.remove('active');
}

let sidemenu = document.querySelector('.sidemenu');
document.querySelector('#sidemenu-btn').onclick = () =>{
    sidemenu.classList.toggle('active');
    login_form.classList.remove('active');
    search_form.classList.remove('active');
    navbar.classList.remove('active');
    shopping_cart.classList.remove('active');
    sidemenuicon.classList.toggle('active');
}

let sidemenuicon = document.querySelector('.sidemenuicon');

window.onscroll = () => {
    navbar.classList.remove('active');
    login_form.classList.remove('active');
    search_form.classList.remove('active');
    shopping_cart.classList.remove('active');
    // sidemenu.classList.remove('active');
    // sidemenuicon.classList.toggle('active');
}
