///////////////////////////////
/////////// Charts ////////////
//////////////////////////////
const hour = document.getElementById('hour');
const day = document.getElementById('day');
const week = document.getElementById('week');
const month = document.getElementById('month');
// Traffic Data Sets
const trafficHourData = [10, 5, 8, 5, 10, 15, 20, 30, 35, 20, 15, 5];
const trafficHourLabels = ['0-2','3-4','5-6','7-8','9-10','11-12','13-14','15-16','17-18','19-20','21-22','23-24'];

const trafficDayData = [100, 30, 50, 90, 40, 60, 80];
const trafficDayLabels = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

const trafficWeekData = [0, 500, 1200, 900, 1500, 2000, 1400, 2100, 2300, 1900, 1300];
const trafficWeekLabels = ['16-22','23-29','30-5','6-12','13-19','20-26','27-3','4-10','11-17','18-24','25-31'];

const trafficMonthLabels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov', 'Dec'];
const trafficMonthData = [3000, 4500, 2345, 1254, 2430, 5450, 6100, 5600, 5000, 4600, 4000, 2040];

// Traffic Chart
let trafficCanvas = document.getElementById('trafficChart');
let TrafficData = trafficWeekData;
let TrafficLabel = trafficWeekLabels;

let trafficDataAll = {
    labels: TrafficLabel,
    datasets: [{
    
        data: TrafficData,
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
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
};
let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficDataAll,
    options: trafficOptions
});

///////////////////////////////
//////// Traffic Data  ////////
///////////////////////////////
function updateChart(labels, myData) {
    trafficChart.data.labels = labels;
    trafficChart.data.datasets[0].data = myData;
}
hour.addEventListener('click', (e) => {
    updateChart(trafficHourLabels, trafficHourData);
    trafficChart.update();
});
day.addEventListener('click', (e) => {
    updateChart(trafficDayLabels, trafficDayData);
    trafficChart.update();
});
week.addEventListener('click', (e) => {
    updateChart(trafficWeekLabels, trafficWeekData);
    trafficChart.update();
});

month.addEventListener('click', (e) => {
    updateChart(trafficMonthLabels, trafficMonthData);
    trafficChart.update();
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
        data: trafficDayData,
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
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
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
    <P><strong>Alert:</strong> You have <strong>4</strong> overdue tasks to complete</P>
    <p class="alert-banner-close">X</p>
    </div>
    `;

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if(element.classList.contains("alert-banner-close")) {
        alertBanner.className += " hidden";
    }
});
///////////////////////////////
/////////// Bell //////////////
///////////////////////////////

const bellIcon = document.getElementById("bell");
const unreadContainer = document.getElementById("unread");

// unreadContainer hide 
unreadContainer.style.opacity = 0;
unreadContainer.style.display = 'none';

// Set display to show
function displayShow(event) {
    setTimeout(function(){ event.style.opacity = 1 }, 100);
};
// Set display to hide
function displayHide(event) {
    setTimeout(function(){ event.style.display = 'none' }, 1000);
};
// Add event listenr to bell icon
bellIcon.addEventListener('click', (e) => {
    if(unreadContainer.style.opacity === '0') {
        unreadContainer.style.display = '';
        displayShow(unreadContainer);
        bellIcon.innerHTML = 
        ` 
        <svg class="bellWhite" height="24" width="24">
        <path class="bellWhite-right-bottom" d="M15 20a3 3 0 11-6 0 3 3 0 116 0z" fill="currentColor"/>
        <path class="bellWhite-right" d="M12 0a2 2 0 00-1 2L7 4 6 7l-1 6-4 5 1 1 1 1h18l1-1 1-1-4-5-1-6-1-4-4-1V1l-1-1z" fill="currentColor"/>
        <path class="bellWhite-left-bottom" d="M12 17c-2 0-3 1-3 3s1 3 3 3v-6z" fill="currentColor"/>
        <path class="bellWhite-left" fill="currentColor" d="M12 0l-1 2-4 2-1 3-1 6-4 5 1 1 1 1h9V0z"/>
        <path class="bellWhite-middle" d="M9 20v1h6v-1H9z" fill="currentColor"/>
      </svg>
        `;
    } else {
        unreadContainer.style.opacity = 0;
        displayHide(unreadContainer); 
    }
});
///////////////////////////////
/////// Unread Messages ///////
///////////////////////////////

// Remove HTMl after hiding message
function removeHtml(event) {
    setTimeout(function(){ event.innerHTML = '' }, 1000);
};

// Add event listener to msg contaienr
unreadContainer.addEventListener('click', (e) => {
    const buttonPressed = e.target;
    const unreadMsg = buttonPressed.parentNode;
    if(unreadMsg.classList.value === "unread-message") {
        if(buttonPressed.textContent === "X") {
            unreadMsg.className += "-hidden"; 
            removeHtml(unreadMsg);
         }
    }
});

///////////////////////////////
/////// Message Users /////////
///////////////////////////////

//Autocomplete
const users = ['Victoria Chambers', 'Dale Byrd', 'Dawn Wood', 'Dan Oliver'];
const search = document.getElementById('userSearch');
const message = document.getElementById('messageField');
const send = document.getElementById('send');
new Awesomplete(search, {
	list: users
});

send.addEventListener('click', () => {
    if(search.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if(search.value === "") {
        alert("Please fill out user field before sending");
    } else if(message.value === "") {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to: ${search.value}`);
    }
});

