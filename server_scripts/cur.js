// 不知道写啥
const CuriosApi = Java.loadClass('top.theillusivec4.curios.api.CuriosApi');
const curiosHelper = CuriosApi.getCuriosHelper();

// 定义要检测的饰品 ID
const SHAN = 'xmsm:shan';
const SHAN0 = 'xmsm:shan0'; 
const HEALING1 = 'xmsm:healing1';
const HEALING2 = 'xmsm:healing2';
const SHI = 'xmsm:shi';
const LILI = 'xmsm:guanglili';
const AN = 'xmsm:anshuang';
const SINIAN = 'legendblade:nihilbxex';
const GLJ = 'xmsm:glj';
const ANLONG = 'xmsm:anlong';
const ghp = 'xmsm:guangheipi';
const BUQU = 'xmsm:buxu';
const DAGE = 'xmsm:dage';

// 定义一个函数，用于检查玩家是否装备了指定的饰品
function isEquippedCurio(entity, curioId) {
    return curiosHelper.findFirstCurio(entity, curioId).isPresent();
}

// 在每个游戏刻中执行的事件
PlayerEvents.tick(event => {

    const player = event.player;

    // 如果玩家不存活，则不进行处理
    if (!player.isAlive()) return;


    // 检查玩家是否装备了指定的饰品
    if (isEquippedCurio(player, SHAN0)) {
        // 如果装备了，并且闪避值不为1，设置为1.0
        if (player.getAttributeBaseValue('fantasy_ending:evasion') !== 1) {
            player.setAttributeBaseValue('fantasy_ending:evasion', 1.0);
        }
    }
    //治疗饰品
    if (isEquippedCurio(player, HEALING1)) {
        let pd = player.persistentData;
        pd.healingTick = (pd.healingTick ?? 0) + 1;
        if (pd.healingTick >= 300) {
            pd.healingTick = 0;
            if (player.potionEffects.isActive('minecraft:regeneration') == 0) {
                player.potionEffects.add('minecraft:regeneration', 100, 2); // 添加治疗效果
            }
        }
    }
    if (isEquippedCurio(player, HEALING2)) {
        let pd = player.persistentData;
        pd.healingTick = (pd.healingTick ?? 0) + 1;
        if (pd.healingTick >= 250) {
            pd.healingTick = 0;
            if (player.potionEffects.isActive('minecraft:regeneration') == 0) {
                player.potionEffects.add('minecraft:regeneration', 100, 3); // 添加治疗效果
            }
        }
    }

    //E7饰品

    //光莉莉
    if (isEquippedCurio(player, LILI)) {
        let pd = player.persistentData;
        pd.liliTick = (pd.liliTick ?? 0) + 1;
        let entityList = event.level.getEntitiesWithin(AABB.of( // 检测5*5*2范围內的所有实体。
            player.x - 5,
            player.y - 5,
            player.z - 2,
            player.x + 5,
            player.y + 5,
            player.z + 2
        ))
        if (entityList != null) {
            for (let entities of entityList) // 遍历所有实体
            {
                if (entities.isLiving() && (entities.isPlayer() == 0))//判断是否有非玩家的生物实体
                {
                    if (pd.liliTick >= 99) {
                        if (entities.potionEffects.isActive('minecraft:weakness') == 0)//如果实体没有虚弱buff
                        {
                            entities.potionEffects.add('minecraft:weakness', 60, 1);//添加虚弱buff
                        }
                    }
                    if (pd.liliTick >= 115) {
                        pd.liliTick = 0;
                    }
                }
            }
        }
    }

    //暗双
    if (isEquippedCurio(player, AN)) {
        let pd = player.persistentData;
        pd.anTick = (pd.anTick ?? 0) + 1;
        let entityList = event.level.getEntitiesWithin(AABB.of( // 检测5*5*2范围內的所有实体。
            player.x - 5,
            player.y - 5,
            player.z - 2,
            player.x + 5,
            player.y + 5,
            player.z + 2
        ))
        if (entityList != null) {
            for (let entities of entityList) // 遍历所有实体
            {
                if (entities.isLiving() && (entities.isPlayer() == 0))//判断是否有非玩家的生物实体
                {
                    if (pd.anTick >= 99) {
                        if (entities.potionEffects.isActive('minecraft:slowness') == 0)//如果实体没有缓慢buff
                        {
                            entities.potionEffects.add('minecraft:slowness', 60, 1);//添加缓慢buff
                        }
                    }
                    if (pd.anTick >= 115) {
                        pd.anTick = 0;
                    }
                }
            }
        }
    }

    //暗龙
    if (isEquippedCurio(player, ANLONG)) {
        let pd = player.persistentData;
        pd.anlongTick = (pd.anlongTick ?? 0) + 1;
        pd.wudiTick = (pd.wudiTick ?? 0) + 1;
        if (pd.anlongTick >= 100) {
            pd.anlongTick = 0;
            let max_health = player.maxHealth;
            const dun = (max_health * 0.2)/4;
            player.potionEffects.add('minecraft:absorption', 100, dun, false, false); // 添加吸收效果
        }
        if (pd.wudiTick >= 200) {
            pd.wudiTick = 0;
            if (player.potionEffects.isActive('minecraft:resistance') == 0) {
                player.potionEffects.add('minecraft:resistance', 20, 4, false, false); // 添加抗性效果
            }
        }
    }

    //光黑皮
    if (isEquippedCurio(player, ghp)) {
        let entityList = event.level.getEntitiesWithin(AABB.of( // 检测20*20*2范围內的所有实体。
            player.x - 20,
            player.y - 20,
            player.z - 2,
            player.x + 20,
            player.y + 20,
            player.z + 2
        ))
        if (entityList != null) {
            for (let entities of entityList) // 遍历所有实体
            {
                if (entities.isPlayer() && entities.getUuid() != player.getUuid()) // 判断是否是其他玩家
                {
                    if (entities.potionEffects.isActive('minecraft:resistance') == 0) // 如果实体没有抗性buff
                    {
                        entities.potionEffects.add('minecraft:resistance', 60, 1); // 添加抗性buff
                    }
                }
            }
        }
    }

    //答辩
    if (isEquippedCurio(player, SHI)) {
        let pd = player.persistentData;
        pd.sinianTick = (pd.sinianTick ?? 0) + 1;
        let entityList = event.level.getEntitiesWithin(AABB.of( // 检测15*15*15范围內的所有实体。
            player.x - 15,
            player.y - 15,
            player.z - 15,
            player.x + 15,
            player.y + 15,
            player.z + 15
        ))
        if (entityList != null) {
            for (let entities of entityList) // 遍历所有实体
            {
                if (entities.isLiving() && (entities.isPlayer() == 0))//判断是否有非玩家的生物实体
                {
                    if (pd.sinianTick >= 999) {
                        if (entities.potionEffects.isActive('xmsm:judu') == 0)//如果实体没有剧毒buff
                        {
                            entities.potionEffects.add('xmsm:judu', 400, 0);//添加剧毒buff
                        }
                        else //如果有剧毒buff
                        {
                            if ((entities.potionEffects.getDuration('xmsm:judu') <= 200))//如果剧毒持续时间小于5秒
                            {
                                if (entities.potionEffects.getActive('xmsm:judu').amplifier < 2)//如果剧毒等级小于2级
                                {
                                    let potionLevel = entities.potionEffects.getActive('xmsm:judu').amplifier;
                                    entities.potionEffects.add('xmsm:judu', 100, potionLevel + 1);//每隔1秒加1级
                                }
                                else {
                                    entities.potionEffects.add('xmsm:judu', 100, 2);//最高3级
                                }
                            }
                        }
                        if (entities.potionEffects.isActive('minecraft:slowness') == 0)//如果实体没有缓慢buff
                        {
                            entities.potionEffects.add('minecraft:slowness', 100, 3);//添加缓慢buff
                        }
                        if (pd.sinianTick >1040){
                        pd.sinianTick = 0;
                        }
                    }
                }
            }
        }
    }

    //如果玩家装备了E7神器

    if (isEquippedCurio(player, GLJ)) {
        const health = player.health;
        const maxHealth = player.maxHealth;
        const g = health / maxHealth;
        const s = (1-g) * 100;
        player.potionEffects.add('xmsm:glj', 40,s, false, false);
    }

    if (isEquippedCurio(player, BUQU)) {
        const pd = player.persistentData;
        pd.buxuTick = (pd.buxuTick ?? 0) + 1;
        if (pd.buxuTick >=600) {
            pd.buxuTick = 0;
            player.potionEffects.add('minecraft:resistance', 60, 4, false, false); // 添加抗性效果
        }
    }
});






