<?php

if ($_POST) {
    var_dump($_FILES['some_file']);
    echo "<pre>";
    var_dump($_FILES['some_file']['error']);
    echo "</pre>";
}