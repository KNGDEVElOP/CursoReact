import axios from "axios";

const baseUrl = 'http://localhost:8080';
export const findAll = async () => {
  try {
    const response =  await axios.get(baseUrl);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const create =async (name,desc,price) =>{
    try {
        return  await axios.post(baseUrl,{
            name,
            desc,
            price
        });
    } catch (error) {
        console.log(error);
    }
    return undefined;
}
export const update=async (id,name,desc,price) =>{
       try {
        return  await axios.put(`${baseUrl}/${id}`,{
            name,
            desc,
            price

        });
    } catch (error) {
        console.log(error);
    }
    return undefined
    
    
}
export const remove=async (id) =>{
    try {
        await axios.delete(`${baseUrl}/${id}`)
    } catch (error) {
        console.log(error)
    }
}