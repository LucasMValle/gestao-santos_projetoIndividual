

const ctx = document.getElementById('bar-chart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'], // Apenas o array aqui
    datasets: [{
      label: 'Cofres do Santos FC',
      data: [100000, 115000, 100000, 120000, 123000, 130000],
      backgroundColor: 'rgba(132, 255, 66, 0.5)', // Cor de fundo (com transparência)
      borderColor: 'rgb(43, 255, 0)',      // Cor da borda (sólida)
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#ffffff', // A cor da legenda fica aqui
          font: {
            size: 18,
            weight: 'bold'
          }
        }
      }
    },
    scales: {
      y: {
        grid: {
            display: false,
        },
        beginAtZero: true,
        ticks: {
          color: '#000',
          font: {
            weight: 'bold'
          } 
        }
      },
      x: {
        grid: {
            display: false,
        },
        ticks: {
          color: '#000',
          font: {
            weight: 'bold'
          } 
        }
      }
    }
  }
});




window.addEventListener('load', () => {
    const elementoCanvas = document.getElementById('pie-chart');

    if (elementoCanvas) {
        const ctx = elementoCanvas.getContext('2d');

        const meuGrafico = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Receitas', 'Despesas'],
                datasets: [{
                    label: 'Valor total',
                    data: [19000, 14000],
                    backgroundColor: ['#44ff00', '#f40707'],
                    borderColor: '#ffffff',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#ffffff', // Cor da legenda
                            font: {
                                family: 'Afacad',
                                size: 14
                            }
                        }
                    },
                    title: {
                        display: true,
                        text: 'Quantidade de receitas e despesas',
                        color: '#ffffff', // Cor do título
                        font: {
                            size: 18,
                            family: 'Afacad'
                        }
                    }
                }
            }
        });
    }
});