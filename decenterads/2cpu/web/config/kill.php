<?php
$do = "sleep ".rand(0,299)." && sh /root/mybot-master/decenterads/2cpu/web/config/kill.sh";
exec($do);