import {findAllClubs} from "../repositories/clubs-repositories"
import * as httpResponse from "../utils/http-helper"

export const getClubService = async() =>{
 const data = await findAllClubs();
 let response = null;

 if(data){
  response = await httpResponse.ok(data);
 }else{
  response = await httpResponse.noContent();
 }
   return response;
}


 