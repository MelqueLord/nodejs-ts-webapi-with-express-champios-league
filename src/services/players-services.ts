import { playerModel } from "../models/player-model";
import * as playersRepositories from "../repositories/players-repositories";
import * as httpResponse from "../utils/http-helper";
import { playerStatisticModel } from "../models/statistic-models";

export const getPlayerService = async () => {
  const data = await playersRepositories.findAllPlayers();
  let response = null;

  if (data) {
    response = await httpResponse.ok(data);
  } else {
    response = await httpResponse.noContent();
  }

  return response;
};

export const getPlayerByIdService = async (id: number) => {
  //pedir para o repositorio de dados
  const data = await playersRepositories.findAllPlayerById(id);
  let response = null;

  if (data) {
    response = await httpResponse.ok(data);
  } else {
    response = await httpResponse.noContent();
  }

  return response;
};

export const createPlayerService = async (player: playerModel) => {
  let response = null;

  if (Object.keys(player).length != 0) {
    await playersRepositories.insertPlayer(player);
    response = await httpResponse.created();
  } else {
    response = await httpResponse.badRequest();
  }
  return response;
};

export const deletePlayerService = async(id:number) => {
  const data = await playersRepositories.findAllPlayerById(id);
  let response = null;
  const isDeleted =   await playersRepositories.deleteonePlayer(id);
  if(isDeleted){
    response = await httpResponse.ok({message: "deleted"})

  }else{
     response = await httpResponse.badRequest();
  }
 
 
  return response;

}


export const updatePlayerService = async(id:number, statistic: playerStatisticModel) =>{
const data = await playersRepositories.updateOnePlayer(id, statistic);
let response = null
if(Object.keys(data).length===0){
   response = await httpResponse.badRequest(); 
}else{
  response = await httpResponse.ok(data); 
}

 

return response;


}