document.addEventListener('DOMContentLoaded', () => {
    // Get all event cards
    const eventCards = document.querySelectorAll('.event-card');
    const popup = document.getElementById('popup-box');
    const popupImage = document.getElementById('popup-image');
    const popupTitle = document.getElementById('popup-title');
    const popupDirector = document.getElementById('popup-director');
    const popupDesc = document.getElementById('popup-desc');
    const closePopup = document.getElementById('close-popup');

    // Function to show the popup
    function showPopup(eventCard) {
        // Extract data from data-* attributes
        const title = eventCard.getAttribute('data-title');
        const director = eventCard.getAttribute('data-director');
        const description = eventCard.getAttribute('data-description');
        const imageSrc = eventCard.getAttribute('data-image');

        // Add content to the popup
        popupTitle.textContent = title;
        popupDirector.textContent = `Directed by: ${director}`;
        popupDesc.textContent = description;
        popupImage.setAttribute('src', imageSrc);

        // Show the popup
        popup.classList.remove('hidden');
    }

    // Add click event listener to each card
    eventCards.forEach(card => {
        card.addEventListener('click', () => showPopup(card));
    });

    // Close popup on clicking the close button
    closePopup.addEventListener('click', () => {
        popup.classList.add('hidden');
    });

    // Close popup on clicking outside the content
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.add('hidden');
        }
    });
});
