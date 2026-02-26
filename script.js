document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("videoModal");
    const closeBtn = document.getElementById("closeModal");
    const loomVideo = document.getElementById("loomVideo");
    const playVideoTab = document.getElementById("playVideoTab");

    playVideoTab.addEventListener("click", function () {
        modal.style.display = "flex";
        loomVideo.src = "https://www.loom.com/embed/6d676da1428647b18d2b6767e796496c?autoplay=1";
    });

    function closeModal() {
        modal.style.display = "none";
        loomVideo.src = "";
    }

    closeBtn.addEventListener("click", closeModal);

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});



