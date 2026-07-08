const cursorDot = document.getElementById("cursorDot");
const cursorOutline = document.getElementById("cursorOutline");

if (cursorDot && cursorOutline) {
    let mouseX = 0;
    let mouseY = 0;

    let outlineX = 0;
    let outlineY = 0;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    function animateCursor() {
        outlineX += (mouseX - outlineX) * 0.35;
        outlineY += (mouseY - outlineY) * 0.35;

        cursorOutline.style.transform = `translate(${outlineX - 20}px, ${outlineY - 20}px)`;

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    document.querySelectorAll(".hover-target").forEach((item) => {
        item.addEventListener("mouseenter", () => {
            cursorOutline.classList.add("hover");
        });

        item.addEventListener("mouseleave", () => {
            cursorOutline.classList.remove("hover");
        });
    });

    document.addEventListener("mouseleave", () => {
        cursorDot.style.opacity = "0";
        cursorOutline.style.opacity = "0";
    });

    document.addEventListener("mouseenter", () => {
        cursorDot.style.opacity = "1";
        cursorOutline.style.opacity = "1";
    });
}