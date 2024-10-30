/**
* Plugin Name: 	iJoomla! Toggle
* Plugin URI:  	https://ijoomla.org/wordpress-plugins/introductions/ijoomla-toggle/
* Description: 	Responsive accordion widget for WordPress, created by <a href="https://ijoomla.org" target="_blank">iJoomla.org</a>
* Version:     	1.0
* Author:      	Amin Shahrokhi
* Author URI:  	https://ijoomla.org/
* License:     	GPL2
* License URI: 	https://www.gnu.org/licenses/gpl-2.0.html
**/

jQuery.noConflict();

jQuery(document).ready(function(){

	jQuery('.itoggle').each(function(){
		var moduleID = jQuery(this).attr('id');
		jQuery(this).find('section:first-child').addClass('itoggle_active');
		jQuery(this).find('section').click(function(){
			if(jQuery(this).hasClass('itoggle_active'))
			{
				jQuery(this).removeClass('itoggle_active');
				jQuery(this).find('.itoggle_content').slideUp('fast');
			}
			else
			{
				jQuery(this).addClass('itoggle_active');
				jQuery(this).find('.itoggle_content').slideDown('fast');
			}
		});
	});

});
