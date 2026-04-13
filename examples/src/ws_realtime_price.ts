import "dotenv/config";

import {
  TwelvedataWebSocketClient,
  TwelvedataWebSocketError,
} from "@twelvedata/twelvedata-node";

const client = new TwelvedataWebSocketClient();

client.on("price", (event) => {
  console.log(`${event.symbol} @ ${event.price} (${event.timestamp})`);
});

client.on("subscribe-status", (event) => {
  console.log(
    "Subscribed:",
    event.success.map((s) => s.symbol),
  );
  if (event.fails.length) {
    console.warn(
      "Failed:",
      event.fails.map((s) => s.symbol),
    );
  }
});

client.on("reconnecting", ({ attempt, delayMs }) => {
  console.log(`Reconnecting (attempt ${attempt}) in ${delayMs}ms…`);
});

client.on("reconnect", ({ attempt }) => {
  console.log(`Reconnected on attempt ${attempt}`);
});

client.on("error", (error) => {
  if (error instanceof TwelvedataWebSocketError) {
    console.error("WebSocket error:", error.name, error.message);
  } else {
    console.error("Unexpected error:", error);
  }
});

async function main() {
  await client.connect();
  client.subscribe("AAPL,EUR/USD,BTC/USD");

  // Stream for 30 seconds, then disconnect cleanly.
  setTimeout(() => {
    client.disconnect();
  }, 30_000);
}

main().catch(console.error);
