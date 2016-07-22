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
    
    //Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

});