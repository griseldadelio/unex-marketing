'use client';
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

const SimpleCard = ({ title, description, text, back }) => {
  return (
    <Card className="my-3 shadow-sm ">
      <Row>
        <Col
          style={{
            backgroundImage: `url(${back})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '50vh',
            margin: '0',
          }}
        />
        <Col>
          <Card.Body>
            <Card.Title>
              <span className="m-2 p-2">
                <i>
                  <strong>{description} </strong>
                </i>
              </span>
            </Card.Title>
            <h2 className="card-head m-2 p-2">{title}</h2>
            <Card.Text>{text}</Card.Text>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                Calendly.initPopupWidget({
                  url: 'https://calendly.com/unextalent-info/30min',
                });
                return false;
              }}
              className="book-call ms-4"
            >
              Agenda una llamada
              <span className="circle" />
            </Link>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default SimpleCard;
