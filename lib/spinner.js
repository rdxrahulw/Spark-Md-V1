var spin = require('spinnies');

var spinner = {
    "interval": 120,
    "frames": [
        "",
        "spark_md-v1 is active",
        "spark_md-v1 is active",
        "spark_md-v1 is active",
        "spark_md-v1 is active",
        "spark_md-v1 is active",
        "spark_md-v1 is active",
        "loading messages",
        "loading messages.",
        "loading messages..",
        "loading messages...",
        ""
    ]
};

let globalSpinner;

var getGlobalSpinner = (disableSpins = false) => {
    if (!globalSpinner) globalSpinner = new spin({ color: 'white', succeedColor: 'blue', spinner, disableSpins });
    return globalSpinner;
};

let spins = getGlobalSpinner(false);

module.exports.start = (id, text) => {
    spins.add(id, { text: text });
};
