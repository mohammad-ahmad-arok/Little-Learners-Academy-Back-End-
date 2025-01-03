export class ApiError extends Error {

    statusCode:number;
    status : String;

    constructor(message:string,statusCode:number){
        super(message);
        this.statusCode=statusCode;
        this.status=`${statusCode}`.startsWith("4")?"fail":"error";
    }
}


