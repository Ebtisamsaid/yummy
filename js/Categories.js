

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



async function getGategories(){
    $(".loading-screen").fadeIn(300)
    let response= await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let data = await response.json()
    
    // console.log(data);
   
    displayGategories(data)
    
    $(".loading-screen").fadeOut(300)
   
}

getGategories()
function displayGategories(data){
 
let arr=data.categories
cartona='';
for( i=0 ; i<arr.length;i++){
    cartona +=`
    
     <div class="col-md-3 col-sm-6" onclick='getGategoriesMeals("${arr[i].strCategory}")' >
                    <div class="card rounded-2 cursor-pointer">
                        <img src="${arr[i].strCategoryThumb}" alt=""  >
                        <div class="layer text-center" >
                             <h5 class=" fs-6">${arr[i].strCategory}</h5>
                             <p>${arr[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
                        </div>
                    </div>
                    
                    </div>
                  
    
    `
}
document.getElementById('mealsID').innerHTML=cartona;
}



async function getGategoriesMeals(category){
    $(".loading-screen").fadeIn(300)
    let response=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    let data= await response.json();
    console.log(data.meals);
    displaymeals(data)
    $(".loading-screen").fadeOut(300)

   }
   getGategoriesMeals()
   function displaymeals(data){
    let arr=data.meals
       let cartona=''
       for(i=0 ; i <arr.length ;i++ ){
           cartona +=`
           
           <div class="col-md-3 col-sm-6 "   onclick='showdetails(${arr[i].idMeal})'>
                       <div class="card text-center  rounded-2">
                           <img src="${arr[i].strMealThumb}" alt="" style="width: 200px;" >
                           <div class="layer " style="height: 200px; width: 200px;"> <p class=" fs-6 fw-bold position-relative top-50 translate-middle-y">${arr[i].strMeal}</p></div>
                       </div>
                       
                       </div>
                     
           `
       }
       document.getElementById('mealsID').innerHTML=cartona;
      }

      
      function showdetails(id){
        location.href=`./details.html?id=${id}`;
     }