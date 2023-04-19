//call the html element where the chart will appear
var ctx = document.getElementById('myChart').getContext('2d');

//Create a function for our chart
var myChart = new Chart(ctx, {

//Define the chart type
type: 'bar', 
      data: {
       //These are the chart labels
       labels: ['America', 'East Asia & Pacific', 'Europe & Central Asia','Middle East & North Africa', 'South Asia','Sub-Saharan Africa'],
       //This is the data for each bar
      datasets: [{
           label: 'Average GDP per Capita',
           data: [18791.13,14480.30, 20818.45, 13856.00, 2505.17, 2569.00 ],
               backgroundColor: [
      'rgba(202, 207, 133, 1)',
      'rgba(140, 186, 128, 1)',
      'rgba(101, 142, 156, 1)',
      'rgba(255, 166, 158, 1)',
      'rgba(192, 87, 70, 1)',
      'rgba(172, 191, 164, 1)',
    ],
       },]
      },
    
    
    
 //Define chart options
options: {
       responsive: true,
       plugins: {       
            //Chart title
           title: {
               display: true,
               text: 'GDP per Capita by Region',
               font: {
                   size: 18
               }
           },
           //Chart subtitle
           subtitle: {
               display: true,
               text: 'Europe and Central Asia have the highest GDP out of all the regions, with $20,818 per capita. Meanwhile, South Asia and Sub-Saharan Africa have the lowest.'
           }
       },
       //Scale options
       scales: {
           y: {
               beginAtZero: true
           }
       },
   },
    
});
