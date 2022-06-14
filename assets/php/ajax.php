<?php

require('functions.php');

if(isset($_GET['host'])){
echo host($_POST);
}

if(isset($_GET['lobby'])){
    echo getRoomInfo($_POST);
}
