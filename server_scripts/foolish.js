let tick = 0;
PlayerEvents.tick(event => {
    let player = event.player;
    if (!player || !player.isAlive()) return;
    tick++;
    if (tick % 20 !== 0) return;//每20tick执行一次
    let health = player.health;
    let maxHealth = player.maxHealth;
    let head = player.headArmorItem;
    let chestplate = player.chestArmorItem;
    let leggings = player.legsArmorItem;
    let boots = player.feetArmorItem;

    if ((head.id == 'foolish:stellar_armor_helmet') && (chestplate.id == 'foolish:stellar_armor_chestplate') && (leggings.id == 'foolish:stellar_armor_leggings') && (boots.id == 'foolish:stellar_armor_boots')) {

        player.potionEffects.add('minecraft:strength', 60, 1);
        player.potionEffects.add('minecraft:resistance', 60, 1);//穿星辰套时，给予玩家力量2和抗性2

        if ((health / maxHealth) <= 0.35) {
            player.potionEffects.add('minecraft:strength', 60, 3);
            player.potionEffects.add('minecraft:resistance', 60, 3);//穿星辰套血量低于35%时，给予玩家力量4和抗性4
            player.potionEffects.add('minecraft:regeneration', 60, 1);//给予玩家再生2
        }
        else
            if ((health / maxHealth) <= 0.7) {
                player.potionEffects.add('minecraft:strength', 60, 2);
                player.potionEffects.add('minecraft:resistance', 60, 2);//穿星辰套血量低于70%时，给予玩家力量3和抗性3
            }

        if (player.getAttributeBaseValue('fantasy_ending:evasion') !== 1) {
            player.setAttributeBaseValue('fantasy_ending:evasion', 0.2);//该闪避效果和饰品效果不叠加
        }
    }
    else {
        if (player.getAttributeBaseValue('fantasy_ending:evasion') == 0.2){
            player.setAttributeBaseValue('fantasy_ending:evasion', 0);//脱下星辰套时，移除闪避效果
        }
    }
})