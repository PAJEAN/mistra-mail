const DATA_NAMES = {
    apiKey: 'apiKey',
    prefLanguage: 'prefLanguage'
}


// Charger la clé existante
chrome.storage.local.get(DATA_NAMES.apiKey, (data) => {
    if (data[DATA_NAMES.apiKey]) {
        document.getElementById('api-key').value = data[DATA_NAMES.apiKey];
    }
});

chrome.storage.local.get(DATA_NAMES.prefLanguage, (data) => {    
    if (data[DATA_NAMES.prefLanguage]) {
        let language = document.getElementById('language-select');
        language.value = data[DATA_NAMES.prefLanguage];
    }
});


document.getElementById('save').addEventListener('click', () => {
    let key = document.getElementById('api-key').value.trim();
    let language = document.getElementById('language-select').value;    

    let status_tag = document.getElementById('status');
    status_tag.style.display = 'block';

    if (!key) {
        status_tag.textContent = 'Please enter a valid key.';
        return;
    }

    chrome.storage.local.set({ [DATA_NAMES.apiKey]: key });
    chrome.storage.local.set({ [DATA_NAMES.prefLanguage]: language });

    status_tag.textContent = 'Parameters saved!';
});