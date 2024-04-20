$(document).ready(function () {

    $('div').on('submit', function(e){
    e.preventDefault();

    const data =$('#tdata').val();
    const tarefa =$('#ttarefa').val();


    const novoItem=$(`<div class="dados"><li id="li">Data: ${data}</li>`+`<li>---</li>`+`<li id="li">Tarefa: ${tarefa}</li></div>`)

    $(novoItem).appendTo('ul#list');
    $(novoItem).fadeIn(1000);
    $('#tdata').val('')
    $('#ttarefa').val('')
    $('#tdata').focus();
})

$("ul").on('click', 'li#li', function(){
    $(this).toggleClass("line-through");
    })

});