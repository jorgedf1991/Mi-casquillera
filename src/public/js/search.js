document.addEventListener('keyup', e => {
    if (e.target.matches('#buscador')) {
      const searchTerm = e.target.value.toLowerCase();
      const productsDataElement = document.getElementById('products-data');
      const productsData = JSON.parse(productsDataElement.dataset.products);
  
      const productElements = document.querySelectorAll('.product, #box-profile-product');
  
      productElements.forEach(element => {
        const productName = element.querySelector('.item, .profile-product p').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
          element.style.display = 'block'; // Mostrar elemento si coincide
        } else {
          element.style.display = 'none'; // Ocultar elemento si no coincide
        }
      });
    }
  });
  

  
  
  
