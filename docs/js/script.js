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

let data = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
  datasets: [{
      label: 'Flexões',
      data: [3, 2, 3, 5, 6],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
  }, {
      label: 'Agachamentos',
      data: [4, 5, 6, 2, 1],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
  }]
};

let options = {
  maintainAspectRatio: true,
  scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true
          }
      }]
  }

};

let ctx = document.getElementById('myChart');
let chart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options
});

