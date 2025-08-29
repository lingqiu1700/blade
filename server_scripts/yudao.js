ServerEvents.recipes(event => {
    event.custom({
        "type": "bloodmagic:altar_blade",  // 配方类型是血魔法的祭坛
        "input": {
            "type": "slashblade:blade",  // 输入物品类型是 Slashblade 的刀
            "item": "slashblade:slashblade",  // 输入物品是基础刀
            "request": {  // 输入刀要求的条件
                "kill": 2500,  // 杀敌数
                "name": "legendblade:nihilexfake",  // 刀的名字
                "proud_soul": 15000,  // 魂量
                "refine": 10  // 精炼
            }
        },
        "output": {
            "item": "slashblade:slashblade",  // 输出仍然是 Slashblade 的刀
            "category": "equipment",
        },
        "blade": "legendblade:bloodkatana", // 指定刀
        "upgradeLevel": 2,  // 需要1级祭坛
        "altarSyphon": 26000,  // 总消耗生命精华量（LP）
        "consumptionRate": 10,  // 每tick消耗速率
        "drainRate": 5000  // 祭坛每tick流速
    })

    event.custom({
        "type": "bloodmagic:altar_blade",  // 配方类型是血魔法的祭坛
        "input":{
            "type": "slashblade:blade",  // 输入物品类型是 Slashblade 的刀
            "item": "slashblade:slashblade",  // 输入物品是基础刀
            "request": {
                "kill" : 1700,  // 杀敌数
                "name": "legendblade:nihilexfake",  // 刀的名字
                "refine": 20,  // 精炼
            }
        },
        "output": {
            "item": "slashblade:slashblade",  // 输出仍然是 Slashblade 的刀
            "category": "equipment",
        },
        "blade": "slashblade_addon:nihilbx", // 指定刀
        "upgradeLevel": 2,  // 需要1级祭坛
        "altarSyphon": 30000,  // 总消耗生命精华量（LP）
        "consumptionRate": 10,  // 每tick消耗速率
        "drainRate": 2000  // 祭坛每tick流速
    })

    event.custom({
        "type": "bloodmagic:altar_blade",  // 配方类型是血魔法的祭坛
        "input": {
            "type": "slashblade:blade",  // 输入物品类型是 Slashblade 的刀
            "item": "slashblade:slashblade",  // 输入物品是基础刀
            "request": {  // 输入刀要求的条件
                "kill": 2000,  // 杀敌数
                "name": "legendblade:nihilexfake",  // 刀的名字
                "proud_soul": 25000,  // 魂量
                "refine": 15  // 精炼
            }
        },
        "output": {
            "item": "slashblade:slashblade",  // 输出仍然是 Slashblade 的刀
            "category": "equipment",
        },
        "blade": "legendblade:shinku", // 指定刀
        "upgradeLevel": 2,  // 需要1级祭坛
        "altarSyphon": 30000,  // 总消耗生命精华量（LP）
        "consumptionRate": 10,  // 每tick消耗速率
        "drainRate": 2000  // 祭坛每tick流速
    })
})