document.addEventListener("DOMContentLoaded", () => {

    console.log("Portfolio initialized.");

    // Sayfa en üstten açılsın
    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

    // Sayfa tamamen yüklendikten sonra görünür hale getir
    document.body.classList.add("is-loaded");
});