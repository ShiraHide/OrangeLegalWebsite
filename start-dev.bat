@echo off
cd /d "%~dp0"
echo Orange Legal website - local preview
echo Open http://localhost:3010 in your browser. Close this window to stop.
call npm run dev -- -p 3010
pause
