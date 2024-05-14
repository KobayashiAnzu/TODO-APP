import { Page } from "playwright";

export { inputTodo, clickAddButton, clickDeleteButton };

/**TODOを入力する*/
async function inputTodo(page: Page, todo: string) {
  await page.getByPlaceholder("TODOを入力").click();
  await page.getByPlaceholder("TODOを入力").fill(todo);
}

/**追加ボタンをクリックする*/
async function clickAddButton(page: Page) {
  await page.getByRole("button", { name: "追加" }).click();
}

/**削除ボタンをクリックする*/
async function clickDeleteButton(page: Page) {
  await page.getByRole("button", { name: "削除" }).click();
}
