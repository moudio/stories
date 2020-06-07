// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

document.querySelector('.menu-icon').addEventListener('click', function () {
  console.log('hello');
  document.querySelector('.menu-sidebar').classList.add('slide-in');
  console.log(document.querySelector('.menu-sidebar'));
});
document.querySelector('.close-icon').addEventListener('click', function () {
  document.querySelector('.menu-sidebar').classList.remove('slide-in');
  //     document.querySelector('.menu-sidebar').style.visibility = 'hidden';
  //   } else {
  //     document.querySelector('.menu-sidebar').style.visibility = 'visible';
  //   }
});
