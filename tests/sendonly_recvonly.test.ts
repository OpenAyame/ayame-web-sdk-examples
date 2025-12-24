import { expect, test } from "@playwright/test";

test("sendonly recvonly", async ({ browser }) => {
  const sendonly = await browser.newPage();
  const recvonly = await browser.newPage();

  await sendonly.goto("http://localhost:9000/sendonly");
  await recvonly.goto("http://localhost:9000/recvonly");

  // channel-name を指定する
  const roomName = crypto.randomUUID();
  await sendonly.locator("#room-name").fill(`sendonly-recvonly-${roomName}`);
  await recvonly.locator("#room-name").fill(`sendonly-recvonly-${roomName}`);

  await sendonly.click("#connect");
  await recvonly.click("#connect");

  // connection-stateがconnectedになるまで待機
  await expect(sendonly.locator("#connection-state")).toHaveAttribute(
    "data-connection-state",
    "connected",
    { timeout: 5000 },
  );
  await expect(recvonly.locator("#connection-state")).toHaveAttribute(
    "data-connection-state",
    "connected",
    { timeout: 5000 },
  );

  // レース対策
  await sendonly.waitForTimeout(1000);
  await recvonly.waitForTimeout(1000);

  await sendonly.click("#disconnect");
  await recvonly.click("#disconnect");

  await sendonly.close();
  await recvonly.close();
});