//大哥！
const EntityDataInjector = Java.loadClass('com.mega.uom.util.entity.EntityDataInjector');
const DAGEAttack = 'xmsm:dage_attack_damage';
const DAGEbeidong = 'xmsm:dage_beidong';

let AAA = {};
let BBB = {};
let CCC = {};
let DDD = {};
let TTT = {};
let FFF = {};
let GGG = {};
let jizhongli = false;

EntityEvents.hurt(event => {
    const entity = event.entity;
    const damage = event.damage; // 伤害数值（浮点）
    const source = event.source; // 伤害来源
    const attacker = source.actual;

    if (attacker && attacker.isPlayer() && isEquippedCurio(attacker, DAGE)) {
        if (AAA[attacker.id] >0){
            DDD[attacker.id] = true; // 设置DDD状态为true
        }
        AAA[attacker.id] = 0; // 重置伤害值
        CCC[attacker.id] = true; // 设置CCC状态为true
        TTT[attacker.id] = (TTT[attacker.id] || 0) + 1;
        if (TTT[attacker.id] >= 5) {
            GGG[attacker.id] = true; // 设置GGG状态为true
        }
    }
    if (isEquippedCurio(entity, DAGE)){
        let DAGEdamage = AAA[entity.id] || 0; // 获取当前伤害值
        AAA[entity.id] = DAGEdamage+damage; // 累加伤害
        BBB[entity.id] = true;
    }
});

