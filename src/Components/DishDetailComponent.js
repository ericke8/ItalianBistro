import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    renderComments(comments) {
        if (comments != null) {
            const allComments = comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>--{comment.author}, {comment.date}</p>
                    </div>
                );
            });
            return (
                <div>
                    <h4>Comments</h4>
                    {allComments}
                </div>
            );
        } else {
            return <div></div>;
        }
    }

    componentDidMount() {
        console.log('DishDetail Component componentDidMount invoked');
    }

    componentDidUpdate() {
        console.log('DishDetail Component componentDidUpdate invoked')
    }

    render() {
        console.log('DishDetail Component render invoked')

        if (this.props.selectedDish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg width="100%" src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                                <CardBody>
                                    <CardTitle><h1>{this.props.selectedDish.name}</h1></CardTitle>
                                    <CardText>{this.props.selectedDish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            {this.renderComments(this.props.selectedDish.comments)}
                        </div>
                    </div>
                </div>
            );
        } else {
            return <div></div>;
        }

    }
}

export default DishDetail;