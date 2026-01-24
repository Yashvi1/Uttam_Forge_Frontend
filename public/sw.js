self.addEventListener("install", () => {
  self.skipWaiting()
})

self.addEventListener("activate", () => {
  clients.claim()
})

self.addEventListener("fetch", (event) => {
  // Do NOT cache API, images, or navigation yet
  return
})
