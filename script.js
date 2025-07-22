// District data with map URLs
const districtData = {
    banswara: {
        name: 'Banswara',
        hindiName: 'बांसवाड़ा',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116234.84842806328!2d74.35825!3d23.5411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968d4c0b0b0b0b0%3A0x0!2sBanswara%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1234567890'
    },
    dungarpur: {
        name: 'Dungarpur',
        hindiName: 'डूंगरपुर',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116234.84842806328!2d73.7144!3d23.8441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968d4c0b0b0b0b0%3A0x0!2sDungarpur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1234567890'
    }
};

// Tourist places data for detail pages
const placesData = {
    'anand-sagar-lake': {
        title: 'Anand Sagar Lake',
        hindiTitle: 'आनंद सागर झील',
        description: 'Anand Sagar Lake is a beautiful artificial lake in Banswara, also known as Bai Talab. This picturesque lake is surrounded by lush greenery and dotted with small islands, making it a perfect spot for boating and peaceful moments. The lake offers stunning views, especially during sunset, and is a popular destination for photography enthusiasts.',
        features: ['Boating', 'Photography', 'Sunset Views', 'Peaceful Environment'],
        location: 'Banswara, Rajasthan',
        bestTime: 'October to March',
        timings: '6:00 AM - 7:00 PM',
        entryFee: 'Free'
    },
    'mahi-dam': {
        title: 'Mahi Dam',
        hindiTitle: 'माही बांध',
        description: 'Mahi Bajaj Sagar Dam is one of the largest dams in Rajasthan, built on the Mahi River. This impressive structure not only serves as a major source of irrigation and hydroelectric power but also offers spectacular views and recreational activities. The dam creates a vast reservoir surrounded by hills, making it a popular spot for water sports and nature photography.',
        features: ['Water Sports', 'Photography', 'Scenic Views', 'Picnic Spot'],
        location: 'Banswara, Rajasthan',
        bestTime: 'July to February',
        timings: '24 Hours',
        entryFee: 'Free'
    },
    'tripura-sundari-temple': {
        title: 'Shree Tripura Sundari Temple',
        hindiTitle: 'श्री त्रिपुरा सुंदरी मंदिर',
        description: 'Shree Tripura Sundari Temple is a sacred Hindu temple dedicated to Goddess Tripura Sundari, one of the ten Mahavidyas. The temple is known for its spiritual significance and beautiful architecture. Devotees from far and wide visit this temple to seek blessings. The temple complex features intricate carvings and peaceful surroundings that create a divine atmosphere.',
        features: ['Spiritual Significance', 'Beautiful Architecture', 'Religious Festivals', 'Peaceful Environment'],
        location: 'Banswara, Rajasthan',
        bestTime: 'October to March',
        timings: '5:00 AM - 9:00 PM',
        entryFee: 'Free'
    },
    'kagdi-pickup-weir': {
        title: 'Kagdi Pick Up Weir',
        hindiTitle: 'कागदी पिकअप वियर',
        description: 'Kagdi Pick Up Weir is a popular tourist destination in Banswara, known for its adventure activities and scenic beauty. The weir offers exciting activities like zip-lining and boating, making it a favorite spot for adventure enthusiasts. The surrounding landscape is breathtaking, with hills and water creating a perfect setting for outdoor activities and photography.',
        features: ['Zip-lining', 'Boating', 'Adventure Sports', 'Scenic Beauty'],
        location: 'Banswara, Rajasthan',
        bestTime: 'October to March',
        timings: '9:00 AM - 6:00 PM',
        entryFee: '₹50 per person'
    },
    'madareshwar-temple': {
        title: 'Madareshwar Shiva Temple',
        hindiTitle: 'मदारेश्वर शिव मंदिर',
        description: 'Madareshwar Shiva Temple is an ancient temple dedicated to Lord Shiva, uniquely located inside a natural cave. The temple features natural rock formations and offers a mystical atmosphere for devotees and visitors. The cave temple is known for its spiritual energy and the natural beauty of its surroundings, making it a must-visit destination for those seeking peace and spirituality.',
        features: ['Cave Temple', 'Natural Rock Formations', 'Spiritual Atmosphere', 'Ancient Architecture'],
        location: 'Banswara, Rajasthan',
        bestTime: 'October to March',
        timings: '6:00 AM - 8:00 PM',
        entryFee: 'Free'
    },
    'ram-kund': {
        title: 'Ram Kund',
        hindiTitle: 'राम कुंड',
        description: 'Ram Kund is a sacred water tank with significant religious importance in Hindu mythology. This holy site is believed to have been visited by Lord Rama during his exile. The kund is surrounded by peaceful environment and is a place of worship for devotees. The clear water and serene atmosphere make it an ideal place for meditation and spiritual reflection.',
        features: ['Religious Significance', 'Sacred Water Tank', 'Peaceful Environment', 'Meditation Spot'],
        location: 'Banswara, Rajasthan',
        bestTime: 'October to March',
        timings: '5:00 AM - 8:00 PM',
        entryFee: 'Free'
    },
    'udai-bilas-palace': {
        title: 'Udai Bilas Palace',
        hindiTitle: 'उदै बिलास पैलेस',
        description: 'Udai Bilas Palace is a magnificent heritage palace that showcases the grandeur of Rajput architecture. Named after Maharawal Udai Singh II, this palace has been converted into a heritage hotel while maintaining its royal charm. The palace features beautiful courtyards, intricate carvings, and stunning views of Gaib Sagar Lake, making it a perfect blend of history and luxury.',
        features: ['Heritage Hotel', 'Rajput Architecture', 'Lake Views', 'Royal Experience'],
        location: 'Dungarpur, Rajasthan',
        bestTime: 'October to March',
        timings: '24 Hours (Hotel)',
        entryFee: 'Hotel Rates Apply'
    },
    'juna-mahal': {
        title: 'Juna Mahal',
        hindiTitle: 'जूना महल',
        description: 'Juna Mahal, also known as the Old Palace, is a 13th-century seven-storied architectural marvel. This fortress-like structure is adorned with exquisite miniature paintings, mirror work, and stunning frescoes that depict the rich cultural heritage of the region. The palace offers panoramic views of the surrounding landscape and is a testament to the artistic excellence of medieval Rajasthan.',
        features: ['13th Century Architecture', 'Miniature Paintings', 'Mirror Work', 'Historical Significance'],
        location: 'Dungarpur, Rajasthan',
        bestTime: 'October to March',
        timings: '9:00 AM - 5:00 PM',
        entryFee: '₹100 per person'
    },
    'gaib-sagar-lake': {
        title: 'Gaib Sagar Lake',
        hindiTitle: 'गैब सागर झील',
        description: 'Gaib Sagar Lake is a serene artificial lake that serves as the centerpiece of Dungarpur. The lake is famous for its beautiful palaces and temples built on its banks, creating a picturesque setting that is perfect for photography and peaceful contemplation. The reflection of the historic structures in the calm waters creates a magical atmosphere, especially during sunrise and sunset.',
        features: ['Scenic Beauty', 'Photography', 'Historic Structures', 'Peaceful Environment'],
        location: 'Dungarpur, Rajasthan',
        bestTime: 'October to March',
        timings: '24 Hours',
        entryFee: 'Free'
    },
    'badal-mahal': {
        title: 'Badal Mahal',
        hindiTitle: 'बादल महल',
        description: 'Badal Mahal, meaning "Cloud Palace," is a beautiful palace known for its unique architecture and scenic location by the lake. The palace gets its name from its elevated position that seems to touch the clouds. It offers stunning views of the surrounding landscape and is an excellent example of medieval Rajasthani architecture with its intricate designs and strategic location.',
        features: ['Unique Architecture', 'Scenic Location', 'Lake Views', 'Historical Importance'],
        location: 'Dungarpur, Rajasthan',
        bestTime: 'October to March',
        timings: '9:00 AM - 6:00 PM',
        entryFee: '₹50 per person'
    },
    'deo-somnath-temple': {
        title: 'Deo Somnath Temple',
        hindiTitle: 'देव सोमनाथ मंदिर',
        description: 'Deo Somnath Temple is an ancient temple dedicated to Lord Shiva, beautifully situated on the banks of the Som River. This historic temple is known for its spiritual significance and architectural beauty. The temple complex features intricate stone carvings and provides a peaceful environment for worship and meditation. The riverside location adds to its serene and divine atmosphere.',
        features: ['Ancient Temple', 'Riverside Location', 'Stone Carvings', 'Spiritual Significance'],
        location: 'Dungarpur, Rajasthan',
        bestTime: 'October to March',
        timings: '5:00 AM - 9:00 PM',
        entryFee: 'Free'
    },
    'baneshwar-temple': {
        title: 'Baneshwar Temple',
        hindiTitle: 'बाणेश्वर मंदिर',
        description: 'Baneshwar Temple is a sacred temple complex famous for hosting the renowned Baneshwar Fair, which celebrates the rich tribal culture of the region. The temple is located at the confluence of rivers and holds great religious significance. The annual fair attracts thousands of tribal people who come to celebrate their traditions, making it a unique cultural experience that showcases the vibrant heritage of the area.',
        features: ['Tribal Culture', 'Annual Fair', 'River Confluence', 'Cultural Heritage'],
        location: 'Dungarpur, Rajasthan',
        bestTime: 'February (Fair Time)',
        timings: '5:00 AM - 9:00 PM',
        entryFee: 'Free'
    }
};

