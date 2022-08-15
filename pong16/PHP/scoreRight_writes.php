<?php
$handle = fopen("../TXT/scoreRight.txt","w");
fwrite($handle, $_REQUEST["scoreRight"]);
fclose($handle);
?>