#!bin/bash
killall -9 firefox
killall -9 Xvfb
cd /tmp
sudo rm -r slimerjs*
/mybot/start.sh