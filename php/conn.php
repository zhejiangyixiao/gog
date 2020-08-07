<?php
/*
 * @Author: yixiao
 * @Date: 2020-07-16 16:18:02
 * @LastEditors: yixiao
 * @LastEditTime: 2020-07-17 14:32:42
 * @FilePath: \jsStudyc:\phpStudy\PHPTutorial\WWW\sb\day22\case\php\conn.php
 */ 
header('content-type:text/html;charset=utf-8;');
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:POST,GET');


define('HOST', '127.0.0.1'); //主机名
define('USERNAME', 'root'); //用户名
define('PASSWORD', 'root'); //密码
define('DBNAME', 'gog'); //数据库名
$conn = new mysqli(HOST, USERNAME, PASSWORD, DBNAME, '3305');
//@容错处理,让错误信息不显示

if ($conn->connect_error) {
    die('数据库连接失败' . ($conn->connect_error));
}
