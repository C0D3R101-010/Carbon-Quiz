$(() => {
	let score = 0
	
	$('#sctxt').hide();
	
	$('#fuelForm').hide().prop('disabled', true);
	$('#adulForm').hide().prop('disabled', true);
	$('#chilForm').hide().prop('disabled', true);
	$('#grenForm').hide().prop('disabled', true);
	$('#meatForm').hide().prop('disabled', true);
	$('#wastForm').hide().prop('disabled', true);
	
	$('#transForm').on('submit', (e) => {
		e.preventDefault();
		score += Number($('#trans').val());
		$('#transForm').hide().prop('disabled', true);
		$('#fuelForm').show().prop('disabled', false);
	});
	$('#fuelForm').on('submit', (e) => {
		e.preventDefault();
		score += Number($('#fuel').val());
		$('#fuelForm').hide().prop('disabled', true);
		$('#adulForm').show().prop('disabled', false);
	});
	function isNumeric(str) {
		return typeof str === 'string' && str.trim() !== '' && Number.isFinite(Number(str));
	};
	$('#adulForm').on('submit', (e) => {
		e.preventDefault();
		val1 = $('#adul').val();
		if (isNumeric(val1)) {
			score += val1 < 5 ? (Number($('#adul').val()) * 5) + 5 : 30;
			$('#adulForm').hide().prop('disabled', true);
			$('#chilForm').show().prop('disabled', false);
		};
	});
	$('#chilForm').on('submit', (e) => {
		e.preventDefault();
		let val2 = $('#chil').val();
		if (isNumeric(val2)) {
			score += val2 < 7 ? (Number($('#chil').val()) * 3) + 5 : 26;
			$('#chilForm').hide().prop('disabled', true);
			$('#grenForm').show().prop('disabled', false);
		};
	});
	$('#grenForm').on('submit', (e) => {
		e.preventDefault();
		if ($('#gren').length == 0) {
			score += 5;
		};
		$('#grenForm').hide().prop('disabled', true);
		$('#meatForm').show().prop('disabled', false);
	});
	$('#meatForm').on('submit', (e) => {
		e.preventDefault();
		score += Number($('#meat').val()) + 5;
		$('#meatForm').hide().prop('disabled', true);
		$('#wastForm').show().prop('disabled', false)
	});
	$('#wastForm').on('submit', (e) => {
		e.preventDefault();
		score += Number($('#wast').val());
		$('#wastForm').hide().prop('disabled', true);
		$(`<button id='res'>Get results</button>`).appendTo('body');
		$('#res').on('click', function () {
			$('#res').hide().prop('disabled', true);
			$('#sctxt').text(`Score: ${128 - score}/102`).show();
		});
	});
});
