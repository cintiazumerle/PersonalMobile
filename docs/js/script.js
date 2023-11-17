// Área do Aluno 
function showA() {
    document.getElementById("a-container").style.display = "block";
    document.getElementById("b-container").style.display = "none";

    hideButtons();
}

function showD() {
    document.getElementById("a-container").style.display = "none";
    document.getElementById("b-container").style.display = "none";
    document.getElementById("desempenho").style.display = "block";
    hideButtons();
}

function showB() {
    document.getElementById("a-container").style.display = "none";
    document.getElementById("b-container").style.display = "block";
    hideButtons();
}

function hideButtons() {
    document.querySelector('.card-container').style.display = 'none';
}

function showButtons() {
    document.querySelector('.card-container').style.display = 'block';
}

function backToButtons() {
    document.getElementById("a-container").style.display = "none";
    document.getElementById("b-container").style.display = "none";
    document.getElementById("desempenho").style.display = "none";

    showButtons();
}


//Área do Professor
function ShowA() {
  document.getElementById("a-container").style.display = "block";
  document.getElementById("b-container").style.display = "none";
  hideButtons();
}

function ShowB() {
  document.getElementById("a-container").style.display = "none";
  document.getElementById("b-container").style.display = "block";
  hideButtons();
}

function hideButtons() {
  document.querySelector('.card-container').style.display = 'none';
}

function showButtons() {
  document.querySelector('.card-container').style.display = 'block';
}

function BackToButtons() {
  document.getElementById("a-container").style.display = "none";
  document.getElementById("b-container").style.display = "none";
  showButtons();
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////