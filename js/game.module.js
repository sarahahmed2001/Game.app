import {ui} from './UI.module.js'
import {details} from './details.module.js'
export class games{
constructor(){
    this.classui= new ui()
    self=this
    this.activenav();
$(".nav-link").click(function(e){
    $(e.target).addClass("active")
    $(e.target).parents().siblings().children().removeClass("active");

  let cate= e.target.getAttribute("category");

    self.activenav();
  
})


}
activenav(){
let cate= document.querySelector(".nav-item .active").getAttribute("category") 

this.getgames(cate)

}
async getgames(cate){
    this.classui.displayloading();
 const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '40980e0b03mshe779980ce6698bdp120974jsne85d23b457d4',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
       let data=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cate}`, options)
       let res =await data.json()
      
 this.classui.displayGame(res);
 this.classui.hideloading();   
 this.disDetails()   
   

}
disDetails(){
    document.querySelectorAll("#mycol").forEach((e) => {
        e.addEventListener("click", (el) => {     
            document.querySelector("#details").classList.add("d-block")
            document.querySelector("#details").classList.remove("d-none");
            document.querySelector("#games").classList.remove("d-block")
            document.querySelector("#games").classList.add("d-none");
            let id =e.getAttribute("gameid")
            
            this.classdetails= new details(id);
            this.classdetails.getAPI();
         });
        
        });

        // $("#mycol").click(function(){
        //     console.log("Ssssssss");
        //     $("#details").addClass("d-block").removeClass("d-none")
        //     $("#games").addClass("d-none").removeClass("d-block")
        // let id =$(this).attr("gameid")
        // console.log($(this).attr("gameid"));
        // this.classdetails= new details(id);
        // this.classdetails.getAPI();})
}
}