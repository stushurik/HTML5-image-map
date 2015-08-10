$(document).ready(function () {

    var areas = [];

    function setOptions(array, color, key){

        array.push(
            {
                'key': key,
                'stroke': true,
                'strokeColor': color
            }
        )

    };

    $('area.red_house').each(function(index, value){

       setOptions(areas, '800000', $(this).attr('id'));

    });
    $('area.black_house').each(function(index, value){

        setOptions(areas, '202020', $(this).attr('id'));

    });
    $('area.green_house').each(function(index, value){

        setOptions(areas, '00CC00', $(this).attr('id'));

    });
    $('area.orange_house').each(function(index, value){

        setOptions(areas, 'FF9900', $(this).attr('id'));

    });

    var
        $map = $('img'),
        $areas = $('area'),

        singleHoverOptions = {
            areas: areas,
            fade: false,
            stroke: true,
            isSelectable: false,
            fill: false,
            strokeWidth: 5,
            strokeColor: 'F00000',
            clickNavigate: true,
            mapKey: 'id',

            highlight: true
        },


        houseList = {
            $redHouse: $('.red_house'),
            $greenHouse: $('.green_house'),
            $orangeHouse: $('.orange_house'),
            $blackHouse: $('.black_house')

        },
        houseGroup = {
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
        };


    houseGroup.$red.click(function(event){

        //function select() {

            //var ids = '';
            //$('area.red_house').each(function(index, value){
            //    ids += ',' + $(value).attr('id');
            //});
            //
            //ids = ids.slice(1,-1);
            //
            //$map.mapster('set', true, ids);

            //var oldOptions = $map.mapster('get_options');
            //var newOptions = $.extend({}, oldOptions);
            //newOptions['mapKey'] = 'class';


            //var areas = [];
            //$('area.red_house').each(function(index, value){
            //
            //   setOptions(areas, '800000', $(this).attr('class'));
            //
            //});
            //
            //newOptions['areas'] = areas;

            //$map.mapster('set_options', newOptions);
            //$map.mapster('highlight', 'red_house');
            //
            //$map.mapster('set', 'selected', 'red_house');

            //$map.mapster('set_options', oldOptions);

        //}
        //
        event.preventDefault();
        //setTimeout(select, 0)

    });

    //$mapWrap.on('click', houseGroup.red, function () {
    //    if (switches.red) {
    //        $areas.mapster('deselect');
    //        switches.green = switches.black = switches.orange = switches.red;
    //        $map.mapster({mapKey: 'class'}).mapster('set', 'selected', 'red_house', optionsForAreas.red).bind('mouseout', resetMapKey);
    //
    //    } else {
    //        $map.unbind('mouseout', resetMapKey);
    //        houseList.$redHouse.mapster('set', 'deselected');
    //        $map.mapster({mapKey: 'id'}).mapster('set_options', singleHoverOptions);
    //    }
    //
    //    switches.red = !switches.red;
    //});

    //$mapWrap.on('click', houseGroup.green, function () {
    //    if (switches.green) {
    //        $areas.mapster('deselect');
    //        $map.mapster({mapKey: 'class'}).mapster('set', true, 'green_house', optionsForAreas.green).bind('mouseout', resetMapKey);
    //        switches.red = switches.black = switches.orange = switches.green;
    //
    //    } else {
    //        $map.unbind('mouseout', resetMapKey);
    //        houseList.$greenHouse.mapster('set', 'deselected');
    //        $map.mapster({mapKey: 'id'}).mapster('set_options', singleHoverOptions);
    //    }
    //    switches.green = !switches.green;
    //});
    //
    //
    //$mapWrap.on('click', houseGroup.orange, function () {
    //    if (switches.orange) {
    //        $areas.mapster('deselect');
    //        $map.mapster({mapKey: 'class'}).mapster('set', true, 'orange_house', optionsForAreas.orange).bind('mouseout', resetMapKey);
    //        switches.green = switches.black = switches.red = switches.orange;
    //    } else {
    //        $map.unbind('mouseout', resetMapKey);
    //        houseList.$orangeHouse.mapster('set', 'deselected');
    //        $map.mapster({mapKey: 'id'}).mapster('set_options', singleHoverOptions);
    //    }
    //    switches.orange = !switches.orange;
    //});
    //
    //$mapWrap.on('click', houseGroup.black, function () {
    //    if (switches.black) {
    //        $areas.mapster('deselect');
    //        $map.mapster({mapKey: 'class'}).mapster('set', true, 'black_house', optionsForAreas.black).bind('mouseout', resetMapKey);
    //        switches.green = switches.red = switches.orange = switches.black;
    //    } else {
    //        $map.unbind('mouseout', resetMapKey);
    //        houseList.$blackHouse.mapster('set', 'deselected');
    //        $map.mapster({mapKey: 'id'}).mapster('set_options', singleHoverOptions);
    //    }
    //    switches.black = !switches.black;
    //});

    $map.mapster(singleHoverOptions);


});