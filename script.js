/**
 * Visionary Gallery - Cinematic Interactions
 * Premium Polished Front-end Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- Preloader System ---
    const preloader = document.getElementById('preloader');
    const progressBar = document.getElementById('progress');
    
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 12; // Smoother progress
        if (progress > 100) progress = 100;
        progressBar.style.width = `${progress}%`;
        
        if (progress === 100) {
            clearInterval(progressInterval);
            setTimeout(() => {
                preloader.style.opacity = '0';
                preloader.style.visibility = 'hidden';
                setTimeout(initAnimations, 200); // Wait for fade out
            }, 600);
        }
    }, 80);

    // --- Premium Unsplash Dataset ---
    const galleryData = [
        // Nature
        { id: 1, category: 'nature', title: 'Ethereal Peaks', source: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85' },
        { id: 2, category: 'nature', title: 'Crimson Canopy', source: 'https://images.unsplash.com/photo-1440688807730-73e4e2169fb8?auto=format&fit=crop&w=1200&q=85' },
        { id: 3, category: 'nature', title: 'Tidal Force', source: 'https://images.unsplash.com/photo-1498623116890-37e912163d5d?auto=format&fit=crop&w=1200&q=85' },
        { id: 4, category: 'nature', title: 'Morning Mist', source: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=85' },
        { id: 5, category: 'nature', title: 'Alpine Serenity', source: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1200&q=85' },
        
        // City
        { id: 6, category: 'city', title: 'Cyberpunk District', source: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=85' },
        { id: 7, category: 'city', title: 'Metropolis Core', source: 'https://images.unsplash.com/photo-1477959858617-6c9c22cb7c20?auto=format&fit=crop&w=1200&q=85' },
        { id: 8, category: 'city', title: 'Neon Reflections', source: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1200&q=85' },
        { id: 9, category: 'city', title: 'Urban Heights', source: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=85' },
        { id: 10, category: 'city', title: 'Concrete Jungle', source: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=85' },

        // Animals
        { id: 11, category: 'animals', title: 'Apex Predator', source: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=85' },
        { id: 12, category: 'animals', title: 'Arctic Phantom', source: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1200&q=85' },
        { id: 13, category: 'animals', title: 'Wild Elegance', source: 'https://images.unsplash.com/photo-1543946207-39fdc0406592?auto=format&fit=crop&w=1200&q=85' },
        { id: 14, category: 'animals', title: 'Forest Guardian', source: 'https://images.unsplash.com/photo-1555169062-013468b47731?auto=format&fit=crop&w=1200&q=85' },
        { id: 15, category: 'animals', title: 'Oceanic Grace', source: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=1200&q=85' },

        // Technology
        { id: 16, category: 'technology', title: 'Quantum Core', source: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85' },
        { id: 17, category: 'technology', title: 'Data Stream', source: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=85' },
        { id: 18, category: 'technology', title: 'Workspace Setup', source: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=85' },
        { id: 19, category: 'technology', title: 'Matrix Code', source: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=85' },
        { id: 20, category: 'technology', title: 'Neural Network', source: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85' },

        // Travel
        { id: 21, category: 'travel', title: 'Nomad Horizon', source: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=85' },
        { id: 22, category: 'travel', title: 'Azure Coast', source: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=85' },
        { id: 23, category: 'travel', title: 'Mountain Pass', source: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=85' },
        { id: 24, category: 'travel', title: 'Desert Expedition', source: 'https://images.unsplash.com/photo-1504150558240-0b4fd8946624?auto=format&fit=crop&w=1200&q=85' },
        { id: 25, category: 'travel', title: 'Cultural Journey', source: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=85' }
    ];

    // --- DOM Elements ---
    const galleryGrid = document.getElementById('galleryGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const header = document.getElementById('header');
    const backToTopBtn = document.getElementById('backToTop');
    
    // Lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxCategory = document.getElementById('lightboxCategory');
    const lightboxCounter = document.getElementById('lightboxCounter');
    
    let currentImages = [];
    let currentIndex = 0;
    let isLightboxOpen = false;

    // --- Core Initialization ---
    function initAnimations() {
        createParticles();
        initMagneticButtons();
        renderGallery('all');
        setupIntersectionObserver();
        initStatsCounters();
    }

    // --- Intersection Observer for High-Performance Reveals ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: stop observing once revealed for better performance
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    function setupIntersectionObserver() {
        document.querySelectorAll('.reveal-element').forEach(el => {
            revealObserver.observe(el);
        });
    }

    // --- Particle System ---
    function createParticles() {
        const container = document.getElementById('particles');
        const particleCount = window.innerWidth > 768 ? 25 : 10;
        
        for(let i=0; i<particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            const size = Math.random() * 3 + 1.5;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `${Math.random() * 100}vh`;
            particle.style.animationDuration = `${Math.random() * 25 + 15}s`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            
            container.appendChild(particle);
        }
    }

    // --- Magnetic Buttons (Smooth Interpolation) ---
    function initMagneticButtons() {
        const magneticBtns = document.querySelectorAll('.magnetic-btn');
        
        magneticBtns.forEach(btn => {
            btn.addEventListener('mousemove', function(e) {
                const position = btn.getBoundingClientRect();
                const x = e.clientX - position.left - position.width / 2;
                const y = e.clientY - position.top - position.height / 2;
                
                // Use requestAnimationFrame for smoother rendering
                requestAnimationFrame(() => {
                    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
                });
            });
            
            btn.addEventListener('mouseleave', function() {
                requestAnimationFrame(() => {
                    btn.style.transform = `translate(0px, 0px)`;
                });
            });
        });
    }

    // --- 3D Card Tilt Effect ---
    function initTiltEffect() {
        const cards = document.querySelectorAll('.gallery-item');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', e => {
                if (window.innerWidth < 1024) return; // Disable on tablet/mobile
                
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const tiltX = ((y - centerY) / centerY) * -8; // Subtler max rotation
                const tiltY = ((x - centerX) / centerX) * 8;
                
                requestAnimationFrame(() => {
                    card.style.transform = `perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
                });
            });
            
            card.addEventListener('mouseleave', () => {
                requestAnimationFrame(() => {
                    card.style.transform = ''; // Let CSS handle the return transition
                });
            });
        });
    }

    // --- Gallery Rendering ---
    function renderGallery(filter) {
        galleryGrid.innerHTML = '';
        currentImages = filter === 'all' ? galleryData : galleryData.filter(item => item.category === filter);

        currentImages.forEach((item, index) => {
            const el = document.createElement('div');
            el.className = 'gallery-item reveal-element';
            
            // Subtle stagger delay
            el.style.transitionDelay = `${(index % 6) * 0.08}s`;
            
            // Random aspect ratio for masonry feel
            const randomHeight = Math.floor(Math.random() * (480 - 320 + 1) + 320);
            
            el.innerHTML = `
                <img src="${item.source}" alt="${item.title}" loading="lazy" style="min-height: ${randomHeight}px">
                <div class="item-overlay">
                    <div class="item-info">
                        <div class="item-category">${item.category}</div>
                        <div class="item-title">${item.title}</div>
                    </div>
                </div>
            `;
            
            const img = el.querySelector('img');
            img.onload = () => {
                el.classList.add('loaded');
            };

            el.addEventListener('click', () => openLightbox(index));
            galleryGrid.appendChild(el);
            
            // Observe new elements
            revealObserver.observe(el);
        });

        initTiltEffect();
    }

    // --- Filtering Logic ---
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Smooth fade out
            galleryGrid.style.opacity = '0';
            galleryGrid.style.transform = 'translateY(15px)';
            galleryGrid.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            
            setTimeout(() => {
                renderGallery(btn.dataset.filter);
                // Trigger reflow
                void galleryGrid.offsetWidth;
                galleryGrid.style.opacity = '1';
                galleryGrid.style.transform = 'translateY(0)';
            }, 400);
        });
    });

    // --- Lightbox System ---
    function openLightbox(index) {
        currentIndex = index;
        isLightboxOpen = true;
        updateLightboxContent();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        isLightboxOpen = false;
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        
        // Reset state for next open
        setTimeout(() => {
            lightboxImg.style.transform = 'scale(0.95) translateY(10px)';
            lightboxImg.style.opacity = '0';
        }, 500);
    }

    function updateLightboxContent() {
        const item = currentImages[currentIndex];
        
        // Smooth transition out
        lightboxImg.style.opacity = '0';
        lightboxImg.style.transform = 'scale(0.97)';
        
        setTimeout(() => {
            lightboxImg.src = item.source;
            lightboxTitle.textContent = item.title;
            lightboxCategory.textContent = item.category;
            
            const currNum = (currentIndex + 1).toString().padStart(2, '0');
            const totalNum = currentImages.length.toString().padStart(2, '0');
            lightboxCounter.textContent = `${currNum} / ${totalNum}`;
            
            lightboxImg.onload = () => {
                lightboxImg.style.opacity = '1';
                lightboxImg.style.transform = 'scale(1)';
            };
        }, 250);
    }

    document.getElementById('nextImage').addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % currentImages.length;
        updateLightboxContent();
    });

    document.getElementById('prevImage').addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        updateLightboxContent();
    });

    document.getElementById('closeLightbox').addEventListener('click', closeLightbox);
    
    // Close on background click
    lightbox.querySelector('.lightbox-bg').addEventListener('click', closeLightbox);
    
    // Close on content click outside image
    lightbox.querySelector('.lightbox-content').addEventListener('click', (e) => {
        if(e.target === e.currentTarget) closeLightbox();
    });

    // Keyboard controls
    document.addEventListener('keydown', e => {
        if (!isLightboxOpen) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') document.getElementById('nextImage').click();
        if (e.key === 'ArrowLeft') document.getElementById('prevImage').click();
    });

    // --- Statistics Counters (Intersection Observer) ---
    function initStatsCounters() {
        const counters = document.querySelectorAll('.counter');
        const speed = 200;
        
        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = +counter.getAttribute('data-target');
                    
                    const animate = () => {
                        const count = +counter.innerText;
                        const inc = target / speed;
                        
                        if (count < target) {
                            counter.innerText = Math.ceil(count + inc);
                            setTimeout(animate, 20);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    
                    if(counter.innerText === '0') animate();
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => counterObserver.observe(counter));
    }

    // --- ScrollSpy & Header ---
    const sections = document.querySelectorAll('section, main');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateNavActive() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (current && link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    }

    // Efficient Scroll Listener using RequestAnimationFrame
    let scrollTicking = false;
    window.addEventListener('scroll', () => {
        if (!scrollTicking) {
            window.requestAnimationFrame(() => {
                // Sticky Header logic
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                    backToTopBtn.classList.add('visible');
                } else {
                    header.classList.remove('scrolled');
                    backToTopBtn.classList.remove('visible');
                }
                
                updateNavActive();
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    });

    // Back to top click
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Mobile Menu
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinksContainer = document.querySelector('.nav-links');
    
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
            const icon = mobileBtn.querySelector('i');
            if (navLinksContainer.classList.contains('active')) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });
        
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinksContainer.classList.remove('active');
                mobileBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
            });
        });
    }
});
