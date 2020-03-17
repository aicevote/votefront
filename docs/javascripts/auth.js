// for sign-in page
function saveSessionID() {
    const q = decodeURIComponent(location.search.substring(1))
        .split('&').map(query => {
            const pair = query.split('=');
            return { key: pair[0], value: pair[1] };
        }).filter(query => query.key == "sessionid");

    if (q[0] && q[0].value) {
        const sessionID = q[0].value;
        localStorage.setItem("sessionid", sessionID);
    }
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
