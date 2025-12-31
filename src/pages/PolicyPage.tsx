import PolicyForm from "../components/PolicyForm"
import PolicyList from "../components/PolicyList"

function PolicyPage() {
  return (
    <>
      <h1>Policy management</h1>
      <PolicyForm/>
      <br /><hr />
      <PolicyList/>
    </>
  )
}

export default PolicyPage
