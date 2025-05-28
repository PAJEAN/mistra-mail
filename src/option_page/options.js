// Charger la clé existante
chrome.storage.local.get('apiKey', (data) => {
    if (data.apiKey) {
        document.getElementById('api-key').value = data.apiKey;
    }
});

document.getElementById('save').addEventListener('click', () => {
    let key = document.getElementById('api-key').value.trim();

    if (!key) {
        document.getElementById('status').textContent = 'Please enter a valid key.';
        return;
    }

    chrome.storage.local.set({ apiKey: key }, () => {
        document.getElementById('status').textContent = 'API key saved!';
    });
});