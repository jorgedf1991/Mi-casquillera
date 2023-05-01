(function(){
    const listElement = document.querySelectorAll('.menu_item--show');
    const list = document.querySelector('.menu_links');
    const menu = document.querySelector('.menu_hamburge');
 
    const addClick = ()=>{
     listElement.forEach(Element =>{
         Element.addEventListener('click', ()=>{
 
             let subMenu = Element.children[1];
             let height = 0;
             Element.classList.toggle('menu_item--active');
 
             if(subMenu.clientHeight === 0){ //pregunta si la altura del elemento es igual a 0, entonces la var heigth tenga la altura minima para que exitas
                 height = subMenu.scrollHeight;
             }
 
             subMenu.style.height =  `${height}px`;
         })
     })
    }
 
    const deleteStyleHeight = () =>{
     listElement.forEach(Element =>{
 
         if(Element.children[1].getAttribute('style')){
             Element.children[1].removeAttribute('style');
             Element.classList.remove('menu_item--active');
         }
     })
    }
 
 
    window.addEventListener('resize', () =>{
     if(window.innerWidth > 800){
         deleteStyleHeight();
         if(list.classList.contains('menu_links--show'))
         list.classList.remove('menu_link--show')
     }else{
         addClick();
     }
 })
 
 if(window.innerWidth <= 800){
     addClick();
 }
 
 menu.addEventListener('click', ()=> list.classList.toggle('menu_links--show'))
 
 })();
 