import selenium.webdriver
driver = selenium.webdriver.Chrome('./chromedriver')
driver.get("http://www.solvro.pwr.edu.pl/admin.php")
cookies = [
	{'domain': 'www.solvro.pwr.edu.pl', 'name': 'PHPSESSID', 'value': '7ef0ed1eba86f4dac4352078e47d59a1'},
	{'domain': '.pwr.edu.pl', 'name': 'PHPSESSID', 'value': 'u0ijuhl7phjmqh0s9mtq2cguk5'},
	]

for cookie in cookies:
    driver.add_cookie(cookie)

for cookie in driver.get_cookies():
    print ((cookie['name'], cookie['value']))