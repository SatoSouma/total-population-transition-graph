# 都道府県別総人口推移グラフ

## 作品概要

チェックボックスで選択した都道府県の総人口推移グラフを作成しました。

### 処理の流れ

1. ResasApi から取得した都道府県データを、SSG で生成する。
2. 都道府県データからチェックボックスを生成する。
3. チェックボックスにチェックを入れると、対象の prefCode を ResasApi に送信し、人口構成データを取得する。
4. prefCode、prefName、総人口推移データで都道府県毎のデータを作成、追加する。
5. 取得した都道府県毎のデータを Hightchart で表示。
6. 対象のチェックボックスのチェックを消すと、対象の都道府県データを削除した配列を構築し直す。
7. 再度 Hightchart で表示。

### デモ

- [vercel](https://total-population-transition-graph-l6rt7aoxi-satosouma.vercel.app) にデプロイしてあります。

### 使用技術

- Next.js
  - TypeScript
  - Customhook
  - sass

### 環境変数

- NEXT_PUBLIC_RESAS_API_KEY
  > ResasApi の API KEY を記述
- NEXT_PUBLIC_RESAS_API_URL
  > ResasApi の API URL を記述

### 改善点・反省点

- `filter`関数で配列を回した時、添字 0 番目の配列内にある配列データが消失してしまい、後ろの配列内にある配列データが繰り上がる現象を何故そうなるのか理解しないまま`filter`関数の使用をやめてしまったので、解明する必要がある。
- css の`em`、`rem`、`%`の使い分け方を把握できておらず、曖昧に使ってしまっている。