// DOM Elements
const districtButtons = document.querySelectorAll('.district-btn');
const mapFrame = document.getElementById('district-map');
const selectedDistrictName = document.getElementById('selected-district-name');
const placesDistrictName = document.getElementById('places-district-name');
const banswaraPlaces = document.getElementById('banswara-places');
const dungarpurPlaces = document.getElementById('dungarpur-places');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Set initial state
    switchDistrict('banswara');
    
    // Add event listeners to district buttons
    districtButtons.forEach(button => {
        button.addEventListener('click', function() {
            const district = this.getAttribute('data-district');
            switchDistrict(district);
        });
    });
    
    // Add smooth scrolling for navigation links
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
    
    // Add loading animation to images
    const images = document.querySelectorAll('.place-image img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            this.src = 'https://via.placeholder.com/400x250/667eea/ffffff?text=Image+Not+Available';
        });
    });
    
    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.place-card').forEach(card => {
        card.style.animationPlayState = 'paused';
        observer.observe(card);
    });
});

// Function to switch between districts
function switchDistrict(district) {
    // Update button states
    districtButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-district') === district) {
            btn.classList.add('active');
        }
    });
    
    // Update map
    const districtInfo = districtData[district];
    if (districtInfo) {
        mapFrame.src = districtInfo.mapUrl;
        selectedDistrictName.textContent = districtInfo.name;
        placesDistrictName.textContent = districtInfo.name;
    }
    
    // Show/hide place grids
    if (district === 'banswara') {
        banswaraPlaces.classList.remove('hidden');
        dungarpurPlaces.classList.add('hidden');
    } else {
        banswaraPlaces.classList.add('hidden');
        dungarpurPlaces.classList.remove('hidden');
    }
    
    // Scroll to places section
    setTimeout(() => {
        document.getElementById('places-section').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }, 300);
}

// Function to open detail page
function openDetailPage(placeId) {
    const placeData = placesData[placeId];
    if (!placeData) {
        alert('Place details not available yet. Coming soon!');
        return;
    }
    
    // Create detail page URL
    const detailUrl = `detail.html?place=${placeId}`;
    
    // Open in new tab
    window.open(detailUrl, '_blank');
}

// Function to create detail page content (will be used in detail.html)
function getPlaceDetails(placeId) {
    return placesData[placeId] || null;
}

// Utility function to get URL parameter
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add parallax effect to header
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('.header');
        if (header) {
            header.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Add hover effect to place cards
    const placeCards = document.querySelectorAll('.place-card');
    placeCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click animation to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
});

// Add loading state for map
function showMapLoading() {
    const mapContainer = document.querySelector('.map-container');
    mapContainer.innerHTML = '<div class="loading-spinner">Loading map...</div>';
}

// Add error handling for map loading
mapFrame.addEventListener('error', function() {
    this.style.display = 'none';
    const mapContainer = document.querySelector('.map-container');
    mapContainer.innerHTML = '<div class="map-error">Map could not be loaded. Please check your internet connection.</div>';
});

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getPlaceDetails,
        getUrlParameter,
        placesData
    };
}

