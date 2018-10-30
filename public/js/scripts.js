jQuery(function($){
	var elements_coordinates 	= 	[105,175,245],
		elements_positions		=	[0,1,2],
		supBlock				=	600,
		secBlock				=	400;
	var elements = document.getElementsByClassName('blocks');

	function down_press(){
		for (let i = 0; i<3; i++)
		{
			elements_positions[i] = ((elements_positions[i] + 1) > 2) ? 0:(elements_positions[i]+1);
		}
	};

	function up_press() {
		for (let i = 0; i < 3; i++)
		{
			elements_positions[i] = ((elements_positions[i] - 1) < 0) ? 2:(elements_positions[i]-1);
		}
	};


	function move_blocks(){
		for (let i = 0; i<3; i++) {
			console.log('iteration number =>  ' + i);
			if (elements_positions[i] == 1) {
				console.log('elements_positions is 0 - central block');
				console.log('started animations');
				$(elements[i]).removeClass('secondary');
				$(elements[i]).animate({
										'opacity': .75,
										'font-size': '24px',
										'top': 135,
										'width': supBlock-100,
										'left': 200
				},1000,function(){
					$(elements[i]).css({"z-index":5});
					console.log('Main block First animation with opacity and fz is must complete now...');
				}).animate({
										top: elements_coordinates[elements_positions[i]],
										width: supBlock,
										fontSize: '30px',
										opacity:1,
										left: 150
										},1000,function(){
											console.log('Secondary main block animation must complete now');
											// $(elements[i]).css({"-webkit-filter": "blur(0px)"});
										});
			} else {
				var offset = (elements_positions[i] == 0) ? 80:270;
				console.log('starting supportin annimation of up and low blocks');
				console.log('Working with element ' + i);
 				$(elements[i]).animate({
										top: offset,
										width: secBlock,
										fontSize: '18px',
										opacity: 0.5,
										left: 250
										},1000,function(){
											$(elements[i])
												.addClass('secondary')
												.css({"z-index":'4'})
												.animate({
													top:elements_coordinates[elements_positions[i]]
												},1000,function(){});
											// $(elements[i]).css({"-webkit-filter": "blur(1px)"});
											console.log('Secondary animations must complete now');
										});
			}
		}
	};

	$('.down-btn').click(function(){
		down_press();
		move_blocks();

	});
	$('.up-btn').click(function(){
		up_press();
		move_blocks();
	});

});