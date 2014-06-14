define(function(){

  'use strict';

  return function(){

    return function(scribe){

        scribe.el.addEventListener('keypress', on_input);

        function on_input(event){
          console.log(event);
        }
      }

  }
});
