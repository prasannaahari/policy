import { useEffect } from "react";
import { usePolicyStore } from "../store/policyStore";

function PolicyList({ user }: { user: any }) {
  const { policies, fetchPolicies } = usePolicyStore();

  useEffect(() => {
    fetchPolicies();
  }, []);

  const visiblePolicies =
    user.role === "user"
      ? policies.filter((p) => p.assignedTo === user.id)
      : policies;

  return (
    <div>
      <h2>Policies</h2>
      <ul>
        {visiblePolicies.map((p) => (
          <li key={p.id}>
            {p.holderName} - {p.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PolicyList;
