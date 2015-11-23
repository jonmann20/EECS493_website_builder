
window.Form = (function() {
	// private


	function collectFormInfo() {
		Form.info.fname = $('#fname').val();
		Form.info.portfolio = {
			item1: {},
			item2: []
		};




		console.log(Form.info);
	}

	function clickEvents() {
		$('button[type=submit]').on('click', function(e) {
			e.preventDefault();

			console.log('form submitted');
			collectFormInfo();
		});
	}


	return {
		// public
		info: {},

		init: function() {
			clickEvents();
		}
	};
})();

$(function() {
	Form.init();
});
