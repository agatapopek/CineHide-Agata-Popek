// Wait until the entire HTML content of the page is loaded and ready to be used
document.addEventListener('DOMContentLoaded', function () {
    //Find all the "See More" buttons for the comments.
    const seeMoreButtons = document.querySelectorAll('.see-more');

    // For each of these buttons, do something when it’s clicked.
    seeMoreButtons.forEach(function(seeMoreLink) {
        // When someone clicks the "See More" button:
        seeMoreLink.addEventListener('click', function() {
            // Look for the text of the comment connected to this button.
            const commentText = this.closest('.comment').querySelector('.comment-text');
            // Check if the comment text is fully shown (not limited in height).
            if (commentText.style.maxHeight === 'none') {
                // If it’s fully shown, make it smaller again (only show the first 100px of text).
                commentText.style.maxHeight = '100px';
                // Change the button text back to "see more" so the user knows they can expand it again.
                this.textContent = 'see more';
            } else {
                // If it’s not fully shown, expand it to show all the text.
                commentText.style.maxHeight = 'none';
                // Change the button text to "see less" so the user knows they can collapse it.
                this.textContent = 'see less';
            }
        });
    });

    // Select the "See More Posts" button
    const seeMorePostsButton = document.querySelector('.see-more-posts');
    // Find the section with the extra (hidden) comments.
    const hiddenComments = document.querySelector('.hidden-comments');

    // When the "See More Posts" button is clicked:
    seeMorePostsButton.addEventListener('click', function() {
        // Check if the extra comments are currently hidden (not shown).
        if (hiddenComments.style.display === 'none' || !hiddenComments.style.display) {
            hiddenComments.style.display = 'flex'; // Show hidden comments
            this.textContent = 'see less';  // Change button text
        } else {
            hiddenComments.style.display = 'none'; // Hide comments again
            this.textContent = 'see more';  // Reset button text
        }
    });
});
