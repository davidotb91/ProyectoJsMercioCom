//Menu Effects

$('#menu_inbox').click(function(){
  unselectMenu(); // unselect all menu buttons
  selectMenu(this); // enable selected style
  $('#inbox_glow').show(300); // make the glowing element for this menu visible
});
$('#menu_messages').click(function(){
  unselectMenu(); // change all buttons to unselected style
  selectMenu(this); // enable selected style for this button
  $('#messages_glow').show(); // make the glowing element for this menu button visible
});

$('#menu_outbox').click(function(){
  unselectMenu();
  selectMenu(this);
  $('#outbox_glow').show(300);
});

$('#menu_tasks').click(function(){
  unselectMenu(); // unselect all menu buttons
  selectMenu(this); // change the style for the calling menu button
  $('#tasks_glow').show(300); // enable the glowing element for selected menu button
});

//changing the style of selected menu button
function selectMenu(menu){

  $(menu).css({
    "background-color":"hsla(14, 75%, 55%, .5)",
    "borderRightWidth":"0px"
  });
}

//making a menu button unselected
function unselectMenu(){
  $('.menu').css({
    "background-color":"hsla(14, 75%, 55%, .1)",
    "borderRightWidth":"2px"
  });
  $('.menubar').hide(300);
}

//Initial settings.
function initialize(){

  unselectMenu();
  $('#menu_inbox').css({
    "background-color":"hsla(14, 75%, 55%, .1)",
    "borderRightWidth":"0px"
  });
}
//hover functionality of the menu buttons.
$('.menu').hover(function(){

  $(this).children('.menu_text, .glyphicon').addClass('menu_glow_text').fadeIn();
  $(this).children('.menubar').show();
  $(this).children('.menu_text').shuffleLetters(); // shuffle the letter for fab FX
}, function() {
  $(this).children('.menu_text, .glyphicon').removeClass('menu_glow_text');
  $(this).children('.menubar').hide();
});

/*letter shuffle */
(function($){

  $.fn.shuffleLetters = function(prop){

    var options = $.extend({
      "step"		: 8,			// How many times you want letters changed
      "fps"		: 25,			// Frames Per Second
      "text"		: "", 			// Use this text instead of the contents
      "callback"	: function(){}	// Run once the animation is complete
    },prop)

    return this.each(function(){

      var el = $(this),
        str = "";
      // Preventing parallel animations using a flag;

      if(el.data('animated')){
        return true;
      }

      el.data('animated',true);


      if(options.text) {
        str = options.text.split('');
      }
      else {
        str = el.text().split('');
      }

      // The types array holds the type for each character;
      // Letters holds the positions of non-space characters;

      var types = [],
        letters = [];

      // Looping through all the chars of the string

      for(var i=0;i<str.length;i++){

        var ch = str[i];

        if(ch == " "){
          types[i] = "space";
          continue;
        }
        else if(/[a-z]/.test(ch)){
          types[i] = "lowerLetter";
        }
        else if(/[A-Z]/.test(ch)){
          types[i] = "upperLetter";
        }
        else {
          types[i] = "symbol";
        }

        letters.push(i);
      }

      el.html("");

      // Self executing named function expression:

      (function shuffle(start){

        // This code is run options.fps times per second
        // and updates the contents of the page element

        var i,
          len = letters.length,
          strCopy = str.slice(0);	// Fresh copy of the string

        if(start>len){

          // The animation is complete. Updating the
          // flag and triggering the callback;

          el.data('animated',false);
          options.callback(el);
          return;
        }

        // All the work gets done here
        for(i=Math.max(start,0); i < len; i++){

          // The start argument and options.step limit
          // the characters we will be working on at once

          if( i < start+options.step){
            // Generate a random character at thsi position
            strCopy[letters[i]] = randomChar(types[letters[i]]);
          }
          else {
            strCopy[letters[i]] = "";
          }
        }

        el.text(strCopy.join(""));

        setTimeout(function(){

          shuffle(start+1);

        },1000/options.fps);

      })(-options.step);


    });
  };

  function randomChar(type){
    var pool = "";

    if (type == "lowerLetter"){
      pool = "abcdefghijklmnopqrstuvwxyz0123456789";
    }
    else if (type == "upperLetter"){
      pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    }
    else if (type == "symbol"){
      pool = ",.?/\\(^)![]{}*&^%$#'\"";
    }

    var arr = pool.split('');
    return arr[Math.floor(Math.random()*arr.length)];
  }

})(jQuery);
