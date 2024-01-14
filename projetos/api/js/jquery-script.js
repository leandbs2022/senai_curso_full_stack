//efeito de esconder formulário de cadastro

/*
Esse comando não funcionou e fiz de outra forma

document.ready(function () {
$('#botao-cadastrar').click(function() {
        $('#form-cadastrar').slideToggle('slow')
        $('#section-login').hide()
        $('#botao-cadastrar').hide()
    })
})
*/
function hide(){
$('#section-login').hide();
$('#botao-cadastrar').hide();
$('#form-cadastrar').slideToggle();
}
