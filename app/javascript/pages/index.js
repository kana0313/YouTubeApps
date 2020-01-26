// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)



// window.alert('こんにちは2');
$(function() {
  window.alert('こんにちは2');
  $('.slider').slick({
    prevArrow:'<i class="fa fa-angle-left arrow arrow-left"></i>',
    nextArrow:'<i class="fa fa-angle-right arrow arrow-right"></i>',
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800
     
  });
});