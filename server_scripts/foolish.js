PlayerEvents.tick(event => {
    let player = event.player;
    if (!player || !player.isAlive()) return;
    let health = player.health;
    let maxHealth = player.maxHealth;
    let head = player.headArmorItem;
    let chestplate = player.chestArmorItem;
    let leggings = player.legsArmorItem;
    let boots = player.feetArmorItem;


    if ((head.id === 'foolish:stellar_armor_helmet') && (chestplate.id === 'foolish:stellar_armor_chestplate') && (leggings.id === 'foolish:stellar_armor_leggings') && (boots.id === 'foolish:stellar_armor_boots')) {


        let pd = player.persistentData;
        pd.duntick = (pd.duntick ?? 0) + 1;

        if (pd.duntick >=100){
            player.potionEffects.add('xmsm:dun', 80, 20);
            pd.duntick = 0;
        }

        player.potionEffects.add('minecraft:strength', 60, 1);
        player.potionEffects.add('minecraft:resistance', 60, 1);//穿星辰套时，给予玩家力量2和抗性2
        player.potionEffects.add('xmsm:stellar', 100, 0);//给予玩家星辰光环效果


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
    }
})