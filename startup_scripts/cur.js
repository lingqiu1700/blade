let $Player = Java.loadClass("net.minecraft.world.entity.player.Player")
let $SuperpositionHandler = Java.loadClass("com.aizistral.enigmaticlegacy.handlers.SuperpositionHandler")
 
//速度类饰品
StartupEvents.registry('item', event => {
    event
        .create('xmsm:speed1')
        .maxStackSize(1)
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                let entity = context.entity()
                if (entity instanceof $Player) {
                    return !$SuperpositionHandler.hasCurio(entity, item)
                }
            })
            .canUnequip((item, context) => {
                let entity = context.entity()
                if (entity instanceof $Player) {
                    return entity.isCreative()
                }
            })
            .modifyAttribute("minecraft:generic.max_health", "max_health", 5, "addition")
            .modifyAttribute("minecraft:generic.movement_speed", "movement_speed", 0.15, "addition")
            .curioTick((stack,context) => {
                let entity = context.entity()
                entity.potionEffects.add("minecraft:speed", 200, 1, false, false)
                entity.potionEffects.add("minecraft:haste", 200, 1, false, false)
            })
        )
        .tag("curios:ring")
})

StartupEvents.registry('item', event => {
    event
        .create('xmsm:speed2')
        .maxStackSize(1)
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                let entity = context.entity()
                if (entity instanceof $Player) {
                    return !$SuperpositionHandler.hasCurio(entity, item)
                }
            })
            .canUnequip((item, context) => {
                let entity = context.entity()
                if (entity instanceof $Player) {
                    return entity.isCreative()
                }
            })
            .modifyAttribute("minecraft:generic.max_health", "max_health", 20, "addition")
            .modifyAttribute("minecraft:generic.movement_speed", "movement_speed", 0.45, "addition")
            .modifyAttribute("forge:swim_speed", "swim_speed", 0.45, "addition")
            .curioTick((stack,context) => {
                let entity = context.entity()
                entity.potionEffects.add("minecraft:speed", 200, 2, false, false)
                entity.potionEffects.add("minecraft:haste", 200, 2, false, false)
            })
        )
        .tag("curios:ring")
})

StartupEvents.registry('item', event => {
    event
    .create('xmsm:speed3')
    .maxStackSize(1)
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
        .canEquip((item, context) => {
            let entity = context.entity()
            if (entity instanceof $Player) {
                return !$SuperpositionHandler.hasCurio(entity, item) && $SuperpositionHandler.isTheCursedOne(entity)
            }
        })
        .canUnequip((item, context) => {
            let entity = context.entity()
            if (entity instanceof $Player) {
                return entity.isCreative()
            }
        })
        .modifyAttribute("minecraft:generic.max_health", "max_health", 35, "addition")
        .modifyAttribute("minecraft:generic.movement_speed", "movement_speed", 0.75, "addition")
        .modifyAttribute("forge:swim_speed", "swim_speed", 0.75, "addition")
        .modifyAttribute("minecraft:generic.flying_speed", "flying_speed", 0.75, "addition")
        .curioTick((stack,context) => {
            let entity = context.entity()
            entity.potionEffects.add("minecraft:speed", 200, 3, false, false)
            entity.potionEffects.add("minecraft:haste", 200, 4, false, false)
        })
    )
    .tag("curios:ring")
})

StartupEvents.registry('item', event => {
    event
        .create('xmsm:speed0')
        .maxStackSize(1)
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                let entity = context.entity()
                if (entity instanceof $Player) {
                    return !$SuperpositionHandler.hasCurio(entity, item) && $SuperpositionHandler.isTheCursedOne(entity)
                }
            })
            .canUnequip((item, context) => {
                let entity = context.entity()
                if (entity instanceof $Player) {
                    return entity.isCreative()
                }
            })
            .modifyAttribute("minecraft:generic.max_health", "max_health", 10, "addition")
            .modifyAttribute("minecraft:generic.movement_speed", "movement_speed", 10, "addition")
            .modifyAttribute("forge:swim_speed", "swim_speed", 10, "addition")
            .modifyAttribute("minecraft:generic.flying_speed", "flying_speed", 10, "addition")
            .curioTick((stack,context) => {
                let entity = context.entity()
                entity.potionEffects.add("minecraft:speed", 200, 254, false, false)
                entity.potionEffects.add("minecraft:haste", 200, 254, false, false)
            })
        )
        .tag("curios:ring")
})

