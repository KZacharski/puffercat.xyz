twemoji.parse(document.body, 
    {folder: 'svg', ext: '.svg'} // This is to specify to Twemoji to use SVGs and not PNGs
);
$(function() {

    var $el = $(),
        speed = 175;  //  1000 = 1 second

    // SECOND TECHNIQUE
    $("#second a").hover(function() {
        
        $el = $(this);
                
        $el.stop().animate({ backgroundPosition: "(0px 0px)", color: "white" }, speed);
    
    }, function() {
    
        $el = $(this);
                
        $el.stop().animate({ backgroundPosition: "(0px 15px)", color: "#900" }, speed);
    
    });

});