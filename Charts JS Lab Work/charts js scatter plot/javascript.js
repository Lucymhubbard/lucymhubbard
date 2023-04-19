var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "#0B0033",
                backgroundColor: "rgb(11, 0, 51, 0.5)",
                borderWidth:2,
               }, 
            
                { 
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "#832232",
                backgroundColor: "rgb(131, 34, 50, 0.5)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "United States",
                borderColor: "#6B9AC4",
                backgroundColor:"rgb(107, 154, 196,0.5)",
                borderWidth:2,
                
              },{ 
                data: [
                {x: 68.3, y: 5878},
                ],
                label: "Indonesia",
                borderColor: "#8BB174",
                backgroundColor:"rgb(139, 177, 116,0.5)",
                borderWidth:2,
                
              },
                       { 
                data: [
                {x: 71.9, y: 11461},
                ],
                label: "Brazil",
                borderColor: "#DE3C4B",
                backgroundColor:"rgb(222, 60, 75,0.5)",
                borderWidth:2,  
              },
                       { 
                data: [
                {x: 65.4, y: 13173},
                ],
                label: "Russia",
                borderColor: "#25283D",
                backgroundColor:"rgb(37, 40, 61,0.5)",
                borderWidth:2,  
              },
                       { 
                data: [
                {x: 62.6, y: 3366},
                ],
                label: "Pakistan",
                borderColor: "#FA7E61",
                backgroundColor:"rgb(250, 126, 97,0.5)",
                borderWidth:2,  
              },
                       { 
                data: [
                {x: 65.8, y: 1632},
                ],
                label: "Bangladesh",
                borderColor: "#F9627D",
                backgroundColor:"rgb(249, 98, 125,0.5)",
                borderWidth:2,  
              },
                       { 
                data: [
                {x: 81.1, y: 32193},
                ],
                label: "Japan",
                borderColor: "#3F826D",
                backgroundColor:"rgb(63, 130, 109,0.5)",
                borderWidth:2,  
              },
                          
            ]
          },
          options: {
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'GDP Per Capita'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Life Expectancy'
                  }
              }
            },
              
                   plugins: {       
            //Chart title
           title: {
               display: true,
               text: 'Life Expectancy and GDP per Capita of the Most Populous Countries',
               font: {
                   size: 18
               }
           },
           //Chart subtitle
           subtitle: {
               display: true,
               text: 'Counties with higher GDPs per capita tend to have higher life expectancy.',  
           }
       },
          }
        });