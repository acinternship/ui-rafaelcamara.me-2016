$(document).ready(function() {
    function fillPage(data) {
        $('#name').text(data.name);
        $('#photoUser').attr("src", data.photoUser);
        $('#aboutMeText').text(data.aboutMeText);
        $('#mySkillsText').text(data.mySkillsText);
        $('#company').html(data.company);
        $('#company').attr("href", data.companyLink);
        $('.facebookLink').attr("href", data.facebook);
        $('.twitterLink').attr("href", data.twitter);
        $('.linkedinLink').attr("href", data.linkedin);
        $('.githubLink').attr("href", data.github);
        
        $.each(data.skills, function(i, item) {
            $('#skill-box').append( "<div class='col-md-3'><div class='item'><img class='image' src='"+ item +"'></div></div>" );
        });
        
        $.each(data.work, function(i, item) {
            
            $('#job-box').append( "<div class='job-info col-md-6'><div class='col-md-12'><img class='margin-bottom' src='"+ item.logo +"'></div><div class='margin-bottom row'><strong>"+ item.role +"</strong></div><div class='margin-bottom row'>"+ item.period +"</div><div class='margin-bottom row'>"+ item.description +"</div></div>" );
        });
        
        $.each(data.education, function(i, item) {
            
            $('#education-box').append( "<div class='col-md-4'><div class='education-box '><div id='education-info'><div class='row'>"+item.title+"</div><div class='row'><strong>"+item.institution+"</strong></div><div class='row'>"+item.period+"</div></div></div><img src='images/separator-education.png'></div>" );
        });
        
      
    }
    
    $.getJSON({url: "ajax/fonte.json"})
        .done(function(data) { fillPage(data);})
        .fail(function(error) { console.log("[ERRO]" + error);})
        .always(function() {console.log("Fim");});
}); 