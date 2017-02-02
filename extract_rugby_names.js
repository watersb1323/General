// Create downloadable link
var A = [['n','sqrt(n)']];  // initialize array of rows with header row as 1st item
      
for(var j=1;j<10;++j){ A.push([j, Math.sqrt(j)]) }
 
var csvRows = [];
for(var i=0,l=A.length; i<l; ++i){
        csvRows.push(A[i].join(','));   // unquoted CSV row
}
var csvString = csvRows.join('\n');
 
var a = document.createElement('a');
a.href     = 'data:attachment/csv,' + csvString;
a.target   ='_blank';
a.download = 'myFile.csv,' + encodeURIComponent(csvString); ;
a.innerHTML = "Click me to download the file.";
document.body.appendChild(a);


// // Obtain first team names
// firstTeamNames = document.getElementsByClassName('namea');
// positions = document.getElementsByClassName('pos');
// objLength = firstTeamNames.length;

// for (var i=0; i < objLength; i++) {
// 	console.log(firstTeamNames[i].innerText, positions[i].innerText);
// }

// // Obtain second team names
// firstTeamNames = document.getElementsByClassName('namea');
// objLength = firstTeamNames.length;

// for (var i=0; i < objLength; i++) {
// 	console.log(firstTeamNames[i].innerText, positions[i].innerText);
// }