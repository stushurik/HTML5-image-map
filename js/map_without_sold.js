$(document).ready(function () {
    var areaId,
        hoverEl,
        $map = $('img'),
        singleHoverOptions = {
            fade:true,
            stroke: true,
            isSelectable: false,
            fill: false,
            strokeWidth: 5,
            strokeColor: 'F00000',
            clickNavigate: true,
            onMouseover: function () {
                $map.unbind('mouseout', resetMapKey);
                console.log($(this));
                var value = $(this).attr("class");
                hoverEl = value;
                areaId = $(this).attr("id");
                areaId = parseInt(areaId, 10);
                switches.green = switches.black = switches.orange = switches.red = true;
                    if (value == 'red_house') {
                        $(this).mapster('set', false).mapster('set', true, {
                            fill: false,
                            stroke: true,
                            strokeColor: '800000'
                        });
                    }
                    if (value == 'black_house') {
                        $(this).mapster('set', false).mapster('set', true, {
                            fill: false,
                            stroke: true,
                            strokeColor: '202020'
                        });
                    }
                    if (value == 'green_house') {
                        $(this).mapster('set', false).mapster('set', true, {
                            fill: false,
                            stroke: true,
                            strokeColor: '00CC00'
                        });
                    }
                    if (value == 'orange_house') {
                        $(this).mapster('set', false).mapster('set', true, {
                            fill: false,
                            stroke: true,
                            strokeColor: 'FF9900'
                        });
                    }
                if (value == 'square_green') {
                        $(this).mapster('set', false).mapster('set', true, {
                            fill: false,
                            stroke: true,
                            strokeColor: '07A218'
                        });
                    }
                if (value == 'square_red') {
                        $(this).mapster('set', false);
                    }
                if (value == 'square_orange') {
                        $(this).mapster('set', false).mapster('set', true, {
                            fill: false,
                            stroke: true,
                            strokeColor: 'F4781E'
                        });
                    }
                if (value == 'square_black') {
                        $(this).mapster('set', false).mapster('set', true, {
                            fill: false,
                            stroke: true,
                            strokeColor: '000000'
                        });
                    }
            },
            onMouseout: function () {
                    $(this).mapster('set', false);

            }
        },
        optionsForAreas = {
            red: {
                fill: false,
                stroke: true,
                strokeColor: '800000',
                strokeWidth: 5,
                staticState: true
            },
            black: {
                fill: false,
                stroke: true,
                strokeColor: '202020',
                strokeWidth: 5,
                staticState: true
            },
            green: {
                fill: false,
                stroke: true,
                strokeColor: '00CC00',
                strokeWidth: 5,
                staticState: true
            },
            orange: {
                fill: false,
                stroke: true,
                strokeColor: 'FF9900',
                strokeWidth: 5,
                staticState: true
            }
        },
        $mapWrap = $('#villageMap'),
        houseList = {
            $redHouse: $('.red_house'),
            $greenHouse: $('.green_house'),
            $orangeHouse: $('.orange_house'),
            $blackHouse: $('.black_house')

        },
        houseGroup = {
            red: '#503',
            green: '#502',
            orange: '#504',
            black: '#501'
        },
        switches = {
            red: true,
            orange: true,
            black: true,
            green: true
        },
        $areas = $('area');
    var resetMapKey = function () {
      $map.mapster({mapKey: 'id'}).mapster('set_options', singleHoverOptions);

    };

    $mapWrap.on('click', houseGroup.green, function () {
        if (switches.green) {
            $areas.mapster('deselect');
            $map.mapster({mapKey: 'class'}).mapster('set', true, 'green_house', optionsForAreas.green).bind('mouseout', resetMapKey);
            switches.red = switches.black = switches.orange = switches.green;

        } else {
            $map.unbind('mouseout', resetMapKey);
            houseList.$greenHouse.mapster('set', 'deselected');
            $map.mapster({mapKey: 'id'}).mapster('set_options', singleHoverOptions);
        }
        switches.green = !switches.green;
    });


    $mapWrap.on('click', houseGroup.orange, function () {
        if (switches.orange) {
            $areas.mapster('deselect');
             $map.mapster({mapKey: 'class'}).mapster('set', true, 'orange_house', optionsForAreas.orange).bind('mouseout', resetMapKey);
            switches.green = switches.black = switches.red = switches.orange;
        } else {
            $map.unbind('mouseout', resetMapKey);
            houseList.$orangeHouse.mapster('set', 'deselected');
            $map.mapster({mapKey: 'id'}).mapster('set_options', singleHoverOptions);
        }
        switches.orange = !switches.orange;
    });
    $mapWrap.on('click', houseGroup.black, function () {
        if (switches.black) {
            $areas.mapster('deselect');
             $map.mapster({mapKey: 'class'}).mapster('set', true, 'black_house', optionsForAreas.black).bind('mouseout', resetMapKey);
            switches.green = switches.red = switches.orange = switches.black;
        } else {
            $map.unbind('mouseout', resetMapKey);
            houseList.$blackHouse.mapster('set', 'deselected');
            $map.mapster({mapKey: 'id'}).mapster('set_options', singleHoverOptions);
        }
        switches.black = !switches.black;
    });

    $map.mapster(singleHoverOptions);


});