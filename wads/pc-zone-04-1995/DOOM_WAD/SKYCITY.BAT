@echo off
echo Temporarily inserting new floor textures...
dmgraph floor0_1 -e floor0_1.gif
dmgraph floor3_3 -e floor3_3.gif
dmgraph floor0_1 -s blufloor.gif
dmgraph floor3_3 -s cldfloor.gif
echo.
echo Running SkyCity...
echo.
doom -file skycity.wad -devparm -playdemo skycity
echo.
echo Removing new textures and restoring old...
dmgraph floor0_1 -s floor0_1.gif
dmgraph floor3_3 -s floor3_3.gif
del floor0_1.gif
del floor3_3.gif

