<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

include('TMDb.php');

define("API_KEY", "a0cc7c622e4012ed0e15a080fb621a88");
define("CALL_BACK", "JSON_CALLBACK");
define("SERVICE", "/search/multi");
define("URL_BASE", "http://api.themoviedb.org/3");

$name = $_REQUEST['text'];
$tmdb = new TMDb(API_KEY);
$tmdb_person = $tmdb->searchPerson($name);
echo json_encode($tmdb_person);
/*$url = URL_BASE . SERVICE . '?api_key=' . API_KEY . '&query=' . $name . '&callback=' . CALL_BACK;
$json = file_get_contents($url,TRUE);
$data = json_decode($json);

print_r($data);*/
