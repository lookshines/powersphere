(function() {
	"use strict";

    // Preloader JS
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        preloader.style.display = 'none';
    });

    // Check if elements with the class "search-toggler" exist
    const searchTogglers = document.querySelectorAll(".search-toggler");
    if (searchTogglers.length > 0) {
        searchTogglers.forEach((searchToggler) => {
            searchToggler.addEventListener("click", function (e) {
            e.preventDefault();
            
                const searchPopup = document.querySelector(".search-popup");
                if (searchPopup) {
                    searchPopup.classList.toggle("active");
                }

                const mobileNavWrapper = document.querySelector(".mobile-nav-wrapper");
                if (mobileNavWrapper) {
                    mobileNavWrapper.classList.remove("expanded");
                }
            });
        });
    }

    window.onload = function() {

        // Scroll Event go Top JS
        try {
            window.addEventListener('scroll', function() {
                var scrolled = window.scrollY;
                var goTopButton = document.querySelector('.go-top');
    
                if (scrolled > 600) {
                    goTopButton.classList.add('active');
                } else {
                    goTopButton.classList.remove('active');
                }
            });
            var goTopButton = document.querySelector('.go-top');
            goTopButton.addEventListener('click', function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        } catch (err) {}

        // Counter Js
        try {
            if ("IntersectionObserver" in window) {
                let counterObserver = new IntersectionObserver(function (entries, observer) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                        let counter = entry.target;
                        let target = parseInt(counter.innerText);
                        let step = target / 200;
                        let current = 0;
                        let timer = setInterval(function () {
                            current += step;
                            counter.innerText = Math.floor(current);
                            if (parseInt(counter.innerText) >= target) {
                            clearInterval(timer);
                            }
                        }, 10);
                        counterObserver.unobserve(counter);
                        }
                    });
                });

                let counters = document.querySelectorAll(".counter");
                    counters.forEach(function (counter) {
                    counterObserver.observe(counter);
                });
            }
        } catch (err) {}

    };

    // Partner Slider JS
    var swiper = new Swiper(".partner_slider", {
        slidesPerView: 1,
        spaceBetween: 100,
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
            576: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 70,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 100,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 100,
            },
            1400: {
                slidesPerView: 5
            }
        }
    });

    // Services Slider JS
    var swiper = new Swiper(".services_slider", {
        slidesPerView: 1,
        spaceBetween: 15,
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        pagination: {
            el: ".services-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            }
        }
    });

    // Services Slider JS 2
    var swiper = new Swiper(".services_two", {
        slidesPerView: 1,
        spaceBetween: 25,
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        pagination: {
            el: ".modern-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            }
        }
    });

    // Testimonials Slider JS
    var swiper = new Swiper(".testimonials_slider", {
        slidesPerView: 1,
        spaceBetween: 25,
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        pagination: {
            el: ".testimonials-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 2
            }
        }
    });

    // Reviews Slider JS
    var swiper = new Swiper(".reviews_slider", {
        slidesPerView: 1,
        spaceBetween: 25,
        loop: true,
        speed: 3000,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            }
        }
    });

    // Certification Slider JS
    var swiper = new Swiper(".certification_slider", {
        slidesPerView: 1,
        spaceBetween: 40,
        loop: true,
        speed: 2000,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 2
            },
            576: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 4
            }
        }
    });

    // Blog Slider JS
    var swiper = new Swiper(".blog_slider", {
        slidesPerView: 1,
        spaceBetween: 25,
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        pagination: {
            el: ".blog-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 2
            }
        }
    });

    // Banner Slider JS
    var swiper = new Swiper(".banner_slider", {
        slidesPerView: 1,
        spaceBetween: 25,
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // Hero Slider JS
    var swiper = new Swiper(".hero_slider", {
        slidesPerView: 1,
        spaceBetween: 25,
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // Facilities Slider JS
    var swiper = new Swiper(".facilities_slide", {
        slidesPerView: 1,
        spaceBetween: 15,
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        pagination: {
            el: ".facilities-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            }
        }
    });

    // Oil Facilities Slider JS
    var swiper = new Swiper(".oil_facilities", {
        slidesPerView: 1,
        spaceBetween: 25,
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        pagination: {
            el: ".oil-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 2
            }
        }
    });

    // Team Slider JS
    var swiper = new Swiper(".team_slide", {
        slidesPerView: 1,
        spaceBetween: 25,
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        pagination: {
            el: ".team-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            }
        }
    });

    // Click Events JS
    try {
        window.addEventListener('DOMContentLoaded', () => {

            const slides = document.querySelectorAll('.slide');

            for (let slide of slides) {
                console.log(slides);
                slide.addEventListener('click', () => {
                clearActiveClasses();
                slide.classList.add('active');
                });
            }

            function clearActiveClasses() { 
                slides.forEach((slide) => {
                slide.classList.remove('active');
                });
            }
        });
    } catch (err) {}

    // Hover JS
    try {
        var elements = document.querySelectorAll("[id^='my-element']");
            elements.forEach(function(element) {
            element.addEventListener("mouseover", function() {
                elements.forEach(function(el) {
                el.classList.remove("active");
                });
                element.classList.add("active");
            });
        });
    } catch (err) {}

    // Newsletter JS
    try {
        document.getElementById('newsletterForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting the traditional way
        
            const emailInput = document.getElementById('emailInput');
            const responseMessage = document.getElementById('responseMessage');
            const email = emailInput.value.trim();
        
            // Simple email validation
            if (!email || !validateEmail(email)) {
                responseMessage.textContent = 'Please enter a valid email address.';
                responseMessage.style.color = 'red';
                return;
            }
        
            // Simulate an API call (replace with actual fetch/axios call)
            setTimeout(() => {
                // Assume the subscription is successful
                responseMessage.textContent = 'Thank you for subscribing!';
                responseMessage.style.color = 'green';
                emailInput.value = ''; // Clear the input field
            }, 1000);
        });
        
        // Helper function to validate email format
        function validateEmail(email) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        }
    } catch (err) {}

    // Forgot Password JS
    try {
        document.getElementById('forgotPasswordForm').addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the form from submitting normally
        
            // Get the email input value
            const email = document.getElementById('email').value;
        
            // Validate the email
            if (!validateEmail(email)) {
                showError('Please enter a valid email address.');
                return;
            }
        
            // Simulate sending a request to the server
            resetPassword(email)
                .then(response => {
                    showSuccess('Password reset instructions have been sent to your email.');
                })
                .catch(error => {
                    showError('Failed to send reset instructions. Please try again later.');
                });
        });

        // Function to validate email
        function validateEmail(email) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        }

        // Function to show error message
        function showError(message) {
            const errorMessage = document.getElementById('error-message');
            errorMessage.textContent = message;
            errorMessage.style.display = 'block';
            document.getElementById('success-message').style.display = 'none';
        }

        // Function to show success message
        function showSuccess(message) {
            const successMessage = document.getElementById('success-message');
            successMessage.textContent = message;
            successMessage.style.display = 'block';
            document.getElementById('error-message').style.display = 'none';
        }

        // Simulate an API call to reset password
        // Simulate a network request delay
        function resetPassword(email) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (email) {
                        resolve({ success: true });
                    } else {
                        reject(new Error('Invalid email'));
                    }
                }, 1000);
            });
        }
    } catch (err) {}

    // scrollCue
    scrollCue.init();

})();

