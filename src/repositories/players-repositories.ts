import { playerModel } from "../models/player-model";
import { playerStatisticModel } from "../models/statistic-models";

const database: playerModel[] = [
    {
      "id": 1,
      "name": "Lionel Messi",
      "club": "Paris Saint-Germain",
      "nationality": "Argentina",
      "position": "Forward",
      "statistics": {
        "Overall": 93,
        "Pace": 85,
        "Shooting": 94,
        "Passing": 91,
        "Dribbling": 95,
        "Defending": 38,
        "Physical": 65
      }
    },
    {
      "id": 2,
      "name": "Cristiano Ronaldo",
      "club": "Al-Nassr",
      "nationality": "Portugal",
      "position": "Forward",
      "statistics": {
        "Overall": 90,
        "Pace": 87,
        "Shooting": 92,
        "Passing": 82,
        "Dribbling": 85,
        "Defending": 35,
        "Physical": 78
      }
    },
    {
      "id": 3,
      "name": "Neymar Jr",
      "club": "Al-Hilal",
      "nationality": "Brazil",
      "position": "Forward",
      "statistics": {
        "Overall": 89,
        "Pace": 90,
        "Shooting": 85,
        "Passing": 88,
        "Dribbling": 93,
        "Defending": 30,
        "Physical": 60
      }
    },
    {
      "id": 4,
      "name": "Kevin De Bruyne",
      "club": "Manchester City",
      "nationality": "Belgium",
      "position": "Midfielder",
      "statistics": {
        "Overall": 91,
        "Pace": 74,
        "Shooting": 86,
        "Passing": 93,
        "Dribbling": 88,
        "Defending": 64,
        "Physical": 78
      }
    },
    {
      "id": 5,
      "name": "Kylian Mbappé",
      "club": "Paris Saint-Germain",
      "nationality": "France",
      "position": "Forward",
      "statistics": {
        "Overall": 92,
        "Pace": 97,
        "Shooting": 89,
        "Passing": 80,
        "Dribbling": 92,
        "Defending": 36,
        "Physical": 76
      }
    },
    {
      "id": 6,
      "name": "Robert Lewandowski",
      "club": "FC Barcelona",
      "nationality": "Poland",
      "position": "Forward",
      "statistics": {
        "Overall": 91,
        "Pace": 78,
        "Shooting": 92,
        "Passing": 79,
        "Dribbling": 85,
        "Defending": 43,
        "Physical": 82
      }
    },
    {
      "id": 7,
      "name": "Virgil van Dijk",
      "club": "Liverpool",
      "nationality": "Netherlands",
      "position": "Defender",
      "statistics": {
        "Overall": 90,
        "Pace": 77,
        "Shooting": 60,
        "Passing": 71,
        "Dribbling": 72,
        "Defending": 92,
        "Physical": 86
      }
    },
    {
      "id": 8,
      "name": "Mohamed Salah",
      "club": "Liverpool",
      "nationality": "Egypt",
      "position": "Forward",
      "statistics": {
        "Overall": 90,
        "Pace": 93,
        "Shooting": 86,
        "Passing": 81,
        "Dribbling": 90,
        "Defending": 45,
        "Physical": 75
      }
    },
    {
      "id": 9,
      "name": "Luka Modric",
      "club": "Real Madrid",
      "nationality": "Croatia",
      "position": "Midfielder",
      "statistics": {
        "Overall": 88,
        "Pace": 73,
        "Shooting": 75,
        "Passing": 90,
        "Dribbling": 91,
        "Defending": 69,
        "Physical": 68
      }
    },
    {
      "id": 10,
      "name": "Erling Haaland",
      "club": "Manchester City",
      "nationality": "Norway",
      "position": "Forward",
      "statistics": {
        "Overall": 91,
        "Pace": 89,
        "Shooting": 93,
        "Passing": 65,
        "Dribbling": 80,
        "Defending": 45,
        "Physical": 88
      }
    }
  ];
  



export const findAllPlayers = async (): Promise<playerModel[]> =>{
    return database;
};

export const findAllPlayerById = async(
    id:number
): Promise<playerModel | undefined> => {
    return database.find((player) => player.id===id)
}

export const insertPlayer = async(player:playerModel) =>{
 database.push(player);

}

export const deleteonePlayer = async(id:number) =>{
 const index = database.findIndex(p => p.id ===id);
 
 if(index!= -1){
  //deletar uma casa apos achar o index do delete
  database.splice(index, 1)

   return true
 }
  return false
};


export const updateOnePlayer = async(id:number, statistic: playerStatisticModel) =>{
//encontra o player
  const playerIndex = database.findIndex(p => p.id===id);
 
  if(playerIndex!= -1){
  database[playerIndex].statistics = statistic;

 }
    return database[playerIndex];
}