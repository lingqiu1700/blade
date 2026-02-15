ServerEvents.recipes(event => {
    // 炼狱刀血腥
    event.custom({
        "type": "bloodmagic:altar_blade",  // 配方类型是血魔法的祭坛
        "input": {
            "type": "slashblade:blade",  // 输入物品类型是 Slashblade 的刀
            "item": "slashblade:slashblade",  // 输入物品是基础刀
            "request": {  // 输入刀要求的条件
                "kill": 2500,  // 杀敌数
                "name": "legendblade:nihilexfake",  // 刀的名字
                "proud_soul": 15000,  // 魂量
                "refine": 10  // 精炼
            }
        },
        "output": {
            "item": "slashblade:slashblade",  // 输出仍然是 Slashblade 的刀
            "category": "equipment",
            "nbt": {
                Enchantments: [
                    { lvl: 30, id: "minecraft:power" },
                    { lvl: 30, id: "minecraft:sharpness" },
                    { lvl: 20, id: "minecraft:smite" },
                    { lvl: 15, id: "minecraft:bane_of_arthropods" },
                    { lvl: 15, id: "minecraft:unbreaking" },
                    { lvl: 8, id: "minecraft:fire_aspect" },
                    { lvl: 15, id: "minecraft:looting" },
                    { lvl: 15, id: "l2complements:sharp_blade" },
                    { lvl: 8, id: "celestial_enchantments:vampire_slash" },
                    { lvl: 5, id: "celestial_enchantments:fatal_blow" },
                    { lvl: 15, id: "l2complements:cursed_blade" },
                    { lvl: 5, id: "l2complements:void_touch" },
                    { lvl: 5, id: "fancyenchantments:wind_blade" },
                    { lvl: 8, id: "fancyenchantments:duellists_prerogative" },
                    { lvl: 5, id: "fancyenchantments:dexterity" },
                    { lvl: 10, id: "fancyenchantments:sacred_supreme_sharpness" },
                    { lvl: 5, id: "minecraft:mending" },
                    { lvl: 8, id: "minecraft:sweeping_edge" },
                    { lvl: 5, id: "celestial_enchantments:suppression_blade" },
                    { lvl: 5, id: "l2complements:eternal" },
                    { lvl: 5, id: "l2complements:wind_sweep" },
                    { lvl: 3, id: "fancyenchantments:condition_overload" },
                    { lvl: 3, id: "celestial_enchantments:unstable_blade" },
                    { lvl: 3, id: "celestial_enchantments:magic_blade" },
                    { lvl: 3, id: "celestial_enchantments:cluster_awareness" },
                    { lvl: 5, id: "fancyenchantments:fearless_challenger" },
                    { lvl: 5, id: "fancyenchantments:spreading_spores" },
                    { lvl: 5, id: "l2complements:ice_blade" }
                ]
            }
        },
        "blade": "legendblade:bloodkatana", // 炼狱刀血腥
        "upgradeLevel": 3,  // 需要1级祭坛
        "altarSyphon": 26000,  // 总消耗生命精华量（LP）
        "consumptionRate": 10,  // 每tick消耗速率
        "drainRate": 5000  // 祭坛每tick流速
    })

    //炼狱刀死念
    event.custom({
        "type": "bloodmagic:altar_blade",  // 配方类型是血魔法的祭坛
        "input":{
            "type": "slashblade:blade",  // 输入物品类型是 Slashblade 的刀
            "item": "slashblade:slashblade",  // 输入物品是基础刀
            "request": {
                "kill" : 2500,  // 杀敌数
                "name": "legendblade:nihilexfake",  // 刀的名字
                "proud_soul": 20000,  // 魂量
                "refine": 40,  // 精炼
            }
        },
        "output": {
            "item": "slashblade:slashblade",  // 输出仍然是 Slashblade 的刀
            "category": "equipment",
        },
        "blade": "slashblade_addon:nihilbx", //炼狱刀死念
        "upgradeLevel": 2,  // 需要1级祭坛
        "altarSyphon": 40000,  // 总消耗生命精华量（LP）
        "consumptionRate": 10,  // 每tick消耗速率
        "drainRate": 2000  // 祭坛每tick流速
    })

    // 炼狱刀真红
    event.custom({
        "type": "bloodmagic:altar_blade",  // 配方类型是血魔法的祭坛
        "input": {
            "type": "slashblade:blade",  // 输入物品类型是 Slashblade 的刀
            "item": "slashblade:slashblade",  // 输入物品是基础刀
            "request": {  // 输入刀要求的条件
                "kill": 2000,  // 杀敌数
                "name": "legendblade:nihilexfake",  // 刀的名字
                "proud_soul": 25000,  // 魂量
                "refine": 15  // 精炼
            }
        },
        "output": {
            "item": "slashblade:slashblade",  // 输出仍然是 Slashblade 的刀
            "category": "equipment",
            "nbt": {
                Enchantments: [
                    { lvl: 30, id: "minecraft:power" },
                    { lvl: 35, id: "minecraft:sharpness" },
                    { lvl: 20, id: "minecraft:smite" },
                    { lvl: 15, id: "minecraft:bane_of_arthropods" },
                    { lvl: 15, id: "minecraft:unbreaking" },
                    { lvl: 8, id: "minecraft:fire_aspect" },
                    { lvl: 15, id: "minecraft:looting" },
                    { lvl: 15, id: "minecraft:mending" },
                    { lvl: 15, id: "minecraft:sweeping_edge" },
                    { lvl: 20, id: "l2complements:sharp_blade" },
                    { lvl: 20, id: "l2complements:cursed_blade" },
                    { lvl: 15, id: "celestial_enchantments:death_blade" },
                    { lvl: 15, id: "celestial_enchantments:fierce_slash" },
                    { lvl: 10, id: "celestial_enchantments:vampire_slash" },
                    { lvl: 10, id: "celestial_enchantments:life_shield" },
                    { lvl: 10, id: "celestial_enchantments:unstable_blade" },
                    { lvl: 10, id: "fancyenchantments:advanced_sharpness" },
                    { lvl: 10, id: "fancyenchantments:heavy_blow" },
                    { lvl: 10, id: "fancyenchantments:dominion" },
                    { lvl: 10, id: "fancyenchantments:wind_blade" },
                    { lvl: 10, id: "fancyenchantments:duellists_prerogative" },
                    { lvl: 10, id: "fancyenchantments:sacred_supreme_sharpness" }
                ]
            }
        },
        "blade": "legendblade:shinku", // 炼狱刀真红
        "upgradeLevel": 3,  // 需要1级祭坛
        "altarSyphon": 30000,  // 总消耗生命精华量（LP）
        "consumptionRate": 10,  // 每tick消耗速率
        "drainRate": 2000  // 祭坛每tick流速
    })

    // 炼狱刀死念终
    event.custom({
        "type": "bloodmagic:altar_blade",  // 配方类型是血魔法的祭坛
        "input": {
            "type": "slashblade:blade",  // 输入物品类型是 Slashblade 的刀
            "item": "slashblade:slashblade",  // 输入物品是基础刀
            "request": {  // 输入刀要求的条件
                "kill": 18000,  // 杀敌数
                "name": "slashblade_addon:nihilbx", // 刀的名字
                "proud_soul": "400000",  // 魂量
                "refine": 150 // 精炼
            }
        },
        "output": {
            "item": "slashblade:slashblade",  // 输出仍然是 Slashblade 的刀
            "category": "equipment",
            "nbt": {  // 自定义输出刀的NBT数据
            Enchantments: [
    { "lvl": 30, "id": "minecraft:power" },
    { "lvl": 35, "id": "minecraft:sharpness" },
    { "lvl": 20, "id": "minecraft:smite" },
    { "lvl": 15, "id": "minecraft:bane_of_arthropods" },
    { "lvl": 15, "id": "minecraft:unbreaking" },
    { "lvl": 8,  "id": "minecraft:fire_aspect" },
    { "lvl": 15, "id": "minecraft:looting" },
    { "lvl": 15, "id": "minecraft:mending" },
    { "lvl": 15, "id": "minecraft:sweeping_edge" },

    { "lvl": 20, "id": "l2complements:sharp_blade" },
    { "lvl": 20, "id": "l2complements:cursed_blade" },
    { "lvl": 5,  "id": "l2complements:void_touch" },
    { "lvl": 5,  "id": "l2complements:eternal" },
    { "lvl": 5,  "id": "l2complements:wind_sweep" },

    { "lvl": 15, "id": "celestial_enchantments:death_blade" },
    { "lvl": 15, "id": "celestial_enchantments:fierce_slash" },
    { "lvl": 10, "id": "celestial_enchantments:vampire_slash" },
    { "lvl": 10, "id": "celestial_enchantments:life_shield" },
    { "lvl": 10, "id": "celestial_enchantments:unstable_blade" },
    { "lvl": 5,  "id": "celestial_enchantments:fatal_blow" },
    { "lvl": 5,  "id": "celestial_enchantments:suppression_blade" },
    { "lvl": 3,  "id": "celestial_enchantments:magic_blade" },
    { "lvl": 3,  "id": "celestial_enchantments:cluster_awareness" },

    { "lvl": 10, "id": "fancyenchantments:advanced_sharpness" },
    { "lvl": 10, "id": "fancyenchantments:heavy_blow" },
    { "lvl": 10, "id": "fancyenchantments:dominion" },
    { "lvl": 10, "id": "fancyenchantments:wind_blade" },
    { "lvl": 10, "id": "fancyenchantments:duellists_prerogative" },
    { "lvl": 10, "id": "fancyenchantments:sacred_supreme_sharpness" },
    { "lvl": 15,  "id": "fancyenchantments:dexterity" },
    { "lvl": 10,  "id": "fancyenchantments:condition_overload" },
    { "lvl": 15,  "id": "fancyenchantments:fearless_challenger" },
    { "lvl": 15,  "id": "fancyenchantments:spreading_spores" },

    { "lvl": 15,  "id": "l2complements:ice_blade" }
]

            }
        },
        "blade": "legendblade:nihilbxex", // 炼狱刀死念终
        "upgradeLevel": 4, // 需要5级祭坛
        "altarSyphon": 240000,  // 总消耗生命精华量（LP）
        "consumptionRate": 50,  // 每tick消耗速率
        "drainRate": 5000  // 祭坛每tick流速
    })
})