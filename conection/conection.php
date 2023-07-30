<?php

class Cconection{
    function conectionDB(){
        $url = 'mysql://root:gswZEUG9NISvUxUWWUKm@containers-us-west-166.railway.app:5786/railway';
        $dbname = 'railway';
        $user ='root';
        $pwd ='gswZEUG9NISvUxUWWUKm';
        $host ='containers-us-west-166.railway.app';
        $port ='5786';

        try{
            $conn = new PDO("mysql:host=$host,$port,$url;dbname=$dbname", $user, $pwd);
        }
        catch(PDOException $exp){
            echo("No se logro conectar correctamente a la base de datos: $dbname, error: $exp");
        }
        return $conn;
    }
}
?>