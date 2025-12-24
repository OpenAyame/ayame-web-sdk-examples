interface ImportMetaEnv {
  readonly VITE_AYAME_SIGNALING_URL: string;
  readonly VITE_AYAME_ROOM_ID_PREFIX: string;
  readonly VITE_AYAME_ROOM_NAME: string;
  readonly VITE_AYAME_SIGNALING_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
