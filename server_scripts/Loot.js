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
    "minecraft:villager"
];

const mhtable = [
        'minecraft:blaze',
    'minecraft:cave_spider',
    'minecraft:creeper',
    'minecraft:drowned',
    'minecraft:elder_guardian',
    'minecraft:ender_dragon',
    'minecraft:enderman',
    'minecraft:endermite',
    'minecraft:evoker',
    'minecraft:ghast',
    'minecraft:giant',
    'minecraft:guardian',
    'minecraft:hoglin',
    'minecraft:husk',
    'minecraft:illusioner',
    'minecraft:magma_cube',
    'minecraft:phantom',
    'minecraft:piglin',
    'minecraft:piglin_brute',
    'minecraft:pillager',
    'minecraft:ravager',
    'minecraft:shulker',
    'minecraft:silverfish',
    'minecraft:skeleton',
    'minecraft:slime',
    'minecraft:spider',
    'minecraft:stray',
    'minecraft:vex',
    'minecraft:vindicator',
    'minecraft:warden',
    'minecraft:witch',
    'minecraft:wither',
    'minecraft:wither_skeleton',
    'minecraft:zoglin',
    'minecraft:zombie',
    'minecraft:zombie_villager',
    'minecraft:zombified_piglin',
    'cataclysm:netherite_monstrosity','cataclysm:ancient_remnant','cataclysm:maledictus',
    'cataclysm:the_harbinger','cataclysm:the_leviathan','cataclysm:ignis','cataclysm:ender_guardian',
    'goety:apostle','alexscaves:hullbreaker','alexscaves:luxtructosaurus','alexscaves:forsaken',
    'mowziesmobs:frostmaw','mowziesmobs:umvuthi','iceandfire:dread_lich','iceandfire:dread_thrall',
    'iceandfire:dread_ghoul','iceandfire:dread_knight','iceandfire:dread_scuttler','iceandfire:dread_beast',
    'alexsmobs:void_worm','alexsmobs:warped_mosco','cataclysm:ender_golem','cataclysm:endermaptera',
    'born_in_chaos_v1:lord_pumpkinhead','born_in_chaos_v1:lifestealer','born_in_chaos_v1:missioner',
    'born_in_chaos_v1:fallen_chaos_knight','twilightforest:giant_miner','twilightforest:armored_giant',
    'twilightforest:troll','alexscaves:magnetron','alexscaves:brainiac','minecraft:warden',
    'minecraft:elder_guardian','alexsmobs:farseer','cataclysm:ignited_berserker','cataclysm:the_prowler',
    'cataclysm:coral_golem','cataclysm:coralssus','cataclysm:amethyst_crab','cataclysm:wadjet',
    'cataclysm:kobolediator','goety:vizier','goety:wither_necromancer','goety:minister','goety:crone',
    'goety:skull_lord','goety:storm_caster','cataclysm:aptrgangr','alexscaves:luxtructosaurus',
    'alexscaves:forsaken','soulsweapons:accursed_lord_boss','soulsweapons:draugr_boss','soulsweapons:night_shade',
    'soulsweapons:returning_knight','soulsweapons:moonknight','soulsweapons:chaos_monarch','soulsweapons:night_prowler',
    'soulsweapons:day_stalker','twilightforest:naga','twilightforest:lich','twilightforest:minoshroom',
    'twilightforest:knight_phantom','twilightforest:alpha_yeti','twilightforest:hydra','twilightforest:snow_queen',
    'twilightforest:ur_ghast','irons_spellbooks:dead_king'
]



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
    mhtable.forEach(id => {
        event
            .addEntityLootModifier(id)
            .killedByPlayer()
            .randomChance(0.05)
            .addLoot("xmsm:coagulatedclot");
    });
});


LootJS.modifiers((event) => {
    // foolish:astralis 掉落
    event
        .addEntityLootModifier("foolish:astralis")
        .killedByPlayer()
        .addLoot("xmsm:bloodessence");

    // cataclysm:netherite_monstrosity 掉落
    event
        .addEntityLootModifier("cataclysm:netherite_monstrosity")
        .killedByPlayer()
        .addLoot(Item.of("minecraft:netherite_block", 3));
});


// 古老梦华掉落检测

