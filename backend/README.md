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
- just

## 環境構築

> [!NOTE]
> このプロジェクトでは、タスクランナーとして `just` を利用するため、必要に応じて[インストール](https://github.com/casey/just?tab=readme-ov-file#installation)してください。

- docker を用いて、go と mysql のコンテナを立ち上げる。
```
$ just bootstrap
```

- go のコンテナに接続する。
```
$ just it-go
```

- go のコンテナ内で、サーバーを起動する。
```
$ just run
```

- go のコンテナ内で、gorm のマイグレーションを実行する。
```
$ just migrate
```

- mysql のコンテナに接続する。
```
$ just it-mysql
```
