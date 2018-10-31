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
			if (elements_positions[i] == 0) {$(elements[i]).css({"z-index":"2"})}
		}
	};

	function up_press() {
		for (let i = 0; i < 3; i++)
		{
			elements_positions[i] = ((elements_positions[i] - 1) < 0) ? 2:(elements_positions[i]-1);
		}
	};


	function move_blocks(){
		//1. Блок зеленый почему то позже всех получает 4 з-индекс
		// 2. Обратить внимание на время(+координаты) анимации среднего блока
		// как то она странно происходит  
		for (let i = 0; i<3; i++) {
			if (elements_positions[i] == 1) {
				$(elements[i]).removeClass('secondary')
								.animate({
										'z-index': 5,
										'opacity': .7,
										'font-size': '23px',
										'top': 140,
										'left': 200,
										'width': supBlock-100
				},1000,function(){
					$(elements[i]).css({"z-index":5});
									}).animate({
										top: elements_coordinates[elements_positions[i]],
										width: supBlock,
										fontSize: '30px',
										opacity:1,
										left: 150
										},1000,function(){
											// console.log('Secondary main block animation must complete now');
											// $(elements[i]).css({"-webkit-filter": "blur(0px)"});
										});
			} else {
				var offset = (elements_positions[i] == 0) ? 80:270;
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