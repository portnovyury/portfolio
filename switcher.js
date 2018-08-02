/**
 * Плагин для переключения номеров телефонов по городам. 
 * Запоминает выбранный город.
 * Для работы нужен jquery
 * Пример разметки http://metallurg.opexu.net/ (в шапке)
 */

$("document").ready(function () {

   if(localStorage.getItem('mmskPhoneCity')){
      $('.header .phone').html(localStorage.getItem('mmskPhoneCity'));
      $('.header .phone-switcher').html(localStorage.getItem('mmskCity'));
   }
   $('.phones .selector li').click(function () {
      $('.header .phone-switcher').html($(this).html());
      $('.header .phone').html($(this).attr('data-num'));
      localStorage.setItem('mmskPhoneCity', $(this).attr('data-num'));
      localStorage.setItem('mmskCity', $(this).attr('data-city'));
   })

});