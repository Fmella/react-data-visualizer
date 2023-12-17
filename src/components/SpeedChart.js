import Highcharts from 'highcharts';
import { HighchartsReact } from 'highcharts-react-official'
import { Box, CircularProgress, Container } from '@mui/material';

const SpeedChart = ( {data, isLoading} ) => {
    const options = {
        chart: {
            zoomType: "x"
        },
        xAxis: {
            type: "datetime"
        },
        legend: {
            enabled: false
        },
        series: data
    }

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