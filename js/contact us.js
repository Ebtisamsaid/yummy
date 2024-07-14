

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


// ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$

let nameID=document.getElementById('nameId');
let telID=document.getElementById('telID');
let passId=document.getElementById('passId');
let ageId=document.getElementById('ageId');
let repassID=document.getElementById('repassID');
let emailID=document.getElementById('emailId');
let emailAlert=document.querySelector('.emailalert')
let telalert=document.querySelector('.tel-alert')
let good=document.querySelector('.good')
let passalert=document.querySelector('.passalert')
let goodpass=document.querySelector('.goodpass')
let goodrepass=document.querySelector('.goodrepass')
let badrepass=document.querySelector('.badrepass')
let btn=document.querySelector('.btn')
let isvalid=false





emailID.addEventListener('input',function validationemail(){
   


    let regex=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/


    
    let text=emailID.value;
    if(regex.test(text)==true){
        emailAlert.classList.add('d-none');
        emaemailIDilId.classList.add("is-valid");
        emailID.classList.remove('is-invalid');
        return true
        
    }else{
        emailAlert.classList.remove('d-none')
        emailID.classList.add('is-invalid')
        emailID.classList.remove('is-valid')
        return false

    }
  

    
})
telID.addEventListener('input',function validationphone(){
   
    let regex= /^01[0125][0-9]{8}$/

    
    let text=regex.test(telID.value);
    if(regex.test(telID.value)==true){
        telalert.classList.add('d-none');
        good.classList.remove('d-none');
        telID.classList.add("is-valid");
        telID.classList.remove('is-invalid');
        return true
        
    }else{
        telalert.classList.remove('d-none')
        telID.classList.add('is-invalid')
        telID.classList.remove('is-valid')
        return false

    }
  

    
})


passId.addEventListener('input',function validationpass(){
   
    let regex= /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/

    
    let text=regex.test(passId.value);
    if(regex.test(passId.value)==true){
        passalert.classList.add('d-none');
        goodpass.classList.remove('d-none');
        passId.classList.add("is-valid");
        passId.classList.remove('is-invalid');
        return true
        
    }else{
        passalert.classList.remove('d-none')
        passId.classList.add('is-invalid')
        passId.classList.remove('is-valid')
return false
    }
  

    
})

repassID.addEventListener('input',function validationRepass(){
   
    
    
  
    if( passId.value == repassID.value ){
        
        goodrepass.classList.add('valid-feedback')
        goodrepass.classList.remove('d-none')
    }else{
        badrepass.classList.remove('d-none')

    }
  
})
   

if(passId.value!='' && repassID.value!=''&& telID.value!=''&&emailID.value!=''&& ageId.value!=''){

btn.removeAttribute(disabled)
}else{
    btn.setAttribute(disabled)
}



