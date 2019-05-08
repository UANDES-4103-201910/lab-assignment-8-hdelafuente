// Note: $(() => {}); is equivalent to $(document).ready(function(){})
$(document).ready(function () {
    $('.key').click(function () {
        var keyValue = $(this).attr('value');
        if (keyValue == "Bksp"){
            var wText = $('#written_text').text();
            var newText = wText.slice(0, wText.length - 1);
            $('#written_text').empty();
            $('#written_text').append(newText);
        }
        else if (keyValue == "Enter"){
            $('#written_text').append("<br><br>");
        }
        else {
            $('#written_text').append(keyValue);
        }
        console.log(keyValue);
    });
    var hidden = 0;
    $('#btn-show-hide').click(function () {
        if (hidden == 0) {
            $('#kcontainer').hide();
            hidden += 1;
        }
        else {
            $('#kcontainer').show();
            hidden -= 1;
        }
    })
});

