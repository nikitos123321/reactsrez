import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cards({ id, name, price, image, count, category, description }) {
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        console.log('Email:', email);
        console.log('ФИО:', fullName);
        handleClose(); 
    };

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        {price}
                    </Card.Text>
                    {count > 0 ? (
                        <Button variant="primary">В корзину</Button>
                    ) : (
                        <Button variant="warning" onClick={handleShow}>Заказать</Button>
                    )}
                </Card.Body>
            </Card>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Форма заказа</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Введите ваш Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formFullName">
                            <Form.Label>ФИО</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Введите ваше ФИО"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Отправить
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Cards;