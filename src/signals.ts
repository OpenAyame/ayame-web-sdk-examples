import { signal } from "@preact/signals";
import type { Connection } from "@open-ayame/ayame-web-sdk";

// Ayame signals
export const ayameConnection = signal<Connection | null>(null);
export const ayameConnectionState = signal<RTCPeerConnectionState>("new");

// Media stream signals
export const localMediaStream = signal<MediaStream | null>(null);
export const remoteMediaStream = signal<MediaStream | null>(null);

// DataChannel signals
export const dataChannel = signal<RTCDataChannel | null>(null);
export const receivedMessages = signal<string[]>([]);

// Settings signals
export const signalingUrl = signal(import.meta.env.VITE_AYAME_SIGNALING_URL || "");
export const roomIdPrefix = signal(import.meta.env.VITE_AYAME_ROOM_ID_PREFIX || "");
export const roomName = signal(import.meta.env.VITE_AYAME_ROOM_NAME || "");
export const signalingKey = signal(import.meta.env.VITE_AYAME_SIGNALING_KEY || "");
export const clientId = signal(crypto.randomUUID());
export const debug = signal(true);

// Computed room ID
export const getRoomId = () => `${roomIdPrefix.value}${roomName.value}`;
