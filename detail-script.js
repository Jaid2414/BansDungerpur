// Detail page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get place ID from URL parameter
    const placeId = getUrlParameter('place');
    
    if (!placeId) {
        showError('No place specified');
        return;
    }
    
    // Load place details
    loadPlaceDetails(placeId);
    
    // Hide loading overlay after content is loaded
    setTimeout(() => {
        hideLoadingOverlay();
    }, 1000);
});

// Function to load place details
function loadPlaceDetails(placeId) {
    const placeData = getPlaceDetails(placeId);
    
    if (!placeData) {
        showError('Place not found');
        return;
    }
    
    // Update page title
    document.getElementById('page-title').textContent = `${placeData.title} - Wagad Tourism`;
    
    // Update hero section
    document.getElementById('place-title').textContent = placeData.title;
    document.getElementById('place-subtitle').textContent = placeData.hindiTitle;
    document.getElementById('place-location').textContent = placeData.location;
    document.getElementById('best-time').textContent = `Best Time: ${placeData.bestTime}`;
    
    // Update hero image
    const heroImg = document.getElementById('hero-img');
    heroImg.src = getPlaceImage(placeId);
    heroImg.alt = placeData.title;
    
    // Update description
    document.getElementById('place-description').textContent = placeData.description;
    
    // Update features
    loadFeatures(placeData.features);
    
    // Update visiting information
    document.getElementById('place-timings').textContent = placeData.timings;
    document.getElementById('entry-fee').textContent = placeData.entryFee;
    document.getElementById('best-time-detail').textContent = placeData.bestTime;
    
    // Load photo gallery
    loadPhotoGallery(placeId);
    
    // Load map
    loadPlaceMap(placeData.location);
    
    // Load travel tips
    loadTravelTips(placeId);
    
    // Load related places
    loadRelatedPlaces(placeId);
}

// Function to get place image
function getPlaceImage(placeId) {
    const imageMap = {
        'anand-sagar-lake': 'images/anand-sagar-lake.jpg',
        'mahi-dam': 'images/mahi-dam.jpg',
        'tripura-sundari-temple': 'images/tripura-sundari-temple.jpg',
        'kagdi-pickup-weir': 'images/kagdi-pickup-weir.jpg',
        'madareshwar-temple': 'images/madareshwar-temple.jpg',
        'ram-kund': 'images/ram-kund.jpg',
        'udai-bilas-palace': 'images/udai-bilas-palace.jpg',
        'juna-mahal': 'images/juna-mahal.jpg',
        'gaib-sagar-lake': 'images/gaib-sagar-lake.jpg',
        'badal-mahal': 'images/badal-mahal.jpg',
        'deo-somnath-temple': 'images/deo-somnath-temple.jpg',
        'baneshwar-temple': 'images/baneshwar-temple.jpg'
    };
    
    return imageMap[placeId] || 'https://via.placeholder.com/800x400/667eea/ffffff?text=Image+Not+Available';
}

// Function to load features
function loadFeatures(features) {
    const featuresContainer = document.getElementById('place-features');
    featuresContainer.innerHTML = '';
    
    features.forEach(feature => {
        const featureElement = document.createElement('div');
        featureElement.className = 'feature-item';
        featureElement.innerHTML = `
            <i class="fas fa-check"></i>
            <span>${feature}</span>
        `;
        featuresContainer.appendChild(featureElement);
    });
}

