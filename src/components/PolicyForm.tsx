import React, { useState } from "react";
import { usePolicyStore } from "../store/policyStore";

function PolicyForm() {
  const [name, setName] = useState<string>("");
  const addPolicy = usePolicyStore((state) => state.addPolicy);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    addPolicy({
      id: crypto.randomUUID(),
      holderName:name
    });
    setName("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="policy name"
        />
        <br />

        <button>add policy</button>
      </form>
    </>
  );
}

export default PolicyForm;
