<?php
foreach(glob('templates/*.html') as $file) {
   $_files[] = basename($file, ".html");
}

echo json_encode($_files);
?>