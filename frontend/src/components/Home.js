import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FormField from './FormField';
import FriendsGrid from './FriendsGrid';

const Home = () => (
  <div className="main">
    <Container>
      <Row>
        <Col><FormField /></Col>
        <Col><FriendsGrid /></Col>
      </Row>
    </Container>
  </div>
);

export default Home;
