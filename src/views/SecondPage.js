import Chart from 'react-apexcharts'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const SecondPage = () => {
    const lotteryDonutColors = {
        series1: '#daa746',
        series2: '#4679da',
    }

    const options = {
        colors: [lotteryDonutColors.series1, lotteryDonutColors.series2],
        plotOptions: {
            radialBar: {
                size: 185,
                hollow: {
                    size: '40%'
                },
                track: {
                    margin: 15
                },
                dataLabels: {
                    name: {
                        fontSize: '2rem',
                        fontFamily: 'Montserrat'
                    },
                    value: {
                        fontSize: '1rem',
                        fontFamily: 'Montserrat'
                    },
                    total: {
                        show: true,
                        fontSize: '1rem',
                        label: 'Until ticket sale',
                        formatter(w) {
                            return '0h, 35m'
                        }
                    }
                }
            }
        },
        grid: {
            padding: {
                top: -35,
                bottom: -30
            }
        },
        legend: {
            show: true,
            position: 'bottom'
        },
        stroke: {
            lineCap: 'round'
        },
        labels: ['Until ticket sale', 'Until lottery draw']
    }

    return (
        <Card>
            <CardHeader className='d-flex flex-sm-row flex-column justify-content-md-between align-items-start justify-content-start'>
                <CardTitle tag='h4'>Statistics</CardTitle>
            </CardHeader>
            <CardBody>
                <Chart options={options} series={[80, 50]} type='radialBar' height={350} />
            </CardBody>
        </Card>
    )
}

export default SecondPage
