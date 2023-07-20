//bar chart dummy data
const bardata = {
  labels: ['20', '25' , '30' , '35' , '40' , '45' , '50' , '55' , '60' , '65' , '70' , '75' , '80' , '85'],
  datasets: [
    {
      label: 'Employer',
      data: [20, 22, 24, 26, 38 , 40 , 44 , 50 , 56 , 60 , 63, 75 , 80, 95],
      backgroundColor: 'rgb(30 58 138)',
      barPercentage: 0.6,         // Adjust the bar width
      categoryPercentage: 0.8,
    },
    {
      label: 'Employee',
      data: [20, 22, 25, 33, 36 , 49 , 53 , 60 , 63 , 70 , 85 , 87 , 90 , 94 ],
      backgroundColor: 'rgb(59 130 246)',    barPercentage: 0.6,         // Adjust the bar width
      categoryPercentage: 0.8,
    },
    {
      label: 'Total interest',
      data: [30, 48, 50, 53, 65 ,68 , 72 , 75 , 77  , 78 , 80 , 104 , 106 , 109 , 110],
      backgroundColor: 'rgb(147 197 253)',
      barPercentage: 0.6,         // Adjust the bar width
      categoryPercentage: 0.8,
    },
  ],
};

// bar chart configuration
const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false, // Hide x-axis grid lines
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        ticks: {
          stepSize: 100,
          callback: function (value, index, values) {
            return '$' + value;
          },
        },
        
      },
    },
    plugins: {
     
      legend: {
        display: false,
        position: 'bottom',
      },
    },
  },
};

// Create the chart (bar chart) 
const myChart = new Chart(document.getElementById('chart'), config);

// function for percentage chart configurations
const createPieConfig = (data) => {
  return {
    type: 'doughnut',
    data: {
      datasets: [{
        data,
        backgroundColor: ['#00ffb3', '#dbd7d7'],
      }]
    },
    options: {
      cutout: '70%',
    }
  };
};

// percentage chart data 
const pieChartData1 = [78, 22];
const pieChartData2 = [95, 5];
const pieChartData3 = [59, 41];

// Create the charts 3 percentage charts
const pieChart1 = new Chart(document.getElementById('myChart1'), createPieConfig(pieChartData1));
const pieChart2 = new Chart(document.getElementById('myChart2'), createPieConfig(pieChartData2));
const pieChart3 = new Chart(document.getElementById('myChart3'), createPieConfig(pieChartData3));
