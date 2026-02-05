ClientEvents.tick((event) => {
  const key = global.testKey; // 访问global
  const { player } = event;
  if (key.consumeClick()) {
    player.sendData("global.testKey.consumeClick");
  }
});