@echo off
set "PATH=C:\laragon\bin\nodejs\node-v22;%PATH%"
echo Starting Aadhira Wellness React Dev Server on http://localhost:3000 ...
node .\node_modules\vite\bin\vite.js --port 3000 --host
pause
