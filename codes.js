
	$(function () {
    //joell
    var g=4;
    $('#addnew').on('click',function(){
        //alert('hi');
        g++;
        $('#items').append('<div id="'+g+'g" class="gauge">4g</div>')

        var options ={


        }

        var chart = new Highcharts.Chart(options);


    });

    $('#2g').highcharts({

    	exporting: {
         enabled: false
		},

		credits:{
			enabled:false
		},

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false,
            width: 250,
            height: 180,

        },

        title: {
            text: '2G Call Success Rate'
        },

        pane: {
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '100%'],
            background: [{
                backgroundColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '50%'
            }, {
                backgroundColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 5,
                outerRadius: '100%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: 50,
            max: 100,
            tickPixelInterval: 40,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#fff',
            labels: {
                step: 2,
                rotation: 'auto',
                distance: 10
            },
            title: {
                text: ''
            },
            plotBands: [{
                from: 50,
                to: 70,
                color: '#DF5353' // red

            }, {
                from: 70,
                to: 80,
                color: '#DDDF0D' // yellow
            }, {
                from: 80,
                to: 100,
                color: '#55BF3B' // green
            }]
        },

        series: [{
            name: 'Rate',
            data: [81.2],
            tooltip: {
                valueSuffix: '%'
            },

        }]

    });

//3g

$('#3g').highcharts({

        exporting: {
         enabled: false
        },

        credits:{
            enabled:false
        },

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false,
            width: 250,
            height: 180,

        },

        title: {
            text: '2G Call Success Rate'
        },

        pane: {
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '100%'],
            background: [{
                backgroundColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '50%'
            }, {
                backgroundColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 5,
                outerRadius: '100%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: 50,
            max: 100,
            tickPixelInterval: 40,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#fff',
            labels: {
                step: 2,
                rotation: 'auto',
                distance: 10
            },
            title: {
                text: 'this is title'
            },
            plotBands: [{
                from: 50,
                to: 70,
                color: '#DF5353' // red

            }, {
                from: 70,
                to: 80,
                color: '#DDDF0D' // yellow
            }, {
                from: 80,
                to: 100,
                color: '#55BF3B' // green
            }]
        },

        series: [{
            name: '2G Call Success Rate',
            data: [81.2],
            tooltip: {
                valueSuffix: '%'
            },

        }]

    });



});//close function jquery


/*$('#container2').highcharts({

		 exporting: {
         enabled: true
		},

		credits:{
			enabled:false
		},

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false,
            width: 350,
            height: 350
        },



        title: {
            text: '2G Call Success Rate'
        },

        pane: {
            startAngle: -90,
            endAngle: 90,
            background: [{
                backgroundColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '50%'
            }, {
                backgroundColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 5,
                outerRadius: '100%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: 50,
            max: 100,



            tickPixelInterval: 40,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto'
            },
            title: {
                text: ''
            },
            plotBands: [{
                from: 50,
                to: 70,
                color: '#DF5353' // red

            }, {
                from: 70,
                to: 80,
                color: '#DDDF0D' // yellow
            }, {
                from: 80,
                to: 100,
                color: '#55BF3B' // green
            }]
        },

        series: [{
            name: 'Drop call 3g',
            data: [88.2],
            tooltip: {
                valueSuffix: '%'
            },
            dataLabels: {
                enabled: true,
                style: {
                    //fontWeight:'bold',
                    fontSize: '20px'
                }
            }
        }]

    });

});
*/



/*$(function () {
    $('#container').highcharts({

        chart: {
            type: 'gauge',
            plotBorderWidth: 1,
            plotBackgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#FFF4C6'],
                    [0.3, '#FFFFFF'],
                    [1, '#FFF4C6']
                ]
            },
            plotBackgroundImage: null,
            height: 200
        },

        title: {
            text: 'VU meter'
        },

        pane: [{
            startAngle: -45,
            endAngle: 45,
            background: null,
            center: ['25%', '145%'],
            size: 300
        }, {
            startAngle: -45,
            endAngle: 45,
            background: null,
            center: ['75%', '145%'],
            size: 300
        }],

        yAxis: [{
            min: -20,
            max: 6,
            minorTickPosition: 'outside',
            tickPosition: 'outside',
            labels: {
                rotation: 'auto',
                distance: 20
            },
            plotBands: [{
                from: 0,
                to: 6,
                color: '#C02316',
                innerRadius: '100%',
                outerRadius: '105%'
            }],
            pane: 0,
            title: {
                text: 'VU<br/><span style="font-size:8px">Channel A</span>',
                y: -40
            }
        }, {
            min: -20,
            max: 6,
            minorTickPosition: 'outside',
            tickPosition: 'outside',
            labels: {
                rotation: 'auto',
                distance: 20
            },
            plotBands: [{
                from: 0,
                to: 6,
                color: '#C02316',
                innerRadius: '100%',
                outerRadius: '105%'
            }],
            pane: 1,
            title: {
                text: 'VU<br/><span style="font-size:8px">Channel B</span>',
                y: -40
            }
        }],

        plotOptions: {
            gauge: {
                dataLabels: {
                    enabled: false
                },
                dial: {
                    radius: '100%'
                }
            }
        },


        series: [{
            data: [-20],
            yAxis: 0
        }, {
            data: [-20],
            yAxis: 1
        }]

    })


});*/
