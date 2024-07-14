

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

// $(document).ready(() => {

//         $(".loading-screen").fadeOut(500)
//         $("body").css("overflow", "visible")

//     })
$(function(){
    $(".loading-screen").fadeOut(500)
})


async function getmeals(){
    let response= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    
    let data = await response.json()
    console.log(data);
  
    displaymeals(data);
}
getmeals()


   function displaymeals(data){
 let arr=data.meals
    let cartona=''
    for(i=0 ; i <arr.length ;i++ ){
        cartona +=`
        
        <div class="col-md-3 col-sm-12 " onclick='showdetails(${arr[i].idMeal})' >
                    <div class="card text-center  rounded-2">
                        <img src="${arr[i].strMealThumb}" alt="" ">
                        <div class="layer " > <p class=" fs-2 position-relative top-50 translate-middle-y">${arr[i].strMeal}</p></div>
                    </div>
                    
                    </div>
                  
        `
    }
    document.getElementById('homedis').innerHTML=cartona;
   }
   function showdetails(id){
    location.href=`./details.html?id=${id}`;
 }


//    async function getDetailsmeal(){
//     let response =await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52771`)
//     let data= await response.json();
//     console.log(data);
//     displayDetailsmeal(data)
//    }
//    getDetailsmeal()
//    function displayDetailsmeal(data){
//     let arr =data.meals;
//     let cartona='';
//     for(i=0;i<arr.length;i++){
//         cartona +=`

//              <div class="col-md-5 ">
//                     <img src="${arr[i].strMealThumb}" alt="" style="width: 70%; transform: translateX(-35%);" class="rounded position-relative start-50 ">
//                     <h3 class="text-white text-center mt-3 ms-5">${arr[i].strMeal}</h3>
//                 </div>
//                 <div class="col-md-7 text-white">
//                  <h2>Instructions</h2>
//                  <p>${arr[i].strInstructions}</p>
//                   <h3>Area : ${arr[i].strArea}</h3>
//                   <h3>Category : ${arr[i].strCategory}</h3>
//                   <h3 class="mb-4">Recipes :</h3>
//                   <span class="recipes p-1 rounded my-5 mx-2">${arr[i].strIngredient1}</span>
//                   <span class="recipes p-1 rounded my-5 mx-2">${arr[i].strIngredient2}</span>
//                   <span class="recipes p-1 rounded my-5 mx-2">${arr[i].strIngredient3}</span>
//                   <span class="recipes p-1 rounded my-5 mx-2">${arr[i].strIngredient4}</span>
//                   <span class="recipes p-1 rounded my-5 mx-2">${arr[i].strIngredient5}</span>
//                   <h3 class="my-5">Tags :</h3>
//                   <button type="button" class="btn btn-primary text-decoration-none text-white"><a href='${ arr[i].strYoutube}' class='text-decoration-none text-white'>Youtube</a></button>
//                   <button type="button" class="btn btn-danger   text-decoration-none text-white"><a href="#" class='text-decoration-none text-white'>source</a></button>
                  
//                 </div>
//         `
//     }
// document.getElementById('row-details').innerHTML=cartona;
//    }