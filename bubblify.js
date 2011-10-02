(function( $ ){

  $.fn.getStyleObject = function(){
      var dom = this.get(0);
      var style;
      var returns = {};
      if(window.getComputedStyle){
          var camelize = function(a,b){
              return b.toUpperCase();
          };
          style = window.getComputedStyle(dom, null);
          for(var i = 0, l = style.length; i < l; i++){
              var prop = style[i];
              var camel = prop.replace(/\-([a-z])/g, camelize);
              var val = style.getPropertyValue(prop);
              returns[camel] = val;
          };
          return returns;
      };
      if(style = dom.currentStyle){
          for(var prop in style){
              returns[prop] = style[prop];
          };
          return returns;
      };
      if(style = dom.style){
        for(var prop in style){
          if(typeof style[prop] != 'function'){
            returns[prop] = style[prop];
          };
        };
        return returns;
      };
      return returns;
  }
})( jQuery );

////////////////////////////////////////////////

(function( $ ){
  $.fn.bubblify = function( options ) {  
    var settings = {
      position: "bottom",
      size: 10
    };
    return this.each(function() {
      if ( options ) { 
        $.extend( settings, options );
      }
      
      $(this).css("position", "relative");
      var parentStyle = $(this).getStyleObject();
      console.log(parentStyle.boxShadow);
      
      childStyle = $.extend(parentStyle, {
        content: "", 
        position: "absolute",
        width: "0",
        height: "0",
        padding: settings.size + "px",
        MozTransform: "rotate(45deg)",
        WebkitTransform: "rotate(45deg)",
        top: "100%",
        marginTop: "-" + settings.size + "px",
        left: "50%", 
        marginLeft: "-" + settings.size + "px",
        borderTop: "none",
        borderLeft: "none",
        boxShadow: function() {
          return parentStyle.boxShadow
        }(),
        borderRadius: "0",
        backgroundImage: function() {
          var lastColor;
          if (parentStyle.backgroundImage != "none") {
            lastColor = parentStyle.backgroundImage.match(/rgba?\((.+?)\)/g).slice(-1)[0];
          }
          else if (expression) {
          };
          return "-moz-linear-gradient(-45deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 47%, " + lastColor + " 48%, " + lastColor + " 100%)";
        }()
      });
      
      jss("." + $(this).attr("class") + ":after", childStyle);
    });
  };
})( jQuery );