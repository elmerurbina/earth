// Create a chart for displaying the temperature growth on last years
document.addEventListener('DOMContentLoaded', function() {
    // Data
    const temperatureData = {
        labels: ["1990-1994", "1995-1999", "2000-2004", "2005-2009", "2010-2014", "2015-2019", "2020-2022"], 
        datasets: [{
            // Title of the chart
            label: 'Chart 1.1: Temperature Growth from 1990 to 2022',
            data: [0.5, 0.7, 1.2, 1.5, 1.8, 2.1, 2.3], 
            // Color styles
            backgroundColor: ['rgba(255, 0, 0, 0.2)', 'rgba(0, 0, 255, 0.2)', 'rgba(0, 0, 255, 0.2)', 'rgba(0, 0, 255, 0.2)', 'rgba(0, 0, 255, 0.2)', 'rgba(0, 0, 255, 0.2)', 'rgba(255, 0, 0, 0.2)'], 
            borderColor: ['rgba(255, 0, 0, 1)', 'rgba(0, 0, 255, 1)', 'rgba(0, 0, 255, 1)', 'rgba(0, 0, 255, 1)', 'rgba(0, 0, 255, 1)', 'rgba(0, 0, 255, 1)', 'rgba(255, 0, 0, 1)'], 
            borderWidth: 1
        }]
    };

    // Create the chart
    const ctx = document.getElementById('temperatureChart').getContext('2d');
    const temperatureChart = new Chart(ctx, {
        type: 'bar',
        data: temperatureData,
        options: {
            scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Temperature Elevation (°C)'
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: '5-Year Period'
                    }
                }]
            }
        }
    });
});
