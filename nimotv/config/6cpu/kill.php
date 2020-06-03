<?php
$do = "sleep ".rand(0,299)." && sh /root/mybot-master/nimotv/config/6cpu/kill.sh";
exec($do);