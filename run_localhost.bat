@echo off
title FLAG Media Website - Localhost Server
echo ======================================================
echo   Full Life Centre AG Church (FLAG) - Indoor Media
echo   Starting local web server at http://localhost:8000 ...
echo ======================================================
start http://localhost:8000
python -m http.server 8000
pause