PlayerEvents.tick(event => {

    const player = event.player
    const playerId = player.id;

    if (!isEquippedCurio(player, DAGE)) {
        return;
    }

    try {

        let playerBBB = BBB[playerId] || false; // 获取BBB状态
        let playerCCC = CCC[playerId] || false; // 获取CCC状态
        let playerAAA = AAA[playerId] || 0; // 获取伤害值
        let playerTTT = TTT[playerId] || 0; // 获取TTT状态

        let evasionTime = EntityDataInjector.getEvasionTime(event.player);

        if (isEquippedCurio(event.player, DAGE) && evasionTime > 0 && playerBBB) {
            player.modifyAttribute('minecraft:generic.attack_damage', DAGEAttack, playerAAA, 'addition')
            player.tell(Text.lightPurple("蓄以内蕴"));
            BBB[player.id] = false; // 重置BBB状态 
            TTT[player.id] = (TTT[player.id] || 0) + 1;
        }

        if (isEquippedCurio(event.player, DAGE)&& playerCCC) {
            player.modifyAttribute('minecraft:generic.attack_damage', DAGEAttack, -playerAAA, 'addition')
            if (DDD[player.id]){
            player.tell(Text.lightPurple("予以奉还"));
            DDD[player.id] = false; // 重置DDD状态
            }
            AAA[player.id] = 0; // 重置伤害值
            CCC[player.id] = false; // 重置CCC状态
        }

        if (isEquippedCurio(event.player, DAGE) && playerTTT >= 5) {
            player.modifyAttribute('minecraft:generic.attack_damage', DAGEbeidong, 0.5, 'multiply_total');
            if (!jizhongli){
            player.tell(Text.lightPurple("集中力已满"));
            jizhongli = true;
            }
            if (playerTTT >5){
            TTT[player.id] = 0; // 重置TTT状态
            FFF[player.id] = true; // 设置FFF状态为true
            jizhongli = false;
            }
        }

        if (isEquippedCurio(event.player, DAGE) && FFF[player.id] &&(GGG[player.id])){
            player.modifyAttribute('minecraft:generic.attack_damage', DAGEbeidong, 0, 'multiply_total')
            player.tell(Text.lightPurple("集中力已使用"));
            FFF[player.id] = false; // 重置FFF状态
            GGG[player.id] = false; // 重置GGG状态
        }

    } catch (error) {
        console.error(`[cur.js] 在 PlayerEvents.tick 中发生错误: ${error}`);
    }
});
