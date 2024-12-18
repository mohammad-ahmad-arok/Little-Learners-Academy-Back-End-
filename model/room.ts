import mongoose, { Schema } from 'mongoose';

interface Iroom {
    name:String,
    description:String,
    images:Array<String>
}


const roomSchema:Schema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        minlength:3,
        maxlength:50
    },
    description:{
        type:String,
        required:true,
        minlength:10,
        maxlength:200
    },

    images:[String]

},{timestamps:true})


const setImagesUrl=function(doc:Iroom) {
    
    let images:Array<String>=[]
    if(doc.images){
        doc.images.forEach(image=>{
            images.push(`${process.env.BASE_URL}/room/${image}`);
        })
        doc.images=images
      }
}

// roomSchema.pre(/^find/, function(next){
//    this.select("-__v");
//    next();
// })

roomSchema.post("save",function(doc:Iroom){
    setImagesUrl(doc)
});

roomSchema.post("init",function(doc:Iroom){
    setImagesUrl(doc)
});


export const Room=mongoose.model<Iroom>('Room',roomSchema);

