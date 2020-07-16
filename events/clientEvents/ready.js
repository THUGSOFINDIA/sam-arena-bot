module.exports = {
  name: "ready",
  async execute(client) {
    client.user.setActivity(`Sam's Arena`, {
      type: "WATCHING",
    });
    console.log(`- Activated -`);
  },
};
