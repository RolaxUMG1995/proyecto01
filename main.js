const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector(' .cards-container');
const productDetailContainer = document.querySelector('#productDetail')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAsaide);

var productList = [
    {
        name: 'Bike',
        price: 120,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        name: 'Pantalla',
        price: 220,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        name: 'Computadora',
        price: 620,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
];

renderProducts(productList);

function renderProducts(arr){
    for (product of arr){
        let productCard = document.createElement('div');
        productCard.classList.add('product-card');
      
        let productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click',openProductDetailAside);
      
        let productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
      
        let productInfoDiv = document.createElement('div');
      
        let productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
      
        let productName = document.createElement('p');
        productName.innerText = product.name;
      
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
      
        let productInfoFigure = document.createElement('figure');
        let productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
      
        productInfoFigure.appendChild(productImgCart);
      
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
      
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
      
        cardsContainer.appendChild(productCard);
      
      }
      
}

function toggleDesktopMenu(){

    var isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    } 

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    var isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    } 

    closeProductDetailAsaide();

    mobileMenu.classList.toggle('inactive');
    
}

function toggleCarritoAside(){
    var isMobileMenuClosed = mobileMenu.classList.contains('incative');
    var isProductDetailClosed = productDetailContainer.classList.contains('incative');

    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    } 

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAsaide(){
    productDetailContainer.classList.add('inactive');
}