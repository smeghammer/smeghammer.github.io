@echo off
cls
echo                        ** FOREST v2.1 **
echo ÿ
echo     This is a modified PWAD file for DOOM v1.2, ID wil *NOT*
echo support any modified games. For help on this PWAD, send e-mail
echo to me at jsg8a@acadvm1.uottawa.ca (Jean-Serge Gagnon).
echo ÿ
echo                                                       Enjoy!
echo ÿ
if exist doom.exe goto ok
echo **************************************************************
echo **************        !!!!!! ERROR !!!!!!        *************
echo **************************************************************
echo **    Please copy the files to your main DOOM directory!    **
echo **************************************************************
echo ÿ
goto end
:ok
echo Press [ENTER] to get your butt kicked!         :-)
pause >nul
echo One moment, loading DOOM with the FOREST scenario...
doom -file forest.wad <forest.bat
:end
