//call the html element where the chart will appear
var ctx = document.getElementById('myChart').getContext('2d');

//Create a function for our chart
var myChart = new Chart(ctx, {

//Define the chart type
type: 'bar', 
      data: {
       //These are the chart labels
       labels: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Virginia', 'Washington', 'Wisconsin'],
       //This is the data for each bar
      datasets: [{
           label: 'School Shootings since 1999',
           data: [14, 1, 4, 5, 40, 8, 5, 2, 5, 24, 12, 1, 1, 17, 7, 1, 2, 3, 12, 10, 2, 14, 7, 7, 5, 1, 1, 4, 1, 2, 7, 9, 21, 1, 14, 4, 6, 14, 1, 9, 1, 12, 22, 4, 8, 9, 6],
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
               text: 'School Shootings since Columbine High School Massacre, Organized by State',
               font: {
                   size: 18
               }
           },
           //Chart subtitle
           subtitle: {
               display: true,
               text: 'There have been 366 school shootings since the Columbine High School Massacre in 1999'
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