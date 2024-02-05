ParallelUtil.StartIsolatedExecution

Call OpenBrowser("chrome", "https://uibank.uipath.com/")
'Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("menuSearch").Click
Browser("UiBank").Page("UiBank").WebEdit("username").Set "test"
Browser("UiBank").Page("UiBank").WebEdit("password").Set "asdasd"
Browser("UiBank").Page("UiBank").WebButton("Sign In").Click


ParallelUtil.StopIsolatedExecution

Function OpenBrowser(browser, url)
	oBrowser = LCase(browser)
	SystemUtil.CloseProcessByName oBrowser &".exe"		
	SystemUtil.Run oBrowser, url, , , 3
	
	wait 2	
End Function
