jQuery(document).ready(function(){
	// console.log('test');
	if (jQuery(window).width() < 992){
		let blog = jQuery('.main-screen-blog');
		// console.log(blog);
		blog.detach();
		blog.appendTo(".nav-container");
	}
	jQuery('.burger').click(function(){
		jQuery('.nav-container').toggleClass('active');
		jQuery(this).toggleClass('active')
	})
})