<?php

$files = [
    'update.js',
    'transformjsx.js',
    'executejsx.js',
];

file_put_contents('jsxruntime.js', implode('', array_merge([
    "(function(){\n"],
    array_map('file_get_contents', $files),
    ["\n})()\n"]
)));
