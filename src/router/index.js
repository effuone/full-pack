import About from "../pages/About";
import Categories from "../pages/Categories";
import CategoryIdPage from "../pages/CategoryIdPage";

export const publicRoutes = [
    {path: '/*', element: <About/>, exact: false},
    {path: '/categories', element: <Categories/>, exact: false},
    // {path: '/categories/:id', element: <CategoryIdPage/>, exact: true}
]