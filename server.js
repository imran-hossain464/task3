const express = require("express");
const app = express();

function gcd(a, b) {
    while (b !== 0n) {
        [a, b] = [b, a % b];
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function isNatural(str) {
    return typeof str === "string" && /^[1-9]\d*$/.test(str);
}

app.get("/k_imran_khan464_gmail_com", (req, res) => {
    const { x, y } = req.query;

    if (!isNatural(x) || !isNatural(y)) {
        return res.type("text/plain").send("NaN");
    }

    const a = BigInt(x);
    const b = BigInt(y);

    res.type("text/plain").send(lcm(a, b).toString());
});

app.get("/", (req, res) => {
    res.type("text/plain").send("OK");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});