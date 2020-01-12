#!/bin/bash
for ((i=0; i<10; i++));
 do xvfb-run -a /root/mybot-master/core/slimerjs /root/mybot-master/decenterads/1cpu/app/bot/decenterads.js . &
 sleep 1
done
killall -9 kill.sh