const RPC = require('discord-rpc');
const client = new RPC.Client({
    transport: 'ipc'
});

const activity = {
    assets: {
        large_image: "minecraft_logo",
        large_text: "tlauncher",
    },
    timestamps: { start: Date.now() },
    instance: true
}

client.on('ready', () => {
    client.request("SET_ACTIVITY", { pid: process.pid, activity: activity });
    console.log("The Tlauncher-RPC is running :)");

});

client.login({ clientId: "872842566842855455" });