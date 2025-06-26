var spin = require('spinnies');

var spinner = {
    "interval": 120,
    "frames": [
        "",
        "[SPARK-MD-V1]-IS-ACTIVE",
        "[SPARK-MD-V1]-IS-ACTIVE.",
        "[SPARK-MD-V1]-IS-ACTIVE..",
        "[SPARK-MD-V1]-IS-ACTIVE...",
        "[SPARK-MD-V1]-IS-ACTIVE..",
        "[SPARK-MD-V1]-IS-ACTIVE.",
        "[LOADING]-MESSAGES",
        "[LOADING]-MESSAGES.",
        "[LOADING]-MESSAGES..",
        "[LOADING]-MESSAGES...",
        "[LOADING]-MESSAGES..",
        "[LOADING]-MESSAGES.",
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