///////////////////////////////
/////// Local Storage /////////
///////////////////////////////

////////////// Timezone local storage //////////////
const select = document.querySelector(".settings-timezone");
const selectOption = select.options[select.selectedIndex];
let savedSelected = localStorage.getItem('select');

if(savedSelected) {
    select.value = savedSelected;
};

// Save timezone to localstorage function
function timezoneSelect() {
    savedSelected = select.options[select.selectedIndex].value;
    localStorage.setItem('select', savedSelected);
};

////////////// CheckBox Local Storage //////////////
const emailCheck = document.getElementById('emailCheck');
const profileCheck = document.getElementById('profileCheck');

// Save options to localstorage
function save() {
    window.localStorage.clear()
    if(emailCheck.checked === true && profileCheck.checked === true) {
        localStorage.setItem('emailCheck', emailCheck.checked);
        localStorage.setItem('profileCheck', profileCheck.checked);
    } else if(emailCheck.checked === true) {
        localStorage.setItem('emailCheck', emailCheck.checked);
    } else if(profileCheck.checked === true) {
        localStorage.setItem('profileCheck', profileCheck.checked);
    } else {
        window.localStorage.clear()
        emailCheck.checked = false;
        profileCheck.checked = false;
    }
    timezoneSelect()
    console.log(localStorage);
};

// Clear localstorage and reset dom
function clr(){
    location.reload();
    window.localStorage.clear()
    emailCheck.checked = false;
    profileCheck.checked = false;
    select.value = '';
    console.log(localStorage);
};

// Return boolem values from localstorage
const emailChecked = JSON.parse(localStorage.getItem('emailCheck'));
const profileChecked = JSON.parse(localStorage.getItem('profileCheck'));
function checkedBoth() {
    if(emailChecked === true && profileChecked === true) {
        return true;
    } else {
        return false;
    }
};

// Check localstorage on load
function load() {
    const Allchecked = JSON.parse(localStorage.getItem('profileCheck', 'emailCheck'));
    if(emailChecked === true && profileChecked === true) {
        document.getElementById('profileCheck').checked = checkedBoth();
        document.getElementById('emailCheck').checked = checkedBoth();
    } else if(emailChecked === true) {
        document.getElementById('emailCheck').checked = emailChecked;
    } else if(profileChecked === true) {
        document.getElementById('profileCheck').checked = profileChecked;
    }
    
};

load();
