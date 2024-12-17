interface Paginate{

        currentPage:number,
        limit:number,
        numberOfPages:number ,
        next:number,
        prev:number   
}

export class ApiFeatures{
    mongooseQuery:any;
    queryString:any;
    pagination:any;
    constructor(mongooseQuery:any,queryString:String){
        this.mongooseQuery = mongooseQuery;
        this.queryString = queryString;
    }
    Paginate(countDocuments:number){
        const page:number=this.queryString.page *1 ||1;
        const limit:number=this.queryString.limit*1 || 50;
        const skip:number=(page -1 )*limit;

        const endIndex=limit*page;

        const pagination:Paginate={
            currentPage:0,
            limit:0,
            numberOfPages:0,
            next:0,
            prev:0
        };
        pagination.currentPage=page;
        pagination.limit=limit;
        pagination.numberOfPages=Math.ceil(countDocuments/limit);

        if(endIndex<countDocuments){
            pagination.next=page+1
        }
        
        if(skip>0){
            pagination.prev=page-1;
        }

        this.mongooseQuery=this.mongooseQuery.skip(skip).limit(limit)
        this.pagination=pagination;
        return this
    }
    Filter(){
        const queryStringObj={...this.queryString};
        const excludesFields = ["page", "sort", "limit", "fields", "keyword"];
        excludesFields.forEach((field) => {
            delete queryStringObj[field];
          });

        let queryStr=JSON.stringify(queryStringObj);
        queryStr=queryStr.replace(/\b(gt|lt|gte|lte)\b/g, (match) => `$${match}`);

        this.mongooseQuery=this.mongooseQuery.find(JSON.parse(queryStr));

        return this;
        
    }
}

