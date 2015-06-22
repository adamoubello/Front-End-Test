// you can enter your JS here!
        
		//Coding the map here
        var locations = [
          ['Amsterdam', 52.395715, 4.888916, 1],
          ['Paris', 48.8534100, 2.3488000, 2],
          ['London', 51.508742,-0.120850, 3],
          ['Bruxelles', 50.8504500,4.3487800, 4],
          ['Berlin', 52.5243700,13.4105300, 5],
          ['Geneva', 46.2022200,6.1456900, 6]  
        ];

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 5,
          center: new google.maps.LatLng(49.8504500,5.3487800),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var infowindow = new google.maps.InfoWindow();

        var marker, i;

        for (i = 0; i < locations.length; i++) {
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            animation:google.maps.Animation.BOUNCE
          });


          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
         infowindow.setContent(locations[i][0]);
         infowindow.open(map, marker);
            }
          })(marker, i));
        }
