/*
    Simple OSK
    Author :    Anders Downey Najdecki 2015
*/


function done(value){
    // put your own stuff here
    alert(value);
}

$(document).ready(function(){

    var $keyset = $('.key:visible');
    var $input = $('#keyboard-input');
    var o = {
        38: 'up',
        40: 'bottom',
        37: 'prev',
        39: 'next'
    }


    $(document).on('keyup', function (e) {

        var $keysetset = $('.key:visible');
        var colwidth = 10;
        var dir = o[e.which];
        var $active = $('.active'),
            i = $keyset.index($active);
        if (e.which == 13) {
            $('.selected').removeClass('selected');
            

            if($('.active').hasClass('spc')){
                $('.active').prev().addClass('selected');
            } else {
                $active.addClass('selected');
            }

            var options = $('.selected').data();
            if(typeof(options.action) !== 'undefined'){
                var action = options.action.split(':');
                if(action[0] == 'kbd'){
                    $('.active').removeClass('active');
                    $('.selected').removeClass('selected');
                    $('.keys').hide();
                    $('.keys[rel=' + action[1] + ']').show();
                    
                } else if(action[0] == 'del'){
                    $input.val($input.val().substring(0, $input.val().length - 1));

                } else if(action[0] == 'done'){
                    done($input.val());
                }
            } else {
                $input.val($input.val() + (typeof(options.key) !== 'undefined' ? options.key : $('.selected em').text()));
            }
            return;
        }
        if (!$active.length) {
            $keyset.first().addClass('active');
            return;
        } else {
            $keyset.removeClass('fakeactive');
            if (dir === 'next' || dir === 'prev') {
                $active.removeClass('active')[dir]().addClass('active');
                if($('.active').hasClass('spc')){
                    $('.active').removeClass('active')[dir]().addClass('active');
                }
            } else {
                var p = dir === 'up' ? (i - colwidth) : (i + colwidth);
                $keyset.removeClass('active');
                $keyset.eq(p).addClass('active')
            }
            if($('.active').hasClass('spc')){
                $('.active').prev().addClass('fakeactive');
            }
        }

        $input.focus();
    })

});