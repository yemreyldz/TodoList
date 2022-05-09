$(document).ready(function () {
    $('#save').click(function () {
        if ($('#text').val().length != 0) {
            var x = $('.container').html();
            var y =
                `<div class="alert alert-warning alert-dismissible fade in"><a href="#" class="close close-danger" data-dismiss="alert" aria-label="close">×</a>` + $('#text').val() + `</div>`;
            $('.container').html(x + y);
            $('#text').val("");
        } else alert("Enter some Text!");
    });
        
    
});