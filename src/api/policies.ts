import axios from "axios";
const BASE_URL = "http://localhost:4000/";

export const getPolicies = async () => {
  const res = await axios.get(`${BASE_URL}policies`);
  return res.data;
};

export const addPolicy=async(policy:any)=>{
    const res=await axios.post(`${BASE_URL}policies`,policy)
    return res.data
}

export const updatePolicy =async(id:string,data:any)=>{
    const res=await axios.patch(`${BASE_URL}policies/${id},data`,data)
    return res.data
}

export const deletePolicy=async(id:string)=>{
    const res=await axios.delete(`${BASE_URL}policies/${id}`)
    return res.data
}