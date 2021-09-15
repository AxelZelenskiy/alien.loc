<?php

if ($_SERVER['REQUEST_METHOD'] === "DELETE") {
	$data = file_get_contents("php://input");
	$result = json_decode($data);
	echo json_encode($result);
}