// Function to load photo gallery
function loadPhotoGallery(placeId) {
    const galleryContainer = document.getElementById('photo-gallery');
    
    // Get 6 images for each place
    const galleryImages = getPlaceGalleryImages(placeId);
    
    galleryContainer.innerHTML = '';
    
    galleryImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.alt}" loading="lazy">
            <div class="gallery-overlay">
                <i class="fas fa-expand"></i>
            </div>
        `;
        
        // Add click event for image modal (simplified version)
        galleryItem.addEventListener('click', () => {
            openImageModal(image.src, image.alt);
        });
        
        galleryContainer.appendChild(galleryItem);
    });
}

// Function to get 6 gallery images for each place
function getPlaceGalleryImages(placeId) {
    const galleryMap = {
        'anand-sagar-lake': [
            { src: 'images/anand-sagar-lake.jpg', alt: 'Anand Sagar Lake Main View' },
            { src: 'images/anand-sagar-lake-2.jpg', alt: 'Lake with Islands' },
            { src: 'images/anand-sagar-lake-3.jpg', alt: 'Boating Area' },
            { src: 'images/anand-sagar-lake-4.jpg', alt: 'Scenic Lake View' },
            { src: 'images/anand-sagar-lake-5.jpg', alt: 'Lake Surroundings' },
            { src: 'images/anand-sagar-lake-6.jpg', alt: 'Evening View' }
        ],
        'mahi-dam': [
            { src: 'images/mahi-dam.jpg', alt: 'Mahi Dam Main Structure' },
            { src: 'images/mahi-dam-2.jpg', alt: 'Dam Water Release' },
            { src: 'images/mahi-dam-3.jpg', alt: 'Aerial View' },
            { src: 'images/mahi-dam-4.jpg', alt: 'Dam Reservoir' },
            { src: 'images/mahi-dam-5.jpg', alt: 'Gates Opening' },
            { src: 'images/mahi-dam-6.jpg', alt: 'Full Dam View' }
        ],
        'tripura-sundari-temple': [
            { src: 'images/tripura-sundari-temple.jpg', alt: 'Temple Main Entrance' },
            { src: 'images/tripura-sundari-temple-2.jpg', alt: 'Temple Architecture' },
            { src: 'images/tripura-sundari-temple-3.jpg', alt: 'Temple Complex' },
            { src: 'images/tripura-sundari-temple-4.jpg', alt: 'Goddess Idol' },
            { src: 'images/tripura-sundari-temple-5.jpg', alt: 'Temple Interior' },
            { src: 'images/tripura-sundari-temple-6.jpg', alt: 'Temple Courtyard' }
        ],
        'kagdi-pickup-weir': [
            { src: 'images/kagdi-pickup-weir.jpg', alt: 'Kagdi Pick Up Weir' },
            { src: 'images/kagdi-pickup-weir-2.jpg', alt: 'Adventure Activities' },
            { src: 'images/kagdi-pickup-weir-3.jpg', alt: 'Water Sports Area' },
            { src: 'images/kagdi-pickup-weir-4.jpg', alt: 'Scenic Beauty' },
            { src: 'images/kagdi-pickup-weir-5.jpg', alt: 'Zip Line Activity' },
            { src: 'images/kagdi-pickup-weir-6.jpg', alt: 'River View' }
        ],
        'madareshwar-temple': [
            { src: 'images/madareshwar-temple.jpg', alt: 'Cave Temple Entrance' },
            { src: 'images/madareshwar-temple-2.jpg', alt: 'Temple Interior' },
            { src: 'images/madareshwar-temple-3.jpg', alt: 'Shiva Lingam' },
            { src: 'images/madareshwar-temple-4.jpg', alt: 'Cave Formation' },
            { src: 'images/madareshwar-temple-5.jpg', alt: 'Natural Rock Structure' },
            { src: 'images/madareshwar-temple-6.jpg', alt: 'Temple Complex' }
        ],
        'ram-kund': [
            { src: 'images/ram-kund.jpg', alt: 'Ram Kund Main View' },
            { src: 'images/ram-kund-2.jpg', alt: 'Steps to Kund' },
            { src: 'images/ram-kund-3.jpg', alt: 'Sacred Water Tank' },
            { src: 'images/ram-kund-4.jpg', alt: 'Cave Entrance' },
            { src: 'images/ram-kund-5.jpg', alt: 'Natural Cave' },
            { src: 'images/ram-kund-6.jpg', alt: 'Adventure Cave' }
        ],
        'udai-bilas-palace': [
            { src: 'images/udai-bilas-palace.jpg', alt: 'Palace Main View' },
            { src: 'images/udai-bilas-palace-2.jpg', alt: 'Heritage Architecture' },
            { src: 'images/udai-bilas-palace-3.jpg', alt: 'Palace Interior' },
            { src: 'images/udai-bilas-palace-4.jpg', alt: 'Royal Rooms' },
            { src: 'images/udai-bilas-palace-5.jpg', alt: 'Palace Courtyard' },
            { src: 'images/udai-bilas-palace-6.jpg', alt: 'Lake View from Palace' }
        ],
        'juna-mahal': [
            { src: 'images/juna-mahal.jpg', alt: 'Juna Mahal Exterior' },
            { src: 'images/juna-mahal-2.jpg', alt: 'Palace Architecture' },
            { src: 'images/juna-mahal-3.jpg', alt: 'Historical Structure' },
            { src: 'images/juna-mahal-4.jpg', alt: 'Palace Walls' },
            { src: 'images/juna-mahal-5.jpg', alt: 'Miniature Paintings' },
            { src: 'images/juna-mahal-6.jpg', alt: 'Palace Interior' }
        ],
        'gaib-sagar-lake': [
            { src: 'images/gaib-sagar-lake.jpg', alt: 'Gaib Sagar Lake' },
            { src: 'images/gaib-sagar-lake-2.jpg', alt: 'Lake with Palaces' },
            { src: 'images/gaib-sagar-lake-3.jpg', alt: 'Scenic Lake View' },
            { src: 'images/gaib-sagar-lake-4.jpg', alt: 'Lake Surroundings' },
            { src: 'images/gaib-sagar-lake-5.jpg', alt: 'Boating Area' },
            { src: 'images/gaib-sagar-lake-6.jpg', alt: 'Evening Lake View' }
        ],
        'badal-mahal': [
            { src: 'images/badal-mahal.jpg', alt: 'Badal Mahal Main View' },
            { src: 'images/badal-mahal-2.jpg', alt: 'Palace Architecture' },
            { src: 'images/badal-mahal-3.jpg', alt: 'Historical Palace' },
            { src: 'images/badal-mahal-4.jpg', alt: 'Palace Structure' },
            { src: 'images/badal-mahal-5.jpg', alt: 'Palace Exterior' },
            { src: 'images/badal-mahal-6.jpg', alt: 'Evening Illumination' }
        ],
        'deo-somnath-temple': [
            { src: 'images/deo-somnath-temple.jpg', alt: 'Deo Somnath Temple' },
            { src: 'images/deo-somnath-temple-2.jpg', alt: 'Temple Architecture' },
            { src: 'images/deo-somnath-temple-3.jpg', alt: 'Temple Complex' },
            { src: 'images/deo-somnath-temple-4.jpg', alt: 'Shiva Temple' },
            { src: 'images/deo-somnath-temple-5.jpg', alt: 'Temple Structure' },
            { src: 'images/deo-somnath-temple-6.jpg', alt: 'Riverside Temple' }
        ],
        'baneshwar-temple': [
            { src: 'images/baneshwar-temple.jpg', alt: 'Baneshwar Temple' },
            { src: 'images/baneshwar-temple-2.jpg', alt: 'Temple Complex' },
            { src: 'images/baneshwar-temple-3.jpg', alt: 'Fair Gathering' },
            { src: 'images/baneshwar-temple-4.jpg', alt: 'Temple Architecture' },
            { src: 'images/baneshwar-temple-5.jpg', alt: 'Pilgrimage Site' },
            { src: 'images/baneshwar-temple-6.jpg', alt: 'Cultural Festival' }
        ]
    };
    
    return galleryMap[placeId] || [
        { src: 'https://via.placeholder.com/300x200/667eea/ffffff?text=Image+1', alt: 'Gallery Image 1' },
        { src: 'https://via.placeholder.com/300x200/764ba2/ffffff?text=Image+2', alt: 'Gallery Image 2' },
        { src: 'https://via.placeholder.com/300x200/ff6b6b/ffffff?text=Image+3', alt: 'Gallery Image 3' },
        { src: 'https://via.placeholder.com/300x200/4ecdc4/ffffff?text=Image+4', alt: 'Gallery Image 4' },
        { src: 'https://via.placeholder.com/300x200/45b7d1/ffffff?text=Image+5', alt: 'Gallery Image 5' },
        { src: 'https://via.placeholder.com/300x200/f39c12/ffffff?text=Image+6', alt: 'Gallery Image 6' }
    ];
}

// Function to load place map
function loadPlaceMap(location) {
    const mapFrame = document.getElementById('place-map');
    const encodedLocation = encodeURIComponent(location);
    mapFrame.src = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodedLocation}`;
    
    // Fallback to search-based embed
    mapFrame.src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116234.84842806328!2d74.35825!3d23.5411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${encodedLocation}!5e0!3m2!1sen!2sin!4v1234567890`;
}

// Function to load travel tips
function loadTravelTips(placeId) {
    const tipsContainer = document.getElementById('travel-tips');
    
    // Sample tips based on place type
    const tipsByPlace = {
        'anand-sagar-lake': [
            'Best visited during early morning or evening for beautiful views',
            'Carry a camera for photography',
            'Boating facilities available on-site',
            'Wear comfortable walking shoes'
        ],
        'mahi-dam': [
            'Visit during monsoon season for full water levels',
            'Carry water and snacks',
            'Best time for photography is golden hour',
            'Check weather conditions before visiting'
        ],
        'tripura-sundari-temple': [
            'Dress modestly when visiting the temple',
            'Remove shoes before entering',
            'Photography may be restricted inside',
            'Visit during festival times for special celebrations'
        ],
        'kagdi-pickup-weir': [
            'Book adventure activities in advance',
            'Wear appropriate gear for water activities',
            'Follow safety instructions carefully',
            'Carry extra clothes for water activities'
        ],
        'madareshwar-temple': [
            'Carry a flashlight for cave exploration',
            'Wear non-slip shoes for safety',
            'Respect the religious significance',
            'Visit during daylight hours'
        ],
        'ram-kund': [
            'Early morning visit recommended',
            'Carry offerings if you wish to pray',
            'Maintain silence and respect',
            'Photography allowed in designated areas'
        ],
        'udai-bilas-palace': [
            'Book heritage hotel stay in advance',
            'Guided tours available',
            'Best for photography during golden hour',
            'Respect the heritage property'
        ],
        'juna-mahal': [
            'Hire a local guide for detailed history',
            'Carry water during summer visits',
            'Photography allowed with permission',
            'Wear comfortable shoes for climbing'
        ],
        'gaib-sagar-lake': [
            'Best visited during sunset',
            'Boating facilities available',
            'Carry camera for scenic photography',
            'Visit nearby palaces as well'
        ],
        'badal-mahal': [
            'Visit during clear weather for best views',
            'Carry water and snacks',
            'Best photography time is morning',
            'Respect the historical significance'
        ],
        'deo-somnath-temple': [
            'Visit during early morning aarti',
            'Dress appropriately for temple visit',
            'Carry offerings if desired',
            'Respect photography restrictions'
        ],
        'baneshwar-temple': [
            'Visit during Baneshwar Fair for cultural experience',
            'Respect tribal customs and traditions',
            'Carry cash for local purchases',
            'Stay hydrated during fair time'
        ]
    };
    
    const tips = tipsByPlace[placeId] || [
        'Plan your visit during favorable weather',
        'Carry water and snacks',
        'Respect local customs and traditions',
        'Take only memories, leave only footprints'
    ];
    
    tipsContainer.innerHTML = '';
    
    tips.forEach(tip => {
        const tipElement = document.createElement('li');
        tipElement.textContent = tip;
        tipsContainer.appendChild(tipElement);
    });
}

// Function to load related places
function loadRelatedPlaces(currentPlaceId) {
    const relatedContainer = document.getElementById('related-places-grid');
    
    // Get all places except current one
    const allPlaces = Object.keys(placesData).filter(id => id !== currentPlaceId);
    
    // Randomly select 3 related places
    const relatedPlaces = allPlaces.sort(() => 0.5 - Math.random()).slice(0, 3);
    
    relatedContainer.innerHTML = '';
    
    relatedPlaces.forEach(placeId => {
        const placeData = placesData[placeId];
        const relatedCard = document.createElement('div');
        relatedCard.className = 'related-card';
        relatedCard.innerHTML = `
            <div class="related-image">
                <img src="${getPlaceImage(placeId)}" alt="${placeData.title}" loading="lazy">
            </div>
            <div class="related-content">
                <h3 class="related-title">${placeData.title}</h3>
                <p class="related-subtitle">${placeData.hindiTitle}</p>
                <p class="related-description">${placeData.description.substring(0, 100)}...</p>
            </div>
        `;
        
        // Add click event to navigate to related place
        relatedCard.addEventListener('click', () => {
            window.location.href = `detail.html?place=${placeId}`;
        });
        
        relatedContainer.appendChild(relatedCard);
    });
}

// Function to show error
function showError(message) {
    const heroContent = document.querySelector('.hero-content');
    heroContent.innerHTML = `
        <h1 class="hero-title">Error</h1>
        <p class="hero-subtitle">${message}</p>
        <div class="hero-meta">
            <a href="index.html" class="back-btn">
                <i class="fas fa-arrow-left"></i>
                <span>Back to Home</span>
            </a>
        </div>
    `;
    hideLoadingOverlay();
}

// Function to hide loading overlay
function hideLoadingOverlay() {
    const loadingOverlay = document.getElementById('loading-overlay');
    loadingOverlay.classList.add('hidden');
}

// Function to open image modal (simplified)
function openImageModal(src, alt) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeImageModal()">
            <div class="modal-content">
                <img src="${src}" alt="${alt}">
                <button class="modal-close" onclick="closeImageModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
    `;
    
    // Add modal styles
    const modalStyles = `
        <style>
            .image-modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0,0,0,0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2000;
                animation: fadeIn 0.3s ease;
            }
            .modal-content {
                position: relative;
                max-width: 90vw;
                max-height: 90vh;
            }
            .modal-content img {
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
            }
            .modal-close {
                position: absolute;
                top: -40px;
                right: 0;
                background: none;
                border: none;
                color: white;
                font-size: 2rem;
                cursor: pointer;
            }
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', modalStyles);
    document.body.appendChild(modal);
}

// Function to close image modal
function closeImageModal() {
    const modal = document.querySelector('.image-modal');
    if (modal) {
        modal.remove();
    }
}

// Social sharing functions
function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.getElementById('place-title').textContent);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title}`, '_blank');
}

function shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.getElementById('place-title').textContent);
    const text = encodeURIComponent(`Check out ${title} - A beautiful place to visit!`);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
}

function shareOnWhatsApp() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.getElementById('place-title').textContent);
    const text = encodeURIComponent(`Check out ${title} - A beautiful place to visit! ${window.location.href}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        // Show success message
        const copyBtn = document.querySelector('.share-btn.copy');
        const originalHTML = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i>';
        copyBtn.style.background = '#28a745';
        
        setTimeout(() => {
            copyBtn.innerHTML = originalHTML;
            copyBtn.style.background = '#6c757d';
        }, 2000);
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = window.location.href;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        alert('Link copied to clipboard!');
    });
}

// Add smooth scrolling for any anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add parallax effect to hero image
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add loading animation to images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    
    img.addEventListener('error', function() {
        this.src = 'https://via.placeholder.com/400x300/667eea/ffffff?text=Image+Not+Available';
    });
});

// Make the page globally accessible for debugging
window.detailPage = {
    loadPlaceDetails,
    getPlaceDetails,
    getUrlParameter,
    placesData
};

