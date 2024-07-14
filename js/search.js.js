



$('.sidebar .menu-toggle').on('click',function(){
    $('.inside-bar').animate({width:'show'},1000 ,function(){
        $('.sidebar .menu-toggle').hide(100,function(){
            $('.sidebar .close').show(100,function(){
                $('.sidebar .close').on('click',function(){
                    $('.inside-bar').animate({width:'toggle'},1000 ,function(){
                        $('.sidebar .close').hide(100,function(){
                            $('.sidebar .menu-toggle').show(100)
                        })
                    })
                })
            })
        })
    }
   
    
)})
$(function(){
    $(".loading-screen").fadeOut(500)
})

async function searchByname(idMeal){
    let response= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${idMeal}`)
    let data=await response.json()
        console.log(data);
        displaymeals(data)
}
searchByname()

function displaymeals(data){
    let arr=data.meals
       let cartona=''
       for(i=0 ; i <arr.length ;i++ ){
           cartona +=`
           
           <div class="col-3 " onclick='showdetails(${arr[i].idMeal})' >
                       <div class="card text-center  rounded-2">
                           <img src="${arr[i].strMealThumb}" alt=""  >
                           <div class="layer " > <p  class=" fs-6  position-relative top-50 translate-middle-y">${arr[i].strMeal}</p></div>
                       </div>
                       
                       </div>
                     
           `
       }
       document.getElementById('mealsID').innerHTML=cartona
      }
      

      let searchbyname=document.getElementById('searchbyname');
      searchbyname.addEventListener('change',function(){
        searchByname(searchbyname.value)
      })

      async function searchBYletter(letter){
        let response= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
        let data= await response.json()
        console.log(data);
        displaysearchBYletter(data)
      }
      searchBYletter()

       function displaysearchBYletter(data){
        let arr =data.meals
        let cartona=''
        for(i-0;i<arr.length;i++){
            cartona +=`
            
            <div class="col-3 col-sm-6 " onclick='showdetails(${arr[i].idMeal})' >
                       <div class="card text-center  rounded-2">
                           <img src="${arr[i].strMealThumb}" alt=""  >
                           <div class="layer " > <p class=" fs-6 position-relative top-50 translate-middle-y">${arr[i].strMeal}</p></div>
                       </div>
                       
                       </div>
            
            
            `
        }
        document.getElementById('mealsID').innerHTML=cartona
       }
       let searchbyletter=document.getElementById('searchbyletter');
       searchbyletter.addEventListener('change',function(){
        searchBYletter(searchbyletter.value)
       })

function showdetails(id){
   location.href=`./details.html?id=${id}`;
}


      