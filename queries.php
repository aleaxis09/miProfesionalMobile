<?php
	require_once 'login.php';
	$db_server = mysql_connect($db_hostname, $db_username, $db_password);
	if(!$db_server) errorTemplate();

	mysql_selectdb($db_database) or errorTemplate();

	function errorTemplate(){
		$message = mysql_error();
		echo <<<END
		"Ops!! Problems connecting to database"

END
	}

	function selectQuery($column, $dataBase, $condition1, $condition2){
		$query = "SELECT ".$column." FROM ".$dataBase." WHERE ".$condition1."=".$condition2;
		$result = mysql_query($query);
		if(!$result) errorTemplate();
	}


?>