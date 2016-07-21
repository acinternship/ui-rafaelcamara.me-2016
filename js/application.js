$(document).ready(function() {
    $('#skills').on('click', '.btnShowSkills', function() {
       $('#skill-box').removeClass('hide');
        $(this).parent().remove();
    });
});