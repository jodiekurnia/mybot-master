#!/bin/bash
for ((i=0; i<100; i++));
 do xvfb-run -a /root/mybot-master/core/slimerjs /root/mybot-master/decenterads/2cpu/app/bot/decenterads.js . &
 sleep 1
done
killall -9 kill.sh