StartupEvents.registry("item", (event) => {
    event.create("xmsm:ibin","basic");
    event.create("xmsm:goldshi","basic");
    event.create("xmsm:dabian","basic");
    event.create("xmsm:jinghua","basic");
    event.create ("xmsm:coagulatedclot");//凝血块
    event.create("xmsm:bloodessence","basic");//血精华
    event.create("xmsm:dark_matter","basic");//未完成的暗物质
    event.create("xmsm:bloodmoban","basic");//血模板
})

StartupEvents.registry("sound_event", (event) => {
    event.create("xmsm:dage1");
    event.create("xmsm:dage2");
    event.create("xmsm:dage3");
    event.create("xmsm:anlang1");
    event.create("xmsm:anlang2");
    event.create("xmsm:anlang3");
    event.create("xmsm:anshuang1");
    event.create("xmsm:anshuang2");
    event.create("xmsm:anshuang3");
    event.create("xmsm:guanglili1");
    event.create("xmsm:guanglili2");
    event.create("xmsm:guanglili3");
    event.create("xmsm:anyisheng1");
    event.create("xmsm:anyisheng2");
    event.create("xmsm:anyisheng3");
    event.create("xmsm:guangheipi1");
    event.create("xmsm:guangheipi2");
    event.create("xmsm:guangheipi3");
})

StartupEvents.registry("block", (event) => {
      event.create('xmsm:bloodclot')
    .displayName('血块') // 设置方块的显示名称（会显示在游戏中）
    .hardness(1.0) // 设置方块的硬度（影响挖掘所需时间）
    .resistance(1.0) // 设置方块的抗爆性（影响被爆炸摧毁的难度）
    .requiresTool(true) // 必须使用工具才能掉落物品，否则徒手打掉不会掉落
    .tagBlock('my_namespace:my_other_tag') // 再添加一个命名空间下的方块标签
    .tagBlock('minecraft:mineable/axe') // 用斧头可以更快地挖掘这个方块
    .tagBlock('minecraft:mineable/pickaxe') // 也可使用镐来加快挖掘
    .tagBlock('minecraft:needs_iron_tool') // 挖掘所需工具最低为铁级（铁镐或更高级）
})