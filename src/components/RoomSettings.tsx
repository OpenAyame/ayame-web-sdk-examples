import { roomIdPrefix, roomName, clientId } from "../signals";

const RoomSettings = () => {
  return (
    <div class="space-y-2">
      <div class="flex items-center gap-2">
        <label class="w-24 text-sm font-medium text-gray-700">Room ID</label>
        <span class="text-gray-500">{roomIdPrefix.value}</span>
        <input
          id="room-name"
          type="text"
          value={roomName.value}
          onInput={(e) => {
            roomName.value = (e.target as HTMLInputElement).value;
          }}
          class="flex-1 px-3 py-1.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div class="flex items-center gap-2">
        <label class="w-24 text-sm font-medium text-gray-700">Client ID</label>
        <input
          type="text"
          value={clientId.value}
          disabled
          class="flex-1 px-3 py-1.5 border border-gray-200 rounded bg-gray-100 text-gray-500"
        />
      </div>
    </div>
  );
};

export default RoomSettings;
