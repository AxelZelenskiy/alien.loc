(function($){
    var settings = {
      "background-color" : "#E65100",
      "fontSize": "14px"
    },
        methods = {
          init : function(options){
            console.log("initialization");
            if (options) {
              settings = $.extend(settings,options);
              this.css(settings);
            }
            console.log(this);
            var $this = $(this);
            console.log("===============");
            console.log($this);
            this.each(function(){
              // $(window).bind('resize.MyFirstPlugin', methods.something);
              // $(window).bind('click.MyFirstPlugin',methods.unclicker)
            });
            return this;
          },
          alerto : function(message,t2) {
              alert(message + t2);
              return this;
          },
          something: function() {
            console.log("work great");
          },
          unclicker: function(){
            console.log("unbinded resize");
            $(window).unbind('.MyFirstPlugin');
          }
        };
  
  $.fn.MyFirstPlugin = function( action ){
      console.log("started");
      if ( methods [ action ]) {
        return methods[action].apply(this, Array.prototype.slice.call( arguments, 1 ));
      } else if ( typeof action === 'object' || !action ) {
                  // console.log("It must be here");
                  return methods.init.apply(this,arguments);
                 }

  };
})( jQuery );