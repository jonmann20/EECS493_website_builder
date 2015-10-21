'use strict';
/*
 * Main
 */
window.Main = (function() {

	function clickEvents() {

		$('.nav-tabs').on('click', 'a', function(e) {
			e.preventDefault();
			if(!$(this).hasClass('portfolio-add-item')) {
				$(this).tab('show');
			}
		})
		.on('click', 'span', function() {
			var anchor = $(this).siblings('a');
			$(anchor.attr('href')).remove();
			$(this).parent().remove();
			$('.nav-tabs li').children('a').first().trigger('click');
		});

		$('.portfolio-add-item').on('click', function(e) {
			e.preventDefault();
			var id = $('.nav-tabs').children().length;
			var tabId = 'portfolio-item' + id;

			$(this).closest('li').before('<li><a href="#' + tabId + '">Item ' + id + '</a> <span> x </span></li>');
			$('.tab-content').append('<div id="' + tabId + '" class="tab-pane portfolio-item">test</div>');


			$('.nav-tabs li:nth-child(' + id + ') a').trigger('click');
			//$('.nav-tabs a[href="' + href + '"]').tab('show');
		});
	}

	function doPicturePreview(input, img) {
		input.on('input', function() {
			img.attr('src', $(this).val());
		});
	}

	function doTextPreview(input, elt) {
		input.on('input', function() {
			elt.text($(this).val());
		});
	}

	function doLinkPreview(textInput, hrefInput, link) {
		textInput.on('input', function() {
			link.text($(this).val());
		});

		hrefInput.on('input', function() {
			link.attr('href', $(this).val());
		});
	}

	return {
		init: function() {
			clickEvents();

			doPicturePreview($('#pic'), $('.pic-preview'));
			doPicturePreview($('#meme'), $('.meme-preview'));
			doPicturePreview($('#portfolio-image'), $('.portfolio-preview-image'));
			doTextPreview($('#portfolio-description'), $('.portfolio-preview-description'));
			doLinkPreview($('#portfolio-link'), $('#portfolio-link-href'), $('.portfolio-preview-link'));
		}
	};
})();

$(function() {
	Main.init();
});
