


//nav bar *****************
(function () {
    if($('.bgblack').innerWidth()==200){
        $('.bgblack').animate({width:'-200px'},1)
    }
})()
$('.closeBtn').click(function () {
   let widthOfNav= $('.bgblack').innerWidth()
   console.log(widthOfNav);
    $('.bgblack').animate({width:'-200px'},1000)
})

$('#icon').click(function () {
    $('.bgblack').animate({width:'200px'},1000)
})


//nav bar *****************

//collapse-----------------------------

function play() {
    
    $('#pTwo').slideUp(1)
    $('#pThree').slideUp(1)
    $('#pFour').slideUp(1)
}
play()
$('#one').click(function () {
    
    $('#pOne').slideToggle(500)
    $('#pTwo').slideUp(500)
    $('#pThree').slideUp(500)
    $('#pFour').slideUp(500)
})
$('#two').click(function () {
    
    $('#pOne').slideUp(500)
    $('#pTwo').slideToggle(500)
    $('#pThree').slideUp(500)
    $('#pFour').slideUp(500)
})
$('#three').click(function () {
    
    $('#pOne').slideUp(500)
    $('#pTwo').slideUp(500)
    $('#pThree').slideToggle(500)
    $('#pFour').slideUp(500)
})
$('#four').click(function () {
    
    $('#pOne').slideUp(500)
    $('#pTwo').slideUp(500)
    $('#pThree').slideUp(500)
    $('#pFour').slideToggle(500)
})



//collapse-----------------------------
//timer-----------------------------
let countdownInterval=``
const targetDate = new Date('2025-08-25T02:02:59');
function updateCountdown() {
  const currentDate = new Date();
  const timeDifference = targetDate.getTime() - currentDate.getTime();
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

 
 
  
  if (timeDifference <= 0) {
    $('.timerHolder').hide(100)
    $('.timeToparty').show(200)
    console.log('timeout');
    clearInterval(countdownInterval);
   
  }else{
    
    $('.days').html(`${days} D`)
    $('.hours').html(`${hours} H`)
    $('.mints').html(`${minutes} M`)
    $('.seconds').html(`${seconds} S`)
  }
}


updateCountdown();
 countdownInterval = setInterval(updateCountdown, 1000);




//timer-----------------------------



//---------------------contact-------------
// let x=Number($('#charCount').text())
// $('#textarea').keydown(function (e) {
//     console.log(e);
//     console.log(e.originalEvent.keyCode);
    
//     x--
   
//     if(e.originalEvent.keyCode==8){
      
        
//         x+=2

        
//         $('#charCount').html(x)
//     } 
  
    
//     if(x<0){
//         $('#charCount').html('your available character finished')
//     }else if(x>=0) {
//         $('#charCount').html(x)
//     } 
    
//     console.log(x);
// })

// function over100() {
//     if(x>100){
//         $('#charCount').html('100')
//     }
// }

let x=Number($('#charCount').text())
$('#textarea').keyup(function () {
 let length=   $('#textarea').val().length
 let left=x-length
 if(left<=0){
    $('#charCount').text('your available character finished')
 }else $('#charCount').text(left)

if(length>100){
    textarea.value = textarea.value.substring(0, 100);
}

})


//--------------------scroll-----------------


$('.navBar a').click(function(){
   
    let ahref=$(this).attr('href')
    console.log(ahref);
    let offset=$(ahref).offset().top
     $('html,body').animate({scrollTop:offset},1000)
})




$(window).scroll(function () {
    let scrollTop=$(window).scrollTop()
    if(scrollTop>50){$('#icon').hide()}
    else{$('#icon').show()}
    
})
// if($('#icon').offset().top>600){
//     $('#icon').toggle()
// }




