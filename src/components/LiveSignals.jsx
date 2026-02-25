import React, { useEffect, useMemo, useState } from "react";
import {
  HiCodeBracketSquare,
  HiClock,
  HiMusicalNote,
  HiSignal,
  HiXMark,
} from "react-icons/hi2";

const initialState = {
  editor: { loading: true, online: false, editor: "unknown", updatedAt: null },
  github: { loading: true, lastPushAt: null, repo: null },
  spotify: { loading: true, isPlaying: false, track: null, artist: null, url: null },
};

const timeAgo = (dateValue) => {
  if (!dateValue) return "Unavailable";
  const date = new Date(dateValue);
  const diffMs = Date.now() - date.getTime();
  const diffMin = Math.floor(diffMs / 60000);
  if (diffMin < 1) return "Just now";
  if (diffMin < 60) return `${diffMin}m ago`;
  const diffHr = Math.floor(diffMin / 60);
  if (diffHr < 24) return `${diffHr}h ago`;
  const diffDay = Math.floor(diffHr / 24);
  return `${diffDay}d ago`;
};

function LiveSignals() {
  const [state, setState] = useState(initialState);
  const [isOpen, setIsOpen] = useState(true);
  const [isNearHero, setIsNearHero] = useState(true);

  const editorLabel = useMemo(() => {
    if (state.editor.loading) return "Checking editor status...";
    if (!state.editor.online) return "Offline";
    if (state.editor.editor === "cursor") return "Cursor open";
    if (state.editor.editor === "vscode") return "VS Code open";
    return "Editor open";
  }, [state.editor]);

  useEffect(() => {
    let active = true;

    const fetchSignals = async () => {
      try {
        const [editorRes, githubRes, spotifyRes] = await Promise.all([
          fetch("/.netlify/functions/editor-presence"),
          fetch("/.netlify/functions/github-last-push"),
          fetch("/.netlify/functions/spotify-now-playing"),
        ]);

        const [editorData, githubData, spotifyData] = await Promise.all([
          editorRes.ok ? editorRes.json() : null,
          githubRes.ok ? githubRes.json() : null,
          spotifyRes.ok ? spotifyRes.json() : null,
        ]);

        if (!active) return;

        setState({
          editor: {
            loading: false,
            online: Boolean(editorData?.isOpen),
            editor: editorData?.editor || "unknown",
            updatedAt: editorData?.updatedAt || null,
          },
          github: {
            loading: false,
            lastPushAt: githubData?.lastPushAt || null,
            repo: githubData?.repo || null,
          },
          spotify: {
            loading: false,
            isPlaying: Boolean(spotifyData?.isPlaying),
            track: spotifyData?.track || null,
            artist: spotifyData?.artist || null,
            url: spotifyData?.url || null,
          },
        });
      } catch (error) {
        if (!active) return;
        setState((prev) => ({
          editor: { ...prev.editor, loading: false },
          github: { ...prev.github, loading: false },
          spotify: { ...prev.spotify, loading: false },
        }));
      }
    };

    fetchSignals();
    const interval = setInterval(fetchSignals, 60000);
    return () => {
      active = false;
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const evaluateHeroZone = () => {
      const threshold = window.innerHeight * 1.05;
      setIsNearHero(window.scrollY <= threshold);
    };

    evaluateHeroZone();
    window.addEventListener("scroll", evaluateHeroZone);
    window.addEventListener("resize", evaluateHeroZone);

    return () => {
      window.removeEventListener("scroll", evaluateHeroZone);
      window.removeEventListener("resize", evaluateHeroZone);
    };
  }, []);

  if (!isNearHero) return null;

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="hidden lg:block fixed right-6 top-[48%] -translate-y-1/2 z-[70] px-3 py-2 rounded-full border border-accent/40 bg-base-900/85 text-accent hover:bg-accent/15 transition-all duration-200 backdrop-blur-md shadow-lg"
          aria-label="Open live status panel"
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs">
            <HiSignal className="text-sm" />
            LIVE
          </span>
        </button>
      )}

      {isOpen && (
        <aside className="hidden lg:block fixed z-[70] right-6 top-[48%] -translate-y-1/2 w-[290px] rounded-2xl overflow-hidden border border-base-700/60 backdrop-blur-xl shadow-2xl bg-gradient-to-br from-[#1a2440]/95 via-[#161b22]/95 to-[#102b26]/95">
          <div className="flex items-center justify-between px-4 py-3 border-b border-base-700/60 bg-gradient-to-r from-accent/25 via-violet-400/20 to-emerald-400/20">
            <div className="inline-flex items-center gap-2">
              <HiSignal className="text-accent-light text-sm" />
              <span className="font-mono text-xs text-base-100 tracking-wide">LIVE NOW</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-base-300 hover:text-white transition-colors"
              aria-label="Close live status panel"
            >
              <HiXMark className="text-lg" />
            </button>
          </div>

          <div className="p-3 space-y-2">
            <article className="rounded-xl border border-blue-300/20 bg-blue-400/10 px-3 py-2.5">
              <div className="flex items-center gap-2 text-base-200 mb-1">
                <HiCodeBracketSquare className="text-blue-300 text-base" />
                <h3 className="font-mono text-[11px] uppercase tracking-wide">Editor</h3>
              </div>
              <p className="text-base-100 text-sm font-medium">{editorLabel}</p>
              <p className="text-base-400 text-[11px] mt-1">
                Updated {state.editor.loading ? "..." : timeAgo(state.editor.updatedAt)}
              </p>
            </article>

            <article className="rounded-xl border border-violet-300/20 bg-violet-400/10 px-3 py-2.5">
              <div className="flex items-center gap-2 text-base-200 mb-1">
                <HiClock className="text-violet-300 text-base" />
                <h3 className="font-mono text-[11px] uppercase tracking-wide">GitHub Push</h3>
              </div>
              <p className="text-base-100 text-sm font-medium">
                {state.github.loading ? "Checking..." : timeAgo(state.github.lastPushAt)}
              </p>
              <p className="text-base-400 text-[11px] mt-1 truncate">
                {state.github.repo || "No recent push found"}
              </p>
            </article>

            <article className="rounded-xl border border-emerald-300/20 bg-emerald-400/10 px-3 py-2.5">
              <div className="flex items-center gap-2 text-base-200 mb-1">
                <HiMusicalNote className="text-emerald-300 text-base" />
                <h3 className="font-mono text-[11px] uppercase tracking-wide">Spotify</h3>
              </div>
              <p className="text-base-100 text-sm font-medium truncate">
                {state.spotify.loading
                  ? "Checking..."
                  : state.spotify.isPlaying
                    ? `${state.spotify.track} - ${state.spotify.artist}`
                    : state.spotify.track
                      ? `Last played: ${state.spotify.track} - ${state.spotify.artist}`
                      : "Nothing playing"}
              </p>
              <p className="text-base-400 text-[11px] mt-1 truncate">
                {state.spotify.url ? (
                  <a
                    href={state.spotify.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-300 hover:text-emerald-200 transition-colors"
                  >
                    Open on Spotify
                  </a>
                ) : (
                  "Spotify status unavailable"
                )}
              </p>
            </article>
          </div>
        </aside>
      )}
    </>
  );
}

export default LiveSignals;
