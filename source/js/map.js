module.exports = (function() {

    ymaps.ready(init);
    var myMap;
    function init () {
        myMap = new ymaps.Map("map-wrapper", {
            center: [55.796754568933004,37.53732599999999],
            behaviors: ['default'],
            zoom: 16
        });

        var BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="margin: 10px;">' +
            '<b>$[properties.name]</b><br />' +
            '</div>', { });
        var myPlacemark = new ymaps.Placemark(

            [55.796754568933004,37.53732599999999] , {
                name: 'LoftBlog Moscow Meetup',
                iconContent: 'ООО Maйл.ру Ленинградский пр-т, 39'
            }, {
                balloonContentLayout: BalloonContentLayout,
                preset: 'twirl#blueStretchyIcon'
            });
        myMap.geoObjects.add(myPlacemark);
    }
})();

