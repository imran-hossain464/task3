const express = require("express");
const app = express();

// GCD
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// LCM
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

// validate natural numbers
function isNatural(n) {
    return Number.isInteger(n) && n > 0;
}

/*
IMPORTANT:
Route MUST be EXACT email-converted string
NO /task3 prefix
*/
app.get("/k_imran_khan464_gmail_com", (req, res) => {
    const x = Number(req.query.x);
    const y = Number(req.query.y);

    if (!isNatural(x) || !isNatural(y)) {
        return res.send("NaN");
    }

    res.send(String(lcm(x, y)));
});

// optional test route
app.get("/", (req, res) => {
    res.send("OK");
});

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
    console.log("Server running on port " + PORT);
});