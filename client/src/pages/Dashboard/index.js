import React from 'react';
import { Login } from '../../components/Login/Login.component';
import PlantDisplayCard from '../../components/PlantDisplayCard';
import BottomNav from '../../components/BottomNavigation';
import { Container, Row, Col } from 'reactstrap';
import API from "../../utils/API";
import { User } from '../../components/User';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userPlants: [],
            user: {
                id: window.localStorage.userId
            }
        };
    }

    componentDidMount() {
        this.loadPlants()
    }

    loadPlants() {
        API.getPlants(this.state.user.id)
            .then(res => {
                this.setState({
                    userPlants: res.data
                });
            })
    }

    render() {
        return (
            <div>
            <User />
            <Container id="container-body">

                {/* 'YOUR PLANTS' - ROW  --------------  */}
                <Row id="header-text">
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <h3> Your Plants </h3> 
                    </Col>
                </Row>

                {/* PLANT CARD ROW --------------  */}

                {/* {this.state.userPlants.map(userPlant =>( */}
                {this.state.userPlants.length === 0
                ? <h1 id="ifNo">You have no plants yet! Take our survey to see what plant you can parent, or add your own!</h1>
                : this.state.userPlants.map(userPlant =>(
                    <Row id="plant-row">
                        <Col id="plant-col" sm="12" md={{ size: 8, offset: 2 }} >
                            <PlantDisplayCard 
                                key={userPlant._id}
                                plantPic={userPlant.plantPic}
                                plantName={userPlant.plantName}
                                plantNickname={userPlant.plantNickname}
                                sun={userPlant.plantCare.sun}
                                // soil={userPlant.plantCare.soil}
                                water={userPlant.plantCare.water}
                                onClick={event =>  window.location.href="/plants/" + userPlant._id}
                                label="Details"
                            />
                        </Col>
                    </Row>
                ))}
                

                <Login />

                {/* NAVIGATION BAR --------------  */}
                {/* <Row>
                    <Col sm="12" md={{ size: 8, offset: 2 }} >
                    </Col>
                </Row> */}

            
            </Container>
            
            <BottomNav />

            </div>
        )
    }
}

export default Dashboard;