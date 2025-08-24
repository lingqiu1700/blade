ServerEvents.recipes(event => {
    event.custom(
        {
            "type":"goety:ritual",
            "ritual_type":"goety:craft",
            "activation_item":{
                "item":"iceandfire:dragonbone_sword"
            },
            "craftType":"forge",
            "soulCost":250,
            "duration":20,
            "ingredients":[
                    {"item": "iceandfire:fire_dragon_heart"},
                    {"item": "iceandfire:fire_dragon_heart"},
                    {"item": "iceandfire:fire_dragon_heart"},
                    {"item": "iceandfire:fire_dragon_heart"},
                    {"item": "iceandfire:fire_dragon_blood"},
                    {"item": "iceandfire:fire_dragon_blood"},
                    {"item": "iceandfire:fire_dragon_blood"},
                    {"item": "iceandfire:fire_dragon_blood"},
                    {"item": "iceandfire:dragonbone"},
                    {"item": "iceandfire:dragonbone"},
                    {"item": "celestial_core:fire_essence"},
                    {"item": "celestial_core:fire_essence"}
            ],
        "result":{
            "item": "slashblade:slashblade",
            "nbt": {
                "Enchantments": [ { lvl: 10, id: "minecraft:unbreaking" }, { lvl: 5, id: "minecraft:sharpness" }, { lvl: 10, id: "minecraft:smite" }],
                "bladeState": {
                    "SpecialAttackType": "legendblade:firesummonsword",
                    "TextureName": "legendblade:model/icfcompat/icfex/fire.png",
                    "SpecialEffects": [
                        "legendblade:fire",
                        "legendblade:icfbreaker"
                    ],
                    "ModelName": "legendblade:model/icfcompat/icfex/terra.obj",
                    "translationKey": "item.legendblade.blaze",
                    "killCount": 3000,
                    "RepairCounter": 100,
                    "proudSoul": 100000,
                }
            }
        }
    })
    event.custom({
            "type":"goety:ritual",
            "ritual_type":"goety:craft",
            "activation_item":{
                "item":"iceandfire:dragonbone_sword"
            },
            "craftType":"forge",
            "soulCost":250,
            "duration":20,
            "ingredients":[
                    {"item": "iceandfire:lightning_dragon_heart"},
                    {"item": "iceandfire:lightning_dragon_heart"},
                    {"item": "iceandfire:lightning_dragon_heart"},
                    {"item": "iceandfire:lightning_dragon_heart"},
                    {"item": "iceandfire:lightning_dragon_blood"},
                    {"item": "iceandfire:lightning_dragon_blood"},
                    {"item": "iceandfire:lightning_dragon_blood"},
                    {"item": "iceandfire:lightning_dragon_blood"},
                    {"item": "iceandfire:dragonbone"},
                    {"item": "iceandfire:dragonbone"},
                    {"item": "foolish:electrical_charge"},
                    {"item": "foolish:electrical_charge"}
            ],
        "result":{
            "item": "slashblade:slashblade",
            "nbt": {
                "Enchantments": [ { lvl: 10, id: "minecraft:unbreaking" }, { lvl: 5, id: "minecraft:sharpness" }, { lvl: 10, id: "minecraft:smite" } ],
                "bladeState": {
                    "SpecialAttackType": "legendblade:lightningsummonsword",
                    "TextureName": "legendblade:model/icfcompat/icfex/lightning.png",
                    "SpecialEffects": [
                        "legendblade:lightning", 
                        "legendblade:icfbreaker"
                    ],
                    "ModelName": "legendblade:model/icfcompat/icfex/terra.obj",
                    "translationKey": "item.legendblade.zerogalaxy",
                    "killCount": 3000,
                    "RepairCounter": 100,
                    "proudSoul": 100000,
                }
            }
        }
    })
    event.custom({
        "type":"goety:ritual",
        "ritual_type":"goety:craft",
        "activation_item":{
            "item":"iceandfire:dragonbone_sword"
        },
        "craftType":"forge",
        "soulCost":250,
        "duration":20,
        "ingredients":[
                {"item": "iceandfire:ice_dragon_heart"},
                {"item": "iceandfire:ice_dragon_heart"},
                {"item": "iceandfire:ice_dragon_heart"},
                {"item": "iceandfire:ice_dragon_heart"},
                {"item": "iceandfire:ice_dragon_blood"},
                {"item": "iceandfire:ice_dragon_blood"},
                {"item": "iceandfire:ice_dragon_blood"},
                {"item": "iceandfire:ice_dragon_blood"},
                {"item": "iceandfire:dragonbone"},
                {"item": "iceandfire:dragonbone"},
                {"item": "foolish:permafrost_bricks"},
                {"item": "foolish:permafrost_bricks"}
        ],
    "result":{
        "item": "slashblade:slashblade",
        "nbt": {
            "Enchantments": [ { lvl: 10, id: "minecraft:unbreaking" }, { lvl: 5, id: "minecraft:sharpness" }, { lvl: 10, id: "minecraft:smite" } ],
            "bladeState": {
                "SpecialAttackType": "legendblade:icesummonsword",
                "TextureName": "legendblade:model/icfcompat/icfex/ice.png",
                "SpecialEffects": [
                    "legendblade:ice", 
                    "legendblade:icfbreaker" 
                ],
                "ModelName": "egendblade:model/icfcompat/icfex/terra.obj",
                "translationKey": "item.legendblade.foreverice",
                "killCount": 3000,
                "RepairCounter": 100,
                "proudSoul": 100000,
            }
        }
    }
})
})