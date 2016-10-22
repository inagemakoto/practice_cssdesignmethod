//scroll
$(function(){
     $("a[href*=#]").click(function(){
     $('html,body').animate({ scrollTop: $($(this).attr("href")).offset().top - 50 }, 'slow','swing');
     return false;
     })
});