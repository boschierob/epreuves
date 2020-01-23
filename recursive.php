<?php 
function fac($n)
{
    if ($n == 1) echo 1;
    echo $n * fac($n - 1);
}

fac(3);
 ?>
