# Ayame Web SDK サンプル

[OpenAyame/ayame-web-sdk](https://github.com/OpenAyame/ayame-web-sdk) のサンプル集です。

## 時雨堂のオープンソースソフトウェアについて

利用前に <https://github.com/shiguredo/oss> をお読みください。

## Ayame Web SDK サンプルについて

このサンプルは最小限になっており、 `.env.local` に設定した環境変数のみを利用します。

## Ayame Labo を利用する

- シグナリングキーは [Ayame Labo](https://ayame-labo.shiguredo.app/) のダッシュボードから取得できます
- ルーム ID のプレフィックスは GitHub のログイン名に `@` を付与したものにします
- ルーム名は好きな文字列を指定してください

```bash
# cp .env.example .env.local
VITE_AYAME_SIGNALING_URL=wss://ayame-labo.shiguredo.app/signaling
VITE_AYAME_ROOM_ID_PREFIX={GitHubのログイン名}@
VITE_AYAME_ROOM_NAME={好きな文字列}
VITE_AYAME_SIGNALING_KEY={シグナリングキー}
```

## 起動する

```bash
pnpm install
pnpm dev
```

## サンプル

- 双方向送受信(sendrecv)
- 送信のみ(sendonly)
- 受信のみ(recvonly)
- データチャネル(datachannel)

## ライセンス

Apache License 2.0

```text
Copyright 2019-2025, Shiguredo Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
