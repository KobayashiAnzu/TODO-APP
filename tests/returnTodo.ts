import { Page } from "playwright";

export { clickReturnButton };

/**戻すボタンをクリック*/
async function clickReturnButton(page: Page) {
  await page.getByRole("button", { name: "戻す" }).click();
  //スクリーンショットを撮る
  await page.waitForTimeout(2000);
  await page.screenshot({ path: "return.png" });
}
