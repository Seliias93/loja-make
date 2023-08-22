function changeImage(newImage) {
    const mainImage = document.querySelector('.main-image');
    mainImage.src = newImage;
}

function toggleContent() {
    var content = document.getElementById("hidden-content");
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  }