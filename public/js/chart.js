

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