module.exports = {
  name: "ready",
  async execute(client) {
    client.user.setActivity(`★D̲ꜱᴜ!!²²`, {
      type: "WATCHING",
    });
    console.log(`- Activated -`);
  },
};
