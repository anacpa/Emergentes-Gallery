/*---- JSON e APIs  ----- */

//api com 20 imagens e respetivos dados 
fetch('https://api.artic.edu/api/v1/artworks?limit=20&fields=title,image_id,description') .then(function(data){
  return data.json();
})
   // invoca uma função para converter o obj em HTML (json)
//depois de devolver o doc convertido, podemos aceder a cada elemento
  .then(function(obj) {
    console.log(obj);

  
    //atenção às sub divisões (pais e filhos)


  for (var i=0; i<obj.data.length; i++){
    var artwork = obj.data[i]; 
    //console.log(artwork);
    var title = artwork.title;
   // console.log(title); 
    var artwork_id = artwork.image_id;
 

     if (artwork_id) {//VERIFICAR SE O ID É NULL, SÓ VAI BUSCAR A IMAGEM E SÓ CRIA ELEMENTO SE O ARTWORK TIVER IMAGEM
      // console.log(artwork_id);
       
      //FAZER O PEDIDO PARA TER A IMAGEM
      let endpoint ="https://www.artic.edu/iiif/2/"+artwork_id+"/full/843,/0/default.jpg";
      fetch(endpoint).then(function(data2) {
        return data2;
      }).then(function(img) {


        //FUNÇÃO QUE PEGA NO URL DA IMAGEM E NO TILULO E CRIA UMA DIV COM TUDO
        let div_artwork = createArtworkHTML(img.url, title);
console.log(div_artwork);
        //adicionar ao html a função (uma div criada)
        document.querySelector('#scrollContainer').appendChild(div_artwork);

      });
    } else {
       console.log("NULL");
    }
  }
    
});




//função que cria a div e recebe valores de img e h3
function createArtworkHTML(img_url,title){
  
var art_html = document.createElement('div');


   //criar a imagem
let art_img = document.createElement('img');
art_img.src = img_url;

//art_img.classList.add('individual_img');
   art_img.style.height = "350px";
   art_img.style.padding = "0 7px";

  //adicionar ao "pai" (div)o filho  
art_html.appendChild(art_img);

  
  //criar o título
  let art_title = document.createElement('h3');
  art_title.innerText = title;
  
  art_title.style.padding= "5px";
    
   //adicionar ao "pai" (div)o filho  
  art_html.appendChild(art_title);

  
return art_html;
}

  