document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('paymentForm');

    form.addEventListener('submit', (event) => {
        if (!validateForm()) {
            event.preventDefault();
        }
    });
});

function validateForm() {
    const namePattern = /^[a-zA-Z\s]+$/;
    const cardNumberPattern = /^(\d{4}[ \-]?){3}\d{4}$/;
    const datePattern = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    const cvPattern = /^\d{3}$/;

    const cardNumber = document.getElementById('number').value.trim();
    const date = document.getElementById('Surname').value.trim();
    const CV = document.getElementById('Cv').value.trim();
    const firstAndSecondName = document.getElementById('FirstAndLastName').value.trim();

    let isValid = true;
    let errorMessage = '';

    if (!namePattern.test(firstAndSecondName)) {
        isValid = false;
        errorMessage += 'Förnamn och efternamn är obligatoriskt och får endast innehålla bokstäver och mellanslag.\n';
    }
    
    if (!cardNumberPattern.test(cardNumber)) {
        isValid = false;
        errorMessage += 'Kortnummer är obligatoriskt och ska vara 16 siffror långt. Exempel: 1111 2222 3333 4444, mellanslag eller - kan också användas\n';
    }
    
    if (!datePattern.test(date)) {
        isValid = false;
        errorMessage += 'Datum är obligatoriskt och ska vara i formatet MM/ÅÅ.\n';
    }
    
    if (!cvPattern.test(CV)) {
        isValid = false;
        errorMessage += 'CV är obligatoriskt och ska vara 3 siffror långt.\n';
    }

    if (!isValid) {
        alert(errorMessage);
    }

    return isValid;
}