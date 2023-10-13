import React from "react";
import './profile.css'
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import avater from '../../assets/images/avatar.png'

const Profile = () => {
  return (
    <>
      <Container>
        <Row className="profileContainer" >
          {/* sidebar section  */}
          <Col sm={4} className="profileSidebarContainer" >
            <Card >
              <Card.Img variant="top" src={avater} />
              <Card.Body>
                <Card.Title>Name</Card.Title>
                <Card.Text>
                  Client
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item className="text-uppercase text-center">Edit Profile</ListGroup.Item>
                <ListGroup.Item  className="text-uppercase text-center">Change Password</ListGroup.Item>
                <ListGroup.Item  className="text-uppercase text-center fw-bolder">Logout</ListGroup.Item>
              </ListGroup>
            </Card>

          {/* sidebar section  */}
          </Col>
          <Col sm={8}    style={{ overflow:'scroll', height: '100%'}}>
            profile content
            <ul>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
              <li>sdf</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
