//-------------------Transição de imagens (about us)


  // Get the container and images
  const salaExposicoes = document.querySelector(".SalaExposicoes");
  console.log(salaExposicoes); 
  const images = salaExposicoes.querySelectorAll("img");

  // Set initial index 
  let currentIndex = 0;
 
  setInterval(transitionImages, 2000); // Change image every 3 seconds

  // função de transição
  function transitionImages() {
    
    // Hide all images
    images.forEach((img) => {
      img.style.opacity = 0;
    });

    // Show the selected image
    images[currentIndex].style.opacity = 1;

    //mudar imagem + limite
    if (currentIndex === images.length - 1) {
      currentIndex = 0;
    }
    else{
    currentIndex ++;
    }

  }
