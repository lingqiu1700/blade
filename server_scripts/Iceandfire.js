ServerEvents.recipes(event => {
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": { "item": "iceandfire:dragonbone_sword" },
        "craftType": "forge",
        "soulCost": 250,
        "duration": 20,
        "ingredients": [
            { "item": "iceandfire:fire_dragon_heart" }, { "item": "iceandfire:fire_dragon_heart" },
            { "item": "iceandfire:fire_dragon_heart" }, { "item": "iceandfire:fire_dragon_heart" },
            { "item": "iceandfire:fire_dragon_blood" }, { "item": "iceandfire:fire_dragon_blood" },
            { "item": "iceandfire:fire_dragon_blood" }, { "item": "iceandfire:fire_dragon_blood" },
            { "item": "iceandfire:dragonbone" }, { "item": "iceandfire:dragonbone" },
            { "item": "celestial_core:fire_essence" }, { "item": "celestial_core:fire_essence" }
        ],
        "result": {
            "item": "slashblade:slashblade",
            "nbt": {
                "Enchantments": [ 
                    { "lvl": 20, "id": "minecraft:unbreaking" }, 
                    { "lvl": 30, "id": "minecraft:sharpness" }, 
                    { "lvl": 20, "id": "minecraft:smite" },
                    { "lvl": 15, "id": "minecraft:looting" },
                    { "lvl": 20, "id": "minecraft:power" },
                    { "lvl": 10, "id": "minecraft:fire_aspect" },
                    { "lvl": 15, "id": "l2complements:sharp_blade" },
                    { "lvl": 10, "id": "l2complements:cursed_blade" },
                    { "lvl": 10, "id": "fancyenchantments:melter" },
                    { "lvl": 10, "id": "fancyenchantments:sacred_supreme_sharpness" },
                    { "lvl": 5, "id": "fancyenchantments:eater_of_souls" },
                    { "lvl": 15, "id": "fancyenchantments:advanced_sharpness" }, 
                    { "lvl": 10, "id": "celestial_enchantments:vampire_slash" }, 
                    { "lvl": 10, "id": "celestial_enchantments:fierce_slash" } 
                ],
                "bladeState": {
                    "SpecialAttackType": "legendblade:firesummonsword",
                    "TextureName": "legendblade:model/icfcompat/icfex/fire.png",
                    "SpecialEffects": [ "legendblade:fire", "legendblade:icfbreaker" ],
                    "ModelName": "legendblade:model/icfcompat/icfex/terra.obj",
                    "translationKey": "item.legendblade.blaze",
                    "killCount": 5000,
                    "RepairCounter": 200,
                    "proudSoul": 1000000
                },
                "damage": 0,
            }
        }
    })
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": { "item": "iceandfire:dragonbone_sword" },
        "craftType": "forge",
        "soulCost": 250,
        "duration": 20,
        "ingredients": [
            { "item": "iceandfire:lightning_dragon_heart" }, { "item": "iceandfire:lightning_dragon_heart" },
            { "item": "iceandfire:lightning_dragon_heart" }, { "item": "iceandfire:lightning_dragon_heart" },
            { "item": "iceandfire:lightning_dragon_blood" }, { "item": "iceandfire:lightning_dragon_blood" },
            { "item": "iceandfire:lightning_dragon_blood" }, { "item": "iceandfire:lightning_dragon_blood" },
            { "item": "iceandfire:dragonbone" }, { "item": "iceandfire:dragonbone" },
            { "item": "foolish:electrical_charge" }, { "item": "foolish:electrical_charge" }
        ],
        "result": {
            "item": "slashblade:slashblade",
            "nbt": {
                "Enchantments": [ 
                    { "lvl": 20, "id": "minecraft:unbreaking" }, 
                    { "lvl": 30, "id": "minecraft:sharpness" }, 
                    { "lvl": 20, "id": "minecraft:smite" },
                    { "lvl": 15, "id": "minecraft:looting" },
                    { "lvl": 20, "id": "minecraft:power" },
                    { "lvl": 15, "id": "l2complements:sharp_blade" },
                    { "lvl": 10, "id": "l2complements:wind_sweep" },
                    { "lvl": 5, "id": "l2complements:void_touch" },
                    { "lvl": 15, "id": "fancyenchantments:wind_blade" },
                    { "lvl": 20, "id": "fancyenchantments:dexterity" },
                    { "lvl": 15, "id": "fancyenchantments:condition_overload" },
                    { "lvl": 10, "id": "fancyenchantments:duellists_prerogative" },
                    { "lvl": 10, "id": "celestial_enchantments:fatal_blow" }
                ],
                "bladeState": {
                    "SpecialAttackType": "legendblade:lightningsummonsword",
                    "TextureName": "legendblade:model/icfcompat/icfex/lightning.png",
                    "SpecialEffects": [ "legendblade:lightning", "legendblade:icfbreaker" ],
                    "ModelName": "legendblade:model/icfcompat/icfex/terra.obj",
                    "translationKey": "item.legendblade.zerogalaxy",
                    "killCount": 5000,
                    "RepairCounter": 200,
                    "proudSoul": 1000000
                },
                "damage": 0,
            }
        }
    })

    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": { "item": "iceandfire:dragonbone_sword" },
        "craftType": "forge",
        "soulCost": 250,
        "duration": 20,
        "ingredients": [
            { "item": "iceandfire:ice_dragon_heart" }, { "item": "iceandfire:ice_dragon_heart" },
            { "item": "iceandfire:ice_dragon_heart" }, { "item": "iceandfire:ice_dragon_heart" },
            { "item": "iceandfire:ice_dragon_blood" }, { "item": "iceandfire:ice_dragon_blood" },
            { "item": "iceandfire:ice_dragon_blood" }, { "item": "iceandfire:ice_dragon_blood" },
            { "item": "iceandfire:dragonbone" }, { "item": "iceandfire:dragonbone" },
            { "item": "foolish:permafrost_bricks" }, { "item": "foolish:permafrost_bricks" }
        ],
        "result": {
            "item": "slashblade:slashblade",
            "nbt": {
                "Enchantments": [ 
                    { "lvl": 20, "id": "minecraft:unbreaking" }, 
                    { "lvl": 30, "id": "minecraft:sharpness" }, 
                    { "lvl": 20, "id": "minecraft:smite" },
                    { "lvl": 15, "id": "minecraft:looting" },
                    { "lvl": 20, "id": "minecraft:power" },
                    { "lvl": 15, "id": "l2complements:sharp_blade" },
                    { "lvl": 20, "id": "l2complements:ice_blade" },
                    { "lvl": 15, "id": "fancyenchantments:heavy_blow" },
                    { "lvl": 10, "id": "fancyenchantments:dominion" },
                    { "lvl": 15, "id": "celestial_enchantments:death_blade" },
                    { "lvl": 10, "id": "celestial_enchantments:suppression_blade" },
                    { "lvl": 10, "id": "celestial_enchantments:life_shield" },
                    { "lvl": 10, "id": "celestial_enchantments:unstable_blade" }
                ],
                "bladeState": {
                    "SpecialAttackType": "legendblade:icesummonsword",
                    "TextureName": "legendblade:model/icfcompat/icfex/ice.png",
                    "SpecialEffects": [ "legendblade:ice", "legendblade:icfbreaker" ],
                    "ModelName": "legendblade:model/icfcompat/icfex/terra.obj",
                    "translationKey": "item.legendblade.foreverice",
                    "killCount": 5000,
                    "RepairCounter": 200,
                    "proudSoul": 1000000
                },
                "damage": 0,
            }
        }
    })
})