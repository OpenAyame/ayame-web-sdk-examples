import { expect, test } from "@playwright/test";

test("sendrecv x2", async ({ browser }) => {
  const sendrecv1 = await browser.newPage();
  const sendrecv2 = await browser.newPage();

  await sendrecv1.goto("http://localhost:9000/sendrecv");
  await sendrecv2.goto("http://localhost:9000/sendrecv");

  // channel-name を指定する
  const roomName = crypto.randomUUID();
  await sendrecv1.locator("#room-name").fill(`sendrecv-${roomName}`);
  await sendrecv2.locator("#room-name").fill(`sendrecv-${roomName}`);

  await sendrecv1.click("#connect");
  await sendrecv2.click("#connect");

  // connection-stateがconnectedになるのを待つ
  await expect(sendrecv1.locator("#connection-state")).toHaveAttribute(
    "data-connection-state",
    "connected",
    { timeout: 5000 },
  );
  await expect(sendrecv2.locator("#connection-state")).toHaveAttribute(
    "data-connection-state",
    "connected",
    { timeout: 5000 },
  );

  // レース対策
  await sendrecv1.waitForTimeout(1000);
  await sendrecv2.waitForTimeout(1000);

  await sendrecv1.click("#disconnect");
  await sendrecv2.click("#disconnect");

  await sendrecv1.close();
  await sendrecv2.close();
});
