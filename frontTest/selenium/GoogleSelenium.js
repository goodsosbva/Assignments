const { By, Key, Builder, service } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

// chromedriver의 경로를 설정
let serviceBuilder = new chrome.ServiceBuilder("C:/Users/admin/Downloads/chromedriver-win64/chromedriver.exe");

async function example() {
    var searchString = "packt publishing";

    // 브라우저를 빌드하고 실행될 때까지 기다린다.
    let driver = await new Builder()
        .forBrowser("chrome")
        // .setChromeService(serviceBuilder)
        .usingServer("http://localhost:4444/wd/hub")
        .build();

    try {
        // 브라우저에서 http://google.com 사이트를 연다.
        await driver.get("http://google.com");

        // searchString의 값을 전달해서 검색 쿼리를 보낸다.
        await driver.findElement(By.name("q")).sendKeys(searchString, Key.RETURN);

        // 페이지 제목을 확인하고 출력한다.
        var title = await driver.getTitle();
        console.log('Title is:', title);
    } finally {
        // 실행 후 브라우저를 닫는 것이 안전하다
        await driver.quit();
    }
}

example();
