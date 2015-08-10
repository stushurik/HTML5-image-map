$(document).ready(function () {
    var $map = $('img'),
        mapsterOptions = {
            mapKey: 'data-area',
            stroke: true,
            isSelectable: false,
            fill: false,
            strokeWidth: 5,
            clickNavigate: true,
            areas: [
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
            ]
        },
        groupKey;


    $('.lot_key').click(function (e) {
        groupKey = $(this).data('group');
        e.preventDefault();
        $map.mapster('highlight', groupKey);

    });

    $map.mapster(mapsterOptions);


});