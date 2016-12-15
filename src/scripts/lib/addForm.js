import $ from 'jquery'

var template = `
<div class="formulario">
  <form name="contactform" class="formulario__form form_test" id="formulario" action="mail.php" method="post" >
      <div class="formulario__item">
        <label for="contactName"></label>
        <input type="text" placeholder="Nombre" name="contactName" required="required" id="contactName">
      </div>
      <div class="formulario__item">
        <label for="contactEmail"></label>
        <input type="email" placeholder="Email" name="contactEmail" required="required" id="contactEmail">
      </div>
      <div class="formulario__item">
        <label for="contactPhone"></label>
        <input type="tel"  placeholder="Teléfono" name="contactPhone" id="contactPhone">
      </div>
      <div class="formulario__item">
        <label for="contactMessage"></label>
        <textarea id="contactMessage" cols="30" rows="10"  placeholder="Mensaje" name="contactMessage"></textarea>
      </div>
      <div class="formulario__item">
        <button type="submit" class="botonenviar">Enviar</button>
      </div>
  </form>
</div>`
export default () => {
  $('body').prepend(template)
}
