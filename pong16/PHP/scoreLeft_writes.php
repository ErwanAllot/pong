<?php
$handle = fopen("../TXT/scoreLeft.txt","w");
fwrite($handle, $_REQUEST["scoreLeft"]);
fclose($handle);
?>