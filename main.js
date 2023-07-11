$(document).ready(function(){
$('header button').click(function(){
   $('form').slideDown();
   
})

$('#cancelar-btn').click(function(){
   $('form').slideUp();
})


 $('form').on('submit' , function(e){
    e.preventDefault();
   const enderecoNovaImagem = $('#inserir-nova-imagem').val();
   const novoItem = $('<li style="display:none"></li>');
   $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem);
   $(`<div class="overlay-imagem-link">
   <a href="${enderecoNovaImagem} title="Ver imagem em tamanho Real" target="_blank">
   ver imagem em tamanho real
   </a>
   </div>`).appendTo(novoItem);
   $(novoItem).appendTo('ul');
   $(novoItem).fadeIn(1200);
   $('#inserir-nova-imagem').val(' ')



 })
})


