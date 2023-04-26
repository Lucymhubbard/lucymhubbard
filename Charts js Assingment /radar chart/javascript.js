//call the html element where the chart will appear
var ctx = document.getElementById('myChart').getContext('2d');

//Create a function for our chart
var myChart = new Chart(ctx, {

//Define the chart type
type: 'radar', 
data: {
        labels: [
        'Accidental',
        'Indiscriminate',
        'Targeted',
        'Targeted and Indiscriminate',
        'Unclear',
        'Public Suicide'],
                datasets: [{
                label: 'Florida',
                data: [6, 3, 13, 0, 1, 1],
                    fill: true,
                    backgroundColor: 'rgba(140, 186, 128, 0.5)',
                    borderColor: 'rgb(140, 186, 128)',
                    pointBackgroundColor: 'rgb(140, 186, 128)',
                    pointBorderColor: 'rgb(140, 186, 128)',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(140, 186, 128)'},
                {
                label:'California',
                data:[7, 5, 23, 2, 3, 0],
                    fill: true,
                    backgroundColor: 'rgba(192, 87, 70, 0.5)',
                    borderColor: 'rgb(192, 87, 70)',
                    pointBackgroundColor: 'rgb(192, 87, 70)',
                    pointBorderColor: 'rgb(192, 87, 70)',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(192, 87, 70)'
                }
                ] },

    
    
    
 //Define chart options
options: {
       responsive: true,
       plugins: {       
            //Chart title
           title: {
               display: true,
               text: 'Types of School Shootings in Florida and California',
               font: {
                   size: 18
               }
           },
           //Chart subtitle
           subtitle: {
               display: true,
               text: 'California and Florida experienced more school shootings than any other states in the United States. There were 40 school shootings in California, more than half of which were targeted shootings.'
           }
       },
       
       },

    
});



