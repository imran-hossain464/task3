const express = require("express");
const app = express();

// GCD function
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// LCM function
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

// Validate natural numbers
function isNatural(n) {
    return Number.isInteger(n) && n > 0;
}

// IMPORTANT: replace with YOUR converted email route
const route = "/app/k_imran_khan464_gmail_com";
app.get(route, (req, res) => {
    const x = Number(req.query.x);
    const y = Number(req.query.y);

    if (!isNatural(x) || !isNatural(y)) {
        return res.send("NaN");
    }

    const result = lcm(x, y);
    res.send(String(result));
});

// fallback (optional for testing)
app.get("/", (req, res) => {
    res.send("Server is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
    console.log("Server running on port " + PORT);
});