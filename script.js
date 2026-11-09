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
		$(`<button class='endDesc'>Get results</button>`)
			.appendTo('body')
			.on('click', function () {
				$(this).hide().prop('disabled', true);
				$('#sctxt').text(`Score: ${113 - score}/88`).show()
				$(`<div id='scDesc'>Score meanings:<br>
					50-88: Great<br>
					37-50: Good<br>
					21-37: Fair<br>
					0-21: Needing improvement
				</div>`).appendTo('body');
				$(`<button class='endDesc'>Question explanations</button>`)
					.appendTo('body')
					.on('click', function () {
						$(this).hide().prop('disabled', true);
						$(`<div id='qDesc'></div>`).appendTo('body');
						$('#qDesc').text(`
							Utilizing renewable energy, such as solar and wind, reduces our reliance on the use of fossil fuels to generate electricity. Also, the more we eat beef, the more demand there is for cattle farming. Cattle farming causes the population of cattle on the planet to be much much larger than it would be naturally, and the methane that is released by cattle is a significant contributor to greenhouse gases.
						`);
					});
		});
	});
});
