# 福井県の海鮮・漁業オープンデータ

福井県の海鮮、漁業、郷土料理に関するオープンデータと写真のコレクションです。本プロジェクトでは、元のデータを処理し、画像をホスティングして、シンプルなウェブギャラリーを提供しています。

## デモ

[**写真ギャラリーを見る**](https://code4fukui.github.io/fukui-pref/fukuijizakana/)

ギャラリーでは、越前がに、若狭ふぐ、漁船、料理などの写真がランダムなグリッド状に表示されます。

## データと機能

このリポジトリでは、福井県の地魚に関するオープンデータを処理し、ホスティングしています。主な成果物は以下の通りです：

- **写真ギャラリー**: 全82枚の写真をランダムに表示する、シンプルでレスポンシブなウェブギャラリー。
- **処理済みデータ**: クレンジングされたデータは以下の2つの形式で利用可能です：
  - [**fukuijizakana.csv**](https://code4fukui.github.io/fukui-pref/fukuijizakana/fukuijizakana.csv): 各画像のメタデータを含む標準的なCSVファイル。
  - `fukuijizakana.cbor`: ウェブギャラリーで効率的に読み込むためのコンパクトなバイナリ形式（CBOR）。

データセットには82件のデータが含まれており、それぞれに対応する写真があります。以下のジャンルに分類されています：
- **魚介類**: 例: 越前がに、甘えび、若狭ふぐ
- **漁業・漁場**: 例: 漁船、定置網漁、魚市場
- **料理**: 例: 焼き鯖、刺身、へしこ

## 開発

元のソースからデータファイルを再生成するには、[Deno](https://deno.land/)ランタイムが必要です。

1. このリポジトリをクローンし、データディレクトリに移動します：
    ```bash
    git clone https://github.com/code4fukui/fukui-pref.git
    cd fukui-pref/fukuijizakana
    ```

2. 県のサーバーから元の画像をダウンロードします（`org_img`ディレクトリが作成されます）：
    ```bash
    deno run --allow-net --allow-write download.js
    ```

3. ソースCSVを処理し、最終的な`fukuijizakana.csv`と`fukuijizakana.cbor`ファイルを生成します：
    ```bash
    deno run --allow-read --allow-net --allow-write make.js
    ```

## データソース

元のデータは福井県によって提供されており、[福井県オープンデータライブラリ](https://www.pref.fukui.lg.jp/doc/toukei-jouhou/opendata/)から取得できます。

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
