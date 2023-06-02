window.addEventListener('load', function () {
    
    const form = document.querySelector('form');
    form.name.focus();
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const allErrorLabels = document.querySelectorAll('.error-message');
        allErrorLabels.forEach(element => {
            element.innerHTML = '';
        });

        const errors = [];

        if (!form.name.value) {
            errors.push({ name: 'name', message: 'Debes Ingresar el nombre del producto' });
            form.name.classList.add('is-invalid');
        } else {
            form.name.classList.remove('is-invalid');
            form.name.classList.add('is-valid');
        }
        if (!form.price.value) {
            errors.push({ name: 'price', message: 'El productop debe tener un precio' })
            form.price.classList.add('is-invalid');
        } else {
            form.price.classList.remove('is-invalid');
            form.price.classList.add('is-valid');
        }

        if (!form.description.value) {
            errors.push({ name: 'description', message: 'Debes ingresar una descripción' })
            form.description.classList.add('is-invalid');
        } else {
            form.description.classList.remove('is-invalid');
            form.description.classList.add('is-valid');
        }

        errors.forEach(error => {
            const errorLabel = document.getElementById('error-' + error.name);
            errorLabel.innerHTML = error.message;
        });
        if (errors.length === 0) {
            form.submit();
        }
    })


})