const raiden = (item) => {
    if (!item || item.id !== 'slashblade:slashblade') {
        return false;
    }
    let bladeState = item.nbt?.bladeState;
    if (!bladeState) {
        return false;
    }
        return bladeState.SpecialAttackType === "srelic:tho" && // sa类型
           bladeState.TextureName === "srelic:model/genshine/raiden.png" && // 贴图路径
           bladeState.ModelName === "srelic:model/genshine/raiden.obj" && // 模型路径
           bladeState.translationKey === "srelic:raiden"; // 物品item名称
}

const the_wolf = (item) => {
    if (!item || item.id !== 'slashblade:slashblade') {
        return false;
    }
    let bladeState = item.nbt?.bladeState;
    if (!bladeState) {
        return false;
    }
        return bladeState.SpecialAttackType === "srelic:big_drive" && // sa类型
            bladeState.TextureName === "srelic:model/genshine/the_wolf.png" && // 贴图路径
            bladeState.ModelName === "srelic:model/genshine/the_wolf.obj" && // 模型路径
            bladeState.translationKey === "srelic:the_wolf"; // 物品item名称
}

const the_water = (item) => {
    if (!item || item.id !== 'slashblade:slashblade') {
        return false;
    }
    let bladeState = item.nbt?.bladeState;
    if (!bladeState) {
        return false;
    }
        return bladeState.SpecialAttackType === "slashblade:wave_edge" && // sa类型
           bladeState.TextureName === "srelic:model/genshine/the_water.png" && // 贴图路径
           bladeState.ModelName === "srelic:model/genshine/the_water.obj" && // 模型路径
           bladeState.translationKey === "srelic:the_water"; // 物品item名称
}

const rappa = (item) => {
    if (!item || item.id !== 'slashblade:slashblade') {
        return false;
    }
    let bladeState = item.nbt?.bladeState;
    if (!bladeState) {
        return false;
    }
        return bladeState.SpecialAttackType === "srelic:rappa" && // sa类型
        bladeState.TextureName === "srelic:model/stairail/rappa.png" && // 贴图路径
        bladeState.ModelName === "srelic:model/stairail/rappa.obj" && // 模型路径
        bladeState.translationKey === "srelic:rappa"; // 物品item名称
}

const the_fire = (item) => {
    if (!item || item.id !== 'slashblade:slashblade') {
        return false;
    }
    let bladeState = item.nbt?.bladeState;
    if (!bladeState) {
        return false;
    }
        return bladeState.SpecialAttackType === "slashblade:wave_edge" && // sa类型
           bladeState.TextureName === "srelic:model/honkai/the_fire.png" && // 贴图路径
           bladeState.ModelName === "srelic:model/honkai/the_fire.obj" && // 模型路径
           bladeState.translationKey === "srelic:the_fire"; // 物品item名称
}

const ark_fire = (item) => {
    if (!item || item.id !== 'slashblade:slashblade') {
        return false;
    }
    let bladeState = item.nbt?.bladeState;
    if (!bladeState) {
        return false;
    }
        return bladeState.SpecialAttackType === "srelic:ark_fire" && // sa类型
           bladeState.TextureName === "srelic:model/honkai/ark_fire.png" && // 贴图路径
           bladeState.ModelName === "srelic:model/honkai/ark_fire.obj" && // 模型路径
           bladeState.translationKey === "srelic:ark_fire"; // 物品item名称
}

const end_fire = (item) => {
    if (!item || item.id !== 'slashblade:slashblade') {
        return false;
    }
    let bladeState = item.nbt?.bladeState;
    if (!bladeState) {
        return false;
    }
        return bladeState.SpecialAttackType === "srelic:neo_drive" && // sa类型
           bladeState.TextureName === "srelic:model/honkai/end_fire.png" && // 贴图路径
           bladeState.ModelName === "srelic:model/honkai/end_fire.obj" && // 模型路径
           bladeState.translationKey === "srelic:end_fire"; // 物品item名称
}

const star = (item) => {
    if (!item || item.id !== 'slashblade:slashblade') {
        return false;
    }
    let bladeState = item.nbt?.bladeState;
    if (!bladeState) {
        return false;
    }
        return bladeState.SpecialAttackType === "srelic:home_run" && // sa类型
           bladeState.TextureName === "srelic:model/stairail/star.png" && // 贴图路径
           bladeState.ModelName === "srelic:model/stairail/star.obj" && // 模型路径
           bladeState.translationKey === "srelic:star"; // 物品item名称
}

