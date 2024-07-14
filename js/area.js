
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

async function getArea(){
    let response=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let data= await response.json()
    console.log(data);
    displayArea(data)
}
getArea()
function displayArea(data){
    let arr=data.meals
     let cartona='';
     for(i=0;i<arr.length;i++){
        cartona +=`
        
        <div class="col-md-3 col-sm-4 " onclick='getAreaMeals("${arr[i].strArea}")' >
                    <div class="card text-white">
                        <i class="fa-solid fa-house-laptop fa-4x"></i>
                       <h3>${arr[i].strArea}</h3>
                    </div>
                    
                    </div>
        
        `
     }
     document.getElementById('areadata').innerHTML=cartona
}


// async function getmeals(){
//     let response= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    
//     let data = await response.json()
//     console.log(data);
  
//     displaymeals(data)
// }
// getmeals()


//    function displaymeals(data){
//  let arr=data.meals
//     let cartona=''
//     for(i=0 ; i <arr.length ;i++ ){
//         cartona +=`
        
//         <div class="col-3 " onclick='getAreaMeals("${arr[i].strArea}")'>
//                     <div class="card text-center  rounded-2">
//                         <img src="${arr[i].strMealThumb}" alt="" style="width: 200px;" >
//                         <div class="layer " style="height: 200px; width: 200px;"> <p class=" fs-2 position-relative top-50 translate-middle-y">${arr[i].strMeal}</p></div>
//                     </div>
                    
//                     </div>
                  
//         `
//     }
//     document.getElementById('homedis').innerHTML=cartona
   
    async function getAreaMeals(country){
        $(".loading-screen").fadeIn(300)
        let response=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)
        let data= await response.json();
        console.log(data.meals);
        displaymeals(data)
        $(".loading-screen").fadeOut(300)
    }
    getAreaMeals();

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
           document.getElementById('areadata').innerHTML=cartona;
          }

          function showdetails(id){
            location.href=`./details.html?id=${id}`;
         }
         