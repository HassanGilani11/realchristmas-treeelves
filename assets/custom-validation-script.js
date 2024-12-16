$(document).ready(function(){
	
	var price = $('.default-price-section .price-item.price-item--regular').text();	
    $('.price .price-item.price-item--regular').text(price);
	//when click on submit
  
   
	$(".cs-gift-button, .cs-gift-button1").click(function(){
        //alert();
		var error = 0;
		var csdatepicker = jQuery('#dds_calendar').val();
		
		if (csdatepicker == '') {
			$("#dds_calendar").css('border','1px solid red');
            $('html, body').animate({
          scrollTop: $("#dds_calendar").offset().top - 100
        }, 1000);
			error = 1;
		} else {
           
		   $("#dds_calendar").css('border','1px solid #eeeeee');
		
		}
		
		if (error == 1) {
          //alert('1');
		  return false;
		} else {
          jQuery(this).find('.loading-overlay__spinner').removeClass('hidden');
           //alert('2');
		  jQuery('.add-to-cart-product-form__submit').trigger('click');
          
		}

      });
      $('variant-radios label').click(function(){
       
        setTimeout(function(){
          var price = $('.default-price-section .price-item.price-item--regular').text();
          //alert(price);
          $('.price .price-item.price-item--regular').text(price);
        },2000);
        $('html, body').animate({
          scrollTop: $(".cs-date-picker-section").offset().top - 100
        }, 1000);
      
      });
      $(window).scroll(function() {
        if ($(this).scrollTop() >= 2) { // this refers to window
          
          //$('.sticky-cart-wrapper').addClass('show-sticky-cart-wrapper');
          //$('.sticky-cart-wrapper').show();
          //$('.product-form__buttons').show();
        } else {
          //$('.sticky-cart-wrapper').hide();
          //$('.product-form__buttons').hide();
          //$('.sticky-cart-wrapper').removeClass('show-sticky-cart-wrapper');
        }
        
      });
      $(document).on('click','#o_533188 .mw-label',function(){
       $('html, body').animate({
          scrollTop: $("#o_533189").offset().top - 100
        }, 1000);
      
      });
      $(document).on('click','#o_533189 .mw-label',function(){
        $('html, body').animate({
          scrollTop: $("#o_533190").offset().top - 100
        }, 1000);
      
      });
	  setTimeout(function(){
        var HTML = $('.product-form .sac_embed').html();
        $('.cs-custom-zipcode-area').append(HTML);
      },2000);

     $(document).on('click','#sac_check_zincode',function(){
       setTimeout(function(){
       if($('#sac-available').css('display') == 'block')
        {
             $('html, body').animate({
          scrollTop: $("fieldset input").offset().top - 100
        }, 1000);
        }
      
      },1000);
      });

       $(document).on('click','fieldset input',function(){
             $('html, body').animate({
          scrollTop: $("#o_533188").offset().top - 100
        }, 1000);
      
      
      });
    
});