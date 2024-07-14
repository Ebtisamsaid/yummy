


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

const searchparam=location.search;
const param=new URLSearchParams(searchparam);
const id =param.get('id')


async function getDetailsmeal(){
   
    let response =await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    let data= await response.json();
    console.log(data);
    displayDetailsmeal(data)

   }
   getDetailsmeal()
   function displayDetailsmeal(data){
    let arr =data.meals;
    let cartona='';
    for(i=0;i<arr.length;i++){
        cartona +=`

             <div class="col-md-5 ">
                    <img src="${arr[i].strMealThumb}" alt="" style="width: 70%; transform: translateX(-35%);" class="rounded position-relative start-50 ">
                    <h3 class="text-white text-center mt-3 ms-5">${arr[i].strMeal}</h3>
                </div>
                <div class="col-md-7 text-white">
                 <h2>Instructions</h2>
                 <p>${arr[i].strInstructions}</p>
                  <h3>Area : ${arr[i].strArea}</h3>
                  <h3>Category : ${arr[i].strCategory}</h3>
                  <h3 class="mb-4">Recipes :</h3>
                  <span class="recipes p-1 rounded my-5 mx-2">${arr[i].strIngredient1}</span>
                  <span class="recipes p-1 rounded my-5 mx-2">${arr[i].strIngredient2}</span>
                  <span class="recipes p-1 rounded my-5 mx-2">${arr[i].strIngredient3}</span>
                  <span class="recipes p-1 rounded my-5 mx-2">${arr[i].strIngredient4}</span>
                  <span class="recipes p-1 rounded my-5 mx-2">${arr[i].strIngredient5}</span>
                  <h3 class="my-5">Tags :</h3>
                  <button type="button" class="btn btn-primary text-decoration-none text-white"><a href='${ arr[i].strYoutube}' class='text-decoration-none text-white'>Youtube</a></button>
                  <button type="button" class="btn btn-danger   text-decoration-none text-white"><a href="#" class='text-decoration-none text-white'>source</a></button>
                  
                </div>
        `
    }
document.getElementById('row-details').innerHTML=cartona;
   }