import {request} from "./request.js"
//登录
let login = (params)=>request(params,"logintest","POST","application/x-www-form-urlencoded");
//获取地址
let addressDetail = (params)=>request(params,"address","GET");
export {login,addressDetail}
