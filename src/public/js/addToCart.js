const productCart = [
    {
        id: 0,
        image: 'img/products/arrabalera.jpeg',
        title: 'Arrabalera',
        price: 4000,
    },
    {
       id: 1,
       image: 'img/products/asopalada.jpeg',
       title: 'Asolapada',
        price: 4000,
    },
     {
        id: 2,
        image: 'img/products/calentona.jpeg',
        title: 'Calentona',
        price: 4000,
     },
     {
        id: 3,
         image: 'img/products/todera.jpeg',
       title: 'Todera',
        price: 4000,
    },
     {
        id: 4,
        image: 'img/products/salamera.jpeg',
        title: 'Salamera',
         price: 4000,
     },
    {
        id: 5,
         image: 'img/products/todera.jpeg',
         title: 'Todera',
        price: 4000,
     },
]
const categories = [...new Set(productCart.map((item)=> 
    {return item}))]
    let i = 0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    let {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
            <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
            <p>${title}</p>
            <h2>$ ${price}<h2>`+
            "<button class='button-cart' onclick='addtocart("+(i++)+")'>Comprar</button>"+
            `</div>
            </div>`
    )
}).join('')

let cart = [];

function addtocart(a){
    cart.push({...categories[a]});
    displayCart();
}

function delElement(a){
    cart.splice(a, 1);
    displayCart();
}

function displayCart(a){
    let j = 0, total=0;
    document.getElementById('count').innerHTML=cart.length;
    
    if(cart.length == 0){
        document.getElementById('cartItem').innerHTML = 'El carrito esta vacio';
        document.getElementById('total').innerHTML = "$ "+0+" ";
    }else {
        document.getElementById('cartItem').innerHTML = cart.map((items)=>
        {
           let {image, title, price} = items;
           total=total+price;
           document.getElementById('total').innerHTML = "$ "+total+" ";
           return (
            `<div class='cart-item'>
            <div class='row-img'>
            <img class='rowimg' src=${image}>
            </div>
            <p style='font-size:12px;'>${title}</p>
            <h2 style='font-size:15px;'>$ ${price}<h2>`+
            "<i class='fa-solid fa-trash' onclick='delElement("+(j++)+")'></i></div>"
    
           );
        }).join('');
    }
}