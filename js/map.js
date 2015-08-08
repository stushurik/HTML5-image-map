$(document).ready(function () {
        var areaId,
            //$('area:not(.square_red,.square_green,.square_black,.square_orange)')
                $map = $('img'),
                $hoverAreas = $('area:not(.square_red,.square_green,.square_black,.square_orange)'),
                singleHoverOptions = {
                    stroke: true,
                    isSelectable: false,
                    fill: false,
                    strokeWidth: 5,
                    strokeColor: '660000',
                    clickNavigate: true,
                    staticState: false,
                    onMouseover: function () {
                        var value = $(this).attr("class");
                        areaId = $(this).attr("id");
                        areaId = parseInt(areaId);
                        if (areaId != 501 && areaId != 502 && areaId != 503 && areaId != 504) {
                            switches.green = true;
                            switches.black = true;
                            switches.orange = true;
                            switches.red = true;
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

                        }
//                        if (value == 'square_red' || value == 'square_black' || value == 'square_orange' || value == 'square_green') {
//                                $(this).mapster('highlight',false);
//                            }
                    },
                    onMouseout: function () {
                        if (areaId != 501 && areaId != 502 && areaId != 503 && areaId != 504) {
                            $(this).mapster('set', false);
                        }
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


        $mapWrap.on('click', houseGroup.red, function () {

            if (switches.red) {
                $areas.mapster('deselect');
                houseList.$redHouse.mapster('set', 'selected', optionsForAreas.red);
                switches.green = switches.black = switches.orange = switches.red;


            } else {
                houseList.$redHouse.mapster('set', 'deselected');
            }

            switches.red = !switches.red;
        });
        $(houseGroup.green).click(function(){
            if (switches.green) {
                $areas.mapster('deselect');
                houseList.$greenHouse.mapster('set', 'selected', optionsForAreas.green);
                switches.red = switches.black = switches.orange = switches.green;
            } else {
                houseList.$greenHouse.mapster('set', 'deselected');
            }
            switches.green = !switches.green;
        });



        $(houseGroup.orange).click( function () {
            if (switches.orange) {
                $areas.mapster('deselect');
                houseList.$orangeHouse.mapster('set', 'selected', optionsForAreas.orange);
                switches.green = switches.black = switches.red = switches.orange;
            } else {
                houseList.$orangeHouse.mapster('set', 'deselected');
            }
            switches.orange = !switches.orange;
        });
        $(houseGroup.black).click( function () {
            if (switches.black) {
                $areas.mapster('deselect');
                houseList.$blackHouse.mapster('set', 'selected', optionsForAreas.black);
                switches.green = switches.red = switches.orange = switches.black;
            } else {
                houseList.$blackHouse.mapster('set', 'deselected');
            }
            switches.black = !switches.black;
        });
        console.log($map);
        $map.mapster(singleHoverOptions);
        $hoverAreas.mapster(singleHoverOptions);

    });