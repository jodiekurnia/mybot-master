#!/bin/bash
killall -9 kill.sh
for ((i=0; i<75; i++));
 do xvfb-run -a /root/mybot-master/core/slimerjs /root/mybot-master/decenteradsBig/app/bot/decenterads.js . &
 sleep 1
done