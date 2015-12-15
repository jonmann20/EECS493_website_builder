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

		// Patch together portfolio items (was easier for a clean export and a messy import)

		// Normalize portofolio items
		if(typeof(d.title) === 'string') {
			d.title = [d.title];
		}

		if(typeof(d.description) === 'string') {
			d.description = [d.description];
		}

		if(typeof(d['link-title']) === 'string') {
			d['link-title'] = [d['link-title']];
		}

		if(typeof(d['link-href']) === 'string') {
			d['link-href'] = [d['link-href']];
		}

		// Determine number of portfolio items
		var n = 0;

		if(d.image[1] !== '') {  // d.image.length is always at least 2
			n = d.image.length-1;
		}

		if(d.image.length-1 > n) {
			n = d.image.length-1;
		}

		if(d.title.length > n) {
			n = d.title.length;
		}

		if(d.description.length > n) {
			n = d.description.length;
		}

		if(d['link-title'].length > n) {
			n = d['link-title'].length;
		}

		if(d['link-href'].length > n) {
			n = d['link-href'].length;
		}

		// Add portfolio items to page
		for(var i=1; i < n; ++i) {
			$('.portfolio-add-item').trigger('click');
		}

		setTimeout(function() {
			var item;

			d.image.forEach(function(img, i) {
				if(i !== 0) {
					item = $('#portfolio-item' + (i));
					item.find('.image-preview').html('<img src="' + d.image[i] + '">');
				}
			});

			d.title.forEach(function(title, i) {
				item = $('#portfolio-item' + (i+1));
				item.find('input[name=title]').val(d.title[i]);
			});

			d.description.forEach(function(desc, i) {
				item = $('#portfolio-item' + (i+1));
				item.find('textarea[name=description]').val(desc);
			});

			d['link-title'].forEach(function(linkTitle, i) {
				item = $('#portfolio-item' + (i+1));
				item.find('input[name=link-title]').val(d['link-title'][i]);
			});

			d['link-href'].forEach(function(href, i) {
				item = $('#portfolio-item' + (i+1));
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
