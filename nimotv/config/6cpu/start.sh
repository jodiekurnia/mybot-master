#!/bin/bash
for ((i=0; i<10; i++));
 do xvfb-run -a /root/mybot-master/core/slimerjs /root/mybot-master/nimotv/bot/nimotv.js . &
 sleep .5
done
killall -9 kill.sh