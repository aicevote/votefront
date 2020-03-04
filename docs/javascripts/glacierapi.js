const baseURI = "https://api.aicevote.com/";

// INDEX
function getTheme(id) {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: baseURI + "themes/" + id,
            success: (data) => { resolve(data); },
            error: (_) => { reject(); }
        });
    });
}

function getProfile(sessionToken) {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: baseURI + "profiles?sessiontoken=" + sessionToken,
            success: (data) => { resolve(data); },
            error: (_) => { reject(); }
        });
    });
}

function postFeedback(message) {
    $.ajax({ type: "POST", url: baseURI + "feedback?message=" + message });
}

function postApplication(message) {
    $.ajax({ type: "POST", url: baseURI + "application?message=" + message });
}

// AUTH
function getSessionToken() {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: baseURI + "auth/sessiontoken",
            xhrFields: { withCredentials: true },
            success: (data) => { resolve(data.sessionToken); },
            error: (_) => { reject(); }
        });
    });
}

// VOTE
function getResult(id) {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: baseURI + "vote/results/" + id,
            success: (data) => { resolve(data); },
            error: (_) => { reject(); }
        });
    });
}

function getVotes(id, sessionToken) {
    if (sessionToken) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "GET",
                url: baseURI + "vote/votes/" + id + "?sessionToken=" + sessionToken,
                success: (data) => { resolve(data); },
                error: (_) => { reject(); }
            });
        });
    } else {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "GET",
                url: baseURI + "vote/votes/" + id,
                success: (data) => { resolve(data); },
                error: (_) => { reject(); }
            });
        });
    }
}

function vote(id, sessionToken, answer) {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "POST",
            url: baseURI + "vote/votes/" + id + "?sessionToken=" + sessionToken + "&answer=" + answer,
            success: (data) => { resolve(data); },
            error: (_) => { reject(); }
        });
    });
}

function getTransitions(id) {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: baseURI + "vote/transitions/" + id,
            success: (data) => { resolve(data); },
            error: (_) => { reject(); }
        });
    });
}

function getComments(id) {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: baseURI + "vote/comments/" + id,
            success: (data) => { resolve(data); },
            error: (_) => { reject(); }
        });
    });
}

function comment(id, sessionToken, message) {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "POST",
            url: baseURI + "vote/comments/" + id + "?sessionToken=" + sessionToken + "&message=" + message,
            success: (data) => { resolve(data); },
            error: (_) => { reject(); }
        });
    });
}

// NEWS
function getAllArticles() {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: baseURI + "news/articles/",
            success: (data) => { resolve(data); },
            error: (_) => { reject(); }
        });
    });
}

function getArticles(id) {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: baseURI + "news/articles/" + id,
            success: (data) => { resolve(data); },
            error: (_) => { reject(); }
        });
    });
}
