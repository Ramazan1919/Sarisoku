var city, branch;
var infobox = $('.infobox');
var geocoder, infowindow;
//Map locations
$(document).ready(function () {
    initMap()
});

function initMap() {
    var location = [];

    $.getJSON("/inc/serviceOffice.php?v=8", null, function (data) {
        $(data).each(function (e, item) {
            var value = {
                position: new google.maps.LatLng(parseFloat(item.coordinatorX), parseFloat(item.coordinatorY)),
                branch: item.StationPlace,
                branch_2: item.Code,
                address: {
                    image: '/Content/Themes/images/levent_image.jpg',
                    title: item.Name,
                    text: item.Address,
                    phone: '<a style="color: #337ab7;" href="tel:'+item.Telephone+'">'+item.Telephone+'</a>',
                    fax: item.Fax,
                    working_hours: item.WorkHours
                }
            }

            console.log(value);
            location.push(value);

            if (data.length == location.length) {
                fill();
            }
        });
    });
 function fill() {

    var image = '/Content/Themes/images/red_pin.png';
    var branch_image = '/Content/Themes/images/branch_pin.png';
    var location_image = '/Content/Themes/images/location_pin.png';


    //Map 
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
        },
        center: { lat: 39.2707724, lng: 35.0532378 }
    });
    //select branch change events
    $('#branch').change(function () {
        branch = $('option:selected', this).val();
    });
    //İnitialize markers
    var markers = [];
    addMarker();
    function addMarker() {
        location.forEach(function (feature) {
            //console.log(feature)
            var marker = new google.maps.Marker({
                position: feature.position,
                icon: image,
                map: map,
                placeId: feature.branch_2,
            });
            markers.push(marker);
            //Marker add click event
            marker.addListener('click', function () {
                map.setZoom(12);
                map.setCenter(marker.getPosition());
                marker.setIcon(branch_image);
                location.forEach(function (feature) {
                    
                    if (marker.placeId == feature.branch_2) {
                        infobox.find('img').attr('src', feature.address.image);
                        infobox.find('.header').html(feature.address.title);
                        infobox.find('.route').html(feature.address.text);
                        infobox.find('.phone').html(feature.address.phone);
                        infobox.find('.fax').html(feature.address.fax);
                        infobox.find('.directions').attr('href', 'https://www.google.com/maps/@' + feature.position.lat() + ',' + feature.position.lng() + ',17z?hl=tr-TR');
                        infobox.find('p.work_hours').html(feature.address.working_hours);
                    }
                });
                infobox.addClass('open');
                infowindow.setContent('<p style="width:200px">' + feature.address.title + '<p>');
                infowindow.open(map, marker);
                
            });
        });
    }
    //Get marker
    function getMarker(_city) {
        showMarkers();
        for (var i = 0; i < markers.length; i++) {
            if (markers[i].placeId != _city) {
                markers[i].setMap(null);

            }
            else {
                map.setZoom(11);
                map.setCenter(markers[i].getPosition());
                markers[i].setIcon(branch_image);
                infowindow.setContent('<p style="width:200px">' + location[i].address.title + '<p>');
                infowindow.open(map, markers[i]);
            }
        }
    }

    // Shows all markers currently in the array.
    function showMarkers() {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(map);
            markers[i].setIcon(image);
        }
    }
    //Search click
    $('.searchmap').click(function () {
        //Only selected city and branch
        if (branch != undefined && branch != 0) {
            getMarker(/*city,*/ branch);
            location.forEach(function (feature) {
                if (/*feature.city == city && */feature.branch_2 == branch) {
                   
                    infobox.find('img').attr('src', feature.address.image);
                    infobox.find('.header').html(feature.address.title);
                    infobox.find('.route').html(feature.address.text);
                    infobox.find('.phone').html(feature.address.phone);
                    infobox.find('.fax').html(feature.address.fax);
                    infobox.find('.work_hours').html(feature.address.working_hours);
                    infobox.find('.directions').attr('href', 'https://www.google.com/maps/@' + feature.position.lat() + ',' + feature.position.lng() + ',17z?hl=tr-TR');
                }
            });
            infobox.addClass('open');
        }

        //Show all marker
        else {
            infobox.removeClass('open');
            showMarkers();
            map.setCenter({ lat: 39.2707724, lng: 35.0532378 });
            map.setZoom(7);
            return;
        }
    });
    getLocation();
    geocoder = new google.maps.Geocoder;
    infowindow = new google.maps.InfoWindow;
    function geocodeLatLng(geocoder, map, infowindow, latlngStr) {
        var latlng = latlngStr;
        geocoder.geocode({ 'location': latlng }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    
                    map.setZoom(11);
                    map.setCenter(latlngStr);
                    var marker = new google.maps.Marker({
                        position: latlng,
                        map: map,
                        icon: location_image
                    });
                    var infowindow = new google.maps.InfoWindow({
                        content: "<p>" + results[0].formatted_address + "</p>",
                        maxWidth: 200
                    });

                    infowindow.open(map, marker);
                } else {
                    alert("Sonuç bulunamadı.");
                }
            } else {
                //alert("Geolocation, bu tarayıcı tarafından desteklenmiyor.");
            }
        });
    }
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            //alert("Geolocation, bu tarayıcı tarafından desteklenmiyor.");
        }
    }

    function showPosition(position) {
        var latlngStr = { lat: position.coords.latitude, lng: position.coords.longitude };
        geocodeLatLng(geocoder, map, infobox, latlngStr);
    }
    }
    

}


