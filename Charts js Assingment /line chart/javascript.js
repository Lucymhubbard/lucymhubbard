var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',

        data: {
        labels: ['1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
        datasets:[  {
            label: 'Number of School Shootings',
            data: [7, 12, 13, 5, 12, 9, 13, 15, 10, 9, 9, 9, 7, 11, 13, 16, 7, 11, 13, 16, 7, 13, 15, 30, 27, 9, 42, 46, 7],

            fill: true,
            borderColor: 'rgba(146, 20, 12)',
            backgroundColor: 'rgba(146, 20, 12, 0.5)',
            tension: 0.1}, 
                   ]},
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'School Shootings since the Columbine High School Massacre',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'School shootings have tripled in the last five years, with 2023 seeing the highest number of school shootings since 1999.'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        },
    },
});