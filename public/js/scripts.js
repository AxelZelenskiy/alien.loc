jQuery(function($){
	var elements_coordinates 	= 	[105,175,245],
	elements_positions		=	[0,1,2],
		// widht of main block
		// and secondary block
		supBlock				=	600,
		secBlock				=	400,
		// default move direction
		move_direction			=	"down",
		// check animation complite
		animation_complite		= 	true,
		// left panel clocks button indexes
		clock_index = 1,
		clock_current_index = 1;

		var elements = document.getElementsByClassName('blocks'),
		clock_buttons = $('button.nmb-btn');

  	// =========================================================
  	var H2 = function createTitles(text = '') {
  		if (text != '') {
  			return ('<h2>'+text+'</h2>');
  		}
  	};
  	// clock_current_index - active button
  	// clock_index  - newly pushed button

  	clock_buttons.on("click",function() {
  		clock_index = clock_buttons.index($(this));
  		var tester;
  		if (clock_index > clock_current_index) {
  			// move_up
  			tester = elements_positions.indexOf(2);
  			$.getJSON('js/texts.json', function (json) 
  					{
  					$(elements[tester]).html(
  											H2(json.blocks[clock_index].Title) + '<p>' + json.blocks[clock_index].Text + '</p>'
  											);
				  		// console.log(H2(json.blocks[1].Title));
				  	});

  			move_blocks_up();
  			clock_current_index = clock_index;
  		} 
  		if (clock_index < clock_current_index) {
  			// move down
  			tester = elements_positions.indexOf(0);
  			$.getJSON('js/texts.json', function (json) 
  			{
  				$(elements[tester]).html(
  					H2(json.blocks[clock_index].Title) + '<p>' + json.blocks[clock_index].Text + '</p>'
  					);
				  		// console.log(H2(json.blocks[1].Title));
				  	});

  			move_blocks_down();
  			clock_current_index = clock_index;
  		}

  	});
  	function move_blocks_down(){
  		if (animation_complite) {
  			animation_complite = false;
  			down_press();
  			move_blocks();
  		} else {
  			return;
  		}
  	};
  	function move_blocks_up(){
  		if (animation_complite) {
  			animation_complite = false;	
  			up_press();
  			move_blocks();
  		} else { return;}
  	};


	// =========================================================
	function down_press(){
		for (let i = 0; i<3; i++)
		{
			elements_positions[i] = ((elements_positions[i] + 1) > 2) ? 0:(elements_positions[i]+1);
			move_direction = "down";
			if (elements_positions[i] == 0) {$(elements[i]).css({"z-index":"2"})}
		}
	};

	function up_press() {
		for (let i = 0; i < 3; i++)
		{
			elements_positions[i] = ((elements_positions[i] - 1) < 0) ? 2:(elements_positions[i]-1);
			move_direction = "top";
			if (elements_positions[i] == 2) {$(elements[i]).css({"z-index":"2"})}
		}
	};

	// all this params must be downloaded auto from site - 
	var animate_string1 = '{"z-index":"5","font-size":"23","opacity":"0.7","left":"200px"}',
		animate_string2 = '{"font-size":"30","opacity":"1","left":"150px"}',
		animate_string3 = '{"z-index":"4","font-size":"18","opacity":"0.5","left":"250px"}',
		full_blured_element= '{"filter":"blur(10)","-webkit-filter":"blur(10)","-moz-filter":"blur(10px)","-o-filter":"blur(10px)","-ms-filter":"blur(10px)"}';

	function move_blocks(){
		for (let i = 0; i<3; i++) {
			if (elements_positions[i] == 1) {
				// checking - which key pressed - down or up
				var mid_top = (move_direction == "down") ? 140 : 215;
				// params for jQuery.animate()
				var tmp_str1 = gen_animate_string(mid_top,(supBlock-100),animate_string1),
					tmp_str2 = gen_animate_string(elements_coordinates[elements_positions[i]],supBlock,animate_string2),
					animate_params1 = jQuery.parseJSON(tmp_str1),
					animate_params2 = jQuery.parseJSON(tmp_str2),
					blur_value10 = 10,
					blur_value5 = 5;
					// blur_css = jQuery.parseJSON(full_blured_element);
				$(elements[i]).css(get_blur_JSON(blur_value10))
				.removeClass('secondary')
				// blur deleted from animate
				.animate(
							animate_params1,
							{
								duration:600,
								step:function(){
									if (blur_value10 > blur_value5) {
										$(elements[i]).css(get_blur_JSON(blur_value10));
										blur_value10--;
									}
								},
								complete:function(){
										$(elements[i])
										.css({"z-index":5})
										// .removeClass("secondary")
										.animate(
											animate_params2,
											{
												duration:600,
												step:function(){
													if (blur_value5 >= 0) {
													$(elements[i]).css(get_blur_JSON(blur_value5));
													blur_value5--;
																				}
												},
												complete:function(){}
											});
								}});
								
								} else {
									$(elements[i]).removeClass('secondary').css(get_blur_JSON(10));
									var offset = (elements_positions[i] == 0) ? 80:270;
									var tmp_str3 = gen_animate_string(offset,secBlock,animate_string3),
										animate_params3 = jQuery.parseJSON(tmp_str3);
									$(elements[i])
									.animate(
										animate_params3,
										600,
										function(){
										$(elements[i])
										// .css(get_blur_JSON(10))
										.animate({
											top:elements_coordinates[elements_positions[i]]
											},600,function(){animation_complite = true });
									});
								// else end
								}
							// for end
							};
	};

	$('.down-btn').click(function(){
							if (animation_complite) {
								animation_complite = false;
								down_press();
								move_blocks();
							} else {
								return;
							}
	 });
	$('.up-btn').click(function(){
							if (animation_complite) {
								animation_complite = false;	
								up_press();
								move_blocks();
							} else { return;}
	 });
	function gen_animate_string(top,width,string){
				if (string.length != 0 ) {
					string = string.slice(0,-1);
					if ((top != "") && (width !="")) {
						string += ',"width":'+'"'+width+'",'+'"top":'+'"'+top+'"}';
						return string;
										} else if ((top != "") && (width ==""))  {
											string += ',"top":'+'"'+top+'"}';
											return string;
										} else if ((top == "") && (width !=="")) {
											string += ',"width":'+'"'+width+'"}';
											return string;
										} else if ((top == '') && (width == '')) {
											return string+'}';
										}
					}
				 else {
				console.log("Function get string with zero length");
				return "";
				};
	};
	function get_blur_JSON(cur_blur){
		let gen_string = '{"filter":"blur('+cur_blur+'px)","-webkit-filter":"blur('+
		cur_blur+'px)"}';
		return jQuery.parseJSON(gen_string);
	};




// main close
});