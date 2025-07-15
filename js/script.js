// ---------------  calendario e escolher data (tickets)

// todos os numeros
let numeros = document.querySelectorAll('.calendar-day ul li');

numeros.forEach(function (numeroSelecionadoEvento) {
    numeroSelecionadoEvento.addEventListener('click', function () {
        // vai buscar o numero que foi clicado
        let numeroClick = numeroSelecionadoEvento.querySelector('time').innerHTML;

        // Remove a classe dos numeros clicados anteriormente - nao ficam 2 selecionados ao mesmo tempo
        numeros.forEach(function (item) {
            item.classList.remove('selecionada');
        });
        // depois do remove se nao e criado e removido logo de seguida
        // adicionada a classe selecionada quando clicam num numero
        numeroSelecionadoEvento.classList.add('selecionada');

        //atualiza o h4 sempre que se clicar em algum numero
        document.getElementById('data').innerHTML = 'selected date: ' + numeroClick + ' of december';
    });
});



// --------------- idades no formulario (tickets)
console.log(document.getElementById('numDePessoas')); 
document.getElementById('numDePessoas').addEventListener('input', function(nPeople) {
  
  //vai buscar o numero de pessoas que foi digitado no input de number of people
  if(nPeople.target.name === "people"){
    console.log(nPeople);
    ageInput(nPeople.target.value);
  }
});


function ageInput(contagemPessoas) {
  let inputContentor = document.getElementById('inputContentor');
  
  inputContentor.innerHTML = "<label style='font-size:18px; margin-right:50%;  margin-bottom:50%;' >Age: </label>"; 
  //inputContentor.innerHTML = "<label>Age: </label>";
  
  //vai limitar o numero de inputs criadors ja que o maximo e 6
  //Math.min - retorna o numero mais pequeno, se idadeMax dor 7, retorna 6
let idadeMax = Math.min(contagemPessoas, 6);
  
  for (let i = 0; i < idadeMax; i++){
    //criar inputs
    let box = document.createElement('input');
    //propriedades do input
    box.type = "date";
    box.name = "age";
    //box.required = true; //obrigatorio preencher todas as box que aparecerem
    inputContentor.appendChild(box);

    //inputContentor.classList.add('');
    box.style.border = "1px solid #C1B9B1";
    box.style.width= "48%";
    box.style.paddingTop = "20px";
    box.style.paddingBottom = "20px";
    box.style.marginBottom = "5px"; 
  }
}



// --------------- botao submit com frases (tickets)

document.getElementById('clickSubmit').addEventListener('click', function () {
    // verifica se todos os espacos foram preenchidos
    let people = document.getElementById('people').value;
    let email = document.getElementById('email').value;

  //fora do if para poderem ser usados tanto no if como no else
    let informacao = document.getElementById('info-submit'); //div
    let frase = document.getElementById('frase'); //frase em si; <p>

    if (people && email) {

        console.log(people + email);
        // ternary operator, se...? então... : else... ;   // simplificacao de if else statement
        informacao.style.display = (informacao.style.display === 'none') ? 'block' : 'none';

        // caso preencham o formulario todo, aparece esta frase
        /*frase.innerHTML = 'Verify if you receive the link to pay the tickets in your email!';*/
      // o alert faz uma box aparecer com a frase 
      alert('Verify if you receive the link to pay the ticket/s in your email!');
        console.log("frase");
    } else {
        informacao.style.display = (informacao.style.display === 'none') ? 'block' : 'none';
        // caso não preencham os dados necessarios, aparece esta
        frase.innerHTML = 'To book your visit, please fill out the number of people and email. If you do not want to share your age, you will be charged with the general ticket.';
        console.log("faltam dados");
    }
});



//-------------------Transição de imagens (about us)

//opção não final
/*
startImageTransition();

function startImageTransition() {
    var images = document.getElementsByClassName("test");
    var cur = images.length - 1;

    setInterval(changeImage, 3000);

    async function changeImage() {                          //------ promessa
        var nextImage = (1 + cur) % images.length;

         transition();

        images[cur].style.opacity = 0;

        cur = nextImage;

        images[cur].style.opacity = 1;
    }

    function transition() {
        return new Promise(function (resolve) {
            var del = 0.01;
            var id = setInterval(changeOpacity, 10);

            function changeOpacity() {
                images[cur].style.opacity -= del;
                if (images[cur].style.opacity <= 0) {
                    clearInterval(id);
                    resolve();
                }
            }
        });
    }
}*/


document.addEventListener("DOMContentLoaded", function () {
  // Get the container and images
  const salaExposicoes = document.querySelector(".SalaExposicoes");
  console.log(salaExposicoes); 
  const images = salaExposicoes.querySelectorAll("img");

  // Set initial index and call the transition function
  let currentIndex = 0;
  //transitionImages();

  setInterval(transitionImages, 3000); // Change image every 3 seconds

  // Function to handle image transition
  function transitionImages() {
    // Hide all images
    images.forEach((img) => {
      img.style.opacity = 0;
    });

    // Show the selected image
    images[currentIndex].style.opacity = 1;

    // Remove the "selected" class from the current image
    //images[currentIndex].classList.remove("selected");

    // Move to the next image
    if (currentIndex === images.length - 1) {
      currentIndex = 0;
    }
    else{
    currentIndex ++;
    }
    // Add the "selected" class to the new image
   // images[currentIndex].classList.add("selected");

    // Call the function recursively after 2 seconds
   // setTimeout(transitionImages, 4000);
  }
});