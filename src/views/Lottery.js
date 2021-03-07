// ** React Imports
import ReactDOM from 'react-dom'
import { useEffect, useState } from 'react'

// ** Bootstrap and Others Imports
import {
    Alert,
    Button, ButtonGroup,
    Card, CardHeader, CardBody, CardTitle, CardText, CardLink,
    Col,
    Media, Img,
    Row,
    Table
} from 'reactstrap'
import Avatar from '@components/avatar'
import Chart from "react-apexcharts";
// ** Style Imports
import "./App.scss"

// ** Icon Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// ** Images Imports
import mediaImg1 from '@src/assets/images/portrait/small/avatar-s-3.jpg'
import logoImg from '@src/assets/images/logo/logo.svg'
import ticketImg from '@src/assets/images/lottery/ticket.svg'
import lotteryImg from '@src/assets/images/lottery/lottery.svg'



const Lottery = props => {

    const [drawSelected, setDrawSelected] = useState(1)

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
        <div>
            <Row className="justify-content-center mb-3">
                <Col>
                    <Card className="bg-transparent border-primary shadow-none mb-0">
                        <CardBody>
                            <Row>
                                <Col lg={6} className="align-items-center my-auto">
                                    <h1 className="text-primary mb-2">
                                        The CAKE Lottery
                                    </h1>
                                    <h4>
                                        Buy tickets with CAKE<br/>
                                        Win if 2, 3 or 4 of your ticket numbers match!
                                    </h4>
                                </Col>
                                <Col lg={6} className="text-center">
                                    <div className="mb-2">
                                        <Chart options={options} series={[80, 50]} type='radialBar' height={300} />
                                    </div>
                                    <h4>
                                        <strong>0h, 39m</strong> Until ticket sale
                                    </h4>
                                    <h6>
                                        <strong>1h, 39m</strong> Until lottery draw
                                    </h6>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className="justify-content-center mb-2">
                <Col className="text-center">
                    <ButtonGroup>
                        <Button color='primary' outline onClick={() => setDrawSelected(1)} active={drawSelected === 1}>
                            Next draw
                        </Button>
                        <Button color='primary' outline onClick={() => setDrawSelected(2)} active={drawSelected === 2}>
                            Past draws
                        </Button>
                    </ButtonGroup>
                </Col>
            </Row>
            <hr/>
            <Row className="justify-content-center mb-2">
                <Col lg={6}>
                    <Card>
                        <CardHeader>
                            <Media>
                                <Media left className="mr-1">
                                    <Avatar img={logoImg} size='lg' />
                                </Media>
                                <Media body>
                                    <h6>Total Pot</h6>
                                    <div className="display-6 font-weight-bolder text-mono">
                                        19,594 CAKE
                                    </div>
                                </Media>
                            </Media>
                        </CardHeader>
                        <CardBody>
                            <Table borderless responsive className="lottery-pot-table">
                                <tbody>
                                <tr>
                                    <th>
                                        No. Matched
                                    </th>
                                    <th>
                                        Prize Pot
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        4
                                    </td>
                                    <td>
                                        9,809
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        3
                                    </td>
                                    <td>
                                        809
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        2
                                    </td>
                                    <td>
                                        09
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        To burn:
                                    </td>
                                    <td>
                                        3,940
                                    </td>
                                </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={6}>
                    {/*Not connected card*/}
                    {/*<Card className="unlock-wallet-card">*/}
                    {/*    <CardBody className="text-center">*/}
                    {/*        <img src={ticketImg} width="100" className="mb-2"/>*/}
                    {/*        <h5 className="mb-2">*/}
                    {/*            Unlock wallet to access lottery*/}
                    {/*        </h5>*/}
                    {/*        <Button color="primary">*/}
                    {/*            Unlock Wallet*/}
                    {/*        </Button>*/}
                    {/*    </CardBody>*/}
                    {/*</Card>*/}
                    {/*Connected card*/}
                    <Card>
                        <CardHeader>
                            <Media>
                                <Media left className="mr-1">
                                    <Avatar img={mediaImg1} size='lg' />
                                </Media>
                                <Media body>
                                    <h6>
                                        Your tickets for this round
                                    </h6>
                                    <div className="display-6 font-weight-bolder text-mono">
                                        123
                                    </div>
                                </Media>
                            </Media>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <Button color="primary" block disabled>
                                        View your tickets
                                    </Button>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <Button color="primary" block>
                                        Approve CAKE
                                    </Button>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                    <Alert color='dark'>
                        <div className='alert-body'>
                            Sorry, no prizes to collect<br/>
                            <a href="#">
                                View your tickets
                            </a>
                        </div>
                    </Alert>
                </Col>
            </Row>
            <Row className="justify-content-center mb-2">
                <Col lg={6} md={12} className="text-center">
                    <img src={lotteryImg} alt="lottery image" width="500"/>
                    <h1 className="font-weight-bolder">
                        How it works
                    </h1>
                    <p>
                        Spend CAKE to buy tickets, contributing to the lottery pot.
                        Win prizes if 2, 3, or 4 of your ticket numbers match the winning numbers and their exact order!
                    </p>
                    <a href="#">
                        Read more
                    </a>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col>
                    <Card>
                        <CardBody className="text-center">
                            <h2 className="font-weight-bolder">
                                Latest Winning Numbers
                            </h2>
                            <div className="lottery-number-set">
                                <div className="ball-container-1">
                                    <div className="ball build-in-1">
                                        1
                                    </div>
                                </div>
                                <div className="ball-container-2">
                                    <div className="ball build-in-2">
                                        2
                                    </div>
                                </div>
                                <div className="ball-container-3">
                                    <div className="ball build-in-3">
                                        3
                                    </div>
                                </div>
                                <div className="ball-container-4">
                                    <div className="ball build-in-4">
                                        4
                                    </div>
                                </div>
                            </div>
                            <div>
                                Tickets matching 4 numbers: <strong>0</strong><br/>
                                Tickets matching 3 numbers: <strong>9</strong><br/>
                                Tickets matching 2 numbers: <strong>174</strong>
                            </div>
                            <a href="#">
                                Export recent winning numbers
                            </a>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Lottery
