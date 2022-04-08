@echo off
echo Saving out your old Sky1
dmgraph sky1 -e sky1ori.gif
echo done ....
echo.
echo Inserting New sky1
dmgraph sky1 -s sky1.gif -i 127,123
echo Done
echo.
