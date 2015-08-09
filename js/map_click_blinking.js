$(document).ready(function () {
    var areaId,
        $map = $('img'),
        singleHoverOptions = {
            fade: true,
            stroke: true,
            isSelectable: false,
            fill: false,
            strokeWidth: 5,
            strokeColor: 'F00000',
            clickNavigate: true,
            onMouseover: function () {
                console.log($(this));
                var value = $(this).attr("class");
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
                    $(this).mapster('set', false).mapster('set', true, {
                        fill: false,
                        stroke: true,
                        strokeColor: 'A20812'
                    });
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
        };

    $mapWrap.on('click', houseGroup.red, function () {
        $map.mapster({mapKey: 'class'}).mapster('set', 'selected', 'red_house', optionsForAreas.red);
        setTimeout(function () {
            houseList.$redHouse.mapster('set', 'deselected');
            $map.mapster({mapKey: 'id'}).mapster('set_options', singleHoverOptions);
        }, 500);
    });

    $mapWrap.on('click', houseGroup.green, function () {
        $map.mapster({mapKey: 'class'}).mapster('set', true, 'green_house', optionsForAreas.green);

        setTimeout(function () {
            houseList.$redHouse.mapster('set', 'deselected');
            $map.mapster({mapKey: 'id'}).mapster('set_options', singleHoverOptions);
        }, 500);
    });


    $mapWrap.on('click', houseGroup.orange, function () {
        $map.mapster({mapKey: 'class'}).mapster('set', true, 'orange_house', optionsForAreas.orange);
        setTimeout(function () {
            houseList.$redHouse.mapster('set', 'deselected');
            $map.mapster({mapKey: 'id'}).mapster('set_options', singleHoverOptions);
        }, 500);
    });

    $mapWrap.on('click', houseGroup.black, function () {
        $map.mapster({mapKey: 'class'}).mapster('set', true, 'black_house', optionsForAreas.black);
        setTimeout(function () {
            houseList.$redHouse.mapster('set', 'deselected');
            $map.mapster({mapKey: 'id'}).mapster('set_options', singleHoverOptions);
        }, 500);

    });

    $map.mapster(singleHoverOptions);


});