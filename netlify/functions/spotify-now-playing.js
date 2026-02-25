const getAccessToken = async () => {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) return null;

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  const body = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  });

  const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });

  if (!tokenRes.ok) return null;
  const tokenData = await tokenRes.json();
  return tokenData.access_token || null;
};

exports.handler = async () => {
  try {
    const accessToken = await getAccessToken();
    if (!accessToken) {
      return {
        statusCode: 200,
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ isPlaying: false, track: null, artist: null, url: null }),
      };
    }

    const nowPlayingRes = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (nowPlayingRes.status === 204 || nowPlayingRes.status === 202) {
      const recentRes = await fetch("https://api.spotify.com/v1/me/player/recently-played?limit=1", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      if (recentRes.ok) {
        const recentData = await recentRes.json();
        const recentItem = recentData?.items?.[0];
        if (recentItem?.track) {
          return {
            statusCode: 200,
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              isPlaying: false,
              track: recentItem.track.name || null,
              artist: recentItem.track.artists?.map((a) => a.name).join(", ") || null,
              url: recentItem.track.external_urls?.spotify || null,
              playedAt: recentItem.played_at || null,
            }),
          };
        }
      }

      return {
        statusCode: 200,
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ isPlaying: false, track: null, artist: null, url: null }),
      };
    }

    if (!nowPlayingRes.ok) {
      return {
        statusCode: 200,
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ isPlaying: false, track: null, artist: null, url: null }),
      };
    }

    const data = await nowPlayingRes.json();
    const item = data?.item;

    return {
      statusCode: 200,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        isPlaying: Boolean(data?.is_playing),
        track: item?.name || null,
        artist: item?.artists?.map((a) => a.name).join(", ") || null,
        url: item?.external_urls?.spotify || null,
      }),
    };
  } catch (error) {
    return {
      statusCode: 200,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ isPlaying: false, track: null, artist: null, url: null }),
    };
  }
};
