const cloudinary=require("cloudinary").v2;

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET,
})


export const uploadImage=async(path:string)=>{
  try{
    const result=await cloudinary.uploader.upload(path);
    return result.secure_url;
  }catch(error){
    console.log(error)
  }
}






