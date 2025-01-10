import {clubModel} from "../models/clubs-models"
// ler arquivos do sistema operacional
import fs from "fs/promises";



export const findAllClubs = async(): Promise<clubModel[]> =>{
// fazer a leitura do arquivo
  const data = await fs.readFile("./src/data/clubs.json","utf-8");
 
  // vira em texto, converter em objeto   
 const clubs: clubModel[] = JSON.parse(data);

    return clubs; 

}