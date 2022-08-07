import axios from "axios"
const backendURL = 'http://localhost:7000/api/subCategories'
const recommendationsURL = 'http://localhost:7000/api/recommendations/'
export default class CategoryService
{
    static async getAll(limit = 10, page = 1)
    {
        try {
            const response = await axios.get(backendURL, {
                params: {
                    limit: limit,
                    page: page
                }
            })
            return response
        }catch(e) {
            console.log(e)
        }
    }
    static async getById(id)
    {
        try {
            const response = await axios.get(recommendationsURL, {
                params: {
                    id: id
                }
            })
            return response
        }catch(e) {
            console.log(e)
        }
    }
    static async getServicesByPostId(id)
    {
        try {
            const response = await axios.get(backendURL + id + '/services/')
            return response
        }catch(e) {
            console.log(e)
        }
    }
}