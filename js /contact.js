// Kontaktų formos funkcionalumas
document.addEventListener('DOMContentLoaded', function() {
    // Inicializuojame Email.js su jūsų vartotojo ID
    emailjs.init("rajakoijra@gmail.com"); // Pakeiskite į savo Email.js vartotojo ID

    const contactForm = document.getElementById('contactForm');
    const submitButton = contactForm.querySelector('button[type="submit"]');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Išjungiame mygtuką, kol siunčiama žinutė
        submitButton.disabled = true;
        submitButton.textContent = 'Siunčiama...';

        // Surenkame formos duomenis
        const formData = {
            from_name: document.getElementById('name').value,
            from_email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Siunčiame el. laišką naudojant Email.js
        emailjs.send('default_service', 'template_id', formData) // Pakeiskite į savo service ir template ID
            .then(function(response) {
                // Sėkmingai išsiųsta
                alert('Žinutė sėkmingai išsiųsta!');
                contactForm.reset();
            }, function(error) {
                // Klaida siunčiant
                alert('Įvyko klaida siunčiant žinutę. Bandykite dar kartą.');
                console.error('Klaida:', error);
            })
            .finally(function() {
                // Atstatome mygtuką
                submitButton.disabled = false;
                submitButton.textContent = 'Siųsti';
            });
    });
});
