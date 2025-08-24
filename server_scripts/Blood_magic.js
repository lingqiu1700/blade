// 监听服务器的配方事件
ServerEvents.recipes(event => {

    // 自定义一个血魔法祭坛配方：用特定要求的刀升级成特制刀
    event.custom({
        "type": "bloodmagic:altar_blade",  // 配方类型是血魔法的祭坛
        "input": {
            "type": "slashblade:blade",  // 输入物品类型是 Slashblade 的刀
            "item": "slashblade:slashblade",  // 输入物品是基础刀
            "request": {  // 输入刀要求的条件
                "kill": 20,  // 杀敌数需要达到20
                "name": "slashblade_addon:nihilbx",  // 刀的名字要是 nihilbx
                "proud_soul": 300,  // 拥有300魂量
                "refine": 10  // 精炼等级达到10
            }
        },
        "output": {
            "item": "slashblade:slashblade",  // 输出仍然是 Slashblade 的刀
            "category": "equipment",
            "nbt": {  // 自定义输出刀的NBT数据
                Enchantments: [ { lvl: 50, id: "minecraft:power" }, { lvl: 50, id: "minecraft:sharpness" }, { lvl: 50, id: "minecraft:smite" }, { lvl: 50, id: "minecraft:bane_of_arthropods" }, ]
            }
        },
        "blade": "legendblade:nihilbxex",
        "upgradeLevel": 1,  // 需要1级祭坛
        "altarSyphon": 6,  // 总消耗生命精华量（LP）
        "consumptionRate": 10,  // 每tick消耗速率
        "drainRate": 100  // 祭坛每tick流速
    })


    event.custom({
        "type": "bloodmagic:altar",
        "input": {
            "item": "xmsm:bloodclot"  // 输入是血块
        },
        "output": {
            "item": "xmsm:bloodessence"  // 输出是血精华
        },
        "upgradeLevel": 2,  // 需要1级祭坛
        "altarSyphon": 2000,  // 总消耗生命精华量
        "consumptionRate": 10,  // 每tick消耗速率
        "drainRate": 100  // 祭坛每tick流速
    })

    event.custom({
        "type": "bloodmagic:altar",
        "input": {
            "item": "foolish:stellar_upgrade_template"  // 输入是星辰升级模板
        },
        "output": {
            "item": "xmsm:bloodmoban"  // 输出是血模板
        },
        "upgradeLevel": 4,  // 需要1级祭坛
        "altarSyphon": 40000,  // 总消耗生命精华量
        "consumptionRate": 10,  // 每tick消耗速率
        "drainRate": 1000  // 祭坛每tick流速
    })
})
