import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Heading, Item, Thumbnail, SubHeading, Description } from './styles'

const CopyArea = ({ heading, items, thumbnail }) => {
  return (
    <Col xs={12}>
      <Row center="xs">
        <Col xs={12} sm={10} md={8} lg={12}>
          <Heading>{heading}</Heading>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4}>
          <Thumbnail src={thumbnail.path + '.' + thumbnail.extension} />
        </Col>
        <Col xs={12} md={8}>
          <Row>
            {items.map((item, index) => {
              return (
                <Col key={index} xs={12} md={5} mdOffset={1}>
                  <Item>
                    <img src={item.iconPath} alt={`${item.title} icon`} />
                    <SubHeading>{item.title}</SubHeading>
                    <Description>{item.description}</Description>
                  </Item>
                </Col>
              )
            })}
          </Row>
        </Col>
      </Row>
    </Col>
  )
}

export default CopyArea
