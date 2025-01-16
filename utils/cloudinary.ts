const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export const uploadImageCloudinary = async (path: string) => {
  try {
    const result = await cloudinary.uploader.upload(path);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const removeImageCloudinary = async (Model:any,id:string) => {
  try {
     const doc=await Model.findById(id);
     if(doc.image.public_id ){
      const result = await cloudinary.uploader.destroy(doc.image.public_id)
      return result
    }
    else if(doc.icon.public_id){
      const result = await cloudinary.uploader.destroy(doc.icon.public_id)
      return result
     }
     else if(doc.photo.public_id){
      const result = await cloudinary.uploader.destroy(doc.photo.public_id)
      return result
     }
      return ;
  } catch (error) {
    console.log(error);
  }
};

export const removeImagesCloudinary = async(Model:any,id:string)=>{
  try {
    const doc=await Model.findById(id);
    if(doc.images){
      doc.images.forEach(async (image:{url:string,public_id:string,_id:string})=>{
        const result = await cloudinary.uploader.destroy(image.public_id)    
      })
    }

  } catch (error) {
    console.log(error)
  }
}

