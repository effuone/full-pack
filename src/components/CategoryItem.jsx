import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const CategoryItem = (props) => {
    const navigate = useNavigate()
    return (
        <Card style={{ width: '18rem', marginBottom: '25px'}}>
            <Card.Img variant="top" src={props.category.image} style={{width:'200px', height:'200px', alignSelf:'center'}}/>
            <Card.Header style={{textAlign: 'center'}}>{props.category.category}.</Card.Header>
            <Card.Body style={{display: 'flex', flexDirection: 'column'}}>
                <Card.Title style={{overflow:"hidden", textAlign: 'center'}}>{props.category.name}</Card.Title>
                <Card.Text style={{textAlign: 'center', fontSize: '20px', color: 'darkblue'}}>
                <b>{props.category.average_price} тенге</b>
                </Card.Text>
                <Button
                variant="primary"
                style={{justifySelf: 'center'} }
                onClick={() => navigate(`/categories/${props.category.id}`)}
                >Купить</Button>
            </Card.Body>
        </Card>
    )
}
export default CategoryItem