import React, { Component } from "react";
import "../styles/BookList.css";
import "antd/dist/antd.css";
import { Card, Button, Col } from "antd";

const { Meta } = Card;

export class BookList extends Component {
  render() {
    return (
      <Col xs={24} sm={12} md={12} lg={8} xl={6}>
        <div className="col-car">
          <Card
            hoverable
            style={{ width: 320 }}
            cover={<img alt="example" src={this.props.image} />}
          >
            <Meta title={this.props.tl} description={this.props.description} />
            <div className="book-list">
              <div className="price-detail">
                <span>{this.props.price}</span>
                <a href="#">Detail</a>
              </div>
              <div className="button-cart">
                <Button type="primary"> Add Cart</Button>
              </div>
            </div>
          </Card>
        </div>
      </Col>
    );
  }
}

export default BookList;
