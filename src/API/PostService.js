import axios from "axios"

export default class API {
    static async getAllPosts () {
        const posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return posts
    }
    static async getLimitPosts (limit=10, page=1){
        const posts = await axios.get('https://jsonplaceholder.typicode.com/posts', {params:{_limit:limit, _page:page}})
        return posts
    }
    static async getPostUser (userId) {
        const users = await axios.get('https://jsonplaceholder.typicode.com/users/', {params:userId})
        return users
    }
}