//攻击类，以下是直接增伤类饰品
StartupEvents.registry('item', event => {
    event
        .create('xmsm:strength1')
        .maxStackSize(1)
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                let entity = context.entity()
                if (entity instanceof $Player) {
                    return !$SuperpositionHandler.hasCurio(entity, item)
                }
            })
            .canUnequip((item, context) => {
                let entity = context.entity()
                if (entity instanceof $Player) {
                    return entity.isCreative()
                }
            })
            .modifyAttribute("minecraft:generic.max_health", "max_health", 15, "addition")
            .modifyAttribute("minecraft:generic.attack_damage", "attack_damage", 0.1, "multiply_total")
        )
        .tag("curios:necklace")
})

StartupEvents.registry('item', event => {
    event
        .create('xmsm:strength2')
        .maxStackSize(1)
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                let entity = context.entity()
                if (entity instanceof $Player) {
                    return !$SuperpositionHandler.hasCurio(entity, item)
                }
            })
            .canUnequip((item, context) => {
                let entity = context.entity()
                if (entity instanceof $Player) {
                    return entity.isCreative()
                }
            })
            .modifyAttribute("minecraft:generic.max_health", "max_health", 25, "addition")
            .modifyAttribute("minecraft:generic.attack_damage", "attack_damage", 0.25, "multiply_total")
        )
        .tag("curios:necklace")
})

StartupEvents.registry('item', event => {
    event
        .create('xmsm:strength3')
        .maxStackSize(1)
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                let entity = context.entity()
                if (entity instanceof $Player) {
                    return !$SuperpositionHandler.hasCurio(entity, item) && $SuperpositionHandler.isTheCursedOne(entity)
                }
            })
            .canUnequip((item, context) => {
                let entity = context.entity()
                if (entity instanceof $Player) {
                    return entity.isCreative()
                }
            })
            .modifyAttribute("minecraft:generic.max_health", "max_health", 35, "addition")
            .modifyAttribute("minecraft:generic.attack_damage", "attack_damage", 0.5, "multiply_total")
        )
        .tag("curios:necklace")
})

StartupEvents.registry('item', event => {
    event
        .create('xmsm:strength0')
        .maxStackSize(1)
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                let entity = context.entity()
                if (entity instanceof $Player) {
                    return !$SuperpositionHandler.hasCurio(entity, item) && $SuperpositionHandler.isTheCursedOne(entity)
                }
            })
            .canUnequip((item, context) => {
                let entity = context.entity()
                if (entity instanceof $Player) {
                    return entity.isCreative()
                }
            })
            .modifyAttribute("minecraft:generic.max_health", "max_health", 50, "addition")
            .modifyAttribute("minecraft:generic.attack_damage", "attack_damage", 20, "multiply_total")
        )
        .tag("curios:necklace")
})

//治疗类饰品
StartupEvents.registry('item', event => {
    event
        .create('xmsm:healing1')
        .maxStackSize(1)
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                let entity = context.entity()
                return entity instanceof $Player
            })
            .canUnequip((item, context) => {
                let entity = context.entity()
                return entity instanceof $Player && entity.isCreative()
    })
            .modifyAttribute("minecraft:generic.max_health", "max_health", 5, "addition")
            .curioTick((stack,context) => {
                let entity = context.entity()
            })
        )
        .tag("curios:charm")
})

