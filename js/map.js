$(document).ready(function () {

    var areas = [
        {
            key: 'red_lot',
            strokeColor: '800000'
        },
        {
            key: 'green_lot',
            strokeColor: '00CC00'
        }
        , {
            key: 'orange_lot',
            strokeColor: 'FF9900'

        }, {
            key: 'black_lot',
            strokeColor: '202020'

        }, {
            key: 'setOfLots',
            strokeColor: 'FF3333'

        }
    ];

    function setOptions(color, key){

        areas.push(
            {
                'key': key,
                'strokeColor': color
            }
        )

    };

    $('area.red_lot').each(function(index, value){

       setOptions('800000', $(this).attr('id'));

    });
    $('area.black_lot').each(function(index, value){

        setOptions('202020', $(this).attr('id'));

    });
    $('area.green_lot').each(function(index, value){

        setOptions('00CC00', $(this).attr('id'));

    });
    $('area.orange_lot').each(function(index, value){

        setOptions('FF9900', $(this).attr('id'));

    });

    var $map = $('img'),
        mapsterOptions = {
            mapKey: 'data-area',
            stroke: true,
            isSelectable: false,
            fill: false,
            strokeWidth: 5,
            clickNavigate: true,
            areas: areas
        },
        groupKey;


    $('.lot_key').click(function (e) {
        groupKey = $(this).data('group');
        e.preventDefault();
        $map.mapster('highlight', groupKey);

    });

    $map.mapster(mapsterOptions);


});