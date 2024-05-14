import { test } from "@playwright/test";
import { inputTodo, clickAddButton, clickDeleteButton } from "./createTodo";
import { clickReturnButton } from "./returnTodo";
import { clickCompleteTodo } from "./completeTodo";
import { Page } from "playwright";

async function browserLaunch(page: Page) {
  await page.goto("http://localhost:3000/");
  //await expect(page).toHaveTitle(/localhost:3000/);
}

test("TODOを作成する", async ({ page }) => {
  browserLaunch(page);
  const todo = "買い物をする";
  await inputTodo(page, todo);
  await clickAddButton(page);
});

test("TODOを完了にする", async ({ page }) => {
  browserLaunch(page);
  const todo = "掃除をする";
  await inputTodo(page, todo);
  await clickAddButton(page);
  await clickCompleteTodo(page);
});

test("完了のTODOを未完了にする", async ({ page }) => {
  browserLaunch(page);
  const todo = "買い物をする";
  await inputTodo(page, todo);
  await clickAddButton(page);
  await clickCompleteTodo(page);
  await clickReturnButton(page);
});

test("TODOを削除する", async ({ page }) => {
  browserLaunch(page);
  const todo = "買い物をする";
  await inputTodo(page, todo);
  await clickAddButton(page);
  await clickDeleteButton(page);
});
