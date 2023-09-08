$(document).ready(function(){
    $(".yea").hide()
    $(".ch").hide()
    function clic(pos1,pos2,channel,hide,show) {
        $(hide).hide()

        
        $(show).show()
        if (window.matchMedia('(max-width: 575px)').matches) {
            $(show).css("left",pos1)
        } else {
            $(show).css("left",pos2)
        }
        $('.linki').click(function(event){
            var val = $(this).text();

            event.preventDefault();


            // $(this).attr('href',`${channel}/`+val)

            // window.location.replace("/");
            window.location.href = `/${channel}/`+val;

        })
    }

    $(".ary").on('mouseover click',function(){
        clic("20%","8%","ARY",".ch",".yea");
        
    })
    $(".geo").mouseover(function(){
        clic("20%","18%","GEO",".ch",".yea");


    })
    $(".hum").mouseover(function(){
        clic("20%","28%","HUM",".ch",".yea");

    })
    $(".year").mouseover(function(){
        clic("20%","38%","total/year",".ch",".yea");

        total/channel
        })
    $(".channel").mouseover(function(){
        clic("20%","48%","total/channel",".yea",".ch");


    })

    $('*').on('click',(event)=>{
        if (!$(event.target).closest("nav").length) { 
             $(".yea").hide()
        }
    });
    $('*').on('click',(event)=>{
        if (!$(event.target).closest("nav").length) {  
            $(".ch").hide()          
            // event.stopPropagation();
        }

    })
    // $('body:not(.ch nav)').click(()=>{
    //     $(".ch").hide()

    // });
   

        

})
