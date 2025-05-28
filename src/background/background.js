console.log("✅ Service Worker loaded");

const MENU_ITEM_ID = 'reformulate-text';

// Add items to Google Chrome's context menu (right clic).
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: MENU_ITEM_ID, // Unique identifier to assign to this menu item. Required for event pages. Must not be the same as any other ID in this extension.
        title: "Reformuler avec Mistral",
        contexts: ["selection"] // List of contexts in which this menu item will appear. The default value is ['page'] and with ['selection'] value, the item appears when some content is selected.
    });
});


// A function that is called back when the menu item is clicked.
chrome.contextMenus.onClicked.addListener(
    /**
     * Send a message to call the API of a LLM.
     * @param {object} info Information about the item clicked and the context where the click happened
     * @param {object} tab The details of the tab where the click took place.
     */
    (info, tab) => {
        if (info.menuItemId === MENU_ITEM_ID && tab.id) {        
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, { type: "reformulate", text: info.selectionText });                
            });
        }
    }
);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'open-options') {
        chrome.runtime.openOptionsPage();
    }
});