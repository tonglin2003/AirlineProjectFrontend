import React from 'react';
import { Container, Row, Col, Form, Button, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./FlightSearch.css"
import { useState, useEffect } from 'react';

export default function FlightSearch(){
    /*
    Note for flight search function
        1. the inputs are inside the formData useState and whenever user enter something it will change the stored info
        2. to submit a search, use the function "handleSumbit" the connection to the submit button to is done, test it out by clicking the button and see the console
        3. after submiting, call the api endpoint with "get" method and redirect to the ticket page with user search input
    */

    // useState to keep track of what user input
    const [formData, setFormData] = useState({
        "flightType": "Roundtrip",
         "flightClass": "Economy",
         "leavingPort": "",
         "goingPort": "",
         "departDate":"",
         "returnDate":"",
         "travelerNum":0
    })

    // handle input change, maintain the updated change
    const handleInputChange = (event) => {
        if (typeof(event) === typeof("")){
            setFormData({
                ...formData,
                ["flightType"]:event,
            });
        }
        else{
            const { name, value } = event.target;

            setFormData({
                ...formData,
                [name]:value,
            });
        }
    }

    // handle the submit case, call the api endpoint and redirect to another page
    const handleSumbit = (event) => {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <Container>
          <Tabs defaultActiveKey="Roundtrip" className="tabClass mb-3" style={{fontFamily:"Oswald"}}>
            <Tab eventKey="Roundtrip" 
                    title="Roundtrip" 
                    name="flightType" 
                    onClick={() => handleInputChange("Roundtrip")}>
                <Form method="get" onSubmit={handleSumbit}>
                    <Row className="mb-3">
                        <Col>
                            <Form.Label>Flight Classes</Form.Label>
                            <Form.Select name="flightClass" value={formData.flightClass} onChange={handleInputChange}>
                                <option>Economy</option>
                                <option>Premium Economy</option>
                                <option>Business</option>
                                <option>First Class</option>
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Group controlId="formGridTravelers">
                                <Form.Label>Travelers</Form.Label>
                                <Form.Control type="number" placeholder="Number of travelers" name="travelerNum" 
                            value={formData.travelerNum} onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md>
                            <Form.Group controlId="formGridFrom" >
                                <Form.Label>Leaving from</Form.Label>
                                <Form.Control type="text" placeholder="City or airport" name="leavingPort" 
                                value={formData.leavingPort} onChange={handleInputChange}/>
                            </Form.Group>
                        </Col>
                        <Col md>
                            <Form.Group controlId="formGridTo" name="arrivingPort">
                                <Form.Label>Going to</Form.Label>
                                <Form.Control type="text" placeholder="City or airport" name="goingPort" 
                                value={formData.goingPort} onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md>
                            <Form.Group controlId="formGridDates" >
                                <Form.Label>Depart Date</Form.Label>
                                <Form.Control type="date"
                                name="departDate" value={formData.departDate} onChange={handleInputChange}/>
                            </Form.Group>
                        </Col>
                        <Col md>
                            <Form.Group controlId="formGridDates">
                                <Form.Label>Return Date</Form.Label>
                                <Form.Control type="date" name="returnDate" value={formData.returnDate} onChange={handleInputChange} />
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

            
            <Tab eventKey="One-way" title="One-way" name="flightType" 
                    onClick={() => handleInputChange("One-way")}>
              <Form method="get" onSubmit={handleSumbit}>
                <Row className="mb-3">
                  <Col>
                    <Form.Select name="flightClass" value={formData.flightClass} onChange={handleInputChange}>
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
                      
                      <Form.Control type="text" placeholder="City or airport" name="leavingPort" 
                                value={formData.leavingPort} onChange={handleInputChange}/>
                    </Form.Group>
                  </Col>
                  <Col md>
                    <Form.Group controlId="formGridTo">
                      <Form.Label>Going to</Form.Label>
                      <Form.Control type="text" placeholder="City or airport" name="goingPort" 
                                value={formData.goingPort} onChange={handleInputChange}/>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md>
                    <Form.Group controlId="formGridDates">
                      <Form.Label>Dates</Form.Label>
                      <Form.Control type="date" name="departDate" value={formData.departDate} onChange={handleInputChange} />
                    </Form.Group>
                  </Col>
                  <Col md>
                    <Form.Group controlId="formGridTravelers">
                        <Form.Label>Travelers</Form.Label>
                        <Form.Control type="text" name="travelerNum" 
                                value={formData.travelerNum} onChange={handleInputChange}  />
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