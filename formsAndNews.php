<?php

if($_SERVER['REQUEST_METHOD'] == 'POST') {
  // -------------------  book a visit form
  // isset($_POST['submitBookVisit']) - refere-se a qual botao de submit foi clicado
  if(isset($_POST['submitBookVisit'])){ 
    $bookFormData = 'bookForm_data.txt'; //data do book a visit neste ficheiro 

    //comeca com $ - variavel dde php 
    //$_POST[x] - a variavel corresponda a x (name do form)
    $number_of_people = $_POST['people']; 
    $age = $_POST['age'];
    $email = $_POST['email'];

    // aplicar a funcao
    fileOutputBookForm( $bookFormData, $number_of_people, $age, $email);

    //redireciona para a pagina do formulario/inicial
    header('Location: tickets.html');
  }

  // -------------------  Leave your questions form
  if(isset($_POST['submitQuestions'])){
    $questionsFormData = 'questionsForm_data.txt'; //data do leave your question neste ficheiro 

    $name = $_POST['name']; 
    $email = $_POST['email'];
    $question = $_POST['yourQuestion'];

    fileOutputQuestionsForm( $questionsFormData, $name, $email, $question);

    header('Location: about_us.html');
  }


  // -------------------  subscribe to our newsletter form
  if(isset($_POST['submitNewsletter'])){
    $newsFormData = 'newsletter_data.txt'; //data da inscricao de newsletter neste ficheiro 

    $email = $_POST['email'];

    fileOutputNewsForm( $newsFormData, $email);

    header('Location: about_us.html');
  }
}


// ------------------------ book a visit
function fileOutputBookForm($bookFormData, $number_of_people, $age, $email) {
  // o que vai ser escrito; 1 coisa em cada linha (\n - quebra de linha) 
  $file_to_write = $number_of_people . "\n". $age . "\n". $email . "\n";

  // file_put_contents() - funcao que escreve no ficheiro
  // se o ficheiro nao existir, cria um. Caso exista e nao tenha File_append, é substituido
  // onde vai ser escrito, o que vai ser escrito, verifica se existe ou nao
  file_put_contents($bookFormData, $file_to_write, FILE_APPEND);
}

// ------------------------ questions
function fileOutputQuestionsForm( $questionsFormData, $name, $email, $question) {
  // o que vai ser escrito; 1 coisa em cada linha (\n - quebra de linha) 
  $file_to_write = $name . "\n". $email . "\n". $question . "\n";

  file_put_contents($questionsFormData, $file_to_write, FILE_APPEND);
}

// ------------------------ newsletter
function fileOutputNewsForm( $newsFormData, $email) {
  file_put_contents($newsFormData, $email, FILE_APPEND);
}

?>