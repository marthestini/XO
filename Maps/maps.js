function initMap(){

    //Map options
    var options = {
        zoom:8,
        center:{lat: 51.025876 ,lng:4.477536 }
    }
       //New maps
    var map = new google.maps.Map(document.getElementById("map"), options);


    // listener for clicking the map

    google.maps.event.addListener(map, "click", 
    function(event){
        // add marker
        addMarker({coords:event.latLng});

    });

       //adding my markers
    // var marker = new google.maps.Marker({
    //     position:{lat: 50.8795900,lng:4.7009300 },
    //     map:map,
    //     //icon:
    // });

    // var infoWindow = new google.maps.InfoWindow({
    //     content: "<h1> Lynn MA </h1>"

    // });

    // marker.addListener("click" , function(){
    //     infoWindow.open(map, marker);

    // });
    
      //an array to add the markers
      var markers = [
        {
            coords:{lat: 50.8795900,lng:4.7009300},
            iconImage:"https://cdn-icons-png.flaticon.com/128/1216/1216895.png",
            content:"<h1>Lynn Ma</h1>" 
            
            
            //https://cdn-icons-png.flaticon.com/128/1216/1216895.png
        },

        {coords:{lat: 50.985996,lng:4.836522}}
           
      ];

      //looping through the markers
      for (var i = 0;i<markers.length; i++) {
        addMarker(markers[i]);

        // i represents whatever marker we wanna add
      }
        
        
    //     addMarker({
    //         coords:{lat: 50.8795900,lng:4.7009300},
    //         iconImage:"https://cdn-icons-png.flaticon.com/128/1216/1216895.png",
    //         content:"<h1>Lynn Ma</h1>" 
            
            
    //         //https://cdn-icons-png.flaticon.com/128/1216/1216895.png
    
    //     });

    //   }

    // addMarker({
    //     coords:{lat: 50.8795900,lng:4.7009300},
    //     iconImage:"https://cdn-icons-png.flaticon.com/128/1216/1216895.png",
    //     content:"<h1>Lynn Ma</h1>" 
        
        
    //     //https://cdn-icons-png.flaticon.com/128/1216/1216895.png

    // });
    // addMarker({coords:{lat: 50.985996,lng:4.836522}});



    // add marker function

    function addMarker(props){
        var marker = new google.maps.Marker({
                 position:props.coords,
                 map:map,
                 //icon:props.iconImage 
             });

                  //check for customized icon
             if (props.iconImage){

                // set the icon image
                 marker.setIcon(props.iconImage);
             }

             //check content
             if(props.content){
                var infoWindow = new google.maps.InfoWindow({
                    content: props.content
           
                });
           
                marker.addListener("click" , function(){
                    infoWindow.open(map, marker);
           
            });

             }
        
             
             
             
        //      var infoWindow = new google.maps.InfoWindow({
        //          content: "<h1> Lynn MA </h1>"
        
        //      });
        
        //      marker.addListener("click" , function(){
        //          infoWindow.open(map, marker);
        
        //  });
        
            

    }

}