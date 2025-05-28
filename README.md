```json
{
  "manifest_version": 3,
  "name": "Reformulate with Mistral",
  "version": "1.0",
  "permissions": [
    "contextMenus", // Pour ajouter des éléments au menu contextuel de Google Chrome.
    "activeTab" // Allow to change what's going on in the active tab.
  ],
  "background": {
    "service_worker": "src/js/background.js"
  },
  "content_scripts": [ // Actively affect the js of the page.
    {
      "matches": ["<all_urls>"],
      "js": ["src/js/content.js"]
    }
  ]
}
```

Service worker, online run in a background and you need to inspect "service worker" console.

background.js (service worker) --> chrome://extensions → Inspecter
reformulateText() --> exécuté via chrome.scripting.executeScript Console de la page web

https://github.com/cheahjs/free-llm-api-resources