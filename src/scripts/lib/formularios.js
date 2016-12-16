import $ from 'jquery'

var template = `
<div class="formulario">
  <form name="formulario" class="formulario__form" id="formulario" method="post" action="mail.php" >
      <div class="formulario__item">
        <label for="name"></label>
        <input type="text" placeholder="Nombre" name="name" required="required" id="name">
      </div>
      <div class="formulario__item">
        <label for="email"></label>
        <input type="email" placeholder="Email" name="email" required="required" id="email">
      </div>
      <div class="formulario__item">
        <label for="phone"></label>
        <input type="tel"  placeholder="Teléfono" name="phone" id="phone">
      </div>
      <div class="formulario__item">
        <label for="message"></label>
        <textarea id="message" cols="30" rows="10"  placeholder="Mensaje" name="message"></textarea>
      </div>
      <div class="formulario__item">
        <button type="submit" class="submit" id="submit">Enviar</button>
      </div>
  </form>
</div>`
export default () => {
  $('body').prepend(template)
  // function myFunction() {
  //   var name = document.getElementById("name").value;
  //   var email = document.getElementById("email").value;
  //   var phone = document.getElementById("phone").value;
  //   var message = document.getElementById("message").value;
  //   // Returns successful data submission message when the entered information is stored in database.
  //   var dataString = 'name1=' + name + '&email1=' + email + '&phone1=' + phone + '&message1=' + message;
  //   if (name == '' || email == '' || phone == '' || message == '') {
  //     alert("Please Fill All Fields");
  //   } else {
  //   // AJAX code to submit form.
  //     $.ajax({
  //       type: "POST",
  //       url: "mail.php",
  //       data: dataString,
  //       cache: false,
  //       success: function(html) {
  //       alert(html);
  //       }
  //     });
  //   }
  //   return false;
  // }
}
