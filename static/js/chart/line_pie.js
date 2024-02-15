var lineData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  datasets: [{
    data: [65, 59, 80, 81, 56, 55, 40, 50, 60, 70, 80, 90],
    borderColor: 'rgb(75, 192, 192)',
    fill: false,
  }, {
    data: [28, 48, 40, 19, 86, 27, 90, 100, 50, 60, 70, 80],
    borderColor: 'rgb(255, 99, 132)',
    fill: false,
  }, {
    data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
    borderColor: 'rgb(255, 205, 86)',
    fill: false,
  }]
};

var lineOptions = {
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
  plugins: {
    legend: {
      display: false
    }
  }
};

var lineChart = new Chart(document.getElementById('lineChart'), {
  type: 'line',
  data: lineData,
  options: lineOptions
});

var pieData = {
  // labels: ['Red', 'Blue', 'Yellow'],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: ['#215869']
  }]
};

var pieChart = new Chart(document.getElementById('pieChart'), {
  type: 'pie',
  data: pieData
});