StartupEvents.registry('item', event => {
    event
        .create('xmsm:healing2')
        .maxStackSize(1)
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                let entity = context.entity()
                return entity instanceof $Player && $SuperpositionHandler.isTheCursedOne(entity)
            })
            .canUnequip((item, context) => {
                let entity = context.entity()
                return entity instanceof $Player && entity.isCreative()
            })
            .modifyAttribute("minecraft:generic.max_health", "max_health", 10, "addition")
            .curioTick((stack,context) => {
                let entity = context.entity()
                entity.potionEffects.add("minecraft:regeneration", 200, 5, false, false)
            })
        )
        .tag("curios:charm")
})

StartupEvents.registry('item', event => {
    event
        .create('xmsm:healing0')
        .maxStackSize(1)
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                let entity = context.entity()
                return entity instanceof $Player && $SuperpositionHandler.isTheCursedOne(entity)
            })
            .canUnequip((item, context) => {
                let entity = context.entity()
                return entity instanceof $Player && entity.isCreative()
            })
            .modifyAttribute("minecraft:generic.max_health", "max_health", 10, "addition")
            .curioTick((stack,context) => {
                let entity = context.entity()
                entity.potionEffects.add("minecraft:regeneration", 200, 254, false, false)
            })
        )
        .tag("curios:charm")
})


//以下是手变长饰品
StartupEvents.registry('item', event => {
    event
        .create('xmsm:grip1')
        .maxStackSize(1)
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                let entity = context.entity()
                return entity instanceof $Player && $SuperpositionHandler.isTheCursedOne(entity)
            })
            .canUnequip((item, context) => {
                let entity = context.entity()
                return entity instanceof $Player && entity.isCreative()
            })
            .modifyAttribute("minecraft:generic.max_health", "max_health", 15, "addition")
            .modifyAttribute("forge:block_reach", "block_reach", 5, "addition")
        )
        .tag("curios:hands")
})

StartupEvents.registry('item', event => {
    event
        .create('xmsm:grip2')
        .maxStackSize(1)
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                let entity = context.entity()
                return entity instanceof $Player && $SuperpositionHandler.isTheCursedOne(entity)
            })
            .canUnequip((item, context) => {
                let entity = context.entity()
                return entity instanceof $Player && entity.isCreative()
            })
            .modifyAttribute("minecraft:generic.max_health", "max_health", 25, "addition")
            .modifyAttribute("forge:block_reach", "block_reach", 15, "addition")
        )
        .tag("curios:hands")
})

StartupEvents.registry('item', event => {
    event
        .create('xmsm:grip3')
        .maxStackSize(1)
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                let entity = context.entity()
                return entity instanceof $Player && $SuperpositionHandler.isTheCursedOne(entity)
            })
            .canUnequip((item, context) => {
                let entity = context.entity()
                return entity instanceof $Player && entity.isCreative()
            })
            .modifyAttribute("minecraft:generic.max_health", "max_health", 35, "addition")
            .modifyAttribute("forge:block_reach", "block_reach", 50, "addition")
        )
        .tag("curios:hands")
})

StartupEvents.registry('item', event => {
    event
        .create('xmsm:grip0')
        .maxStackSize(1)
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                let entity = context.entity()
                return entity instanceof $Player && $SuperpositionHandler.isTheCursedOne(entity)
            })
            .canUnequip((item, context) => {
                let entity = context.entity()
                return entity instanceof $Player && entity.isCreative()
            })
            .modifyAttribute("minecraft:generic.max_health", "max_health", 50, "addition")
            .modifyAttribute("forge:block_reach", "block_reach", 100, "addition")//无敌了100格距离
        )
        .tag("curios:hands")
})


