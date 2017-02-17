	$('#name').text(nameOfCurrentMonth).css({color: 'purple', 'font-weight': 'bold', 'font-size': 18, margin: '6px 6px 6px 60px'});

	for (var i = 0; i < 6; i++){
		$('#calender').append('<tr></tr>');
		for (var j = 0; j < 7; j++){
			$('tr').eq(i).append('<td></td>');
		}
	}
	$('#calender').css({'border-collapse': 'collapse'});
	$('td').css({border: '1px solid black', height: '29px', width: '25px', padding: '1px 0px 1px 8px'});

	var startPoint = getNumberInWeek();
	var endingPoint = getLastDayInMonth();
	var now = 0;
	for (var i = 0; i < 6; i++){
		for (var j = 0; j < 7; j++){
			if (i === 0){
				switch(j){
					case 0: $('td').eq(j).addClass('days').text("пн"); break;
					case 1: $('td').eq(j).addClass('days').text("вт"); break;
					case 2: $('td').eq(j).addClass('days').text("ср"); break;
					case 3: $('td').eq(j).addClass('days').text("чт"); break;
					case 4: $('td').eq(j).addClass('days').text("пт"); break;
					case 5: $('td').eq(j).addClass('days').text("сб"); break;
					case 6: $('td').eq(j).addClass('days').text("вс"); break;
				}
			}
			if (j > 4){
				$('td').eq(j + i * 7).addClass('weekend');
			}
		}
	}
	for (var i = startPoint; i < (endingPoint + startPoint); i++){
		$('td').eq(i+7).text(++now);
			}
	$('td.days').css({color: '#008000', 'font-weight': 'bold', 'font-size': 17});
	$('tr:first > td').removeClass('weekend');
	$('td.weekend').css({color: 'red'});
	$('td.current').css({color: '#DAA520', 'font-weight': 'bold', 'font-size': 17});
	$('#run').one('click', function(){
		$('div:last').text("Нет. Эта кнопка не работает.");
})












