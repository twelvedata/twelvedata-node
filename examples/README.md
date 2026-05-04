# Twelve Data API client for Node.js examples

This folder contains usage examples for typesript language.

## Prerequisites

Ensure you have Node.js v18.0.0 or later. We recommend the latest LTS version. Use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) for Node version management across projects.

## Setup

Install dependencies

```bash
npm i
or
yarn install
```

Export your API key

```bash
export TWELVEDATA_API_KEY=<your-api-key>
```

On Windows `cmd`: `set TWELVEDATA_API_KEY=<your-api-key>`. In PowerShell: `$env:TWELVEDATA_API_KEY="<your-api-key>"`.

## Run

```bash
npx ts-node src/time_series.ts
```