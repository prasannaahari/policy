import { create } from "zustand";
import type { PolicyStore } from "../types/policy";
import { addPolicy, deletePolicy, getPolicies, updatePolicy } from "../api/policies";

export const usePolicyStore = create<PolicyStore>((set) => ({
  policies: [],
  fetchPolicies:async()=> {
    const data=await getPolicies();
    set({policies:data})
  },

  addPolicy:async(policy)=> {
    await addPolicy(policy)
    const data=await getPolicies()
    set({policies:data})
  },

  updatePolicy:async(id, data)=>{
    await updatePolicy(id,data)
    const newData=await getPolicies()
    set({policies:newData})
  },
  deletePolicy:async(id)=>{
    await deletePolicy(id)
    const newData=await getPolicies()
    set({policies:newData})
  }

  
}));
