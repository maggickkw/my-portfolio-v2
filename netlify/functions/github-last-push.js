exports.handler = async () => {
  const username = process.env.GITHUB_USERNAME || "maggickkw";
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "maggickkw-portfolio",
  };

  try {
    const response = await fetch(
      `https://api.github.com/users/${encodeURIComponent(username)}/events/public?per_page=30`,
      { headers }
    );

    if (!response.ok) {
      return {
        statusCode: 200,
        body: JSON.stringify({ lastPushAt: null, repo: null }),
      };
    }

    const events = await response.json();
    const pushEvent = events.find((event) => event.type === "PushEvent");

    return {
      statusCode: 200,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        lastPushAt: pushEvent?.created_at || null,
        repo: pushEvent?.repo?.name || null,
      }),
    };
  } catch (error) {
    return {
      statusCode: 200,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ lastPushAt: null, repo: null }),
    };
  }
};
