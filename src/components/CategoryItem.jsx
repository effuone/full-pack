import React from "react";
import { Card, Button } from "react-bootstrap";
const CategoryItem = (props) => {
    return (
        <Card style={{ width: '18rem', marginBottom: '25px'}}>
            <Card.Img variant="top" src={props.category.image} style={{width:'200px', height:'200px', alignSelf:'center'}}/>
            <Card.Header style={{textAlign: 'center'}}>{props.category.category}.</Card.Header>
            <Card.Body>
                <Card.Title style={{overflow:"hidden", textAlign: 'center'}}>{props.category.name}</Card.Title>
                <Card.Text style={{textAlign: 'center', fontSize: '20px', color: 'darkblue'}}>
                <b>{props.category.average_price} тенге</b>
                </Card.Text>
                <Button variant="primary">Open</Button>
            </Card.Body>
        </Card>
    )
}
export default CategoryItem