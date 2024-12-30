import type { Connection } from "@open-ayame/ayame-web-sdk";
import { createConnection, defaultOptions } from "@open-ayame/ayame-web-sdk";

document.addEventListener("DOMContentLoaded", () => {
  const signalingUrl = import.meta.env.VITE_AYAME_SIGNALING_URL;
  const roomIdPrefix = import.meta.env.VITE_AYAME_ROOM_ID_PREFIX;
  const roomName = import.meta.env.VITE_AYAME_ROOM_NAME;
  const signalingKey = import.meta.env.VITE_AYAME_SIGNALING_KEY;

  const clientId = crypto.randomUUID();

  const roomIdPrefixElement = document.querySelector(
    "#room-id-prefix",
  ) as HTMLLabelElement;
  if (roomIdPrefixElement) {
    roomIdPrefixElement.textContent = roomIdPrefix;
  }

  const roomNameInputElement = document.querySelector(
    "#room-name",
  ) as HTMLInputElement;
  if (roomNameInputElement) {
    roomNameInputElement.value = roomName;
  }

  const clientIdInputElement = document.querySelector(
    "#client-id-input",
  ) as HTMLInputElement;
  if (clientIdInputElement) {
    clientIdInputElement.value = clientId;
  }

  const debug = true;

  const options = defaultOptions;
  options.audio.direction = "sendonly";
  options.video.direction = "sendonly";
  options.clientId = clientId;
  options.signalingKey = signalingKey;

  let localMediaStream: MediaStream | null = null;
  let conn: Connection | null = null;

  document.querySelector("#connect")?.addEventListener("click", async () => {
    localMediaStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });

    const localVideoElement = document.getElementById(
      "local-video",
    ) as HTMLVideoElement;
    if (localVideoElement) {
      localVideoElement.srcObject = localMediaStream;
    }

    const roomId = `${roomIdPrefix}${roomName}`;
    conn = createConnection(signalingUrl, roomId, options, debug);
    conn.connect(localMediaStream);
  });

  document.querySelector("#disconnect")?.addEventListener("click", async () => {
    if (!conn) {
      return;
    }
    await conn.disconnect();
    for (const track of localMediaStream?.getTracks() ?? []) {
      track.stop();
    }
    localMediaStream = null;
  });
});