<?php
/*
 * @Author: yixiao
 * @Date: 2020-07-24 06:30:44
 * @LastEditors: yixiao
 * @LastEditTime: 2020-07-24 08:06:04
 * @FilePath: \jsStudyc:\phpStudy\PHPTutorial\WWW\sb\shopcar\php\result.php
 */ 
include 'conn.php';
// getlist 1为从大到小  2 为从小到大 3为默认排序
if(isset($_POST['getlist'])){

    if($_POST['getlist']==1){
        $result = $conn->query("select * from prolist order by price desc");
    }else if($_POST['getlist']==2){
        $result = $conn->query("select * from prolist order by price asc");
    }else if($_POST['getlist']==3){
        $result = $conn->query("select * from prolist");
    }
    $arr = array();
    for($i=0;$i<$result->num_rows;$i++){
        $arr[$i] = $result->fetch_assoc();
    }
    echo json_encode($arr);
}
if(isset($_POST['getdetail'])){
    $sid = $_POST['sid'];
    //利用sid查找对应的数据，返回给前端。
    $result=$conn->query("select * from prolist where sid = $sid");
    echo json_encode($result->fetch_assoc());
}