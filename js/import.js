'use strict';
/*
 * Import handles importing a previous session's JSON
 */
window.Import = (function() {

	function restoreFields(d) {
		console.log(d);

		if(d.image.length > 0) {
			$('#image-profile').html('<img src="' + d.image[0] + '">');
		}

		$('#name').val(d.name);
		$('#tagline').val(d.tagline);
		$('#about').val(d.about);
		$('#email').val(d.email);
		$('input[name=cell0]').val(d.cell0);
		$('input[name=cell1]').val(d.cell1);
		$('input[name=cell2]').val(d.cell2);
		$('#twitter').val(d.twitter);
		$('#instagram').val(d.instagram);

		if(d.resume) {
			$('input[value=student]').trigger('click');
			$('#resume').val(d.resume);
		}

		if(d.instagram) {
			$('input[value=developer]').trigger('click');
			$('#github').val(d.github);
		}

		$('.dropdown-menu .active .theme').parent().removeClass('active');

		$('.theme').each(function(i, themeOption) {
			if($(themeOption).text() === d.theme) {
				$(themeOption).parent().addClass('active');
			}
		});

		//$('.photographer')

		//$('.template')

		d.description.forEach(function(d, i) {
			if(i !== 0) {
				$('.portfolio-add-item').trigger('click');
			}
		});

		setTimeout(function() {
			var item;

			d.description.forEach(function(desc, i) {
				item = $('#portfolio-item' + (i+1));

				item.find('.image-preview').html('<img src="' + d.image[i+1] + '">');
				item.find('input[name=title]').val(d.title[i]);
				item.find('textarea[name=description]').val(desc);
				item.find('input[name=link-title]').val(d['link-title'][i]);
				item.find('input[name=link-href]').val(d['link-href'][i]);
			});
		}, 0);
	}


	return {
		json: function(e) {
			var reader = new FileReader();
			reader.onload = function(e) {
				var json = JSON.parse(e.target.result);
				restoreFields(json);
			};
			reader.readAsText(e.target.files[0]);
		}
	};
})();
