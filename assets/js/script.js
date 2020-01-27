function initMap(){
        var options = {
          center: {lat:52.1409, lng: -10.2640},
          zoom:8,
          mapTypeId: google.maps.MapTypeId.HYBRID,
          minZoom: 9,
          zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM, 
            style: google.maps.ZoomControlStyle.SMALL
          },
          panControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM
          },
          
        };
        var map = new google.maps.Map(document.getElementById('map'), options);
      //Array of Markers
        var markers = [
          {
          coords:{lat:52.12675, lng: -10.30457},
          iconImage:'assets/img/map-icon.png',
          content:'<h5><a href="#">Ballinrannig</a></h5>',
          draggable: false
          },
          {
          coords:{lat:52.15705, lng: -10.2517},
          content:'<h3>Baile an Ásaigh (Ballinasig) </h3>',
          draggable: false
          },
          {
          coords:{lat:52.14890, lng: -10.4471},
          content:'<h3>Baile Ristín (Ballyrishteen)</h3>',
          draggable: false
          },
          {
          coords:{lat:52.2103, lng: -9.9496},
          content:'<h3>Gleann na nGealt</h3>',
          draggable: false
          },
          {
          coords:{lat:52.1674, lng: -10.3875},
          content:'<h3>An Riasc (Reask)</h3>',
          draggable: false
          },
        ];
          // Loop through markers
          for(var i =0;i < markers.length;i++){
             // Add Marker
              addMarker(markers[i]);
          }

        //Add Marker function
      function addMarker(props){
        var marker = new google.maps.Marker({
        position:props.coords,
        map:map,
        //icon:props.iconImage
        });
        //check for custon icon
        if(props.iconImage){
          //set icon image
          marker.setIcon(props.iconImage);
        }
        //check content
        if(props.content){
          var infoWindow = new google.maps.InfoWindow({
            content:props.content
      });
        marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });
        }
      }
    }
    