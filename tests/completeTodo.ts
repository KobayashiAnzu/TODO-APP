import { Page } from "playwright";

export { clickCompleteTodo };

/**完了ボタンをクリック*/
async function clickCompleteTodo(page: Page) {
  await page.getByRole("button", { name: "完了" }).click();
}