// Filter JS
try {
    document.addEventListener("DOMContentLoaded", function () {
        const priceRange = document.getElementById("priceRange");
        const minPrice = document.getElementById("minPrice");
        const maxPrice = document.getElementById("maxPrice");
        const filterBtn = document.getElementById("filterBtn");
    
        console.log(priceRange, minPrice, maxPrice, filterBtn); // Debugging
    
        if (!priceRange || !minPrice || !maxPrice || !filterBtn) {
            console.error("One or more elements not found.");
            return;
        }
    
        priceRange.addEventListener("input", function () {
            minPrice.textContent = this.value;
        });
    
        filterBtn.addEventListener("click", function () {
            alert(`Filtering items from $${minPrice.textContent} to $${maxPrice.textContent}`);
        });
    });         
} catch (err) {}

// Quantities JS
try {
    document.addEventListener('DOMContentLoaded', function() {
        const quantityInput = document.getElementById('quantity');
        const decrementButton = document.querySelector('.decrement');
        const incrementButton = document.querySelector('.increment');

        decrementButton.addEventListener('click', function() {
            let currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });

        incrementButton.addEventListener('click', function() {
            let currentValue = parseInt(quantityInput.value);
            quantityInput.value = currentValue + 1;
        });
    });
} catch (err) {}

// For Mobile Navbar JS
const list = document.querySelectorAll('.mobile-menu-list');
function accordion(e) {
    e.stopPropagation(); 
    if(this.classList.contains('active')){
        this.classList.remove('active');
    }
    else if(this.parentElement.parentElement.classList.contains('active')){
        this.classList.add('active');
    }
    else {
        for(i=0; i < list.length; i++){
            list[i].classList.remove('active');
        }
        this.classList.add('active');
    }
}
for(i = 0; i < list.length; i++ ){
    list[i].addEventListener('click', accordion);
}

// Header Sticky
const getHeaderId = document.getElementById("navbar");
if (getHeaderId) {
    window.addEventListener('scroll', event => {
        const height = 150;
        const { scrollTop } = event.target.scrollingElement;
        document.querySelector('#navbar').classList.toggle('sticky', scrollTop >= height);
    });
}