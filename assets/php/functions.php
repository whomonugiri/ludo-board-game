<?php
require('database.php');

function host($data){
    $red_player = $data['red_player'];
    $green_player = $data['green_player'];
    $yellow_player = $data['yellow_player'];
    $blue_player = $data['blue_player'];
    $db = $GLOBALS['db'];
$room_id=rand(100000,999999);
    $query="INSERT INTO rooms(room_id,room_status) VALUES('$room_id',1)";
    $q1=mysqli_query($db,$query);
    $created_room_id = mysqli_insert_id($db);
    $query="INSERT INTO players(red_player,green_player,yellow_player,blue_player,room_id) ";
    $query.="VALUES('$red_player','$green_player','$yellow_player','$blue_player','$created_room_id')";
    $q2=mysqli_query($db,$query);
$return_data=[];
    if($q1 && $q2){
        $return_data['status']='success';
        $return_data['msg']='Room created !';
        $return_data['room_id']=$room_id;
    }else{
        $return_data['status']='failed';
        $return_data['msg']='Room not created !';
    }

    return json_encode($return_data);

}


function getRoomInfo($data){
    global $db;
    $room_id = $data['room_id'];
    $query="SELECT rooms.id,rooms.room_id,rooms.room_status,rooms.winner,players.red_player,players.green_player,players.yellow_player,players.blue_player FROM rooms JOIN players ON rooms.id=players.room_id WHERE rooms.room_id='$room_id'";
    $run=mysqli_query($db,$query);

    $return_data = mysqli_fetch_assoc($run);

    return json_encode($return_data);
    
}

