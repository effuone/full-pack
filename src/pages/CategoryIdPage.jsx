import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SubCategoryService from "../api/SubCategoryService";
import { useFetching } from "../hooks/useFetching";
import {Card, Button} from 'react-bootstrap'
import Loader from "../components/ui/loader/Loader";
import ProductItem from "../components/ProductItem";

const CategoryIdPage = ()=>{
    const params = useParams()
    const [product, setProduct] = useState({})
    const [fetchProductById, isLoading, error] = useFetching(async(id)=>{
        const response = await SubCategoryService.getById(params.id)
        console.log(response.data)
        setProduct(response.data)
    })
    useEffect(()=>{
        fetchProductById(params.id)
    }, [])
    return(
        <div style={{marginTop: 70, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <h1>Best product of this category is: </h1>
            {isLoading
            ? <Loader/>
            : <ProductItem product={product}/>
            }
        </div>
    )
}
export default CategoryIdPage