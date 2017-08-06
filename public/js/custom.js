/* Theme Name: ProtectoresMetal
 * Author:Gabriela Macias
 */

$(function() {
    // Get the form.
    var form = $('#contact-form');

    // Get the messages div.
    var formMessages = $('#mensaje');

      // Set up an event listener for the contact form.
    $(form).submit(function(event) {
        // Stop the browser from submitting the form.
        event.preventDefault();
        console.log("init form");

     var formData = $('#contact-form').serialize();
        // Serialize the form data.
       // var formData = $(form).serialize();
      //var formDataJson = '{sender:"gabt@test.com",mensaje:"Hola"}'

        console.log(formData);

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
        .done(function(response) {
            // Make sure that the formMessages div has the 'success' class.

             console.log("success to send email");
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');

            // Set the message text.
            $(formMessages).text(response);

            // Clear the form.
            $('#name').val('');
            $('#sender').val('');
            $('#mensaje').val('');

            myFunction();
              $('#snackbar').text('Hemos recibido tu mensaje! Nos comunicaremos contigo en las proximas 24 hrs.');
        })
        .fail(function(exception) {

          console.log("failed to sent email" +JSON.stringify( exception));
           console.log("status" + exception);
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass('success');
        $(formMessages).addClass('error');

        // Set the message text.
        if (exception.responseText !== '') {
            $(formMessages).text(exception);
        } else {
            $(formMessages).text('Oops! Un error ha ocurrido. Por favor envienos un WhatsApp.');
        }
    });

    });


//  init smooth scrolling
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#Site']").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if
  });
// end smooth scrolling



});


$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});

function myFunction() {
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}



     $( window ).on( "load", function() {
        console.log( "window loaded" );

        
//  var list = document.getElementById('listImages');
//   console.log( list )
//     for (let i = 0; i <= 24; i++) { 

//      list.innerHTML +='<!-- Gallery '+i+'--><div class="col-sm-6 col-md-3 isotope-item ventanas"><div class="image-box"><div class="overlay-container"><img src="img/imgGaleria/portafolio-'+i+'.jpg" alt=""><a class="overlay" data-toggle="modal" data-target="#project-'+i+'"><i class="fa fa-search-plus"></i><span>Ventana</span></a></div></div><!-- Modal --><div class="modal fade" id="project-1" tabindex="-1" role="dialog" aria-labelledby="project-1-label" aria-hidden="true"><div class="modal-dialog "><div class="modal-content"><div class="modal-body text-center"><img src="img/imgGaleria/portafolio-1.jpg" alt=""></div><div class="modal-footer"><h4 class="modal-title" id="project-2-label">Protector Ventana - V1</h4><button type="button" class="btn btn-sm btn-default" data-dismiss="modal">Close</button></div></div></div></div><!-- Modal end --></div><!-- Gallery End-->';
    
  //
    });