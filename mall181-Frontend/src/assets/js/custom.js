
$(document).ready(function()
{"use strict";var menuActive=false;var header=$('.header');setHeader();initCustomDropdown();initPageMenu();initDealsSlider();initTabLines();initFeaturedSlider();featuredSliderZIndex();initPopularSlider();initBanner2Slider();initFavs();initArrivalsSlider();arrivalsSliderZIndex();bestsellersSlider();initTabs();initTrendsSlider();initReviewsSlider();initViewedSlider();initBrandsSlider();initTimer();$(window).on('resize',function()
{setHeader();featuredSliderZIndex();initTabLines();});function setHeader()
{if(window.innerWidth>991&&menuActive)
{closeMenu();}}
function initCustomDropdown()
{if($('.custom_dropdown_placeholder').length&&$('.custom_list').length)
{var placeholder=$('.custom_dropdown_placeholder');var list=$('.custom_list');}
placeholder.on('click',function(ev)
{if(list.hasClass('active'))
{list.removeClass('active');}
else
{list.addClass('active');}
$(document).one('click',function closeForm(e)
{if($(e.target).hasClass('clc'))
{$(document).one('click',closeForm);}
else
{list.removeClass('active');}});});$('.custom_list a').on('click',function(ev)
{ev.preventDefault();var index=$(this).parent().index();placeholder.text($(this).text()).css('opacity','1');if(list.hasClass('active'))
{list.removeClass('active');}
else
{list.addClass('active');}});$('select').on('change',function(e)
{placeholder.text(this.value);$(this).animate({width:placeholder.width()+'px'});});}
function initPageMenu()
{if($('.page_menu').length&&$('.page_menu_content').length)
{var menu=$('.page_menu');var menuContent=$('.page_menu_content');var menuTrigger=$('.menu_trigger');menuTrigger.on('click',function()
{if(!menuActive)
{openMenu();}
else
{closeMenu();}});if($('.page_menu_item').length)
{var items=$('.page_menu_item');items.each(function()
{var item=$(this);if(item.hasClass("has-children"))
{item.on('click',function(evt)
{evt.preventDefault();evt.stopPropagation();var subItem=item.find('> ul');if(subItem.hasClass('active'))
{subItem.toggleClass('active');TweenMax.to(subItem,0.3,{height:0});}
else
{subItem.toggleClass('active');TweenMax.set(subItem,{height:"auto"});TweenMax.from(subItem,0.3,{height:0});}});}});}}}
function openMenu()
{var menu=$('.page_menu');var menuContent=$('.page_menu_content');TweenMax.set(menuContent,{height:"auto"});TweenMax.from(menuContent,0.3,{height:0});menuActive=true;}
function closeMenu()
{var menu=$('.page_menu');var menuContent=$('.page_menu_content');TweenMax.to(menuContent,0.3,{height:0});menuActive=false;}
function initDealsSlider()
{if($('.deals_slider').length)
{var dealsSlider=$('.deals_slider');dealsSlider.owlCarousel({items:1,loop:false,navClass:['deals_slider_prev','deals_slider_next'],nav:false,dots:false,smartSpeed:1200,margin:30,autoplay:false,autoplayTimeout:5000});if($('.deals_slider_prev').length)
{var prev=$('.deals_slider_prev');prev.on('click',function()
{dealsSlider.trigger('prev.owl.carousel');});}
if($('.deals_slider_next').length)
{var next=$('.deals_slider_next');next.on('click',function()
{dealsSlider.trigger('next.owl.carousel');});}}}
function initTabLines()
{if($('.tabs').length)
{var tabs=$('.tabs');tabs.each(function()
{var tabsItem=$(this);var tabsLine=tabsItem.find('.tabs_line span');var tabGroup=tabsItem.find('ul li');var posX=$(tabGroup[0]).position().left;tabsLine.css({'left':posX,'width':$(tabGroup[0]).width()});tabGroup.each(function()
{var tab=$(this);tab.on('click',function()
{if(!tab.hasClass('active'))
{tabGroup.removeClass('active');tab.toggleClass('active');var tabXPos=tab.position().left;var tabWidth=tab.width();tabsLine.css({'left':tabXPos,'width':tabWidth});}});});});}}
function initTabs()
{if($('.tabbed_container').length)
{var tabsContainers=$('.tabbed_container');tabsContainers.each(function()
{var tabContainer=$(this);var tabs=tabContainer.find('.tabs ul li');var panels=tabContainer.find('.panel');var sliders=panels.find('.slider');tabs.each(function()
{var tab=$(this);tab.on('click',function()
{panels.removeClass('active');var tabIndex=tabs.index(this);$($(panels[tabIndex]).addClass('active'));sliders.slick("unslick");sliders.each(function()
{var slider=$(this);if(slider.hasClass('bestsellers_slider'))
{initBSSlider(slider);}
if(slider.hasClass('featured_slider'))
{initFSlider(slider);}
if(slider.hasClass('arrivals_slider'))
{initASlider(slider);}});});});});}}
function initFeaturedSlider()
{if($('.featured_slider').length)
{var featuredSliders=$('.featured_slider');featuredSliders.each(function()
{var featuredSlider=$(this);initFSlider(featuredSlider);});}}
function initFSlider(fs)
{var featuredSlider=fs;featuredSlider.on('init',function()
{var activeItems=featuredSlider.find('.slick-slide.slick-active');for(var x=0;x<activeItems.length-1;x++)
{var item=$(activeItems[x]);item.find('.border_active').removeClass('active');if(item.hasClass('slick-active'))
{item.find('.border_active').addClass('active');}}}).on({afterChange:function(event,slick,current_slide_index,next_slide_index)
{var activeItems=featuredSlider.find('.slick-slide.slick-active');activeItems.find('.border_active').removeClass('active');for(var x=0;x<activeItems.length-1;x++)
{var item=$(activeItems[x]);item.find('.border_active').removeClass('active');if(item.hasClass('slick-active'))
{item.find('.border_active').addClass('active');}}}}).slick({rows:2,slidesToShow:4,slidesToScroll:4,infinite:false,arrows:false,dots:true,responsive:[{breakpoint:768,settings:{rows:2,slidesToShow:3,slidesToScroll:3,dots:true}},{breakpoint:575,settings:{rows:2,slidesToShow:2,slidesToScroll:2,dots:false}},{breakpoint:480,settings:{rows:1,slidesToShow:1,slidesToScroll:1,dots:false}}]});}
function initFavs()
{var items=document.getElementsByClassName('product_fav');for(var x=0;x<items.length;x++)
{var item=items[x];item.addEventListener('click',function(fn)
{fn.target.classList.toggle('active');});}}
function featuredSliderZIndex()
{var items=document.getElementsByClassName('featured_slider_item');for(var x=0;x<items.length;x++)
{var item=items[x];item.addEventListener('mouseenter',function()
{$('.featured_slider .slick-dots').css('display',"none");});item.addEventListener('mouseleave',function()
{$('.featured_slider .slick-dots').css('display',"block");});}}
function initPopularSlider()
{if($('.popular_categories_slider').length)
{var popularSlider=$('.popular_categories_slider');popularSlider.owlCarousel({loop:true,autoplay:false,nav:false,dots:false,responsive:{0:{items:1},575:{items:2},640:{items:3},768:{items:4},991:{items:5}}});if($('.popular_categories_prev').length)
{var prev=$('.popular_categories_prev');prev.on('click',function()
{popularSlider.trigger('prev.owl.carousel');});}
if($('.popular_categories_next').length)
{var next=$('.popular_categories_next');next.on('click',function()
{popularSlider.trigger('next.owl.carousel');});}}}
function initBanner2Slider()
{if($('.banner_2_slider').length)
{var banner2Slider=$('.banner_2_slider');banner2Slider.owlCarousel({items:1,loop:true,nav:false,dots:true,dotsContainer:'.banner_2_dots',smartSpeed:1200});}}
function initArrivalsSlider()
{if($('.arrivals_slider').length)
{var arrivalsSliders=$('.arrivals_slider');arrivalsSliders.each(function()
{var arrivalsSlider=$(this);initASlider(arrivalsSlider);});}}
function initASlider(as)
{var arrivalsSlider=as;arrivalsSlider.on('init',function()
{var activeItems=arrivalsSlider.find('.slick-slide.slick-active');for(var x=0;x<activeItems.length-1;x++)
{var item=$(activeItems[x]);item.find('.border_active').removeClass('active');if(item.hasClass('slick-active'))
{item.find('.border_active').addClass('active');}}}).on({afterChange:function(event,slick,current_slide_index,next_slide_index)
{var activeItems=arrivalsSlider.find('.slick-slide.slick-active');activeItems.find('.border_active').removeClass('active');for(var x=0;x<activeItems.length-1;x++)
{var item=$(activeItems[x]);item.find('.border_active').removeClass('active');if(item.hasClass('slick-active'))
{item.find('.border_active').addClass('active');}}}}).slick({rows:2,slidesToShow:5,slidesToScroll:5,infinite:false,arrows:false,dots:true,responsive:[{breakpoint:768,settings:{rows:2,slidesToShow:3,slidesToScroll:3,dots:true}},{breakpoint:575,settings:{rows:2,slidesToShow:2,slidesToScroll:2,dots:false}},{breakpoint:480,settings:{rows:1,slidesToShow:1,slidesToScroll:1,dots:false}}]});}
function arrivalsSliderZIndex()
{var items=document.getElementsByClassName('arrivals_slider_item');for(var x=0;x<items.length;x++)
{var item=items[x];item.addEventListener('mouseenter',function()
{$('.arrivals_slider .slick-dots').css('display',"none");});item.addEventListener('mouseleave',function()
{$('.arrivals_slider .slick-dots').css('display',"block");});}}
function bestsellersSlider()
{if($('.bestsellers_slider').length)
{var bestsellersSliders=$('.bestsellers_slider');bestsellersSliders.each(function()
{var bestsellersSlider=$(this);initBSSlider(bestsellersSlider);})}}
function initBSSlider(bss)
{var bestsellersSlider=bss;bestsellersSlider.slick({rows:2,infinite:true,slidesToShow:3,slidesToScroll:3,arrows:false,dots:true,autoplay:true,autoplaySpeed:6000,responsive:[{breakpoint:1199,settings:{rows:2,slidesToShow:2,slidesToScroll:2,dots:true}},{breakpoint:991,settings:{rows:2,slidesToShow:1,slidesToScroll:1,dots:true}},{breakpoint:575,settings:{rows:1,slidesToShow:1,slidesToScroll:1,dots:false}}]});}
function initTrendsSlider()
{if($('.trends_slider').length)
{var trendsSlider=$('.trends_slider');trendsSlider.owlCarousel({loop:false,margin:30,nav:false,dots:false,autoplayHoverPause:true,autoplay:false,responsive:{0:{items:1},575:{items:2},991:{items:3}}});trendsSlider.on('click','.trends_fav',function(ev)
{$(ev.target).toggleClass('active');});if($('.trends_prev').length)
{var prev=$('.trends_prev');prev.on('click',function()
{trendsSlider.trigger('prev.owl.carousel');});}
if($('.trends_next').length)
{var next=$('.trends_next');next.on('click',function()
{trendsSlider.trigger('next.owl.carousel');});}}}
function initReviewsSlider()
{if($('.reviews_slider').length)
{var reviewsSlider=$('.reviews_slider');reviewsSlider.owlCarousel({items:3,loop:true,margin:30,autoplay:false,nav:false,dots:true,dotsContainer:'.reviews_dots',responsive:{0:{items:1},768:{items:2},991:{items:3}}});}}
function initViewedSlider()
{if($('.viewed_slider').length)
{var viewedSlider=$('.viewed_slider');viewedSlider.owlCarousel({loop:true,margin:30,autoplay:true,autoplayTimeout:6000,nav:false,dots:false,responsive:{0:{items:1},575:{items:2},768:{items:3},991:{items:4},1199:{items:6}}});if($('.viewed_prev').length)
{var prev=$('.viewed_prev');prev.on('click',function()
{viewedSlider.trigger('prev.owl.carousel');});}
if($('.viewed_next').length)
{var next=$('.viewed_next');next.on('click',function()
{viewedSlider.trigger('next.owl.carousel');});}}}
function initBrandsSlider()
{if($('.brands_slider').length)
{var brandsSlider=$('.brands_slider');brandsSlider.owlCarousel({loop:true,autoplay:true,autoplayTimeout:5000,nav:false,dots:false,autoWidth:true,items:8,margin:42});if($('.brands_prev').length)
{var prev=$('.brands_prev');prev.on('click',function()
{brandsSlider.trigger('prev.owl.carousel');});}
if($('.brands_next').length)
{var next=$('.brands_next');next.on('click',function()
{brandsSlider.trigger('next.owl.carousel');});}}}
function initTimer()
{if($('.deals_timer_box').length)
{var timers=$('.deals_timer_box');timers.each(function()
{var timer=$(this);var targetTime;var target_date;if(timer.data('target-time')!=="")
{targetTime=timer.data('target-time');target_date=new Date(targetTime).getTime();}
else
{var date=new Date();date.setDate(date.getDate()+2);target_date=date.getTime();}
var days,hours,minutes,seconds;var h=timer.find('.deals_timer_hr');var m=timer.find('.deals_timer_min');var s=timer.find('.deals_timer_sec');setInterval(function()
{var current_date=new Date().getTime();var seconds_left=(target_date-current_date)/1000;console.log(seconds_left);days=parseInt(seconds_left/86400);seconds_left=seconds_left%86400;hours=parseInt(seconds_left/3600);hours=hours+days*24;seconds_left=seconds_left%3600;minutes=parseInt(seconds_left/60);seconds=parseInt(seconds_left%60);if(hours.toString().length<2)
{hours="0"+hours;}
if(minutes.toString().length<2)
{minutes="0"+minutes;}
if(seconds.toString().length<2)
{seconds="0"+seconds;}
h.text(hours);m.text(minutes);s.text(seconds);},1000);});}}});