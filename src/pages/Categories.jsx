import React from "react"
import { useState, useEffect } from "react"
import { useCategories } from "../hooks/useCategories"
import CategoryList from '../components/CategoryList'
import CategoryFilter from "../components/CategoryFilter"
import Loader from "../components/ui/loader/Loader"
import Pagination from "../components/ui/pagination/Pagination"
import { getPageCount } from "../utils/pages"
import { useFetching } from "../hooks/useFetching"
import SubCategoryService from "../api/SubCategoryService"
const Categories = () => {
  const [categories, setCategories] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(15);
  const [page, setPage] = useState(1);
  const sortedAndSearchedCategories = useCategories(categories, filter.sort, filter.query)
  const [fetchCategories, areCategoriesLoading, categoryError] = useFetching(async(limit, page)=>{
    const response = await SubCategoryService.getAll(limit, page);
    setCategories(response.data.results)
    const totalCount = response.data['totalCount']
    setTotalPages(getPageCount(totalCount, limit))
  })

  useEffect(() => {
    fetchCategories(limit,page)
  }, [page])

  const changePage = (page)=>{
    setPage(page)
    fetchCategories(limit,page)
  }
    return (
        <div style={{marginTop:'30px'}}>
        <CategoryFilter filter={filter} setFilter={setFilter}/> 
      {categoryError && <h1>Произошла ошибка ${categoryError}</h1>}
      {areCategoriesLoading === true
      ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
      : <CategoryList categories={sortedAndSearchedCategories}/>
      }
      <Pagination
        page={page}
        changePage={changePage}
        totalPages={totalPages}
      />
        </div>
    )
}
export default Categories