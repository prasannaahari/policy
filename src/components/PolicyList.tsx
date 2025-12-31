import { usePolicyStore } from "../store/policyStore";

function PolicyList() {
  const policies = usePolicyStore((state) => state.policies);
  const removePolicy = usePolicyStore((state) => state.removePolicy);

  return (
    <>
      <h2>policies</h2>
      {policies.length === 0 && <p>no policies found</p>}

      {policies.map((policy) => (
        <div key={policy.id}>
          <span>{policy.id}</span>
          <button onClick={() => removePolicy(policy.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default PolicyList;
