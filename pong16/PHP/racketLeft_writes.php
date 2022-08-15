<?php
$handle = fopen("../TXT/racketLeft.txt","w");
fwrite($handle, $_REQUEST["racketLeft"]);
fclose($handle);
?>