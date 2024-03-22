const lineData = {
  labels: ["sdgs1", "sdgs2", "sdgs3", "sdgs4", "sdgs5", "sdgs6", "sdgs7", "sdgs8", "sdgs9", "sdgs10", "sdgs11", "sdgs12"],
  datasets: [{
    label: '2020年',
    data: [65, 59, 80, 81, 56, 55, 40, 50, 60, 70, 80, 90],
    borderColor: 'rgb(75, 192, 192)',
    fill: false,
  }, {
    label: '2021年',
    data: [28, 48, 40, 19, 86, 27, 90, 100, 50, 60, 70, 80],
    borderColor: 'rgb(255, 99, 132)',
    fill: false,
  }, {
    label: '2022年',
    data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
    borderColor: 'rgb(255, 205, 86)',
    fill: false,
  }]
};

const lineOptions = {
  responsive: true,
  scales: {
    x: {
      title: {
        display: true,
        text: '指標',
        font: {
          size: 18
        }
      }
    },
    y: {
      title: {
        display: true,
        text: '關係人口數',
        font: {
          size: 18
        },
      }
    }
  },
};

const lineChart = new Chart(document.getElementById('lineChart'), {
  type: 'line',
  data: lineData,
  options: lineOptions
});

const pieData = {
  labels: ['指標一', '指標二', '指標三'],
  datasets: [{
    data: [300, 50, 100],
    color: '#fff',
    align: 'end',
    borderWidth: 2,
    backgroundColor: ['#215869'],
  },
  ],
};

const pieChart = new Chart(document.getElementById('pieChart'), {
  type: 'pie',
  data: pieData,
});
pieChart.canvas.parentNode.style.width = '300px';
pieChart.canvas.parentNode.style.display = 'flex';
pieChart.canvas.parentNode.style.alignItems = 'center';
pieChart.canvas.parentNode.style.flexDirection = 'column';