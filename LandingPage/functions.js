let pre = "general";
let preDiv = "generalDiv";

let disInfo = (divId) =>{

    let preTag = document.getElementById(pre);
    let preDivTag = document.getElementById(preDiv);

    preTag.classList.add("hover:bg-white");
    preTag.classList.remove("bg-white");
    preDivTag.classList.add("hidden");
    preDivTag.classList.remove("flex");

    let div = document.getElementById(divId);

    div.classList.remove("hover:bg-white");
    div.classList.add("bg-white");

    let disDiv = document.getElementById(divId+"Div");

    disDiv.classList.remove("hidden");
    disDiv.classList.add("flex");

    pre = divId;
    preDiv = divId+"Div";
}



// IndexedDB setup
const dbName = 'UserDatabase';
let db;

const request = indexedDB.open(dbName, 1);

request.onerror = function(event) {
    console.error("Database error: ", event.target.errorCode);
};

request.onsuccess = function(event) {
    db = event.target.result;
};


// Store general data
document.getElementById('submitGeneralData').addEventListener('click', function() {
    const type = document.querySelector('#generalDiv .glassEffect:nth-child(1) .text-[#bebec6]').textContent.trim();
    const time = document.querySelector('#generalDiv .glassEffect:nth-child(2) .text-[#bebec6]').textContent.trim();
    const date = document.querySelector('#generalDiv .glassEffect:nth-child(3) .text-[#bebec6]').textContent.trim();

    const transaction = db.transaction(['general'], 'readwrite');
    const objectStore = transaction.objectStore('general');
    const request = objectStore.add({ type, time, date });

    request.onsuccess = function() {
        alert("General data stored successfully!");
    };

    request.onerror = function() {
        alert("Error storing general data.");
    };
});