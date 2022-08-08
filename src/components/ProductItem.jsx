import React from "react"
import { Card } from "react-bootstrap"
const ProductItem = (props) => {
    return (
        <Card style={{ width: '20rem', marginBottom: '25px'}}>
            <Card.Img variant="top" src={props.product.image} style={{width:'200px', height:'200px', alignSelf:'center'}}/>
            <Card.Header style={{textAlign: 'center'}}><a href={props.product.url}>{props.product.name}.</a></Card.Header>
            <Card.Body>
                <Card.Text style={{textAlign: 'center', fontSize: '20px', color: 'darkblue'}}>
                <b>{props.product.price} тенге</b>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default ProductItem