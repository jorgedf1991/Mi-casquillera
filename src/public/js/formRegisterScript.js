window.addEventListener('load', function () {
    
    const form = document.querySelector('form.validationFrontend');
    form.name.focus();
    
    form.addEventListener('submit', (e) => {
        
        // e.preventDefault();

        const allErrorLabels = document.querySelectorAll('.error-message');
        allErrorLabels.forEach(element => {
            element.innerHTML = '';
        });

        const errors = [];

        if (!form.name.value) {
            errors.push({ name: 'name', message: 'Este campo no puede estar vacio' });
            form.name.classList.add('is-invalid');
        } else {
            form.name.classList.remove('is-invalid');
            form.name.classList.add('is-valid');
        }
        if (!form.last_name.value) {
            errors.push({ name: 'last_name', message: 'Este campo no puede estar vacio' });
            form.last_name.classList.add('is-invalid');
        } else {
            form.last_name.classList.remove('is-invalid');
            form.last_name.classList.add('is-valid');
        }
        if (!form.password.value) {
            errors.push({ name: 'password', message: 'Este Campo no puede estar vacio' })
            form.password.classList.add('is-invalid');
        } else {
            form.password.classList.remove('is-invalid');
            form.password.classList.add('is-valid');
        }

        if (!form.email.value) {
            errors.push({ name: 'email', message: 'Este Campo no puede estar vacio' })
            form.email.classList.add('is-invalid');
        } else {
            form.email.classList.remove('is-invalid');
            form.email.classList.add('is-valid');
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
