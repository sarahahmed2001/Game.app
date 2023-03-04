import {ui} from './UI.module.js'
export class details {
constructor(id){
 this.gameId=id  
 this.classui= new ui()
 $("#btnClose").click(function(){

    $("#details").addClass("d-none").removeClass("d-block")
    $("#games").addClass("d-block").removeClass("d-none")
 })
}
async getAPI(){
this.classui.displayloading();
  const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '40980e0b03mshe779980ce6698bdp120974jsne85d23b457d4',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
   let data=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.gameId}`, options)
   let res =await data.json()
   this.classui.displaydetails(res)
   this.classui.hideloading()
   

  
}

}
