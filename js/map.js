$(document).ready(function () {
    var $map = $('img'),
        singleHoverOptions = {
            mapKey: 'data-area',
            stroke: true,
            isSelectable: false,
            fill: false,
            strokeWidth: 5,
            clickNavigate: true,
            areas:[{
                key:'red_lot',
                strokeColor: '800000'
            },
            {
                key:'green_lot',
                strokeColor: '00CC00'
            }
            ,{
                key:'orange_lot',
                strokeColor: 'FF9900'

            },{
                key:'black_lot',
                strokeColor: '202020'

            },{
                key:'setOfLots',
                strokeColor: 'FF3333'

            }],
            onMouseover: function () {
                $map.mapster('set', false, selectedArea);
                switches.green = switches.black = switches.orange = switches.red = true;
                var value = $(this).attr("class");
                if (value == 'red_lot') {
                    $(this).mapster('set', false).mapster('set', true, {
                        strokeColor: '800000'
                    });
                }
                if (value == 'black_lot') {
                    $(this).mapster('set', false).mapster('set', true, {
                        strokeColor: '202020'
                    });
                }
                if (value == 'green_lot') {
                    $(this).mapster('set', false).mapster('set', true, {
                        strokeColor: '00CC00'
                    });
                }
                if (value == 'orange_lot') {
                    $(this).mapster('set', false).mapster('set', true, {
                        strokeColor: 'FF9900'
                    });
                }
                if (value == 'square_green') {
                    $(this).mapster('set', false).mapster('set', true, {
                        strokeColor: '07A218'
                    });
                }
                if (value == 'square_red') {
                    $(this).mapster('set', false).mapster('set', true, {
                        strokeColor: 'A20812'
                    });
                }
                if (value == 'square_orange') {
                    $(this).mapster('set', false).mapster('set', true, {
                        strokeColor: 'F4781E'
                    });
                }
                if (value == 'square_black') {
                    $(this).mapster('set', false).mapster('set', true, {
                        strokeColor: '000000'
                    });
                }
                if (value == 'setOfLots') {
                    $(this).mapster('set', false).mapster('set', true, {
                        strokeColor: 'FF3333'
                    });
                }
            },
            onMouseout: function () {
                $(this).mapster('set', false);

            }
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
        selectedArea,opts;


     houseLotGroup.$red.click( function (e) {
        e.preventDefault();
        if (switches.red) {
            selectedArea = $map.mapster('keys', 'red_lot');
             opts = $map.mapster('get_options','red_lot');
            $map.mapster('set', true, selectedArea, opts);

        } else {
            $map.mapster('set', false, selectedArea);
        }

        switches.red = !switches.red;
    });

    houseLotGroup.$green.click( function (e) {
        e.preventDefault();
        if (switches.green) {
            selectedArea = $map.mapster('keys', 'green_lot');
            opts = $map.mapster('get_options','green_lot');
            $map.mapster('set', true, selectedArea, opts);

        } else {
            $map.mapster('set', false, selectedArea);
        }

        switches.green = !switches.green;

    });


    houseLotGroup.$orange.click(  function (e) {
        e.preventDefault();
        if (switches.orange) {
            selectedArea = $map.mapster('keys', 'orange_lot');
            opts = $map.mapster('get_options','orange_lot');
            $map.mapster('set', true, selectedArea, opts);

        } else {
            $map.mapster('set', false, selectedArea);
        }

        switches.orange = !switches.orange;
    });

    houseLotGroup.$black.click( function (e) {
        e.preventDefault();
        if (switches.black) {
            selectedArea = $map.mapster('keys', 'black_lot');
            opts = $map.mapster('get_options','black_lot');
            $map.mapster('set', true, selectedArea, opts);

        } else {
            $map.mapster('set', false, selectedArea);
        }

        switches.black = !switches.black;
    });

        $map.mapster(singleHoverOptions);


});