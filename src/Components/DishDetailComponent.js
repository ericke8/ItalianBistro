import React, { Component } from 'react';
import { Card, CardText, CardBody } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        if (this.props.selectedDish != null) {
            return (
                <Card>
                    <CardBody>
                        <CardText><h1>Description</h1></CardText>
                        <CardText>{this.props.selectedDish.description}<br/><br/><br/></CardText>
                        <CardText><h1>Comments</h1></CardText>
                        <CardText>{this.props.selectedDish.comments}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return <div></div>;
        }

    }
}

export default DishDetail;