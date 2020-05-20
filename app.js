// Traffic Chart
const ctx1 = document.getElementById('trafficChart');

const weeklyTrafficData = [0, 500, 1200, 900, 1500, 2000, 1400, 2100, 2300, 1900, 1300];
const trafficChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: [
            '16-22',
            '23-29',
            '30-5',
            '6-12',
            '13-19',
            '20-26',
            '27-3',
            '4-10',
            '11-17',
            '18-24',
            '25-31'
        ],
        datasets: [{
            label: 'Weekly Traffic',
            data: weeklyTrafficData,
            backgroundColor: 'rgba(36, 39, 198, 0.25)',
            borderColor: 'rgba(115, 0, 168, 0.30)',
            lineTension: 0.2,
            pointBackgroundColor: '#fff',
            pointRadius: 6,
        }]
    },
});



// Daily Chart
const ctx2 = document.getElementById('dailyChart');

const dailyData = [60, 100, 170, 150, 200, 120, 125];
const dailyChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: [
            'S',
            'M',
            'T',
            'W',
            'T',
            'F',
            'S'
           
        ],
        datasets: [{
            label: 'Daily Traffic',
            data: dailyData,
            backgroundColor: 'rgb(109, 82, 173)',
            borderColor: 'rgba(115, 0, 168, 0.30)',
            lineTension: 0.2,
            pointBackgroundColor: '#fff',
            borderRadious: 20,
        }]
    },
});



