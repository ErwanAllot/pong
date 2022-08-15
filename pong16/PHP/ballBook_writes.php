<?php
$handle = fopen("../TXT/ballBook.txt","w");
fwrite($handle, $_REQUEST["ballVariables"]);
fclose($handle);
?>