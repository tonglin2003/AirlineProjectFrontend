import React from 'react';
import { Container, Row, Col, Form, Button, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./FlightSearch.css"

export default function FlightSearch(){
    return (
        <Container>
          <Tabs defaultActiveKey="flights" className="tabClass mb-3" style={{fontFamily:"Oswald"}}>
            <Tab eventKey="Roundtrip" title="Roundtrip" style={{color:"black !important"}}>
                <Form>
                    <Row className="mb-3">
                        <Col>
                        
                            <Form.Label>Flight Classes</Form.Label>
                            <Form.Select>
                                <option>Economy</option>
                                <option>Premium Economy</option>
                                <option>Business</option>
                                <option>First Class</option>
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Group controlId="formGridTravelers">
                                <Form.Label>Travelers</Form.Label>
                                <Form.Control type="text" placeholder="Number of travelers" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md>
                            <Form.Group controlId="formGridFrom">
                            <Form.Label>Leaving from</Form.Label>
                            
                            <Form.Control type="text" placeholder="City or airport" />
                            </Form.Group>
                        </Col>
                        <Col md>
                            <Form.Group controlId="formGridTo">
                            <Form.Label>Going to</Form.Label>
                            <Form.Control type="text" placeholder="City or airport" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md>
                            <Form.Group controlId="formGridDates">
                            <Form.Label>Leave Date</Form.Label>
                            <Form.Control type="date" placeholder="Select dates" />
                            </Form.Group>
                        </Col>
                        <Col md>
                            <Form.Group controlId="formGridDates">
                                <Form.Label>Return Date</Form.Label>
                                <Form.Control type="date" placeholder="Select dates" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-center">
                        <Button variant="danger" type="submit" style={{width:"150px"}}>
                            <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </Button>
                    </div>
              </Form>
            </Tab>

            
            <Tab eventKey="One-way" title="One-way">
              <Form>
                <Row className="mb-3">
                  <Col>
                    <Form.Select>
                      <option>Economy</option>
                      <option>Premium Economy</option>
                      <option>Business</option>
                      <option>First Class</option>
                    </Form.Select>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md>
                    <Form.Group controlId="formGridFrom">
                      <Form.Label>Leaving from</Form.Label>
                      
                      <Form.Control type="text" placeholder="City or airport" />
                    </Form.Group>
                  </Col>
                  <Col md>
                    <Form.Group controlId="formGridTo">
                      <Form.Label>Going to</Form.Label>
                      <Form.Control type="text" placeholder="City or airport" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md>
                    <Form.Group controlId="formGridDates">
                      <Form.Label>Dates</Form.Label>
                      <Form.Control type="date" placeholder="Select dates" />
                    </Form.Group>
                  </Col>
                  <Col md>
                    <Form.Group controlId="formGridTravelers">
                      <Form.Label>Travelers</Form.Label>
                      <Form.Control type="text" placeholder="Number of travelers" />
                    </Form.Group>
                  </Col>
                </Row>
                <div className="d-flex justify-content-center">
                    <Button variant="danger" type="submit" style={{width:"150px"}}>
                        <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </Button>
                </div>
              </Form>
            </Tab>


          </Tabs>
        </Container>
      );
}