# LinguaRenz-backend

## 技術スタック

### 言語・フレームワーク
- go
- gin
- gorm

### DB
- mysql (dev)
- TiDB Serverless (prod)

### その他
- docker
- just (Command runner)
- lefthook (Git hooks manager)

## 環境構築

> [!NOTE]
> このプロジェクトでは、タスクランナーとして `just` を利用するため、必要に応じて[インストール](https://github.com/casey/just?tab=readme-ov-file#installation)してください。

- `.env` の作成
```sh
$ cp .env.example .env
```

- docker を用いて、go と mysql のコンテナを立ち上げる。
```sh
$ just bootstrap
```

- go のコンテナに接続する。
```sh
$ just it-go
```

- go のコンテナ内で、サーバーを起動する。
```sh
$ just run
```

- go のコンテナ内で、gorm のマイグレーションを実行する。
```sh
$ just migrate
```

- mysql のコンテナに接続する。
```
$ just it-db
```

- mysql のコンテナ内で、ログインし、データベースを選択する。
```sh
$ mysql -u lrz_user -p
$ Enter password: lrz_pass
$ use lrz_db;
```

## ngrok の利用について
ユーザーの初回ログイン時、Stack Auth から webhook を利用してバックエンドに Sync する方針を採っています。ローカル開発環境で検証を行うために、ngrok を利用してローカルサーバーを https で公開することとします。

1. [ngrok](https://ngrok.com/) にアクセスし、サインアップとインストールを行う。
2. [Welcome ページ](https://dashboard.ngrok.com/get-started/setup/macos)の指示に従って、`Deploy your app online` まで一旦進める。
3. [Domains](https://dashboard.ngrok.com/domains) で、固定ドメインを取得する。固定ドメインを用いて、以下のコマンドでローカルサーバーを公開する。
```sh
$ ngrok http http://localhost:8080 --url=<取得したドメイン>
```
4. @taga3s に取得したドメインを共有し、Stack Auth の webhook URL に設定してもらう。
