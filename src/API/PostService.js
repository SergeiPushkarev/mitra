import axios from "axios"

export default class API {
    static async getAllPosts () {
        try {
            const posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
            return posts
        } catch (error) {
            throw error
        }
        
    }
    static async getLimitPosts (limit=10, page=1){
        try {
            const posts = await axios.get('https://jsonplaceholder.typicode.com/posts', {params:{_limit:limit, _page:page}})
            return posts
        } catch (error) {
            throw error
        }
       
    }
    static async getUser (userId) {
        try {
            const users = await axios.get('https://ddjsonplaceholder.typicode.com/users/'+userId)
            return users
        } catch (error) {
            throw error
        }
        
    }
    static async getUserPosts (userId) {
        try {
            const userPosts = await axios.get('https://jsonplaceholder.typicode.com/users/'+userId+'/posts')
            return userPosts
        } catch (error) {
            throw error
        }
    }
    static async getComments (postId) {
        try {
            const comments = await axios.get('https://jsonplaceholder.typicode.com/comments?postId='+postId)
            return comments
        } catch (error) {
            throw error
        }
    }
}