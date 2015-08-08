$(document).ready(function () {
    var $map = $('img'),
        singleHoverOptions = {
            fade:true,
            stroke: true,
            isSelectable: false,
            fill: false,
            strokeWidth: 5,
            strokeColor: 'F00000',
            clickNavigate: true,
            onMouseout: function () {
                    $(this).mapster('set', false);

            }
        };
    $map.mapster(singleHoverOptions);


});