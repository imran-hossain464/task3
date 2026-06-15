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
    return /^[1-9]\d*$/.test(str);
}

app.get("/k_imran_khan464_gmail_com", (req, res) => {
    const { x, y } = req.query;

    if (!isNatural(x) || !isNatural(y)) {
        return res.send("NaN");
    }

    const a = BigInt(x);
    const b = BigInt(y);

    res.send(lcm(a, b).toString());
});