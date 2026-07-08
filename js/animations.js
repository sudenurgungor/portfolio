// GSAP plugins
if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    // Hero
    gsap.from("#heroTitle", {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from("#heroSubtitle", {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.2,
        ease: "power3.out"
    });

    gsap.from("#heroDesc", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.4,
        ease: "power3.out"
    });

    gsap.from("#heroCta", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.6,
        ease: "power3.out"
    });

    gsap.from("#heroImage", {
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out"
    });

    // Fade-up elemanları
    gsap.utils.toArray(".fade-up").forEach((element) => {
        gsap.from(element, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none none"
            }
        });
    });
}