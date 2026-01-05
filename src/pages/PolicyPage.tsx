import PolicyForm from "../components/PolicyForm"
import PolicyList from "../components/PolicyList"

function PolicyPage() {
  const user={id:"u3",role:"user",name:"prasanna"}
  return (
    <>
      <h1>Policy management</h1>
      <PolicyForm user={user}/>
      <br /><hr />
      <PolicyList user={user}/>
    </>
  )
}

export default PolicyPage
