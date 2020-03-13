// for sign-in page
function saveSessionID() {
    const sessionID = decodeURIComponent(location.search.substring(1))
        .split('&').map(query => {
            const pair = query.split('=');
            return { key: pair[0], value: pair[1] };
        }).filter(query => query.key == "sessionid")[0].value;

    localStorage.setItem("sessionid", sessionID);
    return sessionID;
}

// for sign-out page
function deleteSessionID() {
    localStorage.removeItem("sessionid");
}

function getSessionID() {
    const sessionID = localStorage.getItem("sessionid");
    if (!sessionID) { return undefined; }
    return sessionID;
}
