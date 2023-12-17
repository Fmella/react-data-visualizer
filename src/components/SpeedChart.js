import Highcharts from 'highcharts';
import { HighchartsReact } from 'highcharts-react-official'
import { Box, CircularProgress, Container } from '@mui/material';

const SpeedChart = ( {data, isLoading} ) => {
    const options = {
        chart: {
            type: "area",
            zoomType: "x"
        },
        xAxis: {
            type: "datetime",
            title: {
                text: "Fecha (min)"
            }
        },
        yAxis: {
            title: {
                text: "Velocidad (u/min)"
            }
        },
        legend: {
            enabled: false
        },
        title: {
            text: "Velocidad por minuto en el tiempo",
            align: "left"
        },
        subtitle: {
            text: "Selecciona y arrastra con el puntero la zona que quieras hacer zoom",
            align: "left"
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },
        series: data
    }
    console.log(Highcharts.getOptions());

    return (
        <>
            {isLoading ? (
                <Container>
                    <CircularProgress />
                </Container>
            ) : (
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
            )}
        </>
    )
}

export default SpeedChart;