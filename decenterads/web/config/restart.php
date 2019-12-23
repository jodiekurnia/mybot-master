<?php
$do = "sleep ".rand(0,1800)." && sh /mybot/restart.sh";
exec($do);