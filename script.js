document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("videoModal");
    const closeBtn = document.getElementById("closeModal");
    const loomVideo = document.getElementById("loomVideo");
    const playVideoTab = document.getElementById("playVideoTab");

    // Open Modal when the Play Video Tab is clicked
    playVideoTab.addEventListener("click", function () {
        modal.style.display = "flex";

        // Set Loom embed link with autoplay
        loomVideo.src = "https://www.loom.com/embed/6d676da1428647b18d2b6767e796496c?autoplay=1";
    });

    // Close Modal
    function closeModal() {
        modal.style.display = "none";
        loomVideo.src = "";  // Stop video when closing
    }

    closeBtn.addEventListener("click", closeModal);

    // Close when clicking outside modal
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

});
