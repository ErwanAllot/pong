<?php
$handle = fopen("../TXT/racketRight.txt","w");
fwrite($handle, $_REQUEST["racketRight"]);
fclose($handle);
?>