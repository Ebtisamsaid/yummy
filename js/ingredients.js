

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

async function getIngredients(){
    $(".loading-screen").fadeIn(300)
    let response=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    let data= await response.json();
    // console.log(data);
    displayIngredients(data.meals.slice(0,20))
    $(".loading-screen").fadeOut(500)
}


getIngredients()
function displayIngredients(arr){
   
    let cartona='';
    for(i=0;i<arr.length;i++){
        cartona +=`
        
           
        <div class="col-md-4 col-sm-6" onclick='getIngredientMeals("${arr[i].strIngredient}")'>
                    <div class="card text-white text-center ">
                         <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                       <h3>${arr[i].strIngredient}</h3>
                       <p class="text-center">${arr[i].strDescription.split(' ').slice(0,20).join(' ')}</p>
                    </div>
                    
                    </div>
        
        
        `
    }
    document.getElementById('homedis').innerHTML=cartona;
}

async function getIngredientMeals(ingredient){

    let response=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    let data= await response.json();
    // console.log(data.meals.slice(0,20));
    displaymeals(data)
   
}
getIngredientMeals()

function displaymeals(data){
    let arr =data.meals.slice(0,20);
       let cartona=''
       for(i=0 ; i <arr.length ;i++ ){
           cartona +=`
           
           <div class="col-md-3 col-sm-6" onclick="showdetails(${arr[i].idMeal})">
                       <div class="card text-center  rounded-2">
                           <img src="${arr[i].strMealThumb}" alt="" style="width: 200px;" >
                           <div class="layer " style="height: 200px; width: 200px;"> <p class=" fs-2 position-relative top-50 translate-middle-y">${arr[i].strMeal}</p></div>
                       </div>
                       
                       </div>
                     
           `
       }
       document.getElementById('homedis').innerHTML=cartona;
      }

      function showdetails(id){
        location.href=`./details.html?id=${id}`;
     }
     










