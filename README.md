# Ayame Web SDK サンプル

[OpenAyame/ayame-web-sdk](https://github.com/OpenAyame/ayame-web-sdk) のサンプル集です。

## 時雨堂のオープンソースソフトウェアについて

利用前に <https://github.com/shiguredo/oss> をお読みください。

## Ayame Web SDK サンプルについて

このサンプルは最小限になっており、 `.env` に設定した環境変数のみを利用します。

## 利用技術

- [TypeScript: JavaScript With Syntax For Types\.](https://www.typescriptlang.org/)
- [Preact](https://preactjs.com/)
  - [preactjs/preact](https://github.com/preactjs/preact)
  - [preactjs/signals](https://github.com/preactjs/signals)
  - [preactjs/preact\-iso](https://github.com/preactjs/preact-iso)
  - [preactjs/preset\-vite](https://github.com/preactjs/preset-vite)
- [Tailwind CSS \- Rapidly build modern websites without ever leaving your HTML\.](https://tailwindcss.com/)
- [Vite \| Next Generation Frontend Tooling](https://vite.dev/)
- [The JavaScript Oxidation Compiler](https://oxc.rs/)
  - [oxfmt \- npm](https://www.npmjs.com/package/oxfmt)
  - [oxlint \- npm](https://www.npmjs.com/package/oxlint)
  - [oxlint\-tsgolint \- npm](https://www.npmjs.com/package/oxlint-tsgolint)
- [Fast, disk space efficient package manager \| pnpm](https://pnpm.io/ja/)

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

[![Image from Gyazo](https://i.gyazo.com/60b3b238c52376e44a12393adca16303.png)](https://gyazo.com/60b3b238c52376e44a12393adca16303)

## サンプル

- 双方向送受信(sendrecv)
- 送信のみ(sendonly)
- 受信のみ(recvonly)
- データチャネル(datachannel)

[![Image from Gyazo](https://i.gyazo.com/e17f263251e6bbb9baf8850fa00010e0.png)](https://gyazo.com/e17f263251e6bbb9baf8850fa00010e0)

[![Image from Gyazo](https://i.gyazo.com/e1a073572962954f63ecb20f5aef33bc.png)](https://gyazo.com/e1a073572962954f63ecb20f5aef33bc)

[![Image from Gyazo](https://i.gyazo.com/029e98b35a401449bbb7038fa439f54b.png)](https://gyazo.com/029e98b35a401449bbb7038fa439f54b)

[![Image from Gyazo](https://i.gyazo.com/7c9d2807a3383949cff66cf07433afd7.png)](https://gyazo.com/7c9d2807a3383949cff66cf07433afd7)

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
