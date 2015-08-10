$(document).ready(function () {
    var $map = $('img'),
        singleHoverOptions = {
            mapKey: 'data-area',
            stroke: true,
            isSelectable: false,
            fill: false,
            strokeWidth: 5,
            clickNavigate: true,
            areas: [{
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

                }]
        },
        houseLotGroup = {
            $red: $('#503'),
            $green: $('#502'),
            $orange: $('#504'),
            $black: $('#501')
        },
        switches = {
            red: true,
            orange: true,
            black: true,
            green: true
        },
        selectedArea,
        opts,
        groupKey,
        keys,
        isSelected;


    $('.lot_key').click(function (e) {
        groupKey = $(this).data('group');
        isSelected = $map.mapster('get', groupKey);
        e.preventDefault();
        switch (groupKey) {
            case 'red_lot':
                keys = $map.mapster('keys', groupKey);
                opts = $map.mapster('get_options', groupKey);
                $map.mapster('set', true, keys, opts);
                break;
            case 'green_lot':
                keys = $map.mapster('keys', groupKey);
                opts = $map.mapster('get_options', groupKey);
                $map.mapster('set', true, keys, opts);
                break;
            case 'orange_lot':
                keys = $map.mapster('keys', groupKey);
                opts = $map.mapster('get_options', groupKey);
                $map.mapster('set', true, keys, opts);
                break;
            case 'black_lot':
                keys = $map.mapster('keys', groupKey);
                opts = $map.mapster('get_options', groupKey);
                $map.mapster('set', true, keys, opts);
                break;
            default:
                $map.mapster('set', !isSelected, groupKey);
                break;
        }

    });

    $map.mapster(singleHoverOptions);


});