# Fukui Prefecture Seafood & Fishery Open Data

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A collection of open data and photos related to seafood, fishing, and local cuisine from Fukui Prefecture, Japan. This project processes the original data, hosts the images, and provides a simple web gallery.

## Demo

[**View the Photo Gallery**](https://code4fukui.github.io/fukui-pref/fukuijizakana/)

The gallery displays a randomized grid of photos showing items like Echizen Crab, Wakasa Pufferfish, fishing boats, and prepared dishes.

## Data & Features

This repository processes and hosts open data about Fukui's local seafood. The primary outputs are:

- **Photo Gallery**: A simple, responsive web gallery that randomly displays all 82 images.
- **Processed Data**: Cleaned data is available in two formats:
  - [**fukuijizakana.csv**](https://code4fukui.github.io/fukui-pref/fukuijizakana/fukuijizakana.csv): A standard CSV file with metadata for each image.
  - `fukuijizakana.cbor`: A compact binary representation (CBOR) for efficient loading in the web gallery.

The dataset contains 82 entries, each with a corresponding photo, categorized into:
- **Seafood** (魚介類): e.g., Echizen Crab, Sweet Shrimp, Wakasa Pufferfish.
- **Fishing & Fisheries** (漁業・漁場): e.g., Fishing boats, fixed-net fishing, fish markets.
- **Cuisine** (料理): e.g., Grilled mackerel, sashimi, pickled fish (Heshiko).

## Development

To regenerate the data files from the original source, you will need the [Deno](https://deno.land/) runtime.

1.  Clone this repository and navigate to the data directory:
    ```bash
    git clone https://github.com/code4fukui/fukui-pref.git
    cd fukui-pref/fukuijizakana
    ```

2.  Download the original images from the prefectural server (this will create an `org_img` directory):
    ```bash
    deno run --allow-net --allow-write download.js
    ```

3.  Process the source CSV and generate the final `fukuijizakana.csv` and `fukuijizakana.cbor` files:
    ```bash
    deno run --allow-read --allow-net --allow-write make.js
    ```

## Data Source

The original data is provided by the Fukui Prefecture government and is available at the [Fukui Prefecture Open Data Library](https://www.pref.fukui.lg.jp/doc/toukei-jouhou/opendata/).

## License

MIT License — see [LICENSE](LICENSE).