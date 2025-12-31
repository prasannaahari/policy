import { create } from "zustand";
import type { PolicyStore } from "../types/policy";

export const usePolicyStore=create<PolicyStore>((set)=>({
    policies:[],
    addPolicy:(policy)=>set((state)=>({policies:[...state.policies,policy]})),

    removePolicy:(id)=>set((state)=>({policies:state.policies.filter((p)=>p.id!==id)}))
    
}))