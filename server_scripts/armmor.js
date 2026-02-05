PlayerEvents.tick((event) => {
    const player = event.player;
    let health = player.health;
    let maxHealth = player.maxHealth;
    let head = player.headArmorItem;
    let chestplate = player.chestArmorItem;
    let leggings = player.legsArmorItem;
    let boots = player.feetArmorItem;

    if (!player || !player.isAlive()) return;

    if ((head.id == 'minecraft:diamond_helmet') && (chestplate.id == 'minecraft:diamond_chestplate') && (leggings.id == 'minecraft:diamond_leggings') && (boots.id == 'minecraft:diamond_boots')) {
        player.potionEffects.add('minecraft:strength', 60, 0);
        player.potionEffects.add('minecraft:resistance', 60, 0);//穿戴钻石套时，给予玩家力量1和抗性1 
        player.potionEffects.add('xmsm:diamond',60,0);//给予玩家钻石的加护效果

        if ((health / maxHealth) <= 0.3) {
            player.potionEffects.add('minecraft:resistance',60, 1); //穿戴钻石套血量低于30%时，给予玩家抗性2
        }
    }

    if ((head.id == 'twilightforest:ironwood_helmet') && (chestplate.id == 'twilightforest:ironwood_chestplate') && (leggings.id == 'twilightforest:ironwood_leggings') && (boots.id == 'twilightforest:ironwood_boots')) {
        
        let ironwoodtick = 0;
        ironwoodtick++;

        if (ironwoodtick >=100) { //每100tick执行一次
            player.potionEffects.add('minecraft:regeneration', 60, 0); //穿戴铁木套时，给予玩家再生1
            ironwoodtick = 0;
        }

        let ironwoodlevel = (maxHealth * 0.1)/4 + 1;

        if ((health / maxHealth) <= 0.4) {
            player.potionEffects.add('minecraft:absorption', 2000, ironwoodlevel);
        }

        player.potionEffects.add('minecraft:strength', 60, 0);
        player.potionEffects.add('xmsm:ironwood',60,0);//给予玩家铁木的庇护效果
    }

    if ((head.id == 'twilightforest:fiery_helmet') && (chestplate.id == 'twilightforest:fiery_chestplate') && (leggings.id == 'twilightforest:fiery_leggings') && (boots.id == 'twilightforest:fiery_boots')) {
        player.potionEffects.add('minecraft:fire_resistance', 60, 0);
        player.potionEffects.add('minecraft:strength', 60, 1);//穿戴炽炎套时，给予玩家火焰抗性和力量2 
        player.potionEffects.add('xmsm:fiery',60,0);//给予玩家炽热的加护效果
    }

    if ((head.id == 'celestial_core:sakura_helmet') && (chestplate.id == 'celestial_core:sakura_chestplate') && (leggings.id == 'celestial_core:sakura_leggings') && (boots.id == 'celestial_core:sakura_boots')) {
        player.potionEffects.add('minecraft:regeneration', 60, 0);
        player.potionEffects.add('minecraft:speed', 60, 0);
        player.potionEffects.add('xmsm:sakura',60,0);//给予玩家樱花的祝福效果
    }

    if ((head.id == 'lkartifacts:knight_helmet') && (chestplate.id == 'lkartifacts:knight_chestplate') && (leggings.id == 'lkartifacts:knight_leggings') && (boots.id == 'lkartifacts:knight_boots')) {
        player.potionEffects.add('minecraft:regeneration', 60, 1);
        player.potionEffects.add('minecraft:resistance', 60, 1);//穿戴骑士套时，给予玩家再生2和抗性2

        if ((health / maxHealth) <= 0.5) {
            player.potionEffects.add('minecraft:resistance',60, 2); //穿戴骑士套血量低于50%时，给予玩家抗性3
            player.potionEffects.add('xmsm:knight',60,0);//给予玩家骑士的守护效果
        }
    }

    if ((head.id == 'minecraft:netherite_helmet') && (chestplate.id == 'minecraft:netherite_chestplate') && (leggings.id == 'minecraft:netherite_leggings') && (boots.id == 'minecraft:netherite_boots')) {
        player.potionEffects.add('minecraft:strength', 60, 2);
        player.potionEffects.add('minecraft:resistance',60,1);//穿戴下界合金套时，给予玩家力量3和抗性2 
        player.potionEffects.add('xmsm:netherite',60,0);//给予玩家下界合金的庇护效果
        player.potionEffects.add('minecraft:fire_resistance', 60, 0);

        if ((health / maxHealth) <= 0.4) {
            player.potionEffects.add('minecraft:regeneration',60, 1); //穿戴下界合金套血量低于40%时，给予玩家再生3
        }
    }

    let fly = false;

    if ((head.id == 'enigmaticlegacy:etherium_helmet') && (chestplate.id == 'enigmaticlegacy:etherium_chestplate') && (leggings.id == 'enigmaticlegacy:etherium_leggings') && (boots.id == 'enigmaticlegacy:etherium_boots')) {
        player.potionEffects.add('minecraft:strength', 60, 2);
        player.potionEffects.add('minecraft:resistance',60,2);//穿戴以太套时，给予玩家力量3和抗性3
        player.potionEffects.add('xmsm:etherium',60,0);//给予玩家以太的庇护效果
        player.potionEffects.add('minecraft:regeneration', 60, 0);

        
        fly = true;
        player.abilities.allowFlying = true;
        player.abilities.flying = true;
        player.sendAbilities();
    }
    else {
        if (fly){
            player.abilities.allowFlying = false;
            player.abilities.flying = false;
            player.sendAbilities();
            fly = false;
        }
    }

    if ((head.id == 'l2complements:eternium_helmet') && (chestplate.id == 'l2complements:eternium_chestplate') && (leggings.id == 'l2complements:eternium_leggings') && (boots.id == 'l2complements:eternium_boots')) {
        player.potionEffects.add('minecraft:strength', 60, 2);
        player.potionEffects.add('minecraft:resistance',60,2);
        player.potionEffects.add('xmsm:ether',60,0)

        if ((health / maxHealth) <= 0.3) {
            player.potionEffects.add('minecraft:strength',60, 3); //穿戴永恒套血量低于30%时，给予玩家力量4
            player.potionEffects.add('minecraft:resistance',60, 3); //穿戴永恒套血量低于30%时，给予玩家抗性4
        }
    }

    if ((head.id == 'lkartifacts:slayer_helmet') && (chestplate.id == 'lkartifacts:slayer_chestplate') && (leggings.id == 'lkartifacts:slayer_leggings') && (boots.id == 'lkartifacts:slayer_boots')) {
        player.potionEffects.add('minecraft:strength', 60, 3);
        player.potionEffects.add('minecraft:speed',60 ,1);
    }

    if((head.id == 'gobber2:gobber2_helmet_dragon') && (chestplate.id == 'gobber2:gobber2_chestplate_dragon') && (leggings.id == 'gobber2:gobber2_leggings_dragon') && (boots.id == 'gobber2:gobber2_boots_dragon')) {

        let pd = player.persistentData;

        pd.dragontick = (pd.dragontick ?? 0) + 1;

        if (pd.dragontick >=100){
            player.potionEffects.add('xmsm:dun', 101 ,35);
            pd.dragontick = 0;
        }

        player.potionEffects.add('minecraft:strength', 60, 3);
        player.potionEffects.add('minecraft:resistance',60,3);
        player.potionEffects.add('minecraft:luck',60,4);

        player.potionEffects.add('xmsm:dragon',60,0);//给予玩家龙的庇护效果
    }

    if ((head.id == 'l2complements:sculkium_helmet') && (chestplate.id == 'l2complements:sculkium_chestplate') && (leggings.id == 'l2complements:sculkium_leggings') && (boots.id == 'l2complements:sculkium_boots')) {
        player.potionEffects.add('minecraft:strength', 60, 2);
        player.potionEffects.add('minecraft:resistance',60,2);
        player.potionEffects.add('minecraft:water_breathing',60 , 0);
        player.potionEffects.add('minecraft:night_vision',60 , 0);
        player.potionEffects.add('minecraft:fire_resistance',60 , 0);
        player.potionEffects.add('minecraft:conduit_power',60 , 0);
        player.potionEffects.add('minecraft:invisibility',60 , 0);
        player.potionEffects.add('minecraft:saturation',60 , 0);
        player.potionEffects.add('xmsm:sculkium',60,0);//给予玩家幽匿的庇护效果


        let pd = player.persistentData;

        pd.sculktick = (pd.sculktick ?? 0) + 1;
        pd.sculktick++;
        if (pd.sculktick >=100){
            player.potionEffects.add('xmsm:dun', 101 ,40);
            pd.sculktick = 0;
        }
    }

    if ((head.id == 'lkartifacts:lava_helmet') && (chestplate.id == 'lkartifacts:lava_chestplate') && (leggings.id == 'lkartifacts:lava_leggings') && (boots.id == 'lkartifacts:lava_boots')) {
        player.potionEffects.add('minecraft:fire_resistance', 60, 0);
        player.potionEffects.add('minecraft:strength', 60, 2);//穿戴熔岩套时，给予玩家火焰抗性和力量3 
        player.potionEffects.add('xmsm:lava',60,0);//给予玩家熔岩的加护效果
        player.potionEffects.add('minecraft:regeneration', 60, 1);

        if ((health / maxHealth) <= 0.4) {
            player.potionEffects.add('minecraft:resistance',60, 2); //穿戴熔岩套血量低于40%时，给予玩家抗性3
        }
    }

    if ((head.id == 'callfromthedepth_:soularmor_helmet') && (chestplate.id == 'callfromthedepth_:soularmor_chestplate') && (leggings.id == 'callfromthedepth_:soularmor_leggings') && (boots.id == 'callfromthedepth_:soularmor_boots')) {
        player.potionEffects.add('minecraft:strength', 60, 2);
        player.potionEffects.add('minecraft:resistance',60,2);
        player.potionEffects.add('xmsm:soularmor',60,0);//给予玩家灵魂盔甲的庇护效果
        player.potionEffects.add('minecraft:regeneration', 60, 1);
        player.potionEffects.add('minecraft:night_vision',60 , 0);

        if ((health / maxHealth) <= 0.4) {
            player.potionEffects.add('minecraft:strength',60, 3); //穿戴灵魂盔甲套血量低于40%时，给予玩家力量4
            player.potionEffects.add('minecraft:resistance',60, 3); //穿戴灵魂盔甲套血量低于40%时，给予玩家抗性4
        }
    }

    if ((head.id == 'iceandfire:dragonsteel_fire_helmet') && (chestplate.id == 'iceandfire:dragonsteel_fire_chestplate') && (leggings.id == 'iceandfire:dragonsteel_fire_leggings') && (boots.id == 'iceandfire:dragonsteel_fire_boots')) {
        player.potionEffects.add('minecraft:fire_resistance', 60, 0);
        player.potionEffects.add('minecraft:strength', 60, 3);
        player.potionEffects.add('minecraft:resistance',60,3);
        player.potionEffects.add('minecraft:speed',60,2);//穿戴火龙钢套时，给予玩家火焰抗性，力量4，抗性4和速度3
        player.potionEffects.add('xmsm:dragonsteel_fire',60,0);//给予玩家火龙钢的庇护效果
    }

    if ((head.id == 'iceandfire:dragonsteel_ice_helmet') && (chestplate.id == 'iceandfire:dragonsteel_ice_chestplate') && (leggings.id == 'iceandfire:dragonsteel_ice_leggings') && (boots.id == 'iceandfire:dragonsteel_ice_boots')) {
        player.potionEffects.add('minecraft:slowness', 60, 0);
        player.potionEffects.add('minecraft:strength', 60, 3);
        player.potionEffects.add('minecraft:resistance',60,3);
        player.potionEffects.add('minecraft:speed',60,2);
        player.potionEffects.add('xmsm:dragonsteel_ice',60,0);//给予玩家冰龙钢的庇护效果


        let pd = player.persistentData;
        pd.icetick = (pd.icetick ?? 0) + 1;
        pd.icetick++;
        if (pd.icetick >=100){
            player.potionEffects.add('xmsm:dun', 101 ,20);
            pd.icetick = 0;
        }
    }

    if ((head.id == 'lkartifacts:dragon_helmet') && (chestplate.id == 'lkartifacts:dragon_chestplate') && (leggings.id == 'lkartifacts:dragon_leggings') && (boots.id == 'lkartifacts:dragon_boots')) {
        player.potionEffects.add('minecraft:strength', 60, 4);
        player.potionEffects.add('minecraft:resistance',60,4);
        player.potionEffects.add('minecraft:fire_resistance',60,0);
        player.potionEffects.add('minecraft:speed',60,3);
        player.potionEffects.add('xmsm:dragon',60,0);//给予玩家龙鳞的庇护效果
    }

    if ((head.id == 'lkartifacts:dragon_helmet') && (chestplate.id == 'lkartifacts:dragon_elytra_chestplate') && (leggings.id == 'lkartifacts:dragon_leggings') && (boots.id == 'lkartifacts:dragon_boots')) {
        player.potionEffects.add('minecraft:strength', 60, 4);
        player.potionEffects.add('minecraft:resistance',60,4);
        player.potionEffects.add('minecraft:fire_resistance',60,0);
        player.potionEffects.add('minecraft:speed',60,3);
        player.potionEffects.add('xmsm:dragon',60,0);//给予玩家龙鳞的庇护效果
    }

    if ((head.id == 'celestisynth:lunar_stone_helmet') && (chestplate.id == 'celestisynth:lunar_stone_chestplate') && (leggings.id == 'celestisynth:lunar_stone_leggings') && (boots.id == 'celestisynth:lunar_stone_boots')) {
        player.potionEffects.add('minecraft:strength', 60, 0);
        player.potionEffects.add('minecraft:speed',60 ,1);
        player.potionEffects.add('xmsm:lunar_stone',60,0);//给予玩家月石的祝福效果
    }
});


