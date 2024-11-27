

export class ApiFeatures{
    mongooseQuery:any;
    queryString:any;  
    constructor(mongooseQuery:any,queryString:String){
        this.mongooseQuery = mongooseQuery;
        this.queryString = queryString;
    }
    Paginate(){

        const page:number=this.queryString.page *1 ||1;
        const limit:number=this.queryString.limit*1 || 50;
        const skip:number=(page -1 )*limit;
        this.mongooseQuery=this.mongooseQuery.skip(skip).limit(limit)
        
        return this
    }

}

