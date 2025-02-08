# LinguaRenz-frontend

## 技術スタック

### 言語・フレームワーク
- TypeScript
- React
- Tanstack Start (beta)
- shadcn/ui

### ツールチェイン
- biome

### ホスティング
- Vercel (予定)

## 環境構築

> [!NOTE]
> `.node-version` に記載されているバージョンの Node.js を使用してください。また、パッケージ管理に `pnpm` を利用するため、必要に応じて[インストール](https://pnpm.io/installation#using-npm)してください。

- `.env` の作成
```sh
$ cp .env.example .env
```

- `node_modules` のインストール
```sh
$ pnpm install
```

- 開発サーバーの起動
```sh
$ pnpm dev
```

- format
```sh
$ pnpm format
```

- lint
```sh
$ pnpm lint
```
