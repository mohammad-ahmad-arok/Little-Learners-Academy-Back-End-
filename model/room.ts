import mongoose from 'mongoose';

interface Doc {
    name:String,
    description:String,
    images:Array<String>
}


const roomSchema=new mongoose.Schema({
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


const setImagesUrl=function(doc:Doc) {
    
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

roomSchema.post("save",function(doc:Doc){
    setImagesUrl(doc)
});

roomSchema.post("init",function(doc:Doc){
    setImagesUrl(doc)
});


export const Room=mongoose.model('Room',roomSchema);

