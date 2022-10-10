import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SubCategoryService from "../api/SubCategoryService";
import { useFetching } from "../hooks/useFetching";
import {Card, Button} from 'react-bootstrap'
import Loader from "../components/ui/loader/Loader";
import ProductItem from "../components/ProductItem";

function isEmpty(obj) {
    for(var prop in obj) {
      if(Object.prototype.hasOwnProperty.call(obj, prop)) {
        return false;
      }
    }
  
    return JSON.stringify(obj) === JSON.stringify({});
  }

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
            : !isEmpty(product) ? <ProductItem product={product}/> : <div style={{color:'red', fontSize:'50px', justifyContent:'center'}}>Item is unavailable on marketplaces :(</div>
            }
        </div>
    )
}
export default CategoryIdPage