document.addEventListener("DOMContentLoaded", () => {
    const photos = document.querySelectorAll(".photo");
    photos.forEach((photo) => {
      photo.addEventListener("click", () => {
        alert("Você clicou em um animal! Personalize esta funcionalidade.");
      });
    });
  });
