<?php
foreach(glob('themes/*.css') as $file) {
   $_files[] = basename($file, ".css");
}

echo json_encode($_files);
?>