//---------------------------------------------------------//
//
//
//
//---------------------------------------------------------//

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Define variables
var firstTeamNames = [];
var secondTeamNames = [];
var csvRows = [];
var teams = [];

// Obtain team names
teams = document.querySelector('.matchteams').getElementsByClassName('teams');
var team1 = teams[0].innerText.toLowerCase();
var team2 = teams[1].innerText.toLowerCase();

// Obtain first team player names
firstTeamNames = document.getElementsByClassName('namea');
objFirstLength = firstTeamNames.length;

// Obtain second team player names
secondTeamNames = document.getElementsByClassName('nameb');
objSecondLength = secondTeamNames.length;

// Get positions
positions = document.getElementsByClassName('pos');

// Add column headers
csvRows.push(capitalizeFirstLetter(team1) + ',' + capitalizeFirstLetter(team2) + ', Position');  

// Get player names
for(var i=0;i<objFirstLength;i++) {
	csvRows.push(firstTeamNames[i].innerText + ',' + secondTeamNames[i].innerText + ',' + positions[i].innerText);  
}

var csvString = "data:text/csv;charset=utf-8,%EF%BB%BF\n" + csvRows.join('\n');
 
// var a = document.createElement('a');
// a.href     = 'data:attachment/csv,' + csvString;
// a.target   ='_blank';
// a.download = team1 + '_' + team2 + '.csv,' + encodeURIComponent(csvString);
// a.innerHTML = "Click me to download the file.";
// document.body.appendChild(a);

var encodedUri = encodeURI(csvString);
var link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", team1 + '_' + team2 + ".csv");
document.body.appendChild(link); // Required for FF

link.click(); // This will download the data file named "my_data.csv".