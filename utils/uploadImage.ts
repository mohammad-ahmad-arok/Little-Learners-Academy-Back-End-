const cloudinary=require("cloudinary").v2;

cloudinary.config({
    cloud_name: 'dvmfkvcsi',
    api_key:"465337869936246",
    api_secret:"f49_Jc7gf6Xf81I9oVCW3ss4JhI"
})


export const uploadImage=async(path:string)=>{
  try{
    const result=await cloudinary.uploader.upload(path);
    return result.secure_url;
  }catch(error){
    console.log(error)
  }
}






