import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

// Import local images
import food1 from '../components/food1.jpg';
import food2 from '../components/food2.jpg';
import food3 from '../components/food3.jpg';
import food4 from '../components/food4.jpg';
import food5 from '../components/food5.jpg';
import food6 from '../components/food6.jpg';
import food7 from '../components/food7.jpg';
import food8 from '../components/food8.jpg';

const Home = () => {
    const MovieData = [
        { image: food1, title: 'BIRIYANI', description: ' Delisious chicken/mutton/beef/egg Biriyani' },
        { image: food2, title: 'PASTA', description: 'Yummy and creamy Pasta' },
        { image: food3, title: 'PIZZA', description: 'Veg or Non-Veg Pizza' },
        { image: food4, title: 'SEMIYA BIRIYANI', description: 'Authentic non-veg Semiya Biriyani ' },
        { image: food5, title: 'SHAWARMA', description: ' Juicy Non-Veg Shawarma  ' },
        { image: food6, title: 'IDLI VADA SAMBAR', description: 'Authentic Idli Vada Sambar combo ' },
        { image: food7, title: 'POROTTA BEEF', description: 'Kerala special Porotta and Beef combo ' },
        { image: food8, title: 'VEG PULAV', description: 'Mouth watering Veg Pulav ' },
    ];

    return (
        <div style={{ background: '#2b2b2b', minHeight: '100vh' }}>
            <Container>
                <Row>
                    {MovieData.map((image, index) => (
                        <Col key={index} md={3} className="mb-4">
                            <Card className='img mt-5' style={{ height: '535px' }} >
                                <div className="overlay">
                                    <span className="close-icon">X</span>
                                </div>
                                <Card.Img variant="top" src={image.image} alt={`Food ${index + 1}`} style={{ width: '100%', height: '300px' }} />
                                <Card.Body>
                                    <Card.Title>{image.title}</Card.Title>
                                    <Card.Text>
                                        {image.description}
                                    </Card.Text>
                                    <Button style={{ backgroundColor: '#008000' }}>Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Home;