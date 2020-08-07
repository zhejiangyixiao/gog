<?php
header('content-type:text/html;charset=utf-8;');

include 'conn.php';
//注册成功 将数据存入数据库 并跳转页面
if(isset($_POST['submit'])){
    $username = $_POST['username'];
    $password = sha1($_POST['password']);
    $email = $_POST['email'];
    $result = $conn->query("insert  registry values(null,'$username','$password','$email',NOW())");
    //php页面跳转
    header('location:http://10.31.163.73/gog/src/login.html');
}

// 获取前端传入的user 查询用户名是否重名  返回1 为重名 0 为不重名
if(isset($_POST['user'])){
    $username = $_POST['user'];
    $result = $conn->query("select * from registry where username='$username'");
    if($result->fetch_assoc()){
        echo 1;
    }else{
        echo 0;
    }
}

// 查询用户名密码是否匹配， 匹配 返回1 不匹配返回2
if(isset($_POST['userr'])&&isset($_POST['pass'])){
    $user = $_POST['userr'];
    $pass = $_POST['pass'];
    $result = $conn->query("select * from registry where username='$user' and password = '$pass'");
    if($result->fetch_assoc()){
        echo 1;
    }else{
        echo 2;
    }
}