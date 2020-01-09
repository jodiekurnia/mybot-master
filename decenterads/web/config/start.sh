#!/bin/bash
for ((i=0; i<25; i++));
 do xvfb-run -a /root/mybot-master/core/slimerjs /root/mybot-master/decenterads/web/bot/decenteradsweb.js . &
 sleep 1
done
killall -9 kill.sh