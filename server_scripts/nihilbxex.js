// @Dr.饼藏 你真该死啊
let heldItemTime = {};       // 记录玩家手持特定刀的持续时间（单位tick）
let lastTickRank = {};

const nihilbxexBladeCheck = (item) => { // 判断是否为死念终
    if (!item || item.id !== 'slashblade:slashblade') return false;
    let bladeState = item.nbt?.bladeState; // 获取刀的bladeState数据
    if (!bladeState) return false;
    return bladeState.SpecialAttackType === "legendblade:sakura_endex" && // sa类型
           bladeState.TextureName === "legendblade:model/nihill/nihilbx.png" && // 贴图路径
           bladeState.ModelName === "legendblade:model/nihill/nihilbloodex.obj" && // 模型路径
           bladeState.translationKey === "item.legendblade.nihilbxex"; // 物品item名称
};

PlayerEvents.tick(event => {
    let player = event.player;
    let heldItem = player.mainHandItem; // 获取玩家主手物品

    if (!heldItem || !nihilbxexBladeCheck(heldItem)) { 
        heldItemTime[player.id] = 0; // 未持有死念终重置计时
        return;
    }
    
    //计时器
    if (!heldItemTime[player.id]) { 
        heldItemTime[player.id] = 0;
    };
    heldItemTime[player.id]++;


    if (heldItemTime[player.id] >= 100) { // 持刀时间5秒触发
        let nearby = player.level.getEntitiesWithin(AABB.of( // 检测范围
            player.x - 6, player.y - 6, player.z - 6,
            player.x + 6, player.y + 6, player.z + 6
        ));
        
        let hasBleedingEntity = false;
        
        if (nearby) {
            for (let entity of nearby) { // 遍历所有实体
                if (entity.isLiving() && !entity.isPlayer()) { // 判断是否为生物且不是玩家
                    
                    if (entity.potionEffects.isActive('l2complements:bleed')) { // 判断是否存在流血效果
                        hasBleedingEntity = true;
                        entity.potionEffects.add('xmsm:shouhu', 120, 5); // 给予破甲效果
                    }
                }
            }
        }
        
        if (!hasBleedingEntity) {
            // 只有当周围没有流血实体时，才给玩家添加虚弱效果
            player.potionEffects.add('minecraft:weakness', 105, 59); // 给予虚弱60级，持续105tick
            player.potionEffects.add('minecraft:slowness', 105, 2); // 给予缓慢3，持续105tick
            
            player.potionEffects.add('minecraft:instant_damage', 1, 1); // 每 100 tick 扣一次血
        }
        
        heldItemTime[player.id] = 0; // 完成一次检测后重置持有时间
    } 
});


EntityEvents.death(event => {
    const source = event.source;
    // 获取死亡的实体
    const entity = event.entity;

    let killer = -1;

    if (source.actual && source.actual.isPlayer() && !entity.isPlayer()){
        const player = source.actual;

    if (player.potionEffects.isActive('xmsm:shixue')) {
        const activeEffect = player.potionEffects.getActive('xmsm:shixue');
        if (activeEffect) {
            // 2. 如果有效果，获取当前的等级
            killer = activeEffect.amplifier;
        }
    }


        let newamplifier = killer + 1;

        if (newamplifier > 255){
            newamplifier = 255; 
        }

        player.potionEffects.add('xmsm:shixue',105,newamplifier);
    }
})
