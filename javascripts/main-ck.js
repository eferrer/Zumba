$(document).ready(function(){var e=function(){var e=0;return function(t,n){clearTimeout(e);e=setTimeout(t,n)}}();$(function(){var t=100;$(window).resize(function(){e(function(){var e=$(window).width();if(!(e>=801&&e<=959))if(e>=480&&e<=800){$("h2").insertAfter("#content p:last-child");$("h2").insertAfter("#about p:last-child");$("h2").insertAfter("#studentInfo p:last-child");$("h2").insertAfter(".needs li:last-child")}else if(e<=479){$("h2").insertAfter("#content p:last-child");$("h2").insertAfter("#about p:last-child");$("h2").insertAfter("#studentInfo p:last-child");$("h2").insertAfter(".needs li:last-child")}},t)});$(window).resize()});$(function(){$(".rslides").responsiveSlides()});$("#slider1").responsiveSlides({auto:!1,pager:!0,nav:!0,speed:500,maxwidth:800,namespace:"centered-btns"});$("a").click(function(){$(this).blur()});$("li").mouseover(function(){$(this).stop().animate({height:"150px"},{queue:!1,duration:600,easing:"easeOutBounce"})});$("li").mouseout(function(){$(this).stop().animate({height:"50px"},{queue:!1,duration:600,easing:"easeOutBounce"})})});