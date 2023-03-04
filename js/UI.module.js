export class ui{
    constructor(){}
displayloading(){
$("#load").addClass("d-flex").removeClass("d-none")
setTimeout(()=>
{
    $("#load").removeClass("d-flex")
}
,10000);
}
hideloading(){
    $("#load").removeClass("d-flex").addClass("d-none")
}
displaydetails(data){
  
let temp=''
temp+=`<div class="col col-md-4">
<img src="${data.thumbnail}" class="w-100" alt="">
   </div>
   <div class="col col-md-8 ">
   <h3>Title: ${data.title}</h3>
   <div class="categ">
      <p>Category:</p>
      <p class="ms-1 badge text-bg-info">${data.genre}</p>
         </div>
   <div class="categ">
<p>Platform:</p>
<p class="ms-1 badge text-bg-info">${data.platform}</p>
   </div>
   <div class="categ">
      <p>Status:</p>
      <p class="ms-1 badge text-bg-info">${data.status}</p>
         </div>
         <p class="font">${data.description}
            </p>
            <a class="btn btn-outline-warning text-white" target="_blank" href="${data.game_url}">Show Game</a>
         </div>`;
  
  $("#myrow2").html(temp); 
}
displayGame(data){
    let temp='';
for(let i=0;i<data.length;i++){
 temp+=`<div class="col " >
 <div class="inner rounded-1  " gameid="${data[i].id}" id="mycol" >

  <div class="myimg  pb-2  position-relative">
<img src="${data[i].thumbnail}" class="w-100 rounded-1" alt="">
<div class="layer">

</div>
</div>

<div class="card-body  pt-0">
  <div class="card-head ">
      <h6> ${data[i].title}
      </h6>
      <span class="box px-2 py-1  rounded-2  mt-1"> free</span>
  </div>
  <p class="text-center paragraph">${data[i].short_description.split(" ",8)}</p>
</div>
<div class="end p-2">
 
      <div class=" txt rounded-1 px-1 ">${data[i].genre}</div>
      <div class=" txt rounded-1 px-1">${data[i].platform}</div>

</div>
 </div> 
</div>`   
}
$("#myrow").html(temp);
}
}