import axios from "axios"

export default async function signUp(){
    const users = await getBlogs();
    return <div> {users.map((user:user)=>(<div>{user.name} - {user.email}</div>))}</div>
}

interface user {
    name:string,email:string
}

async function getBlogs(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    return response.data;
}

