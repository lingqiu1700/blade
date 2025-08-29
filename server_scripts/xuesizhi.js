// 血刀似蛭的合成配方
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
                Enchantments: [ { lvl: 3, id: "minecraft:power" }, { lvl: 5, id: "minecraft:sharpness" }, { lvl: 3, id: "minecraft:smite" }, { lvl: 2, id: "minecraft:bane_of_arthropods" },{ lvl: 3,id: "minecraft:unbreaking"},
                    { lvl: 2,id: "minecraft:fire_aspect"},{ lvl:3, id: "minecraft:looting"}
                 ],
            }
        },
        "blade": "slashblade_addon:nihilul", // 指定刀
        "upgradeLevel": 1,  // 需要1级祭坛
        "altarSyphon": 16000,  // 总消耗生命精华量（LP）
        "consumptionRate": 10,  // 每tick消耗速率
        "drainRate": 100  // 祭坛每tick流速
    })

    event.custom({
        "type": "bloodmagic:altar_blade",  // 配方类型是血魔法的祭坛
        "input": {
            "type": "slashblade:blade",  // 输入物品类型是 Slashblade 的刀
            "item": "slashblade:slashblade",  // 输入物品是基础刀
            "request": {  // 输入刀要求的条件
                "kill": 800,  // 杀敌数
                "name": "slashblade_addon:nihilex",  // 刀的名字
                "proud_soul": 8000,  // 魂量
                "refine": 40  // 精炼
            }
        },
        "output": {
            "item": "slashblade:slashblade",  // 输出仍然是 Slashblade 的刀
            "category": "equipment",
        },
        "blade": "slashblade_addon:crimsoncherry",
        "upgradeLevel": 1, // 需要2级祭坛
        "altarSyphon": 12000,  // 总消耗生命精华量（LP）
        "consumptionRate": 20,  // 每tick消耗速率
        "drainRate": 200  // 祭坛每tick流速
    })

    event.custom({
        "type": "bloodmagic:altar_blade",  // 配方类型是血魔法的祭坛
        "input": {
            "type": "slashblade:blade",  // 输入物品类型是 Slashblade 的刀
            "item": "slashblade:slashblade",  // 输入物品是基础刀
            "request": {  // 输入刀要求的条件
                "kill" : 3500,  // 杀敌数
                "name": "slashblade_addon:crimsoncherry",  // 刀的名字
                "proud_soul": 40000,  // 魂量
                "refine": 60,  // 精炼
            }
        },
        "output": {
            "item": "slashblade:slashblade",  // 输出仍然是 Slashblade 的刀
            "category": "equipment",
        },
        "blade": "legendblade:crimsoncherryex", // 指定刀
        "upgradeLevel": 3,  // 需要2级祭坛
        "altarSyphon": 48000,  // 总消耗生命精华量（LP）
        "consumptionRate": 20,  // 每tick消耗速率
        "drainRate": 2000  // 祭坛每tick流速
    })

    event.custom({
        "type": "bloodmagic:altar_blade",  // 配方类型是血魔法的祭坛
        "input": {
            "type": "slashblade:blade",  // 输入物品类型是 Slashblade 的刀
            "item": "slashblade:slashblade",  // 输入物品是基础刀
            "request": {
                "kill": 5000,  // 杀敌数
                "name": "slashblade_addon:nihilul",  // 刀的名字
                "proud_soul": 45000,  // 魂量
                "refine": 100  // 精炼
            }
        },
        "output": {
            "item": "slashblade:slashblade",  // 输出仍然是 Slashblade 的刀
            "category": "equipment",
        },
        "blade": "legendblade:nihilulex", // 指定刀
        "upgradeLevel": 3,  // 需要3级祭坛
        "altarSyphon": 60000,  // 总消耗生命精华量（LP）
        "consumptionRate": 30,  // 每tick消耗速率
        "drainRate": 3000  // 祭坛每tick流速
    })
})
