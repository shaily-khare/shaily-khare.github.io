$(document).ready(function () {
            HideAllDiv();
        });

function showhide(btn) {
    
    HideAllDiv();

    if (btn == 'aboutme')
		$('#aboutme').fadeIn(2000,"swing").show();
    else if (btn == 'exp')
        $('#exp').fadeIn(2000,"swing").show();
    else if (btn == 'education')
        $('#education').fadeIn(2000,"swing").show();
    else if (btn == 'skills')
        $('#skills').fadeIn(2000,"swing").show();
    else if (btn == 'projects')
        $('#projects').fadeIn(2000,"swing").show(); 
    }

function HideAllDiv() {
    $('#aboutme').hide();
    $('#exp').hide();
    $('#connect').hide();
	$('#skills').hide();        
	$('#projects').hide();
	$('#education').hide();
}
