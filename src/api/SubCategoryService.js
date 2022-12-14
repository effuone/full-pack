import axios from "axios"
const backendURL = 'https://full-pack.herokuapp.com/api/subCategories'
const recommendationsURL = 'https://full-pack.herokuapp.com/api/recommendations/'
export default class SubCategoryService
{
    static async getAll(limit = 660, page = 1)
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
            const response = await axios.get(recommendationsURL + id)
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