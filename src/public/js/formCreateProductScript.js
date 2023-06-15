window.addEventListener('load', function () {
    
    const form = document.querySelector('form.validation_product_create');
    form.name.focus();
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const allErrorLabels = document.querySelectorAll('.error-message');
        allErrorLabels.forEach(element => {
            element.innerHTML = '';
        });

        const errors = [];

        if (!form.name.value) {
            errors.push({ name: 'name', message: 'Debes completar este campo' });
            form.name.classList.add('is-invalid');
        } else {
            form.name.classList.remove('is-invalid');
            form.name.classList.add('is-valid');
        }
        if (!form.price.value) {
            errors.push({ name: 'price', message: 'Debes completar este campo' })
            form.price.classList.add('is-invalid');
        } else {
            form.price.classList.remove('is-invalid');
            form.price.classList.add('is-valid');
        }

        if (!form.description.value) {
            errors.push({ name: 'description', message: 'Debes completar este campo' })
            form.description.classList.add('is-invalid');
        } else {
            form.description.classList.remove('is-invalid');
            form.description.classList.add('is-valid');
        }
        if (!form.description.value) {
            errors.push({ name: 'product_categories', message: 'Debes completar este campo' })
            form.description.classList.add('is-invalid');
        } else {
            form.description.classList.remove('is-invalid');
            form.description.classList.add('is-valid');
        }
        if (!form.description.value) {
            errors.push({ name: 'discount', message: 'Debes completar este campo' })
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