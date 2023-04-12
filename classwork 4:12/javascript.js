//call the html element where the chart will appear
var ctx = document.getElementById('myChart').getContext('2d');

//Create a function for our chart
var myChart = new Chart(ctx, {

//Define the chart type
type: 'bar',
data: {
       //These are the chart labels
       labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
       //This is the data for each bar
      datasets: [{
           label: '# of Apples',
           data: [12, 19, 3, 5, 2, 3],
           backgroundColor: [
               '#ff0800'
           ]
       },
       {
           label: '# of Oranges',
           data: [22, 10, 23, 6, 22, 13],
           backgroundColor: [
               '#FFA500'
           ],
       }
   ]
   },
    
//Define chart options
options: {
       responsive: true,
       plugins: {       
            //Chart title
           title: {
               display: true,
               text: 'Apples and Oranges by year',
               font: {
                   size: 18
               }
           },
           //Chart subtitle
           subtitle: {
               display: true,
               text: 'For all but one year, oranges outnumbered apples'
           }
       },
       //Scale options
       scales: {
           y: {
               beginAtZero: true
           }
       },
   },