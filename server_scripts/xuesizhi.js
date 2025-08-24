let kills = 0; // 初始化击杀数
let souls = 0; // 初始化魂量
let re = 0; // 初始化修复次数


const xuesizhiBladeCheck = (item) => { // 判断刀
    if (!item || item.id !== 'slashblade:slashblade') return false;
    let bladeState = item.nbt?.bladeState; // 获取刀的bladeState数据
    if (!bladeState) return false;
    return bladeState.SpecialAttackType === "slashblade:wave_edge" && // sa类型
           bladeState.TextureName === "slashblade_addon:model/nihil/nihilex.png" && // 贴图路径
           bladeState.ModelName === "slashblade_addon:model/nihil/nihil.obj" && // 模型路径
           bladeState.translationKey === "item.slashblade_addon.nihilex"; // 物品item名称
};


ServerEvents.recipes(event => {

    // 自定义一个血魔法祭坛配方：用特定要求的刀升级成特制刀
    event.custom({
        "type": "bloodmagic:altar_blade",  // 配方类型是血魔法的祭坛
        "input": {
            "type": "slashblade:blade",  // 输入物品类型是 Slashblade 的刀
            "item": "slashblade:slashblade",  // 输入物品是基础刀
            "request": {  // 输入刀要求的条件
                "kill": 20,  // 杀敌数
                "name": "slashblade_addon:nihilex",  // 刀的名字
                "proud_soul": 12000,  // 魂量
                "refine": 20  // 精炼
            }
        },
        "output": {
            "item": "slashblade:slashblade",  // 输出仍然是 Slashblade 的刀
            "nbt": {  // 自定义输出刀的NBT数据
                bladeState: {
                    SpecialAttackType: "slashblade:wave_edge",  // 特殊攻击类型
                    TextureName: "slashblade_addon:model/nihil/nihilul.png",  // 刀的纹理
                    ModelName: "slashblade_addon:model/nihil/nihil.obj",  // 模型路径
                    translationKey: "item.slashblade_addon.nihilul",  // 名字
                    isDefaultBewitched: 1,
                    maxDamage: 200, // 设置刀的最大耐久
                },
                Enchantments: [ { lvl: 3, id: "minecraft:power" }, { lvl: 5, id: "minecraft:sharpness" }, { lvl: 3, id: "minecraft:smite" }, { lvl: 2, id: "minecraft:bane_of_arthropods" },{ lvl: 3,id: "minecraft:unbreaking"},
                    { lvl: 2,id: "minecraft:fire_aspect"},{ lvl:3, id: "minecraft:looting"}
                 ],
            }
        },
        "upgradeLevel": 0,  // 需要1级祭坛
        "altarSyphon": 600,  // 总消耗生命精华量（LP）
        "consumptionRate": 10,  // 每tick消耗速率
        "drainRate": 100  // 祭坛每tick流速
    })
})
