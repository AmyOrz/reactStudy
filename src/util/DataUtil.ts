/// <reference path="../../typings/globals/bluebird/index.d.ts" />
/// <reference path="../../typings/globals/jquery/index.d.ts" />
export class DataService{
    constructor(){}

    get(url:string):Promise<string>{
        return this.getPromise(url);
    }
    private getPromise(url:string):Promise<string>{
        return new Promise((resolve:(result:string)=>void,reject:(error:string)=>void):void=>{  //传入2个函数当作参数，成功时执行resolve。
            $.ajax(<JQueryAjaxSettings>{
                url:url,
                cache:false,
                dataType:"json",
                type:"GET",
                success:resolve.bind(this),
                error:(jqXHR:JQueryXHR,status:string,message:string)=>{
                    reject(`status[${status}] message[${message}]`);
                }
            });
        });
    }
}
