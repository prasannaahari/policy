import { useState } from "react";
import { usePolicyStore } from "../store/policyStore";
import type{ Policy, PolicyStatus } from "../types/policy";

type User = {
  id: string;
  role: string;
  name: string;
};

function PolicyForm({ user }: { user: User }) {
  const [name, setName] = useState<string>("");
  const addPolicy = usePolicyStore((state) => state.addPolicy);

  const STATUS_ACTIVE: PolicyStatus = "ACTIVE";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;

    const newPolicy: Policy = {
      id: crypto.randomUUID(),
      holderName: name,
      status: STATUS_ACTIVE,
      version: 1,
      createdAt: new Date().toISOString(),
      createdBy: user.id,
      assignedTo: ""
    };

    await addPolicy(newPolicy);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Policy name"
      />
      <br />
      <button type="submit">Add Policy</button>
    </form>
  );
}

export default PolicyForm;
