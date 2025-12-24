import { ayameConnectionState } from "../signals";

const ConnectionState = () => {
  const stateColors: Record<RTCPeerConnectionState, string> = {
    new: "text-gray-500",
    connecting: "text-yellow-500",
    connected: "text-green-500",
    disconnected: "text-orange-500",
    failed: "text-red-500",
    closed: "text-gray-400",
  };

  return (
    <span
      id="connection-state"
      data-connection-state={ayameConnectionState.value}
      class={`font-medium ${stateColors[ayameConnectionState.value]}`}
    >
      {ayameConnectionState.value}
    </span>
  );
};

export default ConnectionState;
