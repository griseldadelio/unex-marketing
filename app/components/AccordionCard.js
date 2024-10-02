'use client';
import React, { useEffect, useState } from 'react';
import { Card, Accordion, Col, Row } from 'react-bootstrap';
import { PopupButton } from 'react-calendly';

const AccordionCard = ({ description, title, accordionData, back }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <Card className="my-3 shadow-sm ">
      <Row>
        <Col sm={12} lg={6}>
          <Card.Body>
            <Card.Title>
              <span className="m-2 p-2">
                <i>
                  <strong>{description} </strong>
                </i>
              </span>
            </Card.Title>
            <h2 className="card-head m-2 p-2">{title}</h2>
            <Accordion defaultActiveKey="0">
              {accordionData.map((item, index) => (
                <Accordion.Item eventKey={index} key={index}>
                  <Accordion.Header>
                    <strong>{item.header}</strong>
                  </Accordion.Header>
                  <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
            <span className="circle" />
            {isClient && (
              <PopupButton
                url="https://calendly.com/unextalent-info/30min"
                rootElement={document.body}
                text="Agenda una llamada"
                className="book-call "
              />
            )}
          </Card.Body>
        </Col>
        <Col
          sm={12}
          lg={6}
          style={{
            backgroundImage: `url(${back})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '50vh',
            margin: '0',
          }}
        />
      </Row>
    </Card>
  );
};

export default AccordionCard;
