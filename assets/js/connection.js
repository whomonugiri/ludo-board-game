var player_name = {
    red_player:null,
    green_player:null,
    yellow_player:null,
    blue_player:null,
}
var lobbyintervalId=null;
var host_name="";
var looby_ajax_is_running=false;
$(".srp").click(()=>{
    $(".srp").css("border","2px solid black");
    $(".sgp").css("border","");
    $(".syp").css("border","");
    $(".sbp").css("border","");

host_name=$("#player_name").val();

player_name.red_player=host_name;
player_name.green_player=null;
player_name.yellow_player=null;
player_name.blue_player=null;

});
$(".sgp").click(()=>{
    $(".srp").css("border","");
    $(".sgp").css("border","2px solid black");
    $(".syp").css("border","");
    $(".sbp").css("border","");
 host_name=$("#player_name").val();

    player_name.red_player=null;
    player_name.green_player=host_name;
    player_name.yellow_player=null;
    player_name.blue_player=null;
    
    });
    $(".syp").click(()=>{
        $(".srp").css("border","");
        $(".sgp").css("border","");
        $(".syp").css("border","2px solid black");
        $(".sbp").css("border","");
host_name=$("#player_name").val();

        player_name.red_player=null;
        player_name.green_player=null;
        player_name.yellow_player=host_name;
        player_name.blue_player=null;
        
        });

        $(".sbp").click(()=>{
            $(".srp").css("border","");
        $(".sgp").css("border","");
        $(".syp").css("border","");
        $(".sbp").css("border","2px solid black");
host_name=$("#player_name").val();

            player_name.red_player=null;
            player_name.green_player=null;
            player_name.yellow_player=null;
            player_name.blue_player=host_name;
            
            });


            $("#host_btn").click(()=>{
                if($("#player_name").val()==''){
                    alert("enter player name");
                    return 0;
                }
                if(player_name.red_player==null && player_name.green_player==null && player_name.yellow_player==null && player_name.blue_player==null){
                    alert("select a color group");
                    return 0;
                }
                $("#host_btn").attr("disabled","true");
                $("#host_btn").hide();
                $("#loading_btn").show();


                $.ajax({
                    method:"post",
                    url:'assets/php/ajax.php?host',
                data:player_name,
                dataType:"json",
                success:function(host_res){
                    if(host_res.status=='success'){
                        $(".host").remove();
                        $(".lobby").show();
                        console.log(host_res);
                        lobbyintervalId = window.setInterval(function(){
                            if(!looby_ajax_is_running){
                                lobbyinfo(host_res.room_id);
                            }
                          }, 500);
                    }else{
                        alert("somrthing is wrong");
                    }
                    
                    
                }
                });
            });



            function lobbyinfo(room_id){
                console.log(room_id);
                looby_ajax_is_running=true;
                $.ajax({
                    method:"post",
                    url:'assets/php/ajax.php?lobby',
                data:{room_id:room_id},
                dataType:"json",
                success:function(lobby_res){
                console.log(lobby_res);

                   var allplayersin=true;
                   if(lobby_res.red_player==''){
                    allplayersin=false;
                   }else{
                    $("#red_player_name").html(lobby_res.red_player);

                   }

                   if(lobby_res.green_player==''){
                    allplayersin=false;
                   }else{
                   $("#green_player_name").html(lobby_res.green_player);
                       
                   } 

                   if(lobby_res.yellow_player==''){
                    allplayersin=false;
                   }else{
                   $("#yellow_player_name").html(lobby_res.yellow_player);
                       
                } 

                   if(lobby_res.blue_player==''){
                    allplayersin=false;
                   }else{
                   $("#blue_player_name").html(lobby_res.blue_player);
                       
                } 

if(allplayersin){
    console.log("lets start the game");
    clearInterval(lobbyintervalId);
}
                  looby_ajax_is_running=false;  
                }
                });
            }