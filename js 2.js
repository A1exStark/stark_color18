var id_name;
var min_price;

$(function() {
	var ceil = 'standart';
	var ceil2 = 'normal';
	draw_options();
	
	
	
/*	$('#b-reset').click(function() {
		$('#m-lamp').val(0).trigger('change');
		$('#m-gloss').val(26).trigger('change');
		$('#m-gloss2').val('normal').trigger('change');
	});
*/
																														/*след часть кода отвечает за вывод фактуры потолка*/
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
		$.ajax({
			url: '/form/',
			data: { handler: 'Ceilings', command: 'load_colors_blocks', cat_id: value },
			dataType: 'html',
			success: function(html) {
				$('#colors-item').html(html);
				draw_options();
				
			}
		});
		
		
																														
		min_price = $('#m-gloss option:selected').data('min_price');
		set_min_price();
		
		
	});
	
																																	/*выбор формы потолка*/
	$('#m-ceil-type').change( function() {
		ceil = $(this).val();
		
		$('.s-ceil').addClass('dnone');
		$('#s-'+ceil+'-ceil').removeClass('dnone');	
		$('#m-lamp').val(0).trigger('change');
	});

																																	/*выбор формы 2 уровня*/
	$('#m-gloss2').change( function() {
		ceil2 = $(this).val();
		
		$('.s-ceil').addClass('dnone');
		$('#s-'+ceil2+'-ceil').removeClass('dnone');	
	});

	$('#m-lamp').change( function() {
		var lamp = $(this).val();
		
		$('.s-'+ceil).addClass('dnone');
		
		if(lamp > 0) $('#s-'+ceil+'-'+lamp).removeClass('dnone');
		calculate_price();
	
	});
																														/*как-то отвечает за вывод колорбокса*/
	$('#color-ceil').colorbox({
		inline:true,

	});
																														/*отвечает за выбор цвета пола и стен*/
	$("body").on('click', '.constructing', function(e) {
		if($(e.target).closest(".sss").length==0 && $(e.target).closest(".selecter").length==0) {
			$(".selecter").children().remove();
			$(".selecter").removeClass("up");
		}
	});
	$('body').on('click', '.selecter', function (event) {
		if($(event.target).closest('.sss').length) 
		return;
		
		$(".selecter").removeClass("up").html('');
		
		id_name = $(this).data("idname");
		$(this).addClass("up").append('<div id="'+id_name+'" class="sss"></div>');
		load_picker(id_name);				
		window.id_name = id_name;
	});
																														/*отвечает за взятие цвета из таблицы*/
	$('body').on('click', '.ch-color', function() {
		var color = $(this).data('color');
		if(color) {
			$('#c-ceil-photo').html('');
			var draw = new PolygonCanvas('c-ceil');
			draw.Polygon(coordArray['ceil']);
			draw.SetBgColor(color);
		}
		
		var image = $(this).data('image');
		if(image) {
			$('#c-ceil-photo').html('<img src="'+image+'" class="dnone" width="1000" height="600" onload="imgLoaded(this)" />');
		}
		
		$('#cboxClose').click();
		return false;
	});
	
	$('body').on('click', '#color-ceil-styler li', function() {
		
		
	});
	
	min_price = $('#m-gloss option:eq(0)').data('min_price');
	
	set_min_price();
	
	$('.ci').change( function() {
		calculate_price();
	});
	
	$(".order-ceil").colorbox({
		inline:true, 
		width:"50%",
		onComplete:function(){ 
			$('#ceil_type').val($('#m-ceil-type option:selected').html());
			$('#f-lamp').val($('#m-lamp option:selected').html());
			$('#f-factura').val($('#m-gloss option:selected').html());
			$('#f-factura2').val($('#m-gloss2 option:selected').html());
			$('#f-color').val($('#color-ceil option:selected').html());
			$('#f-color2').val($('#color-ceil2 option:selected').html());
			$('#f-volume').val($('#volume').val());
			$('#f-perimetr').val($('#perimetr').val());
		}
	});
	
});
function calculate_price() {
	var perimetr = parseFloat($('#perimetr').val() * $('#perimetr').data('price'));
	var volume = parseFloat($('#volume').val() * min_price);
	var lamps = parseFloat($('#m-lamp').val() * $('#m-lamp').data('price'));
	
	var sum = perimetr + volume + lamps + cand;
	
	$('#s-pr').html(+sum);

}
function set_min_price() {
	$('#s-pl').html(min_price); 
}
function imgLoaded(img){
    var $img = $(img);
 
    $img.removeClass('dnone');
};
function draw_options() {
	var ct = $('#color-ceil option').size();
	for(i=0;i<ct;i++) {
		var hex = $('#color-ceil option:eq('+i+')').data('hex');
		if(hex) $('#color-ceil-styler li:eq('+i+')').css({'background-color' : hex });
	}
	// alert(ct);

}
function load_picker(idname) {
	var picker = $.farbtastic('#'+idname);
	picker.linkTo(pickerUpdate);
}
function pickerUpdate(color){
	var draw = new PolygonCanvas('c-'+id_name);
	draw.Polygon(coordArray[id_name]);
	draw.SetBgColor(color);
}

function PolygonCanvas(canvasid) {
	width = 1000;
	height = 600;
	this.canvas = document.getElementById(canvasid);
	this.obCanvas = null;
		
	if (this.canvas != null) {
		this.canvas.width = width;
		this.obCanvas = this.canvas.getContext('2d');
	}	

	this.Polygon = function(arr)
	{
		if (this.obCanvas == null) return false;
			
		this.obCanvas.beginPath(); 
		for (var i = 0; i < arr.length; i++) { 
			// Ставим точку на исходную позицию 
			if (i == 0) this.obCanvas.moveTo(arr[i][0], arr[i][1]); 
			// Рисуем линии от точки к точке 
			else this.obCanvas.lineTo(arr[i][0], arr[i][1]); 
		} 
		// Задаем цвет заливки в формате RGBA 
		this.obCanvas.fillStyle = "rgba(255,128,128,0.5)"; 
		// Зальем полученный многоугольник цветом 
		this.obCanvas.fill();
	}		
	// ------------------
	// Функция заливает канвас цветом
	// ------------------
	this.SetBgColor = function(bgcolor)
	{
		if (this.obCanvas == null) return false;
		
		this.obCanvas.fillStyle = bgcolor;
		this.obCanvas.fill();
	}
}

var coordArray = { 'floor' :
						[
							[152,600], [486,490], [1000,530], [1000,600]
						],
					'wall' :
						[
							[0,600], [0,10], [10,0], [1000,0], [1000,530], [486,490], [152,600]
						],
					'ceil' :
						[
							[0,48], [0,5], [1,4], [2,3], [3,2], [4,1], [5,0], [1000,0], [1000,99], [954,190], [715,208], [704,199], [500,215]
						]
				};