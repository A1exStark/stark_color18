	$('#m-gloss').change( function() {
		var value = $(this).val();
		$('#c-ceil-photo').html('');
		if(value == 28) {
			$('#s-gloss').removeClass('dnone');	
		} else if(value ==30){
			$('#s-gloss').addClass('dnone');	
			$('#s-satin').removeClass('dnone');
		}  else {
			$('#s-satin').addClass('dnone');
			$('#s-gloss').addClass('dnone');
		}

		
	$('#m-gloss2').change( function() {
		ceil = $(this).val();
		
		$('.s-ceil').addClass('dnone');
		$('#s-'+ceil+'-ceil').removeClass('dnone');	
		$('#m-lamp').val(0).trigger('change');
	});
