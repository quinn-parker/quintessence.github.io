// script.js
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter button');
    const guideItems = document.querySelectorAll('.guide-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            guideItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