//开闪！
StartupEvents.registry('item', event => {
    event
        .create('xmsm:shan')//二十闪避速度
        .maxStackSize(1)
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                let entity = context.entity()
                return entity instanceof $Player && $SuperpositionHandler.isTheCursedOne(entity)
            })
            .canEquip((item, context) => {
                let entity = context.entity()
                const shansound = ["xmsm:anlang1", "xmsm:anlang2", "xmsm:anlang3"]
                const randomSound = shansound[Math.floor(Math.random() * shansound.length)]
                entity.playSound(randomSound, 1, 1)
                return entity instanceof $Player && $SuperpositionHandler.isTheCursedOne(entity)
            })
            .canUnequip((item, context) => {
                let entity = context.entity()
                return entity instanceof $Player && entity.isCreative()
            })
                        .curioTick((stack,context) => {
                let entity = context.entity()
                entity.potionEffects.add("xmsm:baozou", 200, 0, false, false)
            })
        )
        .tag("curios:trinkets")
})

StartupEvents.registry('item', event => {
    event
        .create('xmsm:shan0')//有空写成100闪避
        .maxStackSize(1)
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                let entity = context.entity()
                return entity instanceof $Player && $SuperpositionHandler.isTheCursedOne(entity)
            })
            .canUnequip((item, context) => {
                let entity = context.entity()
                return entity instanceof $Player && entity.isCreative()
            })
            .modifyAttribute("minecraft:generic.max_health", "max_health", 50, "addition")
        )
        .tag("curios:hands")
})


//E7饰品
//技能饰品
//答辩
StartupEvents.registry('item', event => {
    event
        .create('xmsm:shi')
        .maxStackSize(1)
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                let entity = context.entity()
                return entity instanceof $Player && $SuperpositionHandler.isTheCursedOne(entity)
            })
            .canEquip((item, context) => {
                let entity = context.entity()
                const shisound = ["xmsm:anyisheng1", "xmsm:anyisheng2", "xmsm:anyisheng3"]
                const randomSound = shisound[Math.floor(Math.random() * shisound.length)]
                entity.playSound(randomSound, 1, 1)
                return entity instanceof $Player && $SuperpositionHandler.isTheCursedOne(entity)
            })
            .canUnequip((item, context) => {
                let entity = context.entity()
                return entity instanceof $Player && entity.isCreative()
            })
            .modifyAttribute("minecraft:generic.max_health", "max_health", 25, "addition")
        )
        .tag("curios:trinkets")
})

//为了荣耀！
StartupEvents.registry('item', event => {
    event
        .create('xmsm:guanglili')
        .maxStackSize(1)
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                let entity = context.entity()
                return entity instanceof $Player && $SuperpositionHandler.isTheCursedOne(entity)
            })
            .canEquip((item, context) => {
                let entity = context.entity()
                const guanglilisound = ["xmsm:guanglili1", "xmsm:guanglili2", "xmsm:guanglili3"]
                const randomSound = guanglilisound[Math.floor(Math.random() * guanglilisound.length)]
                entity.playSound(randomSound, 1, 1)
                return entity instanceof $Player && $SuperpositionHandler.isTheCursedOne(entity)
            })
            .canUnequip((item, context) => {
                let entity = context.entity()
                return entity instanceof $Player && entity.isCreative()
            })
                        .curioTick((stack,context) => {
                let entity = context.entity()
                entity.potionEffects.add("xmsm:poli", 200, 0, false, false)
            })
        )
        .tag("curios:trinkets")
})

//疯狂舞会
StartupEvents.registry('item', event => {
    event
        .create('xmsm:anshuang')
        .maxStackSize(1)
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                let entity = context.entity()
                return entity instanceof $Player && $SuperpositionHandler.isTheCursedOne(entity)
            })
            .canEquip((item, context) => {
                let entity = context.entity()
                const anshuangsound = ["xmsm:anshuang1", "xmsm:anshuang2", "xmsm:anshuang3"]
                const randomSound = anshuangsound[Math.floor(Math.random() * anshuangsound.length)]
                entity.playSound(randomSound, 1, 1)
                return entity instanceof $Player && $SuperpositionHandler.isTheCursedOne(entity)
            })
            .canUnequip((item, context) => {
                let entity = context.entity()
                return entity instanceof $Player && entity.isCreative()
            })
                        .curioTick((stack,context) => {
                let entity = context.entity()
                entity.potionEffects.add("xmsm:kuangqi", 200, 0, false, false)
                entity.potionEffects.add("minecraft:haste", 200, 1, false, false)
            })
        )
        .tag("curios:trinkets")
})

