import Highcharts from 'highcharts';
import { HighchartsReact } from 'highcharts-react-official'
import { CircularProgress, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const SpeedChart = ( {data, isLoading} ) => {
    const theme = useTheme();
    console.log(theme);

    const options = {
        chart: {
            type: "area",
            zoomType: "x",
            backgroundColor: theme.palette.background.paper
        },
        xAxis: {
            type: "datetime",
            title: {
                text: "Fecha (min)",
                style: {
                    color: theme.palette.text.secondary
                }
            },
            labels: {
                style: {
                    color: theme.palette.text.primary
                }
            }
        },
        yAxis: {
            title: {
                text: "Velocidad (u/min)",
                style: {
                    color: theme.palette.text.secondary
                }
            },
            labels: {
                style: {
                    color: theme.palette.text.primary
                }
            },
            gridLineColor: theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[700]
        },
        legend: {
            enabled: false
        },
        title: {
            text: "Velocidad por minuto en el tiempo",
            align: "left",
            style: {
                color: theme.palette.text.primary
            }
        },
        subtitle: {
            text: "Selecciona y arrastra con el puntero la zona que quieras hacer zoom",
            align: "left",
            style: {
                color: theme.palette.text.secondary
            }
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