function diamond(n) {
    if (typeof n != "number" || n % 2 == 0 || n < 0) {
        return null;
    }
    var c = (n + 1) / 2,
        s = "";
    for (var i = 1; i <= n; i++) {
        s +=
            new Array(Math.abs(c - i) + 1).join(" ") +
            new Array(n - 2 * Math.abs(c - i) + 1).join("*") +
            "\n";
    }
    return s;
}

console.log(diamond(5));