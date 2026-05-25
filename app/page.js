"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  const [serverIp, setServerIp] = useState("192.168.1.X");
  const [activeTab, setActiveTab] = useState("android");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hostname = window.location.hostname;
      if (hostname !== "localhost" && hostname !== "127.0.0.1") {
        setServerIp(hostname);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-zinc-100 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* Top Header */}
      <header className="border-b border-zinc-800/80 bg-zinc-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-orange-600 to-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/25">
              <span className="font-black text-black text-lg">V</span>
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-orange-400 to-orange-200 bg-clip-text text-transparent">
                VEXcode GO
              </span>
              <span className="text-xs text-zinc-500 ml-2 font-mono px-1.5 py-0.5 rounded border border-zinc-800">
                v4.64.1
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/webapp/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full border border-orange-500/30 text-orange-400 text-sm font-medium hover:bg-orange-500/10 transition-all duration-300"
            >
              Open workspace
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-12 md:py-20 flex flex-col gap-16">
        
        {/* Hero Section */}
        <section className="text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold self-center md:self-start">
              <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
              PORTABLE & SERVERLESS EDITION
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white">
              Code Your VEX GO Robot
              <span className="block mt-2 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-300 bg-clip-text text-transparent">
                Fully Offline & Local
              </span>
            </h1>
            <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
              Extracted from the official package. Runs entirely in your browser on tablets or computers with no internet or local server processes required, eliminating cloud compiler errors.
            </p>
            <p className="text-sm text-amber-200/90 max-w-xl leading-relaxed border border-amber-500/25 bg-amber-500/10 rounded-xl px-4 py-3">
              Cursor&apos;s built-in browser preview cannot run VEXcode GO (the app bundle is ~51MB). Use{" "}
              <strong className="text-amber-100">Open in Browser</strong> below, or open the same URL in Chrome or Edge.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
              <a
                href="/webapp/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto h-14 px-8 rounded-2xl bg-gradient-to-r from-orange-600 to-orange-500 text-black font-bold text-lg flex items-center justify-center gap-3 hover:from-orange-500 hover:to-orange-400 transition-all duration-300 shadow-xl shadow-orange-600/20 hover:shadow-orange-500/35 hover:-translate-y-0.5"
              >
                Open in Chrome / Edge
                <svg
                  className="h-5 w-5 stroke-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
              <a
                href="#tablet-setup"
                className="w-full sm:w-auto h-14 px-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-zinc-700 font-semibold text-zinc-300 flex items-center justify-center transition-all duration-300"
              >
                View Tablet Instructions
              </a>
            </div>
          </div>

          {/* Interactive Feature Visual */}
          <div className="flex-1 w-full max-w-md relative group">
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-orange-600 to-amber-500 opacity-20 blur group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-zinc-900/90 border border-zinc-800 rounded-3xl p-8 flex flex-col gap-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80"></span>
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80"></span>
                  <span className="h-3 w-3 rounded-full bg-green-500/80"></span>
                </div>
                <span className="text-xs text-zinc-500 font-mono">Offline-Capability.json</span>
              </div>
              <div className="flex flex-col gap-4 font-mono text-sm text-zinc-400">
                <div className="flex items-start gap-3">
                  <span className="text-orange-500">&gt;</span>
                  <span>Extracting assets ... Done</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-500">&gt;</span>
                  <span>Loading Blockly blocks ... Done (en.js native)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-500">&gt;</span>
                  <span>Pyodide C++ / Python Compiler ... Ready</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-500">&gt;</span>
                  <span>Web Bluetooth Service ... Listening</span>
                </div>
              </div>
              <div className="mt-4 p-4 rounded-xl bg-orange-500/5 border border-orange-500/10 flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400">
                  ⚡
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-zinc-200">100% Client-Side</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">No backend servers or internet connections required.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-zinc-950/40 border border-zinc-800/80 rounded-2xl p-6 hover:border-zinc-700 transition-all duration-300">
            <div className="h-12 w-12 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center text-xl mb-6">
              📶
            </div>
            <h3 className="text-lg font-bold text-white mb-2">No Server Required</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Exported as static HTML. Open directly from your file system or deploy to any static hosting. No background Node.js processes needed.
            </p>
          </div>

          <div className="bg-zinc-950/40 border border-zinc-800/80 rounded-2xl p-6 hover:border-zinc-700 transition-all duration-300">
            <div className="h-12 w-12 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center text-xl mb-6">
              🇺🇸
            </div>
            <h3 className="text-lg font-bold text-white mb-2">English Default</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Configured strictly for English. All redundant language files have been removed, making the app lighter, cleaner, and faster.
            </p>
          </div>

          <div className="bg-zinc-950/40 border border-zinc-800/80 rounded-2xl p-6 hover:border-zinc-700 transition-all duration-300">
            <div className="h-12 w-12 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center text-xl mb-6">
              🔌
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Bluetooth & Serial</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Utilizes native browser Web Bluetooth and Web Serial APIs. Connect wirelessly to your VEX GO brain seamlessly right from Google Chrome.
            </p>
          </div>
        </section>

        {/* Tablet Setup Guide */}
        <section id="tablet-setup" className="border border-zinc-800 rounded-3xl bg-zinc-900/20 backdrop-blur-sm p-8 md:p-12 flex flex-col gap-10">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
            <h2 className="text-3xl font-extrabold text-white">Configure Bluetooth for Tablets</h2>
            <p className="text-zinc-500 text-sm">
              Mobile and tablet browsers restrict Web Bluetooth to secure origins. Follow these simple steps to allow local connections.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-start">
            
            {/* Step-by-Step UI */}
            <div className="flex-1 flex flex-col gap-6">
              
              {/* Tab Selector */}
              <div className="flex gap-2 p-1 rounded-xl bg-zinc-950/80 border border-zinc-800 self-start">
                <button
                  onClick={() => setActiveTab("android")}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    activeTab === "android"
                      ? "bg-orange-500 text-black shadow-lg"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  Android Chrome
                </button>
                <button
                  onClick={() => setActiveTab("ios")}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    activeTab === "ios"
                      ? "bg-orange-500 text-black shadow-lg"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  iOS (iPad / iPhone)
                </button>
              </div>

              {activeTab === "android" ? (
                <div className="flex flex-col gap-6 animate-fadeIn">
                  <div className="flex gap-4">
                    <div className="h-8 w-8 rounded-full bg-zinc-800 text-orange-400 flex items-center justify-center font-mono font-bold shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Open Chrome Flags</h4>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        On your tablet's Chrome browser, enter the following in the address bar:
                        <span className="block mt-2 font-mono text-orange-400 px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 select-all">
                          chrome://flags/#unsafely-treat-insecure-origin-as-secure
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-8 w-8 rounded-full bg-zinc-800 text-orange-400 flex items-center justify-center font-mono font-bold shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Enable Secure Origin Bypass</h4>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        Locate **Insecure origins treated as secure**, and set it to **Enabled**.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-8 w-8 rounded-full bg-zinc-800 text-orange-400 flex items-center justify-center font-mono font-bold shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Add Local Server IP Address</h4>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        Enter your local web host IP address in the text box below:
                        <span className="block mt-2 font-mono text-orange-400 px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 select-all">
                          {`http://${serverIp}:8088`}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-8 w-8 rounded-full bg-zinc-800 text-orange-400 flex items-center justify-center font-mono font-bold shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Relaunch Chrome</h4>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        Tap the **Relaunch** button at the bottom. Re-enter the web workspace URL, and Web Bluetooth will connect perfectly.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-6 animate-fadeIn">
                  <div className="flex gap-4">
                    <div className="h-8 w-8 rounded-full bg-zinc-800 text-orange-400 flex items-center justify-center font-mono font-bold shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Use a Web Bluetooth-enabled Browser</h4>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        Native iOS Safari does not support Web Bluetooth. Download a Web Bluetooth-capable browser from the App Store, such as **Bluefy** (fully free).
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-8 w-8 rounded-full bg-zinc-800 text-orange-400 flex items-center justify-center font-mono font-bold shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Access the Workspace Directly</h4>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        Open **Bluefy** on your iPad and navigate to your local server URL:
                        <span className="block mt-2 font-mono text-orange-400 px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 select-all">
                          {`http://${serverIp}:8088/webapp/index.html`}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-8 w-8 rounded-full bg-zinc-800 text-orange-400 flex items-center justify-center font-mono font-bold shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Connect Robot</h4>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        Bluefy will automatically intercept and run all Web Bluetooth calls, making connection setup instantaneous.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Live Interactive Assistant */}
            <div className="w-full md:w-80 bg-zinc-950/80 border border-zinc-800/80 rounded-2xl p-6 flex flex-col gap-6">
              <h4 className="text-white font-bold text-sm">IP Configuration Assistant</h4>
              <div className="flex flex-col gap-4">
                <label className="text-xs text-zinc-500 font-medium">Enter Host PC IP Address:</label>
                <input
                  type="text"
                  value={serverIp}
                  onChange={(e) => setServerIp(e.target.value)}
                  className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-sm font-mono focus:outline-none focus:border-orange-500/50 text-orange-400 transition"
                  placeholder="e.g. 192.168.1.50"
                />
              </div>
              <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/10 flex flex-col gap-2">
                <span className="text-xs text-zinc-400 font-bold">Flag Input Target:</span>
                <code className="text-xs font-mono text-orange-400 break-all select-all">
                  {`http://${serverIp}:8088`}
                </code>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-black/50 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-zinc-600 text-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© 2026 VEXcode GO Offline Portal. Clean, serverless, mobile-optimized.</p>
          <div className="flex gap-4">
            <span className="px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-500">
              Output: Static HTML
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
