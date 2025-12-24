import { createConnection, defaultOptions } from "@open-ayame/ayame-web-sdk";
import {
  ayameConnection,
  ayameConnectionState,
  clientId,
  debug,
  getRoomId,
  localMediaStream,
  signalingKey,
  signalingUrl,
} from "../signals";
import ConnectionState from "../components/ConnectionState";
import LocalVideo from "../components/LocalVideo";
import RoomSettings from "../components/RoomSettings";

const SendOnly = () => {
  const handleConnect = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    localMediaStream.value = stream;

    const options = defaultOptions;
    options.audio.direction = "sendonly";
    options.video.direction = "sendonly";
    options.clientId = clientId.value;
    options.signalingKey = signalingKey.value;

    const roomId = getRoomId();
    const conn = createConnection(signalingUrl.value, roomId, options, debug.value);

    conn.on("open", () => {
      const pc = conn.peerConnection;
      if (pc) {
        pc.onconnectionstatechange = () => {
          ayameConnectionState.value = pc.connectionState;
        };
      }
    });

    conn.on("disconnect", () => {
      const stream = localMediaStream.value;
      if (stream) {
        for (const track of stream.getTracks()) {
          track.stop();
        }
      }
      localMediaStream.value = null;
      ayameConnection.value = null;
      ayameConnectionState.value = "new";
    });

    await conn.connect(stream);
    ayameConnection.value = conn;
  };

  const handleDisconnect = async () => {
    const conn = ayameConnection.value;
    if (!conn) {
      return;
    }
    const stream = localMediaStream.value;
    if (stream) {
      for (const track of stream.getTracks()) {
        track.stop();
      }
    }
    localMediaStream.value = null;
    await conn.disconnect();
  };

  return (
    <div class="p-4">
      <header class="mb-4 pb-4 border-b border-gray-300">
        <h1 class="text-2xl font-bold text-gray-800">Ayame Sendonly Example</h1>
        <a href="/" class="text-blue-600 hover:underline text-sm">
          &larr; 戻る
        </a>
      </header>
      <div class="mb-4">
        <span class="text-sm text-gray-600">Connection State: </span>
        <ConnectionState />
      </div>
      <div class="mb-4">
        <RoomSettings />
      </div>
      <div class="mb-4 space-x-2">
        <button
          id="connect"
          type="button"
          onClick={handleConnect}
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Connect
        </button>
        <button
          id="disconnect"
          type="button"
          onClick={handleDisconnect}
          class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Disconnect
        </button>
      </div>
      <div>
        <LocalVideo />
      </div>
    </div>
  );
};

export default SendOnly;
