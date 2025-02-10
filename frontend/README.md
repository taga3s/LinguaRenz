# LinguaRenz-frontend

- 本番環境: https://lingua-renz.vercel.app/
- プレビュー: https://lingua-renz-dev.vercel.app/

## 技術スタック

### 言語・フレームワーク
- TypeScript
- React
- Next.js App Router
- shadcn/ui

### ツールチェイン
- biome

### 認証
- Stack Auth

### ホスティング
- Vercel

## 環境構築

> [!NOTE]
> `.node-version` に記載されているバージョンの Node.js を使用してください。また、パッケージ管理に `pnpm` を利用するため、必要に応じて[インストール](https://pnpm.io/installation#using-npm)してください。

- `.env` の作成
```sh
$ cp .env.example .env.local
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
