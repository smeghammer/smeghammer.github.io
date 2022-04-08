@echo off
:TOP
cls
echo.
echo.
echo PC Zone Doom Level Creation Competition - The Other Entries
echo.
echo Please enter the drive on which DOOM is installed or press ESC to exit.
echo If the DOOM directory does not exist, it will be created.
echo.
echo Drive:
getkey
if errorlevel 123 goto TOP
if errorlevel 122 goto Z
if errorlevel 121 goto Y
if errorlevel 120 goto X
if errorlevel 119 goto W
if errorlevel 118 goto V
if errorlevel 117 goto U
if errorlevel 116 goto T
if errorlevel 115 goto S
if errorlevel 114 goto R
if errorlevel 113 goto Q
if errorlevel 112 goto P
if errorlevel 111 goto O
if errorlevel 110 goto N
if errorlevel 109 goto M
if errorlevel 108 goto L
if errorlevel 107 goto K
if errorlevel 106 goto J
if errorlevel 105 goto I
if errorlevel 104 goto H
if errorlevel 103 goto G
if errorlevel 102 goto F
if errorlevel 101 goto E
if errorlevel 100 goto D
if errorlevel 99 goto C
if errorlevel 91 goto TOP
if errorlevel 90 goto Z
if errorlevel 89 goto Y
if errorlevel 88 goto X
if errorlevel 87 goto W
if errorlevel 86 goto V
if errorlevel 85 goto U
if errorlevel 84 goto T
if errorlevel 83 goto S
if errorlevel 82 goto R
if errorlevel 81 goto Q
if errorlevel 80 goto P
if errorlevel 79 goto O
if errorlevel 78 goto N
if errorlevel 77 goto M
if errorlevel 76 goto L
if errorlevel 75 goto K
if errorlevel 74 goto J
if errorlevel 73 goto I
if errorlevel 72 goto H
if errorlevel 71 goto G
if errorlevel 70 goto F
if errorlevel 69 goto E
if errorlevel 68 goto D
if errorlevel 67 goto C
if errorlevel 28 goto TOP
if errorlevel 27 goto END
pause
goto TOP

:C
echo.
md c:\doom > nul
copy *.wad c:\doom
goto END

:D
echo.
md d:\doom > nul
copy *.wad d:\doom
goto END

:E
echo.
md e:\doom > nul
copy *.wad e:\doom
goto END

:F
echo.
md f:\doom > nul
copy *.wad f:\doom
goto END

:G
echo.
md g:\doom > nul
copy *.wad g:\doom
goto END

:H
echo.
md h:\doom > nul
copy *.wad h:\doom
goto END

:I
echo.
md i:\doom > nul
copy *.wad i:\doom
goto END

:J
echo.
md j:\doom > nul
copy *.wad j:\doom
goto END

:K
echo.
md k:\doom > nul
copy *.wad k:\doom
goto END

:L
echo.
md l:\doom > nul
copy *.wad l:\doom
goto END

:M
echo.
md m:\doom > nul
copy *.wad m:\doom
goto END

:N
echo.
md n:\doom > nul
copy *.wad n:\doom
goto END

:O
echo.
md o:\doom > nul
copy *.wad o:\doom
goto END

:P
echo.
md p:\doom > nul
copy *.wad p:\doom
goto END

:Q
echo.
md q:\doom > nul
copy *.wad q:\doom
goto END

:R
echo.
md r:\doom > nul
copy *.wad r:\doom
goto END

:S
echo.
md s:\doom > nul
copy *.wad s:\doom
goto END

:T
echo.
md t:\doom > nul
copy *.wad t:\doom
goto END

:U
echo.
md u:\doom > nul
copy *.wad u:\doom
goto END

:V
echo.
md v:\doom > nul
copy *.wad v:\doom
goto END

:W
echo.
md w:\doom > nul
copy *.wad w:\doom
goto END

:X
echo.
md x:\doom > nul
copy *.wad x:\doom
goto END

:Y
echo.
md y:\doom > nul
copy *.wad y:\doom
goto END

:Z
echo.
md z:\doom > nul
copy *.wad z:\doom
goto END

:END
