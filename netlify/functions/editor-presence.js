const { connectLambda, getStore } = require("@netlify/blobs");

const CORS_HEADERS = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET,POST,OPTIONS",
  "access-control-allow-headers": "content-type,x-editor-token",
  "content-type": "application/json",
};

const readPresence = async (store) => {
  const value = await store.get("status");
  if (!value) return null;
  if (typeof value === "string") return JSON.parse(value);
  if (value && typeof value.text === "function") {
    const text = await value.text();
    return JSON.parse(text);
  }
  return null;
};

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: CORS_HEADERS, body: "" };
  }

  connectLambda(event);
  const store = getStore("editor-presence");

  if (event.httpMethod === "GET") {
    try {
      const status = await readPresence(store);
      return {
        statusCode: 200,
        headers: CORS_HEADERS,
        body: JSON.stringify(
          status || {
            isOpen: false,
            editor: "unknown",
            updatedAt: null,
          }
        ),
      };
    } catch (error) {
      return {
        statusCode: 200,
        headers: CORS_HEADERS,
        body: JSON.stringify({
          isOpen: false,
          editor: "unknown",
          updatedAt: null,
        }),
      };
    }
  }

  if (event.httpMethod === "POST") {
    const token = event.headers["x-editor-token"] || event.headers["X-Editor-Token"];
    if (!process.env.EDITOR_STATUS_TOKEN || token !== process.env.EDITOR_STATUS_TOKEN) {
      return {
        statusCode: 401,
        headers: CORS_HEADERS,
        body: JSON.stringify({ error: "Unauthorized" }),
      };
    }

    try {
      const payload = JSON.parse(event.body || "{}");
      const editor = payload.editor === "cursor" ? "cursor" : "vscode";
      const isOpen = Boolean(payload.isOpen);
      const status = {
        editor,
        isOpen,
        updatedAt: new Date().toISOString(),
      };
      await store.set("status", JSON.stringify(status));
      return {
        statusCode: 200,
        headers: CORS_HEADERS,
        body: JSON.stringify(status),
      };
    } catch (error) {
      return {
        statusCode: 400,
        headers: CORS_HEADERS,
        body: JSON.stringify({ error: "Invalid payload" }),
      };
    }
  }

  return {
    statusCode: 405,
    headers: CORS_HEADERS,
    body: JSON.stringify({ error: "Method Not Allowed" }),
  };
};
