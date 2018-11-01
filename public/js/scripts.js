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
		animation_complite		= 	true;
	var elements = document.getElementsByClassName('blocks');

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


	function move_blocks(){
		for (let i = 0; i<3; i++) {
			if (elements_positions[i] == 1) {
				// checking - which key pressed - down or up
				var mid_top = (move_direction == "down") ? 140 : 215;
				$(elements[i]).stop()
								.animate({
										'z-index': 5,
										'filter':'blur(0px)',
										'-webkit-filter':'blur(0px)',
										'opacity': .7,
										'font-size': '23px',
										// top 140 for those who move from up to down - 
										// @down = 140
										// who move from down to top need another coordinate
										// @top = 215
										'top': mid_top,
										'left': 200,
										'width': supBlock-100
				},1000,function(){

					$(elements[i]).css({"z-index":5});
					// .removeClass('secondary');
									}).animate({
										top: elements_coordinates[elements_positions[i]],
										width: supBlock,
										fontSize: '30px',
										opacity:1,
										left: 150
										},1000,function(){
										});
			} else {
				var offset = (elements_positions[i] == 0) ? 80:270;
 				$(elements[i]).stop().animate({
										top: offset,
										width: secBlock,
										// "filter":"blur(3px)",
										fontSize: '18px',
										"z-index":"4",
										opacity: 0.5,
										left: 250
										},1000,function(){
											$(elements[i])
												.addClass('secondary')
												.stop()
												.animate({
													top:elements_coordinates[elements_positions[i]]
												},1000,function(){ animation_complite = true });
										});
			}
		}
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

});