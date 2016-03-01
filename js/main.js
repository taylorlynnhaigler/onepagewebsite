  $(document).ready(function() {
        $('nav').onePageNav({
          scrollThreshold: 0.4,
          navItems:'a:not(.submenu a)'
         });

        function toggleNav() {
          $('nav ul').slideToggle();
        }

        $('#menu-button').click(toggleNav);

        function windowResized() {
          var width = $(window).width();
          var menu = $('nav ul');

          if (width > 768 && menu.is(':hidden')) {
              menu.removeAttr('style');
          }
        }

        $(window).resize(windowResized);
        
        //work images
        $('.bxslider').bxSlider({
      
      });
    });