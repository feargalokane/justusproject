(function ($) {
  Drupal.behaviors.justus = {
    attach:function (context) {
        var iframes= parent.document.getElementsByTagName('iframe');

        
        $('.flexslider').bind('after', function () {
           if($('.flex-active-slide').has('.file-video-vimeos').length == 0 ){
                for (var i= iframes.length; i-->0;) {
                    var iframe= iframes[i];
                    if(iframe.className == "media-vimeo-player"){
                        var url = iframe.src.split('?')[0];
                        var data = { method: 'pause' };
                        iframe.contentWindow.postMessage(JSON.stringify(data), url);
                    }
                }  
           }
            
       });
     }
    
  }
})(jQuery);