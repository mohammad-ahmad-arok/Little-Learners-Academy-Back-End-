
import expressAsyncHandler from "express-async-handler"
import {CommonQuestion} from "../model/CommonQuestion"
import { ApiFeatures } from "../utils/ApiFeatures"

export const getCommonQuestions=expressAsyncHandler(
    async (req:any, res:any) => {   
      const countDocument= await CommonQuestion.countDocuments();

    const feature=new ApiFeatures(CommonQuestion.find(),req.query)

    feature.Paginate(countDocument);

    const {mongooseQuery} = feature;

    const commonQuestions=await mongooseQuery;


    res.status(200).json(commonQuestions);

    }
)

export const getCommonQuestion =expressAsyncHandler(async (req:any, res:any) => {
      const { id } = req.params;
      const commonQuestion = await CommonQuestion.findById(id);
      if (!commonQuestion) {
        return res.status(404).json({ message: "common question not found" });
      }
      res.status(200).json(commonQuestion);
    }
)

export const createCommonQuestion = expressAsyncHandler(async (req:any, res:any) => {
          const commonQuestion = new CommonQuestion({
            question: req.body.question,
            answer: req.body.answer,
          });
      
          await commonQuestion.save();
      
          res.status(201).json(commonQuestion);
})


export const updateCommonQuestion=expressAsyncHandler(
    async (req:any, res:any) => {
          const commonQuestion = await CommonQuestion.findByIdAndUpdate(
            req.params.id,
            {
                question: req.body.question,
                answer: req.body.answer,
                },
            {
              new: true,
              runValidators: true,
            }
          );
      
          if (!commonQuestion) {
            return res.status(404).json({ message: "common question not found" });
          }
      
          res.status(200).json(commonQuestion);

    }
)

export const deleteCommonQuestion=expressAsyncHandler(
    async (req:any, res:any) => {
            const commonQuestion = await CommonQuestion.findByIdAndDelete(req.params.id);
            if (!commonQuestion) {
              return res.status(404).json({ message: "common question not found" });
            }
            res.status(200).json({ message: "common question deleted successfully" });
      

    }
)