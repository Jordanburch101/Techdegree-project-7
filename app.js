///////////////////////////////
/////////// Charts ////////////
//////////////////////////////

// Traffic Chart
let trafficCanvas = document.getElementById('trafficChart');
let trafficData = {
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
    
        data: [0, 500, 1200, 900, 1500, 2000, 1400, 2100, 2300, 1900, 1300],
        backgroundColor: '#e2e3f690',
        borderColor: '#7377bf',
        lineTension: 0.2,
        pointBackgroundColor: '#fff',
        pointRadius: 6,
    }]
};
let trafficOptions = {
    legend: {
        display: false,
        labels: {
            boxWidth: 0,
        }
    }
};
let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

// Daily Chart
let dailyCanvas = document.getElementById('dailyChart');
let dailyData = {
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
        data: [60, 100, 170, 150, 200, 120, 125],
        backgroundColor: '#7377bf',
        borderColor: 'rgba(115, 0, 168, 0.30)',
        lineTension: 0.2,
        pointBackgroundColor: '#fff',
        borderRadious: 20,
    }]
};
let dailyOptions = {
    legend: {
        display: false, 
    }
};
let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});


// Pie Chart
const pieCanvas = document.getElementById('pieChart');
let pieData = {
    labels: [
        'Phones',
        'Tablets',
        'Desktop' 
    ],
    datasets: [{
        label: 'Mobile Users',
        data: [500, 600, 1200],
        backgroundColor: [
            '#74b1bf',
            '#81c98f',
            '#7377bf'
        ],
        borderColor: [
            '#74b1bf',
            '#81c98f',
            '#7377bf'
        ],
        lineTension: 0.2,
        pointBackgroundColor: '#fff',
        borderRadious: 20,
    }]
};
let pieOptions = {
    legend: {
        position: 'right', 
        display: true,
    }
};
const pieChart = new Chart(pieCanvas, {
    type: 'doughnut',
    data: pieData,
    options: pieOptions
});

///////////////////////////////
/////////// Alet //////////////
///////////////////////////////

const alertBanner = document.getElementById("alert");
const aletContainer = document.getElementsByClassName('alertContainer');

alertBanner.innerHTML = 
    `  
    <div class="alert-banner">
    <P><strong>Alert:</strong> You have <strong>3</strong> overdue taks to complete</P>
    <p class="alert-banner-close">X</p>
    </div>
    `

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if(element.classList.contains("alert-banner-close")) {
        alertBanner.className += " hidden";
    }
});