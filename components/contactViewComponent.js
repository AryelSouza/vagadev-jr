// Chamando o template via string,pois não estou utilizando um server
const contactViewTemplate = '<section class="contactView"> <section class="container contents-container mb-8"> <div class="card"> <div class="card-title"> <img src="assets/svgs/paper-plane.svg" alt="" class=""> <h1 class="title">CONTATO</h1> </div> <div class="card-content"> <form action="" class="form"> <label>Nome</label> <input type="text" class="input"> <label>Email</label> <input type="email" class="input"> <label>Mensagem</label> <textarea name="" id="" cols="30" rows="10" class="textarea"></textarea> <button class="btn btn-primary">Enviar</button> </form> </div> </div> </section></section>';

var contactView = Vue.component('contact-view', {
    template: contactViewTemplate,
    data: function() {
        return {}
    }
});