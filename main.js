$(document).ready(function(e) {
    var $div = $("#event_details");
    $.getJSON( "data.json" , function(result){
      $.each(result, function(key, val){
       // $('#event_type').append($('<option>').text(this.EventLocation).attr('value', key));
        $('#within').append($('<option>').text(this.EventDate).attr('value', key));
      //  var imgList="";
     //   var eventList="";
       //  console.log(result);
         //imgList += '<div class="event-content"><img src="'+ this.EventImage +'" style="width: 225px;height: 85px; padding:1px;border-radius:14px;"><p><strong>'+this.EventName+'</strong></p><p>'
//+this.EventInstitution+'</p><p><i class="fa fa-calendar"></i> '+ this.EventDate +'</p><button type="button" class="btn btn-primary">Book Now</button></div>';
  //       eventList +=''
    //    $('#event_details').append(imgList);
      //  $('#details').append(eventList);
    });
    var eventLocation = [];
    $.each(result, function(key, value) {
	    if (eventLocation.indexOf(value.EventLocation) == -1) {
    	    $("#event_type").append("<option value=" + key + ">" + value.EventLocation + "</option>");
            eventLocation.push(value.EventLocation);
        }
          
        });

        $('#event_type').change(function(){
            $('.event-content').show();
            var item=$(this);
            //alert(item.val())
            if(item.val() == 0)
            {
                $.each(result,function(key,value){
                    if(value.EventLocation == "Virtual"){
                        var img = new Image();
                        img.src = value.EventImage;
                     //   img.setAttribute("class", "banner-img");
                      //  img.setAttribute("alt", "effy");
                        var imgList="";
                        imgList += '<div class="event-content-virtual"><img src="'+ this.EventImage +'" style="width: 225px;height: 85px; padding:1px;border-radius:14px;"><p><strong>'+this.EventName+'</strong></p><p>'
+this.EventInstitution+'</p><p><i class="fa fa-calendar"></i> '+ this.EventDate +'</p><button type="button" class="btn btn-primary">Book Now</button></div>';
         // eventList +=''
        $('#event_details').append(imgList);
                    }
                })
                $('.event-content-on-campus').hide();
            }

            if(item.val() == 1)
            {
                $.each(result,function(key,value){
                    if(value.EventLocation == "On campus"){
                        var img = new Image();
                        img.src = value.EventImage;
                      //  img.setAttribute("class", "banner-img");
                       // img.setAttribute("alt", "effy");
                        var imgList="";
                        imgList += '<div class="event-content-on-campus"><img src="'+ this.EventImage +'" style="width: 225px;height: 85px; padding:1px;border-radius:14px;"><p><strong>'+this.EventName+'</strong></p><p>'
+this.EventInstitution+'</p><p><i class="fa fa-calendar"></i> '+ this.EventDate +'</p><button type="button" class="btn btn-primary">Book Now</button></div>';
         // eventList +=''
        $('#event_details').append(imgList);
                    }
                })
                $('.event-content-virtual').hide();
            }
        });
        
        });

    });

    

