$(document).ready(function () {
        var areaId,
                $map = $('img[usemap]'),
                singleHoverOptions = {
                    stroke: true,
                    isSelectable: false,
                    fill: false,
                    strokeWidth: 5,
                    strokeColor: '660000',
                    clickNavigate: true,
                    staticState: false,
                    onMouseover: function (e) {
                        var value = $(this).attr("class");
                        areaId = $(this).attr("id");
                        areaId = parseInt(areaId);
                        if (areaId != 501 && areaId != 502 && areaId != 503 && areaId != 504) {
                            switches.green = true;
                            switches.black = true;
                            switches.orange = true;
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
                    },
                    onMouseout: function (e) {
                        if (areaId != 501 && areaId != 502 && areaId != 503 && areaId != 504) {
                            $(this).mapster('set', false);
                        }
                    }
                },
                optionsForAreas = {
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
                    green: '#502',
                    orange: '#504',
                    black: '#501'
                },
                switches = {
                    orange: true,
                    black: true,
                    green: true
                },
                $areas = $('area');


        $mapWrap.on('click', houseGroup.green, function () {

            if (switches.green) {
                $areas.mapster('deselect');
                houseList.$greenHouse.mapster('set', 'selected', optionsForAreas.green);
                switches.black = true;
                switches.orange = true;
            } else {
                houseList.$greenHouse.mapster('set', 'deselected');
            }
            switches.green = !switches.green;
        });
        $mapWrap.on('click', houseGroup.orange, function () {
            if (switches.orange) {
                $areas.mapster('deselect');
                houseList.$orangeHouse.mapster('set', 'selected', optionsForAreas.orange);
                switches.green = true;
                switches.black = true;
            } else {
                houseList.$orangeHouse.mapster('set', 'deselected');
            }
            switches.orange = !switches.orange;
        });
        $mapWrap.on('click', houseGroup.black, function () {
            if (switches.black) {
                $areas.mapster('deselect');
                houseList.$blackHouse.mapster('set', 'selected', optionsForAreas.black);
                switches.green = true;
                switches.orange = true;
            } else {
                houseList.$blackHouse.mapster('set', 'deselected');
            }
            switches.black = !switches.black;
        });

        $map.mapster(singleHoverOptions);
    });