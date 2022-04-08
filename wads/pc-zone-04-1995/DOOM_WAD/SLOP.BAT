@echo off
cls
if not exist doom.exe goto nodoomexe
if not exist escape\dehacked.exe goto nodehackexe
if not exist escape\escape.deh goto noslopdeh
if "%1"=="" goto noarg
if "%1"=="on" goto on
if "%1"=="ON" goto on
if "%1"=="off" goto off
if "%1"=="OFF" goto off
:noarg
echo This batch file installs the escape.deh patch.
echo To blow chunks out of cadavers with a "hype" chain gun type:
echo.
echo slop on
echo.
echo A backup patch file will be saved and this patch file will be activated.
echo To restore your old conifguration of DOOM.EXE type:
echo.
echo slop off
echo.
echo I hope this makes DOOM a little more enjoyable. 
echo Now go kick some ass.  "Huh, huh, you said 'ASS'" "Cool out, Beavis."
echo.
echo.
echo.
echo.
echo Questions/ Comments? E-mail me at jpb9951@zeus.tamu.edu
goto end
:nodoomexe
echo ERROR: You're screwed!  DOOM.EXE is not present!
echo This batch file must be run in the DOOM directory
goto end
:nodehackexe
echo ERROR: DEHACKED.EXE is not present.
echo You must have DEHACKED to use the Slop patch file.
echo If you don't have it you can download it at infant2.sphs.indiana.edu
echo under pub/doom/wad_edit/doomhack,  file dhaked13.zip by Tree.
goto end
:noslopdeh
echo ERROR: ESCAPE.DEH seems to be missing
echo You don't have the patch file ESCAPE.DEH?  
echo This batch file, ESCAPE.DEH, and DOOM.EXE and DEHACKED must all be in the
echo same directory, preferably the DOOM directory.
goto end
:on
escape\dehacked -save escape\doomorg.deh
escape\dehacked -load escape\escape.deh
cls
echo ESCAPE.DEH has been installed successfully!  
echo Go beat the hell out of those cadavers!
echo The Chain Gun now fires twice as fast and holds twice as many rounds!  
echo.
goto end
:off
if not exist escape\doomorg.deh goto nobkup
escape\dehacked -load escape\doomorg.deh
cls
echo The Escape.deh hack has been removed...
echo I guess it's too bloody for you, huh?
echo.
goto end
:nobkup
echo ERROR: Can't find DOOMORG.DEH
echo The copy of your original original dehacked .cfg seems to have vanished.
:end
