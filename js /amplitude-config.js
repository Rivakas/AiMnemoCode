// Amplitude konfigūracija
document.addEventListener('DOMContentLoaded', function() {
    // Įsitikiname, kad Amplitude yra įkelta
    if (typeof amplitude !== 'undefined') {
        try {
            // Nustatome įvykių sekimą
            amplitude.getInstance().logEvent('Page View', {
                page_url: window.location.href,
                page_title: document.title
            });

            // Sekame mygtukų paspaudimus
            document.addEventListener('click', function(e) {
                if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
                    amplitude.getInstance().logEvent('Button Click', {
                        button_text: e.target.textContent,
                        button_type: e.target.tagName.toLowerCase()
                    });
                }
            });

        } catch (error) {
            console.error('Amplitude initialization error:', error);
        }
    }
});
