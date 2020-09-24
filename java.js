$("#btn").click(function(){
    
    $(".demo").slideToggle(1000)
});

let helloOffest=$("#hello").offset().top;
let serviceOffset=$("#service").offset().top;
let portofiloOffset =$("#portfolio").offset().top;

$(window).scroll(function(){
    let windowScroll=$(window).scrollTop();
    if(windowScroll>helloOffest)
    {
        $("#btnUp").fadeIn(1000);
    }
    else{
        $("#btnUp").fadeOut(1000);
    }
})
$("#btnUp").click(function(){
    $("html,body").animate({scrollTop:'0'},1000);
})

$("#aboutoffset").click(function(){
    $("html,body").animate({scrollTop:helloOffest},1000);
})
$("#serviceoffset").click(function(){

    $("html,body").animate({scrollTop:serviceOffset},1000);
})
$("#portfoliooffset").click(function(){
    $("html,body").animate({scrollTop:portofiloOffset},1000);
})