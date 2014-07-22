$(function () {
    $('#2g').highcharts({

        exporting: {
         enabled: false
        },

        credits:{
            enabled:false
        },

        chart: {
            type: 'gauge',
            plotBorderWidth: 0,
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotShadow: false,
            width: 350,
            height: 180,
        },

        title: {
            text: 'Call Success Rate'
        },

        pane: [{
            startAngle: -90,
            endAngle: 90,
            background: null,
            center: ['25%', '100%'],
            size: 120
        }, {
            startAngle: -90,
            endAngle: 90,
            background: null,
            center: ['75%', '100%'],
            size: 120
        }],

        yAxis: [{
            min: 50,
            max: 100,
            tickPixelInterval: 40,
            tickWidth: 2,
            //minorTickPosition: 'inside',
            tickPosition: 'outside',

            labels: {
                rotation: 'auto',
                distance: 20,
                step: 2
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
            }],

            pane: 0,
            title: {
                text: '2G<br/><span style="font-size:8px">Channel A</span>',
                y: -80
            }
        }, {
            min: 50,
            max: 100,
            tickPixelInterval: 40,
            tickWidth: 2,
            minorTickPosition: 'outside',
            tickPosition: 'outside',

            labels: {
                rotation: 'auto',
                distance: 20,
                step: 2
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
            }],

            pane: 1,
            title: {
                text: '3G<br/><span style="font-size:8px">Channel B</span>',
                y: -80
            }
        }],

        plotOptions: {
            gauge: {
                dataLabels: {
                    enabled: true
                },
                dial: {
                    radius: '100%'
                }
            }
        },


        series: [{
            name: 'Call Success Rate',
            data: [81],
            yAxis: 0,
            tooltip: {
                valueSuffix: ' %'
            }
        },

        {
             name: 'Call Success Rate',
            data: [88],
            yAxis: 1,
            tooltip: {
                valueSuffix: ' %'
            }
        }]

    })

//dropcall

$('#dropcall').highcharts({

        exporting: {
         enabled: false
        },

        credits:{
            enabled:false
        },

        chart: {
            type: 'gauge',
            plotBorderWidth: 0,
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotShadow: false,
            width: 450,
            height: 180,
        },

        title: {
            text: 'Drop Call Rate'
        },

        pane: [{
            startAngle: -90,
            endAngle: 90,
            background: null,
            center: ['25%', '100%'],
            size: 150
        }, {
            startAngle: -90,
            endAngle: 90,
            background: null,
            center: ['75%', '100%'],
            size: 150
        }],

        yAxis: [{
            min: 0,
            max: 8,
            tickPixelInterval: 40,
            tickWidth: 2,
            //minorTickPosition: 'inside',
            tickPosition: 'outside',

            labels: {
                rotation: 'auto',
                distance: 20,
                step: 2
            },

            plotBands: [{
                from: 0,
                to: 3,
                color: '#55BF3B' // green

            }, {
                from: 3,
                to: 5,
                color: '#DDDF0D' // yellow
            }, {
                from: 5,
                to: 8,
                 color: '#DF5353' // red
            }],

            pane: 0,
            title: {
                text: '2G<br/><span style="font-size:8px">Channel A</span>',
                y: -80
            }
        }, {
            min: 0,
            max: 4,
            tickPixelInterval: 40,
            tickWidth: 2,
            minorTickPosition: 'outside',
            tickPosition: 'outside',

            labels: {
                rotation: 'auto',
                distance: 20,
                step: 4
            },

            plotBands: [{
                from: 0,
                to: 1,
                color: '#55BF3B' // green

            }, {
                from: 1,
                to: 2,
                color: '#DDDF0D' // yellow
            }, {
                from: 2,
                to: 4,
                color: '#DF5353' // red
            }],

            pane: 1,
            title: {
                text: '3G<br/><span style="font-size:8px">Channel B</span>',
                y: -80
            }
        }],

        plotOptions: {
            gauge: {
                dataLabels: {
                    enabled: true
                },
                dial: {
                    radius: '100%'
                }
            }
        },


        series: [{
            name: 'drop call',
            data: [2.06],
            yAxis: 0,
            tooltip: {
                valueSuffix: ' %'
            }
        },

        {
             name: 'Call Success Rate',
            data: [0.29],
            yAxis: 1,
            tooltip: {
                valueSuffix: ' %'
            }
        }]

    })
});
