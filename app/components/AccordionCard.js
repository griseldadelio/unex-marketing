import { Card, Accordion, Col, Row } from 'react-bootstrap';
import Link from 'next/link';

const AccordionCard = ({ description, title, accordionData, back }) => {
  return (
    <Card className="my-3 shadow-sm ">
      <Row>
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
          </Card.Body>
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              Calendly.initPopupWidget({
                url: 'https://calendly.com/unextalent-info/30min',
              });
              return false;
            }}
            className="book-call ms-5"
          >
            Agenda una llamada
            <span className="circle" />
          </Link>
        </Col>
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
      </Row>
    </Card>
  );
};

export default AccordionCard;
