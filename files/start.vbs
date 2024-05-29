Set WshShell = CreateObject("WScript.Shell")

Sub RunCommand(cmd)
    WshShell.Run "cmd /c " & cmd, 1, False
End Sub

RunCommand "cd C:\Users\x\Documents\webapp\versatily\feedbac-system\client && npm run dev"

RunCommand "cd C:\Users\x\Documents\webapp\versatily\feedback-system\server && npm run dev"

RunCommand "ngrok http --domain=shiner-genuine-fawn.ngrok-free.app 3000"

RunCommand "code C:\Users\x\Documents\webapp\versatily\feedback-system"

WScript.Sleep 3000

WshShell.Run "opera http://shiner-genuine-fawn.ngrok-free.app/", 1, False
WshShell.Run "opera http://localhost:5173/home", 1, False

' This script will start the system's servers, the ngrok, then open new tabs to access the server
