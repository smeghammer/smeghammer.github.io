@echo off
if not exist doom.exe goto nodoomexe
if not exist escape\dmadds.exe goto nodmadds
if not exist escape\rawwepon.wad goto norawwepon
echo This batch file converts the raw weapon file for
echo the chain gun into a useable wad.  It'll come out to be about 2 megs.
echo.
echo.
echo I hope this makes DOOM a little more enjoyable. 
echo Now go kick some ass.  "Huh, huh, you said 'ASS'" "Cool out, Beavis."
echo.
pause
goto starts
:nodoomexe
echo ERROR: You're screwed!  DOOM.EXE is not present!
echo This batch file must be run in the DOOM directory
goto end
:nodmadds
echo ERROR: DMADDS.EXE is not present in the \doom\escape directory...
echo You must have DMADDS to use the new weapon.
echo If you don't have it you can download it at infant2.sphs.indiana.edu.
goto end
:norawwepon
echo ERROR: RAWWEPON.WAD seems to be missing from the \doom\escape...
echo You don't have the patch wad RAWWEPON.WAD?  
echo This batch file, RAWWEPON.WAD, and DMADDS.EXE must be in the
echo escape directory under doom (i.e. \doom\escape\)
goto end
:starts
escape\dmadds escape\rawwepon.wad escape\chaingun.wad
cls
echo The new weapon has been installed successfully!  
echo The Chain Gun fires twice as fast now and holds twice as many rounds!  
echo Through testing we determined the chain gun fires 200 rounds in 23 
echo seconds.  The new chain gun fires 200 rounds in 11 seconds!!!
goto end
:end