PlayerEvents.tick((event) => {
    const player = event.player;
    let health = player.health;
    let maxHealth = player.maxHealth;
    let head = player.headArmorItem;
    let chestplate = player.chestArmorItem;
    let leggings = player.legsArmorItem;
    let boots = player.feetArmorItem;
    if (!player || !player.isAlive()) return;

    if ((head.id == 'iceandfire:armor_red_helmet') && (chestplate.id == 'iceandfire:armor_red_chestplate') && (leggings.id == 'iceandfire:armor_red_leggings') && (boots.id == 'iceandfire:armor_red_boots')) {
        player.potionEffects.add('minecraft:regeneration', 60, 3); //穿戴红龙套时，给予玩家再生4
        player.potionEffects.add('minecraft:dragonheart', 60, 0); //给予玩家龙心效果
    }

    if ((head.id == 'iceandfire:armor_bronze_helmet') && (chestplate.id == 'iceandfire:armor_bronze_chestplate') && (leggings.id == 'iceandfire:armor_bronze_leggings') && (boots.id == 'iceandfire:armor_bronze_boots')) {
        player.potionEffects.add('minecraft:regeneration', 60 , 3); //穿戴青铜龙套时，给予玩家再生4
        player.potionEffects.add('minecraft:dragonheart', 60, 0); //给予玩家龙心效果
    }

    if ((head.id == 'iceandfire:armor_green_helmet') && (chestplate.id == 'iceandfire:armor_green_chestplate') && (leggings.id == 'iceandfire:armor_green_leggings') && (boots.id == 'iceandfire:armor_green_boots')) {
        player.potionEffects.add('minecraft:regeneration', 60 , 3); //穿戴绿龙套时，给予玩家再生4
        player.potionEffects.add('minecraft:dragonheart', 60, 0); //给予玩家龙心效果
    }

    if ((head.id == 'iceandfire:armor_gray_helmet') && (chestplate.id == 'iceandfire:armor_gray_chestplate') && (leggings.id == 'iceandfire:armor_gray_leggings') && (boots.id == 'iceandfire:armor_gray_boots')) {
        player.potionEffects.add('minecraft:regeneration', 60 , 3); //穿戴灰龙套时，给予玩家再生4
        player.potionEffects.add('minecraft:dragonheart', 60, 0); //给予玩家龙心效果
    }

    if ((head.id == 'iceandfire:armor_blue_helmet') && (chestplate.id == 'iceandfire:armor_blue_chestplate') && (leggings.id == 'iceandfire:armor_blue_leggings') && (boots.id == 'iceandfire:armor_blue_boots')) {
        player.potionEffects.add('minecraft:regeneration', 60 , 3); //穿戴蓝龙套时，给予玩家再生4
        player.potionEffects.add('minecraft:dragonheart', 60, 0); //给予玩家龙心效果
    }

    if ((head.id == 'iceandfire:armor_white_helmet') && (chestplate.id == 'iceandfire:armor_white_chestplate') && (leggings.id == 'iceandfire:armor_white_leggings') && (boots.id == 'iceandfire:armor_white_boots')) {
        player.potionEffects.add('minecraft:regeneration', 60 , 3); //穿戴白龙套时，给予玩家再生4
        player.potionEffects.add('minecraft:dragonheart', 60, 0); //给予玩家龙心效果
    }

    if ((head.id == 'iceandfire:armor_sappphire_helmet') && (chestplate.id == 'iceandfire:armor_sapphire_chestplate') && (leggings.id == 'iceandfire:armor_sapphire_leggings') && (boots.id == 'iceandfire:armor_sapphire_boots')) {
        player.potionEffects.add('minecraft:regeneration', 60 ,3); //穿戴蓝宝石龙套时，给予玩家再生4
        player.potionEffects.add('minecraft:dragonheart', 60, 0); //给予玩家龙心效果
    }

    if ((head.id == 'iceandfire:armor_silver_helmet') && (chestplate.id == 'iceandfire:armor_silver_chestplate') && (leggings.id == 'iceandfire:armor_silver_leggings') && (boots.id == 'iceandfire:armor_silver_boots')) {
        player.potionEffects.add('minecraft:regeneration', 60 , 3); //穿戴白银龙套时，给予玩家再生4
        player.potionEffects.add('minecraft:dragonheart', 60, 0); //给予玩家龙心效果
    }

    if ((head.id == 'iceandfire:armor_electric_helmet') && (chestplate.id == 'iceandfire:armor_electric_chestplate') && (leggings.id == 'iceandfire:armor_electric_leggings') && (boots.id == 'iceandfire:armor_electric_boots')) {
        player.potionEffects.add('minecraft:regeneration', 60 , 3); //穿戴电龙套时，给予玩家再生4
        player.potionEffects.add('minecraft:dragonheart', 60, 0); //给予玩家龙心效果
    }

    if ((head.id == 'iceandfire:armor_amythest_helmet') && (chestplate.id == 'iceandfire:armor_amethyst_chestplate') && (leggings.id == 'iceandfire:armor_amethyst_leggings') && (boots.id == 'iceandfire:armor_amethyst_boots')) {
        player.potionEffects.add('minecraft:regeneration', 60 , 3); //穿戴紫水晶龙套时，给予玩家再生4
        player.potionEffects.add('minecraft:dragonheart', 60, 0); //给予玩家龙心效果
    }

    if ((head.id == 'iceandfire:armor_copper_helmet') && (chestplate.id == 'iceandfire:armor_copper_chestplate') && (leggings.id == 'iceandfire:armor_copper_leggings') && (boots.id == 'iceandfire:armor_copper_boots')) {
        player.potionEffects.add('minecraft:regeneration', 60 , 3); //穿戴铜龙套时，给予玩家再生4
        player.potionEffects.add('minecraft:dragonheart', 60, 0); //给予玩家龙心效果
    }

    if ((head.id == 'iceandfire:armor_black_helmet') && (chestplate.id == 'iceandfire:armor_black_chestplate') && (leggings.id == 'iceandfire:armor_black_leggings') && (boots.id == 'iceandfire:armor_black_boots')) {
        player.potionEffects.add('minecraft:regeneration', 60 , 3); //穿戴黑龙套时，给予玩家再生4
        player.potionEffects.add('minecraft:dragonheart', 60, 0); //给予玩家龙心效果
    }
});