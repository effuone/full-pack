// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import CategoryService from "../api/CategoryService";
// import { useFetching } from "../hooks/useFetching";
// import Loader from "../components/UI/loader/Loader";

// const CategoryIdPage = ()=>{
//     const params = useParams()
//     const [category, setCategory] = useState({})
//     const [subCategories, setSubCategories] = useState([])
//     const [fetchCategoryById, isLoading, error] = useFetching(async(id)=>{
//         const response = await CategoryService.getByUrl(params.id)
//         setCategory(response.data)
//     })
//     const [fetchComments, isComLoading, comError] = useFetching(async(id)=>{
//         const response = await CategoryService.getById(params.id)
//         setSubCategories(response.data)
//     })
//     useEffect(()=>{
//         fetchPostById(params.id)
//         fetchComments(params.id)
//     }, [])
//     return(
//         <div style={{marginTop: 70}}>
//             <Card style={{ width: '18rem', marginBottom: '25px'}}>
//                 <Card.Img variant="top" src={props.category.image} style={{width:'200px', height:'200px', justifySelf:'center'}}/>
//                 <Card.Header>{props.category.category}.</Card.Header>
//                 <Card.Body>
//                     <Card.Title style={{overflow:"hidden"}}>{props.category.name}</Card.Title>
//                     <Card.Text>
//                     <b>{props.category.average_price} тенге</b>
//                     </Card.Text>
//                     <Button onClick={() => navigate(`/categories/${props.category.id}`)}variant="primary">Open</Button>
//                 </Card.Body>
//             </Card>
//         </div>
//     )
// }
// export default CategoryIdPage