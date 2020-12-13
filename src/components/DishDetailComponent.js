import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";


export class DishDetail extends Component {
  renderComment(comment) {
    return (
      <div className="col-12 m-1">
        <p>{comment.comment}</p>
        <p>
          -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
        </p>
      </div>
    );
  }
  render() {
    const dish = this.props.dish;
    if (dish) {
      return (
        <>
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>
                  <strong>{dish.name}</strong>
                </CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-6 m-1">
            <div className="row">
              <div className="col-12">
                <strong>Comments</strong>
              </div>
              {dish.comments.map((comment) => (
                <div key={comment.id}>{this.renderComment(comment)}</div>
              ))}
            </div>
          </div>
        </>
      );
    }
    return <div></div>;
  }
}

export default DishDetail;