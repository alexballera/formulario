// import $ from 'jquery'
// import queryUi from '../vendors/jquery-ui.js'

var template = `
<form name="formulario" class="formulario__form" id="formulario" >
    <div id="name-group" class="formulario__item">
      <label for="name"></label>
      <input type="text" placeholder="Nombre" name="name" id="name">
    </div>
    <div id="lastname-group" class="formulario__item">
      <label for="lastname"></label>
      <input type="text" placeholder="Apellido" name="lastname" id="lastname">
    </div>
    <div id="email-group" class="formulario__item">
      <label for="email"></label>
      <input type="email" placeholder="Email" name="email" id="email">
    </div>
    <div id="phone-group" class="formulario__item">
      <label for="phone"></label>
      <input type="tel"  placeholder="Teléfono" name="phone" id="phone">
    </div>
    <div id="msg-group" class="formulario__item">
      <label for="msg"></label>
      <textarea id="msg" cols="30" rows="10"  placeholder="Mensaje" name="msg"></textarea>
    </div>
    <div class="formulario__item">
      <input type="submit" class="submit" id="btnSubmit">
    </div>
</form>`
export default () => {
  // Función que nos permite seleccionar elementos como JQuery
  function $(selector){
    return document.querySelector(selector)
  }

  $('.formulario').innerHTML = template

  // $('#dialog').style.display = 'none'

  var formulario = () => {
    console.log('Aqui')
    $('#formulario').submit(function(event) {
      event.preventDefault();





      document.querySelector('.form-group').classList.remove('has-error'); // remove the error class
      document.querySelector('.help-block').classList.remove(); // remove the error text

          // get the form data
          // there are many ways to get this data using jQuery (you can use the class or id also)
          var formData = {
              'name'  : $('input[name=name]').value,
              'lastname'  : $('input[name=lastname]').value,
              'email' : $('input[name=email]').value,
              'phone' : $('input[name=phone]').value,
              'msg'   : $('textarea[name=msg]').value
          };

          // process the form
          fetch('formularios.php', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json'
            },
            mode: 'cors',
            cache: 'default'
          })
          .then(json)
          .then(function (data) {
            console.log('Request succeeded with JSON response', data);
          })
          .catch(function (error) {
            console.log('Request failed', error);
          });



          // $.ajax({
          //     type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
          //     url         : 'formularios.php', // the url where we want to POST
          //     data        : formData, // our data object
          //     dataType    : 'json', // what type of data do we expect back from the server
          //     encode      : true
          // })
          //     // using the done promise callback
          //     .done(function(data) {
          //
          //         // log data to the console so we can see
          //         console.log(data);
          //
          //         // here we will handle errors and validation messages
          //         if ( ! data.success) {
          //
          //           // handle errors for name ---------------
          //           if (data.errors.name) {
          //               $('#name-group').classList.add('has-error'); // add the error class to show red input
          //               $('#name-group').innerHTML = `<div class="help-block"> ${data.errors.name}</div>`; // add the actual error message under our input
          //           }
          //
          //           // handle errors for email ---------------
          //           if (data.errors.email) {
          //               $('#email-group').classList.add('has-error'); // add the error class to show red input
          //               $('#email-group').innerHTML = `<div class="help-block">${data.errors.email}</div>`; // add the actual error message under our input
          //           }
          //
          //         } else {
          //
          //           // ALL GOOD! just show the success message!
          //           // $('form').append('<div class="alert alert-success">' + data.message + '</div>');
          //
          //           // usually after form submission, you'll want to redirect
          //           // window.location = '/thank-you'; // redirect a user to another page
          //           console.log(data.message)
          //           // $( "#dialog" ).dialog({
          //           //   show: {
          //           //     effect: "explode",
          //           //     duration: 700
          //           //   },
          //           //   hide: {
          //           //     effect: "explode",
          //           //     duration: 700
          //           //   }
          //           // });
          //           $('input#name').value = ''
          //           $('input#lastname').value = ''
          //           $('input#email').value = ''
          //           $('input#phone').value = ''
          //           $('textarea#msg').value = ''
          //
          //       }
          //
          //
          //     })
          //
          //     // using the fail promise callback
          //     .fail(function(data) {
          //
          //         // show any errors
          //         // best to remove for production
          //         console.log(data);
          //     });

          // stop the form from submitting the normal way and refreshing the page
          event.preventDefault();
      });
  }
  formulario()





}
