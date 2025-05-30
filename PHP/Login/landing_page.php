<?php
$Name=$_POST['Name'];
$Email=$_POST['Email'];
$pass=$_POST['pass'];
$con = mysqli_connect("localhost", "root", "root", "login", 8888);
 if($con->connect_error){
    die("connection failed ,".$con->connect_error);

 }else{
    $stmt=$con->prepare("insert into register(Name,pass,Email) values(?,?,?)");
    $stmt->bind_param("sss",$Name,$pass,$Email);
    $stmt->execute();
    echo "registration successful";
    $stmt->close();
    $con->close();
 }
   
?>