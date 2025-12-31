export type Policy={
    id:string;
    policyNumber?:string;
    holderName:string;
    premium?:number;
    status?:PolicyStatus
};
export type PolicyStatus="ACTIVE"|"EXPIRED"|"PENDING";

export type PolicyStore={
    policies:Policy[];
    addPolicy:(policy:Policy)=>void;
    removePolicy:(id:string)=>void
}
