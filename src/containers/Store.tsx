import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ProductCard from '../components/ProductCard'
import products from '../data/items.json'

export default function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className='g-3'>
        {products.map(product => (
          <Col>
            <ProductCard {...product} />
          </Col>
        ))}
      </Row>
    </>
  )
}
