import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CategoryItem from "./CategoryItem";
const CategoryList = ({categories}) => {
    return (
        <div style={{display: 'flex', justifyContent:'space-around', flexDirection: 'row', flexFlow: 'wrap', width: '100%', height:'auto'}}>
            {categories.map((category)=>
                <CategoryItem key={category.id} category={category}/>
            )}
        </div>
    )
}
export default CategoryList