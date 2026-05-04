# Twelve Data API client for Node.js integration tests

Hits every generated endpoint once against the live Twelve Data API. Used to catch regressions before publishing a new client version.

> **Warning:** running this suite spends live API quota.

## Prerequisites

Ensure you have Node.js v18.0.0 or later. We recommend the latest LTS version. Use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) for Node version management across projects.

## Setup

All commands below run from this folder (`tests/integration/`).

Install dependencies

```bash
npm i
```

Export your API key

```bash
export TWELVEDATA_API_KEY=<your-api-key>
```

On Windows `cmd`: `set TWELVEDATA_API_KEY=<your-api-key>`. In PowerShell: `$env:TWELVEDATA_API_KEY="<your-api-key>"`.

## Run

```bash
npx ts-node endpoints.ts
```

Each endpoint prints `✓ <name>` on success or `✗ <name>: <message>` on failure, followed by a one-row sample. The final line reads `Passed: N / N`; the process exits non-zero if any case fails.
