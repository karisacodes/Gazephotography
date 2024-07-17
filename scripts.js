let currentCategory = 'all';
let currentIndex = 0;



function filterGallery(category) {
    currentCategory = category;
    currentIndex = 0;
    const items = document.querySelectorAll('.gallery-item');
    const categoryItems = document.querySelectorAll(`.gallery-item.${category}`);
    // Hide all items
    items.forEach(item => {
        item.style.display = 'none';
    });

    

    // Display the first 10 items of the selected category if there are 10 or more
    if (category === 'all' || categoryItems.length <= 10) {
        categoryItems.forEach(item => {
            item.style.display = 'block';
        });
    } else {
        for (let i = 0; i < 10; i++) {
            categoryItems[i].style.display = 'block';
        }
    }
    
}

document.addEventListener("DOMContentLoaded", function() {
    const categories = ['weddings', 'portraits', 'events', 'nature', 'studio','graduation', 'birthdays', 'wraps'];
    
    categories.forEach(category => {
        const items = document.querySelectorAll(`.gallery-item.${category}`);
        for (let i = 2; i < items.length; i++) {
            items[i].style.display = 'none';
        }
    });

    function slideImages() {
        const items = document.querySelectorAll(`.gallery-item.${currentCategory}`);
        if (items.length > 10) {
            const displayedItems = Array.from(items).filter(item => item.style.display === 'block');
            const reserveItems = Array.from(items).filter(item => item.style.display === 'none');
            
            setDisplayToFlex()
            if (displayedItems.length === 10 && reserveItems.length > 0) {
                const randomDisplayedIndex = Math.floor(Math.random() * displayedItems.length);
                const randomReserveIndex = Math.floor(Math.random() * reserveItems.length);

                displayedItems[randomDisplayedIndex].style.display = 'none';
                displayedItems[randomDisplayedIndex].classList.remove('slideIn');

                reserveItems[randomReserveIndex].style.display = 'block';
                reserveItems[randomReserveIndex].classList.add('slideIn');
            }
        }
    
        
    }


    

    // Set interval for sliding images every 2.5 seconds
    setInterval(slideImages, 2500);
});

function openModal(element) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('caption');
    modal.style.display = 'block';
    modalImg.src = element.src;
    captionText.innerHTML = element.alt;
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function prevImage() {
    const items = document.querySelectorAll(`.gallery-item.${currentCategory}`);
    if (items.length > 10) {

        const displayedItems = Array.from(items).filter(item => item.style.display === 'block');
        const reserveItems = Array.from(items).filter(item => item.style.display === 'none');
        
        if (displayedItems.length === 10 && reserveItems.length > 0) {
            const lastDisplayed = displayedItems[displayedItems.length - 1];
            const firstReserve = reserveItems[0];

            lastDisplayed.style.display = 'none';
            lastDisplayed.classList.remove('slideIn');

            firstReserve.style.display = 'block';
            firstReserve.classList.add('slideIn');
        }
    }

}

function nextImage() {
    const items = document.querySelectorAll(`.gallery-item.${currentCategory}`);
    if (items.length > 10) {
        const displayedItems = Array.from(items).filter(item => item.style.display === 'block');
        const reserveItems = Array.from(items).filter(item => item.style.display === 'none');
        
        if (displayedItems.length === 10 && reserveItems.length > 0) {
            const firstDisplayed = displayedItems[0];
            const lastReserve = reserveItems[reserveItems.length - 1];

            firstDisplayed.style.display = 'none';
            firstDisplayed.classList.remove('slideIn');

            lastReserve.style.display = 'block';
            lastReserve.classList.add('slideIn');
        }
    }
}

function setDisplayToFlex() {
    var element = document.getElementById('nav-arrows');
    element.style.display = 'flex';
}