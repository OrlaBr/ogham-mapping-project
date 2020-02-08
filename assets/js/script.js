function initMap() {
    var options = {
        center: {
            lat: 52.1409,
            lng: -10.2640
        },
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROAD,
        minZoom: 9,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM,
            style: google.maps.ZoomControlStyle.SMALL
        },
        panControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM
        }
    };
    var map = new google.maps.Map(document.getElementById('map'), options);


    //Array of Markers
    var markers = [{
            coords: {
                lat: 52.12675,
                lng: -10.30457
            },
            iconImage: 'assets/img/map-icon-1.png',
            content: '<div class="infoWindowSize"><img src="assets/img/annagap.jpg" alt="ogham stone"><p><strong>Baile an Reannaigh</strong> - Not in its original location, currently on the grounds of Colaiste Ide, Burnham, with other re-located ogham stones</p><a href="#ballinrannig" class="btn btn-default btn-sm iwButton">Read more about Ballinrannig</a></div>',
            draggable: false
        },
        {
            coords: {
                lat: 52.157768,
                lng: -10.306496
            },
            iconImage: 'assets/img/map-icon-1.png',
            content: '<div class="infoWindowSize"><img src="assets/img/kilfountain.jpg"  alt="ogham stone"><p><strong>Cill Fhiontain</strong> - An unusual bilingual stone with both an ogham inscription and an inscription in the Roman or Latin alphabet.</p><a href="#kilfountain" class="btn btn-default btn-sm iwButton">Read more about Cill Fhiontain</a></div>',
            draggable: false
        },
        {
            coords: {
                lat: 52.154449,
                lng: -10.331399
            },
            iconImage: 'assets/img/map-icon-1.png',
            content: '<div class="infoWindowSize"><img src="assets/img/ballymorereagh.jpg" alt="ogham stone"><p><strong>An Baile Riabhach</strong> - This ogham stone stands among an early ecclesiastical site, overlooking Dingle Bay </p><a href="#baileRiabh" class="btn btn-default btn-sm iwButton">Read more about An Baile Riabhach</a></div>',
            draggable: false
        },
        {
            coords: {
                lat: 52.143726,
                lng: -10.358471
            },
            iconImage: 'assets/img/map-icon-1.png',
            content: '<div class="infoWindowSize"><img src="assets/img/kilcolman.jpg" alt="ogham stone"><p><strong>Cill an gColmán</strong> - A large irregularly-shaped boulder, its west face inscribed with an ogham inscription and 2 crosses on an early Christian church site</p><a href="#cillColman" class="btn btn-default btn-sm iwButton">Read more about Cill an gColmán</a></div>',
            draggable: false
        },
        {
            coords: {
                lat: 52.184757,
                lng: -10.336582
            },
            iconImage: 'assets/img/map-icon-1.png',
            content: '<div class="infoWindowSize"><img src="assets/img/kilmalkedar2.jpg" alt="ogham stone"><p><strong>Kilmalkeadar</strong> - Located on the north side of the pathway leading through the graveyard to the Kilmalkeadar Church, and early christian and medieval site</p><a href="#cillM" class="btn btn-default btn-sm iwButton">Read more about Kilmalkeadar</a></div>',
            draggable: false
        },
        {
            coords: {
                lat: 52.153306,
                lng: -10.057940
            },
            iconImage: 'assets/img/map-icon-1.png',
            content: '<div class="infoWindowSize"><img src="assets/img/annagap.jpg" alt="ogham stone"><p><strong>Áth na gCeap</strong> - Thought to have come from the townlands of Annascaul, this stone now resides in Cork Public Museum</p><a href="#annagap" class="btn btn-default btn-sm iwButton">Read more about Áth na gCeap</a></div>',
            draggable: false
        },
        {
            coords: {
                lat: 52.182976,
                lng: -10.002512
            },
            iconImage: 'assets/img/map-icon-1.png',
            content: '<div class="infoWindowSize"><img src="assets/img/ballynahunt.jpg" alt="ogham stone"><p><strong>Baile na hUnta</strong> - This is thought to be the original site of this ogham stone.</p><a href="#baileUnta" class="btn btn-default btn-sm iwButton">Read more about Baile na hUnta</a></div>',
            draggable: false
        },
        {
            coords: {
                lat: 52.044046,
                lng: -10.606058
            },
            iconImage: 'assets/img/map-icon-2.png',
            content: '<div class="infoWindowSize"><img src="assets/img/inishvic.jpg" alt="ogham stone"><p><strong>Inis Mhic Aoibhleáin</strong> - Original site of this ogham stone, is believed to be part of a monastic enclosure, though it now resides in the ‘Book of Kells’ Exhibition in Trinity College, Dublin.</p><a href="#inisVic" class="btn btn-default btn-sm iwButton">Read more about Inis Mhic Aoibheáin</a></div>',
            draggable: false
        },
        {
            coords: {
                lat: 52.166581,
                lng: -10.405999
            },
            iconImage: 'assets/img/map-icon-3.png',
            content: '<div class="infoWindowSize"><img src="assets/img/brackloon-detail.jpg" alt="ogham stone"><p><strong>An Bhreac-chluain</strong> - Original site of this ogham stone is unknown, but it can be seen in Museum Chorca Dhuibhne, in Ballyferriter</p><a href="#brackloon" class="btn btn-default btn-sm iwButton">Read more about An Bhreac-chluain</a></div>',
            draggable: false
        },
        {
            coords: {
                lat: 52.14781603632095,
                lng: -10.24003028869629
            },
            iconImage: 'assets/img/map-icon-3.png',
            content: '<div class="infoWindowSize"><img src="assets/img/ballinasig1.jpg" alt="ogham stone"><p><strong>Baile an Ásaigh</strong> - A low standing stone situated on level reclaimed pastureland at the head of the valley which extends north east from Dingle Town</p><a href="#ballinasig" class="btn btn-default btn-sm iwButton">Read more about Baile an Ásaigh</a></div>',
            draggable: false
        },
    ];
    // Loop through markers
    for (var i = 0; i < markers.length; i++) {
        // Add Marker
        addMarker(markers[i]);
    }

    //Add Marker function - (better practice  - Google Maps Garage)
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            //icon:props.iconImage
        });
        //check for custon icon
        if (props.iconImage) {
            //set icon image
            marker.setIcon(props.iconImage);
        }
        //check content
        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content,
                maxWidth: 200
            });

            marker.addListener('click', function() {
                infoWindow.open(map, marker);
                //info window auto closes after 10 seconds
                setTimeout(function() {
                    infoWindow.close();
                }, 10000);
            });

        }
    }

}
//making the href link in the infowindow work
var hash = window.location.hash;
var anchor = $('a[href$="' + hash + '"]');
if (anchor.length > 0) {
    anchor.click();
}
//dealing with new Chrome cookies policy - console log error
document.cookie = 'same-site-cookie=foo; SameSite=Lax';
document.cookie = 'cross-site-cookie=bar; SameSite=None; Secure';