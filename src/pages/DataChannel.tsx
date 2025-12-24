import { signal } from "@preact/signals";
import { createConnection, defaultOptions } from "@open-ayame/ayame-web-sdk";
import {
  ayameConnection,
  clientId,
  dataChannel,
  debug,
  getRoomId,
  receivedMessages,
  signalingKey,
  signalingUrl,
} from "../signals";
import RoomSettings from "../components/RoomSettings";

const messageInput = signal("");

const DataChannel = () => {
  const handleConnect = async () => {
    const options = defaultOptions;
    options.clientId = clientId.value;
    options.signalingKey = signalingKey.value;

    const roomId = getRoomId();
    const conn = createConnection(signalingUrl.value, roomId, options, debug.value);

    const setupDataChannel = (dc: RTCDataChannel) => {
      dc.onopen = () => {
        console.log("DataChannel opened");
      };
      dc.onmessage = (event: MessageEvent) => {
        receivedMessages.value = [...receivedMessages.value, event.data];
      };
      dataChannel.value = dc;
    };

    conn.on("open", async () => {
      const dc = await conn.createDataChannel("message", {});
      if (dc) {
        setupDataChannel(dc);
      }
    });

    conn.on("datachannel", (dc: RTCDataChannel) => {
      setupDataChannel(dc);
    });

    conn.on("disconnect", () => {
      dataChannel.value = null;
      ayameConnection.value = null;
    });

    await conn.connect(null);
    ayameConnection.value = conn;
  };

  const handleDisconnect = async () => {
    const conn = ayameConnection.value;
    if (!conn) {
      return;
    }
    await conn.disconnect();
  };

  const handleSendMessage = () => {
    const dc = dataChannel.value;
    if (!dc) {
      console.log("DataChannel not found");
      return;
    }
    dc.send(messageInput.value);
    console.log("Sent message:", messageInput.value);
  };

  return (
    <div class="p-4">
      <header class="mb-4 pb-4 border-b border-gray-300">
        <h1 class="text-2xl font-bold text-gray-800">Ayame DataChannel Example</h1>
        <a href="/" class="text-blue-600 hover:underline text-sm">
          &larr; 戻る
        </a>
      </header>
      <div class="mb-4">
        <RoomSettings />
      </div>
      <div class="mb-4 space-x-2">
        <button
          type="button"
          onClick={handleConnect}
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Connect
        </button>
        <button
          type="button"
          onClick={handleDisconnect}
          class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Disconnect
        </button>
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 mb-1">送信するメッセージ</label>
        <div class="flex gap-2">
          <input
            type="text"
            value={messageInput.value}
            onInput={(e) => {
              messageInput.value = (e.target as HTMLInputElement).value;
            }}
            class="flex-1 px-3 py-1.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={handleSendMessage}
            class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            送信
          </button>
        </div>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">受信したメッセージ</label>
        <textarea
          value={receivedMessages.value.join("\n")}
          readOnly
          class="w-full h-48 px-3 py-2 border border-gray-300 rounded bg-gray-50"
        />
      </div>
    </div>
  );
};

export default DataChannel;
