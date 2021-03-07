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
} from 'reactstrap'
import Avatar from '@components/avatar'
// ** Style Imports
import "./App.scss"

// ** Icon Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// ** Images Imports
import mediaImg1 from '@src/assets/images/portrait/small/avatar-s-3.jpg'
import Table from "reactstrap/es/Table";


const Home = props => {

  const [drawSelected, setDrawSelected] = useState(null)

  return (
    <div>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <Row>
                <Col lg={6}>
                  <h1>
                    The CAKE Lottery
                  </h1>
                  <h3>
                    Buy tickets with CAKE<br/>
                    Win if 2, 3 or 4 of your ticket numbers match!
                  </h3>
                </Col>
                <Col lg={6}>
                  Chart
                  <h3>
                    0h39m Until ticket sale
                  </h3>
                  <h4>
                    1h, 39m Until lottery draw
                  </h4>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-center">
          <ButtonGroup className='mb-1'>
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
      <Row className="justify-content-center">
        <Col lg={6}>
          <Card>
            <CardHeader>
              <Media>
                <Media left className="mr-1">
                  <Avatar img={mediaImg1} size='lg' />
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
          <Card className="unlock-wallet-card">
            <CardBody className="text-center">
              <img src={mediaImg1} width="100" className="mb-3"/>
              <h5 className="mb-2">
                Unlock wallet to access lottery
              </h5>
              <Button color="primary">
                Unlock Wallet
              </Button>
            </CardBody>
          </Card>
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
      <Row className="justify-content-center">
        <Col lg={6} md={12} className="text-center">
          <img src={mediaImg1} alt="lottery image" width="200"/>
          <h2>
            How it works
          </h2>
          <p>
            Spend CAKE to buy tickets, contributing to the lottery pot.
            Win prizes if 2, 3, or 4 of your ticket numbers match the winning numbers and their exact order!
          </p>
          <a href="#">
            Read more
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <CardBody className="text-center">
              <h2>
                Latest Winning Numbers
              </h2>
              <div className="display-5">
                8 14 2 1
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

export default Home
