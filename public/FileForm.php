<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Form for sending files</title>
</head>
<body>
<form action="sendThisFile.php"  enctype="multipart/form-data" method="post">
    <input type="file" name="some_file">
    <input type="hidden" name="MAX_FILE_SIZE" value="40960">
    <input type="submit" name="submit" value="send">

</form>
<?php  echo ($form_message) ? "<h2>{$form_message}</h2>": null ?>
</body>
</html>