@echo off
set slevel=
cls
echo.
echo.
echo.
echo Type a number for skill level desired or Q to quit.
echo.
choice /c:1234Q "Which Skill Level Would You Like To Play :"
        if errorlevel 1 set slevel=1
        if errorlevel 2 set slevel=2
        if errorlevel 3 set slevel=3
        if errorlevel 4 set slevel=4
        if errorlevel 5 goto quit
doom -file torched.wad -skill %slevel%
goto end
:quit
echo.
echo Batch file terminated.
echo.
echo.
:end
set slevel=
