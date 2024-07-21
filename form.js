document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('ShippingForm');

    form.addEventListener('submit', (event) => {
        if (!validateForm()) {
            event.preventDefault();
        }
    });
});

function validateForm() {
    const namePattern = /^[a-zA-Z\s]+$/;
    const addressPattern = /^[a-zA-Z0-9\s,.-]+$/;
    const countyPattern = /^[a-zA-Z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobilePattern = /^\d{10}$/;

    const firstName = document.getElementById('Name').value.trim();
    const secondName = document.getElementById('Surname').value.trim();
    const address = document.getElementById('Adress').value.trim();
    const county = document.getElementById('Ort').value.trim();
    const email = document.getElementById('Email').value.trim();
    const mobileNumber = document.getElementById('MobileNumber').value.trim();

    let isValid = true;
    let errorMessage = '';

    if (!mobilePattern.test(mobileNumber)) {
        if (!mobileNumber) {
            console.log(mobileNumber);
            console.log("bruh");
            isValid = true;
        }
        else{
            isValid = false;
            errorMessage += 'Ogiltigt mobilnummer. Det ska vara 10 siffror långt.\n';
        }
    }

    if (!namePattern.test(firstName)) {
        isValid = false;
        errorMessage += 'Förnamn är obligatoriskt och ska endast innehålla bokstäver och mellanslag.\n';
    }

    if (!namePattern.test(secondName)) {
        isValid = false;
        errorMessage += 'Efternamn är obligatoriskt och ska endast innehålla bokstäver och mellanslag.\n';
    }

    if (!addressPattern.test(address)) {
        isValid = false;
        errorMessage += 'Adress är obligatorisk och ska endast innehålla bokstäver, siffror, mellanslag samt tecknen ,.-.\n';
    }

    if (!countyPattern.test(county)) {
        isValid = false;
        errorMessage += 'Ort är obligatoriskt och ska endast innehålla bokstäver och mellanslag.\n';
    }

    if (!emailPattern.test(email)) {
        isValid = false;
        errorMessage += 'Ogiltig e-postadress. Den ska vara formaterad så här: "Exempel@exempel.com"\n';
    }

    if (!isValid) {
        alert(errorMessage);
    }

    return isValid;
}