//强者本能
StartupEvents.registry('item', event => {
    event
        .create('xmsm:anlong')
        .maxStackSize(1)
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                let entity = context.entity()
                return entity instanceof $Player && $SuperpositionHandler.isTheCursedOne(entity)
            })
            .canUnequip((item, context) => {
                let entity = context.entity()
                return entity instanceof $Player && entity.isCreative()
            })
            .modifyAttribute("minecraft:generic.armor","armor", 8, "addition")
        )
        .tag("curios:trinkets")
    })

//龙之自尊
StartupEvents.registry('item', event => {
    event
        .create('xmsm:guangheipi')
        .maxStackSize(1)
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                let entity = context.entity()
                return entity instanceof $Player && $SuperpositionHandler.isTheCursedOne(entity)
            })
            .canEquip((item, context) => {
                let entity = context.entity()
                const guangheipisound = ["xmsm:guangheipi1", "xmsm:guangheipi2", "xmsm:guangheipi3"]
                const randomSound = guangheipisound[Math.floor(Math.random() * guangheipisound.length)]
                entity.playSound(randomSound, 1, 1)
                return entity instanceof $Player && $SuperpositionHandler.isTheCursedOne(entity)
            })
            .canUnequip((item, context) => {
                let entity = context.entity()
                return entity instanceof $Player && entity.isCreative()
            })
            .modifyAttribute("minecraft:generic.armor_toughness", "armor_toughness", 4, "addition")
                        .curioTick((stack,context) => {
                let entity = context.entity()
                entity.potionEffects.add("minecraft:resistance", 200, 1, false, false)
            })
        )
        .tag("curios:trinkets")
    })

StartupEvents.registry('item', event => {
    event
        .create('xmsm:dage')
        .maxStackSize(1)
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                let entity = context.entity()
                return entity instanceof $Player && $SuperpositionHandler.isTheCursedOne(entity)
            })
            .canUnequip((item, context) => {
                let entity = context.entity()
                return entity instanceof $Player && entity.isCreative()
            })
            .canEquip((item, context) => {
                let entity = context.entity()
                const dagesound = ["xmsm:dage1", "xmsm:dage2", "xmsm:dage3"]
                const randomSound = dagesound[Math.floor(Math.random() * dagesound.length)]
                entity.playSound(randomSound, 1, 1)
                return entity instanceof $Player && $SuperpositionHandler.isTheCursedOne(entity)
            })
            .modifyAttribute("minecraft:generic.movement_speed", "movement_speed", 0.2, "addition")
        )
        .tag("curios:trinkets")
})

//神器饰品
//高洁的誓言
StartupEvents.registry('item', event => {
    event
        .create('xmsm:glj')
        .maxStackSize(1)
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                let entity = context.entity()
                return entity instanceof $Player && $SuperpositionHandler.isTheCursedOne(entity)
            })
            .canUnequip((item, context) => {
                let entity = context.entity()
                return entity instanceof $Player && entity.isCreative()
            })
            .modifyAttribute("minecraft:generic.max_health", "max_health", 20, "addition")
        )
        .tag("curios:trinkets")
    })

//效果饰品
//不屈
StartupEvents.registry('item', event => {
    event
        .create('xmsm:buqu')
        .maxStackSize(1)
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                let entity = context.entity()
                return entity instanceof $Player && $SuperpositionHandler.isTheCursedOne(entity)
            })
            .canUnequip((item, context) => {
                let entity = context.entity()
                return entity instanceof $Player && entity.isCreative()
            })
            .modifyAttribute("minecraft:generic.armor_toughness", "armor_toughness", 8, "addition")
            .curioTick((stack,context) => {
                let entity = context.entity()
                entity.potionEffects.add("minecraft:strength", 200, 2, false, false)
            })
        )
        .tag("curios:trinkets")
})
