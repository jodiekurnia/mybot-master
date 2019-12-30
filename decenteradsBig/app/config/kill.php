<?php
$do = "sleep ".rand(0,299)." && sh /root/mybot-master/decenteradsBig/app/config/kill.sh";
exec($do);