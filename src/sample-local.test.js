const { Builder, By, Capabilities, Key, until } = require("selenium-webdriver");

describe("BStack demo test", () => {
  let driver;

  beforeAll(() => {
    driver = new Builder()
      .usingServer(`http://localhost:4444/wd/hub`)
      .withCapabilities(Capabilities.chrome())
      .build();
  });

  afterAll(async () => {
    await driver.quit();
  });

  test("local test", async () => {
    try {
      await driver.get("https://www.flipkart.com");
      console.log(await driver.getTitle());

      // close login popup

      try {
        await driver.findElement(By.className("_30XB9F"), 10000).click();
      } catch (e) {}

      // Search for "Samsung Galaxy S10"
      const searchField = await driver.findElement(By.className("Pke_EE"));

      await searchField.sendKeys("Samsung Galaxy S10");
      await searchField.submit();

      await driver.wait(until.elementLocated(By.className("_75nlfW")), 10000);

      // Click on "Mobiles" in categories
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div[3]/div[1]/div[1]/div/div[1]/div/div/section/div[3]/div/a"
            )
          ),
          10000
        )
        .click();
      console.log("Mobile Category selected");

      await driver.wait(until.elementLocated(By.className("_75nlfW")), 10000);

      // brand samsung
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div[3]/div[1]/div[1]/div/div[1]/div/section[3]/div[2]/div/div/div/label"
            )
          ),
          10000
        )
        .click();

      console.log("Brand Samsung selected");
      await driver.sleep(500);
      // flipkart assured
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div[3]/div/div[1]/div/div[1]/div/section[4]/label"
            )
          ),
          10000
        )
        .click();

      console.log("Flipkart assured clicked");
      await driver.sleep(500);

      // price high to low
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div[3]/div/div[2]/div[1]/div/div/div[3]/div[4]"
            )
          ),
          10000
        )
        .click();

      console.log("Price filter selected");
      await driver.sleep(500);

      await driver.wait(until.elementLocated(By.className("_75nlfW")), 10000);

      // fetch products

      const products = await driver.findElements(By.className("_75nlfW"));
      const results = [];
      for (let product of products) {
        const name = await product
          .findElement(By.className("KzDlHZ"))
          .getText();
        const price = await product
          .findElement(By.className("Nx9bqj _4b5DiR"))
          .getText();
        const link = await product
          .findElement(By.className("CGtC98"))
          .getAttribute("href");

        results.push({ name, price, link });
      }

      console.log(results);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }, 10000000);
});
