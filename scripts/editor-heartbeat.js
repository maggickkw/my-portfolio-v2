#!/usr/bin/env node

const editorArg = (process.argv[2] || "cursor").toLowerCase();
const editor = editorArg === "vscode" ? "vscode" : "cursor";
const intervalMs = Number(process.env.EDITOR_HEARTBEAT_INTERVAL_MS || 30000);

const baseUrl = process.env.EDITOR_PRESENCE_URL;
const token = process.env.EDITOR_STATUS_TOKEN;

if (!baseUrl) {
  console.error("Missing EDITOR_PRESENCE_URL in environment.");
  process.exit(1);
}

if (!token) {
  console.error("Missing EDITOR_STATUS_TOKEN in environment.");
  process.exit(1);
}

const endpoint = baseUrl.endsWith("/")
  ? `${baseUrl.slice(0, -1)}/.netlify/functions/editor-presence`
  : `${baseUrl}/.netlify/functions/editor-presence`;

const postStatus = async (isOpen) => {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-editor-token": token,
    },
    body: JSON.stringify({ editor, isOpen }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`HTTP ${response.status}: ${text}`);
  }
};

let timer = null;
let stopping = false;

const tick = async () => {
  try {
    await postStatus(true);
    console.log(`[editor-heartbeat] ${editor} open ping sent: ${new Date().toISOString()}`);
  } catch (error) {
    console.error("[editor-heartbeat] ping failed:", error.message);
  }
};

const stop = async () => {
  if (stopping) return;
  stopping = true;
  if (timer) clearInterval(timer);
  try {
    await postStatus(false);
    console.log(`[editor-heartbeat] ${editor} close ping sent.`);
  } catch (error) {
    console.error("[editor-heartbeat] close ping failed:", error.message);
  }
  process.exit(0);
};

process.on("SIGINT", stop);
process.on("SIGTERM", stop);

console.log(`[editor-heartbeat] starting for ${editor}`);
console.log(`[editor-heartbeat] endpoint: ${endpoint}`);
console.log(`[editor-heartbeat] interval: ${intervalMs}ms`);

tick();
timer = setInterval(tick, intervalMs);
