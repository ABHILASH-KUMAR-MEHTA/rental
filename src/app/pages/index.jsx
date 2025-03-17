'use client'; // Ensures the file runs in client-side
import LayoutTwo from '../layouts/layout';
import { Container, Row, Col } from 'react-bootstrap';
import ProductItem from '../components/Card/Card';
import { useEffect, useState } from 'react';

function HomeVersionThree() {
  const [products, setProducts] = useState([]);

  return (
    <LayoutTwo topbar={true}>
      {/* PRODUCT SLIDER AREA */}
      <div className='ltn__product-slider-area ltn__product-gutter pt-50 pb-90 plr--7'>
        <Container fluid>
          <Row>
            <Col lg={12}>
              <ProductItem />
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutTwo>
  );
}

export default HomeVersionThree;
