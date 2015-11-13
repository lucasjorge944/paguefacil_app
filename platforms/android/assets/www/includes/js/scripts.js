$(document).ready(function() {
	$("#procurar-adesivo").click(function(event) {
		$("#metodo-pagamento").fadeOut("slow");
		$("#infos-pagamento").fadeOut("slow");
    $("#cartao-credito").fadeOut("slow");
    $("#campo-senha").fadeOut("slow");
		$("#infos-pagamento").fadeIn("slow");
	});
	$("#placas").change(function(event) {
		$("#metodo-pagamento").fadeOut("slow");
		$("#infos-pagamento").fadeOut("slow");
		$("#infos-pagamento").fadeIn("slow");
    $("#cartao-credito").fadeOut("slow");
    $("#campo-senha").fadeOut("slow");
	});
	$("#pagar").click(function(event) {
		$("#metodo-pagamento").fadeOut("slow");
		$("#metodo-pagamento").fadeIn("slow");
	});
  $("#calcula").click(function(event) {
    var celular = $("#celular").val();
    var valor = $("#valor").val();
    var quantidade = $("#quantidade").val();

    var total = valor*quantidade;
    
    var num_cartao = $("#numero-cartao").val();
    var mes_vencimento = $("#mes").val();
    var ano_vencimento = $("#ano").val();
    var cod_seguranca = $("#cod-seguranca").val();
    var nome = $("#nome").val();
    var data_nascimento = $("#data-nascimento").val();
    var cpf = $("#cpf").val();
    var ddd = $("#ddd").val();
    var telefone = $("#telefone").val();

    $("#numero_celular").text(celular);
    $("#valor_compra").text("R$"+valor);
    $("#quantidade_compra").text(quantidade);
    $("#valor_total").text("R$"+total);

    $("#numero_cartao").text(num_cartao);
    $("#data_vencimento").text(mes_vencimento+"/"+ano_vencimento);
    $("#cod_seguranca").text(cod_seguranca);
    $("#nome_cartao").text(nome);
    $("#data_nascimento").text(data_nascimento);
    $("#cpf_cartao").text(cpf);
    $("#telefone_cartao").text("("+ddd+")"+telefone);

   
  });

    $("#elo").click(function(event) {
      $("#cartao-credito").fadeIn("slow");
      $("#campo-senha").fadeOut("slow"); 
    });
    $("#visa").click(function(event) {
      $("#cartao-credito").fadeIn("slow");
      $("#campo-senha").fadeOut("slow"); 
    });
    $("#mastercard").click(function(event) {
      $("#cartao-credito").fadeIn("slow");
      $("#campo-senha").fadeOut("slow");  
    });
    $("#pague").click(function(event) {
      $("#cartao-credito").fadeOut("slow");
      $("#campo-senha").fadeIn("slow"); 
    });

    $("#finalizar_pagamento").click(function(event) {
      var local_estacionamento = $("#local_estacionamento").text();
      var data_estacionamento = $("#data_estacionamento").text();
      var entrada_estacionamento = $("#entrada_estacionamento").text();
      var saida_estacionamento = $("#saida_estacionamento").text();
      var permanencia_estacionamento = $("#permanencia_estacionamento").text();
      var valor_total_paga = $("#valor_total_paga").text();

      var num_cartao = $("#numero-cartao").val();
      var mes_vencimento = $("#mes").val();
      var ano_vencimento = $("#ano").val();
      var cod_seguranca = $("#cod-seguranca").val();
      var nome = $("#nome").val();
      var data_nascimento = $("#data-nascimento").val();
      var cpf = $("#cpf").val();
      var ddd = $("#ddd").val();
      var telefone = $("#telefone").val();

      $("#local").text(local_estacionamento);
      $("#data").text(data_estacionamento);
      $("#entrada").text(entrada_estacionamento);
      $("#saida").text(saida_estacionamento);
      $("#permanencia").text(permanencia_estacionamento);
      $("#valor_total_pagamento").text(valor_total_paga);

      $("#numero_cartao").text(num_cartao);
      $("#data_vencimento").text(mes_vencimento+"/"+ano_vencimento);
      $("#cod_seguranca").text(cod_seguranca);
      $("#nome_cartao").text(nome);
      $("#data_nascimento").text(data_nascimento);
      $("#cpf_cartao").text(cpf);
      $("#telefone_cartao").text("("+ddd+")"+telefone);
    });

    $(".confirma-pag").click(function(event) {
      $('.formPagar')[0].reset();
      $("#metodo-pagamento").fadeOut("slow");
      $("#infos-pagamento").fadeOut("slow");
      $("#cartao-credito").fadeOut("slow");
      $("#campo-senha").fadeOut("slow");
    });

    $("#check_usu").change(function(event) {
       $("#txtCnpj").fadeOut('slow');
      $("#txtCpf").fadeIn('slow');
    });
    $("#check_parc").change(function(event) {
      $("#txtCpf").fadeOut('slow');
      $("#txtCnpj").fadeIn('slow'); 
    });

    $("#btnLogar").click(function(event) {
      if ($("#check_usu").is(":checked") == true){
        window.location.assign("restrita_usuario.html");
      }
      else if ($("#check_parc").is(":checked") == true){
        window.location.assign("restrita_parceiro.html");
      }

    });

	 function initialize() {
      var mapCanvas = document.getElementById('map');
      var mapOptions = {
        center: new google.maps.LatLng(-19.9251795, -43.9264983),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      var map = new google.maps.Map(mapCanvas, mapOptions);

      var myLatLng = {lat: -19.9251795, lng: -43.9264983};
      var myLatLng2 = {lat: -19.925696, lng: -43.924488};
      var myLatLng3 = {lat: -19.925076, lng: -43.923721};
      var myLatLng4 = {lat: -19.926574, lng: -43.924219};

      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map
      });
      var marker2 = new google.maps.Marker({
        position: myLatLng2,
        map: map
      });
      var marker3 = new google.maps.Marker({
        position: myLatLng3,
        map: map
      });
      var marker4 = new google.maps.Marker({
        position: myLatLng4,
        map: map
      });
    }
    google.maps.event.addDomListener(window, 'load', initialize);
});

$("#btnLogar").click(function(event) {
  if ($("#check_usu").is(":checked") == true){
    window.location.assign("restrita_usuario.html");
  }
  else if ($("#check_parc").is(":checked") == true){
    window.location.assign("restrita_parceiro.html");
  }

});

$("#cad_usu").click(function(event) {
  $("#formLoginUsu").fadeIn("slow");
  $("#formLoginParc").fadeOut("slow");
});
$("#cad_parc").click(function(event) {
  $("#formLoginUsu").fadeOut("slow");
  $("#formLoginParc").fadeIn("slow");
});