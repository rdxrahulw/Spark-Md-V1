const fs = require('fs').promises;
const { modul } = require('../module');
const { chalk } = modul;
const path = require('path');
const moment = require('moment-timezone'); // Make sure to require moment-timezone

const settingsFile = path.join(__dirname, '../database/bot_settings.json');

let botSettings = {
  autotypingEnabled: false,
  autoRecordingEnabled: false,
  autoBlockMoroccoEnabled: false,
  autoKickMoroccoEnabled: false,
  antispamEnabled: false,
  selfModeEnabled: false,
  publicMode: true,
  markBotLinkedTimestamp: null,
  autoViewStatus: false, // <--- CHANGED: Default is now FALSE
};

async function loadBotSettings() {
  try {
    const data = await fs.readFile(settingsFile, 'utf8');
    const loadedSettings = JSON.parse(data);
    console.log(chalk.keyword('cyan')('Time Stamp Loaded 💾'));
    botSettings = { ...botSettings, ...loadedSettings };

    // Ensure new settings are added if they don't exist in the loaded file (for older files)
    if (!('autoViewStatus' in botSettings)) {
        botSettings.autoViewStatus = false; // <--- CHANGED: Default is now FALSE if missing from old file
    }

  } catch (error) {
    console.log('Installing Time Stamp📥');
    // If the file doesn't exist on first run, save default settings
    await saveBotSettings();
  }
}

async function saveBotSettings() {
  try {
    await fs.writeFile(settingsFile, JSON.stringify(botSettings, null, 2), 'utf8');
    console.log('Installed Timestamp:', botSettings);
  } catch (error) {
    console.error('Error saving bot settings:', error);
  }
}

async function setAutotyping(enabled) {
  botSettings.autotypingEnabled = enabled;
  await saveBotSettings();
  return `Autotyping is now ${enabled ? 'on' : 'off'}.`;
}

function getAutotypingStatus() {
  return botSettings.autotypingEnabled;
}

async function setAutoRecording(enabled) {
  botSettings.autoRecordingEnabled = enabled;
  await saveBotSettings();
  return `Auto Recording is now ${enabled ? 'on' : 'off'}.`;
}

function getAutoRecordingStatus() {
  return botSettings.autoRecordingEnabled;
}

async function setAutoBlockMorocco(enabled) {
  botSettings.autoBlockMoroccoEnabled = enabled;
  await saveBotSettings();
  return `𝐀𝐮𝐭𝐨 𝐁𝐥𝐨𝐜𝐤𝐢𝐧𝐠 𝐌𝐨𝐫𝐨𝐜𝐜𝐨 𝐧𝐮𝐦𝐛𝐞𝐫𝐬 𝐢𝐬 𝐧𝐨𝐰 ${enabled ? 'on' : 'off'}.`;
}

function getAutoBlockMoroccoStatus() {
  return botSettings.autoBlockMoroccoEnabled;
}

async function setAutoKickMorocco(enabled) {
  botSettings.autoKickMoroccoEnabled = enabled;
  await saveBotSettings();
  return `𝐀𝐮𝐭𝐨 𝐊𝐢𝐜𝐤𝐢𝐧𝐠 𝐌𝐨𝐫𝐨𝐜𝐜𝐨 𝐧𝐮𝐦𝐛𝐞𝐫𝐬 𝐢𝐬 𝐧𝐨𝐰 ${enabled ? 'on' : 'off'}.`;
}

function getAutoKickMoroccoStatus() {
  return botSettings.autoKickMoroccoEnabled;
}

async function setAntispam(enabled) {
  botSettings.antispamEnabled = enabled;
  await saveBotSettings();
  return `𝐀𝐧𝐭𝐢 𝐒𝐩𝐚𝐦 𝐈𝐬 𝐍𝐨𝐰 ${enabled ? '𝐎𝐧' : '𝐎𝐟𝐟'}.`;
}

function getAntispamStatus() {
  return botSettings.antispamEnabled;
}

async function setSelfMode(enabled) {
  botSettings.selfModeEnabled = enabled;
  await saveBotSettings();
  return `𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐄𝐧𝐚𝐛𝐥𝐞𝐝 𝐌𝐨𝐝𝐞 ${enabled ? '𝐒𝐞𝐥𝐟' : '𝐏𝐮𝐛𝐥𝐢𝐜'}.`;
}

function getSelfModeStatus() {
  return botSettings.selfModeEnabled;
}

async function setPublicMode(enabled) {
  botSettings.publicMode = enabled;
  await saveBotSettings();
  return `𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐄𝐧𝐚𝐛𝐥𝐞𝐝 𝐌𝐨𝐝𝐞 ${enabled ? '𝐏𝐮𝐛𝐥𝐢𝐜' : '𝐒𝐞𝐥𝐟'}.`;
}

function getPublicModeStatus() {
  return botSettings.publicMode;
}

async function markBotLinked() {
  if (!botSettings.markBotLinkedTimestamp) {
    botSettings.markBotLinkedTimestamp = Date.now();
    await saveBotSettings();
    console.log('lord voltage timestamp:', new Date(botSettings.markBotLinkedTimestamp).toLocaleString());
  } else {
    console.log('lord voltage timestamp is already set:', new Date(botSettings.markBotLinkedTimestamp).toLocaleString());
  }
}

function getUptime() {
  if (botSettings.markBotLinkedTimestamp) {
    const startTime = botSettings.markBotLinkedTimestamp;
    const currentTime = Date.now();
    const difference = currentTime - startTime;

    const seconds = Math.floor(difference / 1000) % 60;
    const minutes = Math.floor(difference / (1000 * 60)) % 60;
    const hours = Math.floor(difference / (1000 * 60 * 60)) % 24;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    let uptimeParts = [];

    if (days >= 1) {
      uptimeParts.push(`${days}𝐝`);
    }
    if (hours >= 1) {
      uptimeParts.push(`${hours}𝐡`);
    }
    // Minutes and seconds always show
    uptimeParts.push(`${minutes}𝐦`);
    uptimeParts.push(`${seconds}𝐬`);

    return uptimeParts.join(' ');
  } else {
    return 'Bot has not recorded its link time yet.';
  }
}

// NEW FUNCTIONS FOR AUTO-VIEW STATUS
async function setAutoViewStatus(enabled) {
  botSettings.autoViewStatus = enabled;
  await saveBotSettings();
  return `Auto-viewing of statuses is now ${enabled ? 'on' : 'off'}.`;
}

function getAutoViewStatus() {
  return botSettings.autoViewStatus;
}

module.exports = {
  loadBotSettings,
  saveBotSettings,
  setAutotyping,
  getAutotypingStatus,
  setAutoRecording,
  getAutoRecordingStatus,
  setAutoBlockMorocco,
  getAutoBlockMoroccoStatus,
  setAutoKickMorocco,
  getAutoKickMoroccoStatus,
  setAntispam,
  getAntispamStatus,
  setSelfMode,
  getSelfModeStatus,
  setPublicMode,
  getPublicModeStatus,
  markBotLinked,
  getUptime,
  botSettings,
  setAutoViewStatus,
  getAutoViewStatus,
};