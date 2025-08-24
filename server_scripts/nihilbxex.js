// @Dr.饼藏 你真该死啊
let heldItemTime = {};        // 记录玩家手持特定刀的持续时间（单位tick）
let bleedTickCounter = {};    // 记录流血计时器
let lastTickRank = {};       // 记录上次等级

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
        bleedTickCounter[player.id] = 0; // 重置流血计时器
        return;
    }
    //计时器
    if (!heldItemTime[player.id]) { 
        heldItemTime[player.id] = 0;
    };
    if (!bleedTickCounter[player.id]) {
        bleedTickCounter[player.id] = 0; // 初始化流血计时器
    };
    heldItemTime[player.id]++;
    bleedTickCounter[player.id]++;


    if (heldItemTime[player.id] >= 100) { // 持刀时间5秒触发
        let nearby = player.level.getEntitiesWithin(AABB.of( // 检测6*6*6的所有实体
            player.x - 6, player.y - 6, player.z - 6,
            player.x + 6, player.y + 6, player.z + 6
        ));
        let hasBleedingEntity = false;
        if (nearby) {
            for (let entity of nearby) { // 遍历所有实体
                if (entity.isLiving() && !entity.isPlayer()) { // 判断是否为生物且不是玩家
                    if (entity.potionEffects.isActive('l2complements:bleed')) { // 判断是否存在流血效果
                        hasBleedingEntity = true;
                        break;
                    }
                }
            }
        }
        if (!hasBleedingEntity) {
            // 只有当周围没有流血实体时，才给玩家添加虚弱效果
            player.potionEffects.add('minecraft:weakness', 105, 59); // 给予虚弱60级，持续105tick
            player.potionEffects.add('minecraft:slowness',105, 2); // 给予缓慢2，持续105tick
            if (bleedTickCounter[player.id] >= 60) { // 每3秒扣一次血
                player.potionEffects.add('minecraft:instant_damage', 1, 0); // 每3秒扣一次血..
                bleedTickCounter[player.id] = 0; // 重置流血计时器
            }
        }
        heldItemTime[player.id] = 0; // 完成一次检测后重置持有时间
    } 
});
