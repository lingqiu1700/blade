const targets = [
    "minecraft:zombie",
    "minecraft:skeleton",
    "minecraft:creeper",
    "minecraft:spider",
    "minecraft:enderman",
    "minecraft:witch",
    "minecraft:slime",
    "minecraft:ghast",
    "minecraft:blaze",
    "minecraft:guardian",
    "minecraft:elder_guardian",
    "minecraft:shulker",
    "minecraft:phantom",    
    "minecraft:warden",
    "minecraft:ravager",
    "minecraft:evoker",
    "minecraft:vindicator",
    "minecraft:pillager",
    "minecraft:villager",

];

LootJS.modifiers((event) => {
    targets.forEach(id => {
        event
            .addEntityLootModifier(id)
            .killedByPlayer()
            .randomChance(0.05)
            .addLoot("xmsm:coagulatedclot");
    });
});

LootJS.modifiers((event) => {
    targets.forEach(() => {
        event
            .addEntityLootModifier("foolish:astralis")
            .killedByPlayer()
            .addLoot("xmsm:bloodessence")
    })

    targets.forEach(() => {
        event
        .addEntityLootModifier("cataclysm:netherite_monstrosity")
        .killedByPlayer()
        .addLoot(Item.of("minecraft:netherite_block", 3));
    });
})
