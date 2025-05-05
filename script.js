document.addEventListener("DOMContentLoaded", function () {
    // Calories Burned Chart (Spline Chart)
    Highcharts.chart("caloriesChart", {
        chart: {
            type: "spline",
            height: '50%'  // Make it responsive with height based on the container
        },
        title: {
            text: "Calories Burned"
        },
        xAxis: {
            categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
            title: {
                text: "Calories"
            }
        },
        series: [{
            name: "Calories",
            data: [400, 550, 600, 450, 700, 800, 750],
            color: "#28a745"
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 600  // Adjust for small screens
                },
                chartOptions: {
                    chart: {
                        height: '300px' // Set height for smaller screens
                    }
                }
            }]
        }
    });

    // Cardio Activities (Pie Chart)
    Highcharts.chart('cardioChart', {
        chart: {
            type: 'pie',
            height: '50%'  // Make it responsive with height based on the container
        },
        title: {
            text: 'Cardio Activities'
        },
        series: [{
            name: 'Activity',
            colorByPoint: true,
            data: [
                { name: 'Swimming', y: 25, color: '#00bcd4' },
                { name: 'Spinning', y: 20, color: '#673ab7' },
                { name: 'Running', y: 30, color: '#ff9800' },
                { name: 'Biking', y: 25, color: '#ff5722' }
            ]
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 600
                },
                chartOptions: {
                    chart: {
                        height: '250px'  // Adjust height for smaller screens
                    }
                }
            }]
        }
    });

    // Climbing Inclination (Spline Chart)
    Highcharts.chart('climbingChart', {
        chart: {
            type: 'spline',
            height: '50%'  // Make it responsive with height based on the container
        },
        title: {
            text: 'Climbing Inclination'
        },
        xAxis: {
            categories: ['10 Oct', '11 Oct', '12 Oct', '13 Oct', '14 Oct', '15 Oct', '16 Oct', '17 Oct']
        },
        yAxis: {
            title: {
                text: 'Inclination (°)'
            }
        },
        series: [{
            name: 'Incline Level',
            data: [5, 10, 15, 10, 20, 25, 22, 30],
            color: '#ff5722'
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 600
                },
                chartOptions: {
                    chart: {
                        height: '300px'
                    }
                }
            }]
        }
    });

    // Progress Tracking (Column Chart)
    Highcharts.chart('progressChart', {
        chart: {
            type: 'column',
            height: '50%'  // Make it responsive with height based on the container
        },
        title: {
            text: 'BiWeekly Progress Tracking'
        },
        xAxis: {
            categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Performance Score'
            }
        },
        series: [{
            name: 'Progress',
            data: [7, 8, 9, 6, 8, 10, 9, 8, 9, 7, 6, 9, 8, 10],
            color: '#3f51b5'
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 600
                },
                chartOptions: {
                    chart: {
                        height: '250px'
                    }
                }
            }]
        }
    });

    // Weekly Goal Achievement (Pie Chart)
    Highcharts.chart('goalChart', {
        chart: {
            type: 'pie',
            height: '50%'  // Make it responsive with height based on the container
        },
        title: {
            text: 'Weekly Goal Achieved'
        },
        series: [{
            name: 'Goal',
            colorByPoint: true,
            data: [
                { name: 'Achieved', y: 95, color: '#4caf50' },
                { name: 'Remaining', y: 5, color: '#f44336' }
            ]
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 600
                },
                chartOptions: {
                    chart: {
                        height: '250px'
                    }
                }
            }]
        }
    });

    // Disable Highcharts credits
    Highcharts.setOptions({
        credits: {
            enabled: false
        }
    });
});
