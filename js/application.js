$(document).ready(function() {
    $('#skills').on('click', '.btnShowSkills', function() {
        
        var btnShowSkills = $(this);
        
        if(btnShowSkills.text() == 'SHOW MY SKILLS') {
            btnShowSkills.text('HIDE MY SKILLS');    
            btnShowSkills.closest('.container').find('#skill-box').fadeIn();
        } else {
            btnShowSkills.text('SHOW MY SKILLS');
             btnShowSkills.closest('.container').find('#skill-box').fadeOut();
        }
    });
    
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
	});
});