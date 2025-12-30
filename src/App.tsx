import Login from "./pages/Login"
import { useAuthStore } from "./store/authStore"
import Dashboard from "./pages/Dashboard"

function App() {
  const isLoggedIn=useAuthStore((state)=>state.isLoggedIn)

  return (
    <>
      {isLoggedIn?<Dashboard/>:<Login/>}
    </>
  )
}

export default App
