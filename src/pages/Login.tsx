import { useState } from "react"
import { useAuthStore } from "../store/authStore"

function Login() {
    const login=useAuthStore((state)=>state.login)
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")


    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault()
        login({name,email})
    }
  return (
    <div className="max-w-sm mx-auto mt-20 p-6 bg-white rounded shadow">
        <h1 className="text-xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name..." value={name} onChange={(e)=>setName(e.target.value)} className="border p-2 rounded"/>

            <input type="text" placeholder="email..." value={email} onChange={(e)=>setEmail(e.target.value)} className="border p-2 rounded"/>
            <br />

            <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Login</button>
        </form>
      
    </div>
  )
}

export default Login
