// script.js
document.addEventListener('DOMContentLoaded', () => {
    const ticketTypeRadios = document.querySelectorAll('input[name="ticketType"]');
    const quantityInput = document.getElementById('quantity');
    const ticketTypeSummary = document.getElementById('ticketTypeSummary');
    const quantitySummary = document.getElementById('quantitySummary');
    const totalAmount = document.getElementById('totalAmount');
    
    function updateSummary() {
        const selectedTicketType = document.querySelector('input[name="ticketType"]:checked');
        const ticketTypePrice = parseFloat(selectedTicketType.value);
        const quantity = parseInt(quantityInput.value);
        const total = ticketTypePrice * quantity;

        ticketTypeSummary.textContent = selectedTicketType.nextElementSibling.textContent;
        quantitySummary.textContent = quantity;
        totalAmount.textContent = total.toFixed(2);
    }

    ticketTypeRadios.forEach(radio => {
        radio.addEventListener('change', updateSummary);
    });

    quantityInput.addEventListener('input', updateSummary);

    updateSummary(); // Initial call to set default values
});