const fire_knight = (item) => {
    if (!item || item.id !== 'slashblade:slashblade') {
        return false;
    }
    let bladeState = item.nbt?.bladeState;
    if (!bladeState) {
        return false;
    }
        return bladeState.SpecialAttackType === "srelic:xdrive" && // sa类型
        bladeState.TextureName === "srelic:model/stairail/fire_knight.png" && // 贴图路径
        bladeState.ModelName === "srelic:model/stairail/fire_knight.obj" && // 模型路径
        bladeState.translationKey === "srelic:fire_knight"; // 物品item名称
}

const jinyuan = (item) => {
    if (!item || item.id !== 'slashblade:slashblade') {
        return false;
    }
    let bladeState = item.nbt?.bladeState;
    if (!bladeState) {
        return false;
    }
        return bladeState.SpecialAttackType === "srelic:bigslash" && // sa类型
        bladeState.TextureName === "srelic:model/stairail/jinyuan.png" && // 贴图路径
        bladeState.ModelName === "srelic:model/stairail/jinyuan.obj" && // 模型路径
        bladeState.translationKey === "srelic:jinyuan"; // 物品item名称
}

const heita = (item) => {
    if (!item || item.id !== 'slashblade:slashblade') {
        return false;
    }
    let bladeState = item.nbt?.bladeState;
    if (!bladeState) {
        return false;
    }
        return bladeState.SpecialAttackType === "srelic:heita" && // sa类型
        bladeState.TextureName === "srelic:model/stairail/heita.png" && // 贴图路径
        bladeState.ModelName === "srelic:model/stairail/heita.obj" && // 模型路径
        bladeState.translationKey === "srelic:heita"; // 物品item名称
}

const hu = (item) => {
    if (!item || item.id !== 'slashblade:slashblade') {
        return false;
    }
    let bladeState = item.nbt?.bladeState;
    if (!bladeState) {
        return false;
    }
        return bladeState.TextureName === "legendblade:model/mrzhu/zhao.png" && // 贴图路径
        bladeState.ModelName === "legendblade:model/named/rustgodfox/model.obj" && // 模型路径
        bladeState.translationKey === "legendblade:hu"; // 物品item名称
}

const seele = (item) => {
    if (!item || item.id !== 'slashblade:slashblade') {
        return false;
    }
    let bladeState = item.nbt?.bladeState;
    if (!bladeState) {
        return false;
    }
        return bladeState.TextureName === "legendblade:model/mrzhu/seele.png" && // 贴图路径
        bladeState.ModelName === "legendblade:model/named/rustgodfox/model.obj" && // 模型路径
        bladeState.translationKey === "legendblade:seele"; // 物品item名称
}

const timotheos = (item) => {
    if (!item || item.id !== 'slashblade:slashblade') {
        return false;
    }
    let bladeState = item.nbt?.bladeState;
    if (!bladeState) {
        return false;
    }
        return bladeState.TextureName === "legendblade:model/mrzhu/timotheos.png" && // 贴图路径
        bladeState.ModelName === "legendblade:model/named/rustgodfox/model.obj" && // 模型路径
        bladeState.translationKey === "legendblade:timotheos"; // 物品item名称
}

const gulaoentity = (entity) => {
    if (!entity || !entity.fullNBT) return false;
    const nbt = entity.fullNBT;
    const championData = nbt.get('champions:champion');
    if (!championData) return false;
    const tier = championData.getInt('tier');
    return tier >= 3;
};

// champion掉落
LootJS.modifiers(event => {
    mhtable.forEach(id => {
        if (!id) return; // 防止 undefined
        event.addEntityLootModifier(id)
            .matchEntity(entity => gulaoentity(entity))
            .addLoot("xmsm:gulaomenghua")
    });
});

// champion + 米哈游刀掉落
// champion + 米哈游刀掉落（兼容旧版 LootJS）
LootJS.modifiers(event => {
    mhtable.forEach(id => {
        if (!id) return;
        event.addEntityLootModifier(id)
            .killedByPlayer() 
            .matchKiller(player => {
                const mainhand = player.mainHandItem;
                return (
                    raiden(mainhand) || the_wolf(mainhand) || the_water(mainhand) || rappa(mainhand) ||
                    the_fire(mainhand) || ark_fire(mainhand) || end_fire(mainhand) || star(mainhand) ||
                    fire_knight(mainhand) || jinyuan(mainhand) || heita(mainhand) || hu(mainhand) ||
                    seele(mainhand) || timotheos(mainhand)
                );
            })
            .matchEntity(entity => gulaoentity(entity))
            .addLoot("xmsm:gulaomenghua")
    });
});


