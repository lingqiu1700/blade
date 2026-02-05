

const $KeyMapping = Java.loadClass("net.minecraft.client.KeyMapping");
const $GLFWkey = Java.loadClass("org.lwjgl.glfw.GLFW");
const $KeyMappingRegistry = Java.loadClass(
  "dev.architectury.registry.client.keymappings.KeyMappingRegistry"
);
 
global.testKey = new $KeyMapping(
  "key.kubejs.test",
  $GLFWkey.GLFW_KEY_K,
  "key.keybinding.test"
);
 
ClientEvents.init(() => {
  $KeyMappingRegistry.register(global.testKey);
});