$(document).on("mobileinit", function() {
    $(function() {

        $(document).on('swipeleft', '.ui-page', function(event){    
 
                let siguiente = $.mobile.activePage.next('[data-role="page"]');
                if (siguiente.length > 0) {
                    $.mobile.changePage(siguiente, {transition: "fade"}, true, true);
                }
        });
        
        $(document).on('swiperight', '.ui-page', function(event){     
          
                let antes = $(this).prev('[data-role="page"]');
                if (antes.length > 0) {
                    $.mobile.changePage(antes, {transition: "fade"}, true, true);
                }     
        });
    });
  });