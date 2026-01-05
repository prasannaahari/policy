export type Policy = {
  id: string;
  policyNumber?: string;
  holderName: string;
  premium?: number;
  status: PolicyStatus;
  version: number;
  createdAt: string;
  assignedTo: string;
  createdBy: string;
};
export type PolicyStatus = "ACTIVE" | "EXPIRED" | "PENDING";

export type PolicyStore = {
  policies: Policy[];
  fetchPolicies: () => Promise<void>;
  addPolicy: (policy: Policy) => Promise<void>;
  updatePolicy: (id: string, data: Partial<Policy>) => Promise<void>;
  deletePolicy: (id: string) => Promise<void>;
};
