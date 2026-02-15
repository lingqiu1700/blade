const aeon = (item) => {
    if (!item || item.id != 'slashblade:slashblade') return false;
    let bladeState = item.nbt?.bladeState;
    if (!bladeState) return false;
    return bladeState.SpecialAttackType === "slashblade:void_slash" &&
    bladeState.TextureName === "slashblade:model/named/custom/aeon.png" &&
    bladeState.ModelName === "slashblade:model/named/sange/aeon.obj" &&
    bladeState.translationKey === "item.slashblade.aeon";
}

const rouse = (item) => {
    if (!item || item.id != 'slashblade:slashblade') return false;
    let bladeState = item.nbt?.bladeState;
    if (!bladeState) return false;
    if (bladeState.translationKey === "item.slashblade.nier" || bladeState.translationKey === "item.slashblade.aeon" || bladeState.translationKey === "item.slashblade.deligun" || bladeState.translationKey === "item.slashblade.chronos_blade" || bladeState.translationKey === "item.slashblade.chronosn" || bladeState.translationKey === "item.prinegorerouse.erebus_blade" || bladeState.translationKey === "item.prinegorerouse.protogenoi_blade"){
        return true;
    };
        return false;
}


ServerEvents.recipes(event => {
    event.remove({mod : 'prinegorerouse'});
})

let invulnerable = {};
let Click = {};

NetworkEvents.dataReceived("global.testKey.consumeClick", event => {
    const player = event.player
    if (!player) return

    let heldItem = player.mainHandItem
    if (heldItem.isEmpty() || !aeon(heldItem)) return

    // Toggle：开 <-> 关
    Click[player.id] = !Click[player.id]

    player.tell(
        Click[player.id]
            ? Text.green("杀戮光环：开启")
            : Text.red("杀戮光环：关闭")
    )
})


PlayerEvents.tick(event => {
    const player = event.player;
    let heldItem = player.mainHandItem; //获取主手物品（拔刀剑只在主手时生效此效果）
    let playerinvulnerable = invulnerable[player.id] || false;

    if (!heldItem) {
        return;
    }

    if (rouse(heldItem)){
        player.potionEffects.add("xmsm:rouse", 220,0,false,false);
    }

    if (aeon(heldItem)){
        player.potionEffects.add("xmsm:mianyi", 220, 0, false, false);
        player.potionEffects.add("minecraft:night_vision", 220, 0, false, false);
        player.potionEffects.add("minecraft:fire_resistance", 220, 0, false, false);
        player.potionEffects.add("minecraft:saturation", 220, 0, false, false);
    }

    if (aeon(heldItem) && !playerinvulnerable) {
        player.runCommand(`fantasy_ending player setInvulnerable ${player.username} true`);
        player.modifyAttribute("minecraft:generic.max_health", "max_health", 2048000, "addition");
        player.modifyAttribute("minecraft:generic.attack_damage", "attack_damage", 1024000, "addition");
        player.modifyAttribute("l2damagetracker:damage_absorption", "damage_absorption", 20.0, "multiply_total");
        player.modifyAttribute("l2damagetracker:damage_reduction", "damage_reduction", -1.0, "multiply_total");
        player.modifyAttribute("minecraft:generic.attack_speed", "attack_speed", 1.0, "addition");
        player.modifyAttribute("minecraft:generic.movement_speed", "movement_speed", 0.5, "addition");
        player.modifyAttribute("fantasy_ending:evasion", "evasion", 1.0, "addition");
        player.modifyAttribute("fantasy_ending:magic_damage_resistance", "magic_damage_resistance", 1.0, "addition");
        player.modifyAttribute("fantasy_ending:fantasy_ending_damage_resistance", "fantasy_ending_damage_resistance", 1.0, "addition");
        player.modifyAttribute("fantasy_ending:outofworld_damage_resistance", "outofworld_damage_resistance", 1.0, "addition");
        player.modifyAttribute("fantasy_ending:dream_shadow_damage_resistance", "dream_shadow_damage_resistance", 1.0, "addition");
        player.modifyAttribute("fantasy_ending:fantasy_magic_resist", "fantasy_magic_resist", 1.0, "addition");
        player.abilities.mayfly = true;
        player.abilities.flying = true;
        player.onUpdateAbilities();
        invulnerable[player.id] = true;
    }
})

PlayerEvents.tick(event => {
    const player = event.player;
    let heldItem = player.mainHandItem;
    const pd = player.persistentData;
    let aeontick = pd.aeontick;
    let click = Click[player.id] === true;


        if (!click){
            return;
        }

        if (!heldItem || !aeon(heldItem)) {
            pd.aeontick = 0;
            Click[player.id] = false;
        return;
        }
        pd.aeontick = (pd.aeontick ?? 0) + 1;

        if (aeontick % 10 != 0) return;
        let entityList = event.level.getEntitiesWithin(AABB.of(
            player.x - 10, player.y - 5, player.z - 10,
            player.x + 10, player.y + 5, player.z + 10
        ))
        if (entityList != null) {
            entityList.forEach(entity => {
                if (entity.isLiving() && entity.id != player.id && !entity.isPlayer()) {
                    let uuid = entity.getUuid();
                    if (aeontick >= 400) {
                        player.runCommandSilent(`fantasy_ending entity forceKill ${uuid}`);
                        player.runCommandSilent(`fantasy_ending entity forceSetHealth ${uuid} 0.0`);
                        player.runCommandSilent(`fantasy_ending entity softGetHealthKill ${uuid}`);
                        player.persistentData.aeontick = 0;
                    }
                    if(aeontick <= 380){
                    player.runCommandSilent(`fantasy_ending entity forceSetHealth ${uuid} 1`);
                    }
                }
            })
        }
})


PlayerEvents.respawned(event => {
    const player = event.player;
    invulnerable[player.id] = false;
})

EntityEvents.hurt(event => {
    const entity = event.entity;
    const damage = event.damage;
    const heldItem = entity.mainHandItem;

    if (aeon(heldItem) && damage <= 1280000) {
        event.cancel();
    }
})

EntityEvents.death(event => {
    const entity = event.entity;
    const heldItem = entity.mainHandItem;
    const max_health = entity.maxHealth;
    const player = event.player;
    if (aeon(heldItem)) {
        event.cancel();
        player.tell(Text.lightPurple("你的存在已经超越了生死，死亡对你来说毫无意义。"));
        entity.health = max_health;
    }
})

