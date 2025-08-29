StartupEvents.registry('mob_effect', event => {
  event.create('xmsm:poli') // 创建新的效果粒子
    .displayName('魄力') // 设置效果名称
    .color(0xB7410E)              // 效果粒子颜色设置为橙色
    .beneficial()                 // 归类为有益效果
    .modifyAttribute(
      'minecraft:generic.attack_damage', // 要修改的属性：攻击伤害
      'eb51eacd-3ebb-4dba-8f7b-1e3f5cd9402a', // 唯一标识符 UUID
      0.3, // 增加30%攻击力
      "multiply_total" // 按最终值进行乘法操作
    )
    .modifyAttribute(
        'minecraft:generic.armor', // 要修改的属性：护甲
        '243c56d5-9e15-4191-a587-0282fc47bf19', // 唯一标识符 UUID
        0.3, // 增加 0.3 的护甲值
        "multiply_total" // 按最终值进行乘法操作
    )
    .modifyAttribute(
        'minecraft:generic.armor_toughness', // 要修改的属性：护甲韧性
        'f1c5b8d2-3e4f-4c6a-9b7c-8d9e0a1b2c3d', // 唯一标识符 UUID
        2, // 增加 2 的护甲韧性
        "addition" // 按最终值进行加法操作
    )
})

StartupEvents.registry('mob_effect', event => {
  event.create('xmsm:kuangqi') // 创建新的效果粒子
    .displayName('狂气') // 设置效果名称
    .color(0x00BFFF)              // 效果粒子颜色设置为蓝色
    .beneficial()                 // 归类为有益效果
    .modifyAttribute(
      'minecraft:generic.attack_damage', // 要修改的属性：攻击伤害
      '4ba5894c-af49-4219-8a1e-f1031b5c8f50', // 唯一标识符 UUID
      0.2, // 增加20%攻击力
      "multiply_total" // 按最终值进行乘法操作
    )
    .modifyAttribute(
        'minecraft:generic.movement_speed', // 要修改的属性：速度movement_speed
        'e09b4bbd-7634-46c2-ade8-31369693e43d', // 唯一标识符 UUID
        0.2, // 增加 0.2 的速度
        "multiply_total" // 按最终值进行乘法操作
    )
})

StartupEvents.registry('mob_effect',event => {
    event.create('xmsm:baozou') // 创建新的效果粒子
    .displayName('暴走') // 设置效果名称
    .color(0x00BFFF)              // 效果粒子颜色设置为蓝色
    .beneficial()                 // 归类为有益效果
    .modifyAttribute(
      'fantasy_ending:evasion', // 要修改的属性：闪避
      'c1b8f2d3-4e5f-4a6b-9c7d-8e9f0a1b2c3d', // 唯一标识符 UUID
      0.2, // 增加20%闪避
      "addition" // 按最终值进行加法操作
    )
    .modifyAttribute(
        'minecraft:generic.movement_speed', // 要修改的属性：速度movement_speed
        'd4e5f6a7-b8c9-0d1e-2f3-4a5b6c7d8e9f', // 唯一标识符 UUID
        0.2, // 增加 0.2 的速度
        "multiply_total" // 按最终值进行乘法操作
    )
})

StartupEvents.registry('mob_effect', event => {
    event.create('xmsm:glj') // 创建新的效果粒子
        .displayName('高洁的誓言') // 设置效果名称
        .color(0xFF69B4) // 效果粒子颜色设置为粉色
        .beneficial() // 归类为有益效果
        .modifyAttribute(
            'minecraft:generic.armor', // 要修改的属性：盔护甲值
            'a1b2c3d4-e5f6-7a8b-9c0d-e1f2g3h4i5j6', // 唯一标识符 UUID
            0.01, // 增加1%护甲值
            "multiply_total" // 按最终值进行乘法操作
        )
        .modifyAttribute(
            'minecraft:generic.armor_toughness', // 要修改的属性：盔甲韧性
            'k7l8m9n0-o1p2-q3r4-s5t6-u7v8w9x0y1z2', // 唯一标识符 UUID
            0.01, // 增加 0.1 的盔甲韧性
            "multiply_total" // 按最终值进行乘法操作
        )
})

StartupEvents.registry('mob_effect', event => {
    event.create('xmsm:shouhu') // 创建新的效果粒子
        .displayName('破甲') // 设置效果名称
        .color(0xFF4500) // 效果粒子颜色设置为橙红色
        .harmful() // 归类为有害效果
        .modifyAttribute(
            'minecraft:generic.armor', // 要修改的属性：盔甲值
            'b3c4d5e6-f7g8-h9i0-j1k2-l3m4n5o6p7q8', // 唯一标识符 UUID
            -0.1, // 减少10%护甲值
            "multiply_total" // 按最终值进行乘法操作
        )
        .modifyAttribute(
            'minecraft:generic.armor_toughness', // 要修改的属性：盔甲韧性
            'r9s0t1u2-v3w4-x5y6-z7a8-b9c0d1e2f3g4', // 唯一标识符 UUID
            -0.05, // 减少5%的盔甲韧性
            "multiply_total" // 按最终值进行加法操作
        )
})

StartupEvents.registry('mob_effect', event => {
  event.create('xmsm:judu')
  .displayName('剧毒')
  .color(0x8B0000) // 效果粒子颜色设置为深红色
  .harmful() // 归类为有害效果
  .effectTick((entity, level) =>{
    if (entity.age % 100 !=0){
       return; // 每100tick触发一次
    }
    const world = entity.world;
    const damage = entity.maxHealth * 0.10 * level; // 每100tick扣除10%最大生命值
    const magic = world.damageSources().magic(); // 使用魔法伤害类型
    entity.hurt(magic, damage); // 对实体造成伤害
  })
})

StartupEvents.registry('mob_effect', event => {
  event.create('xmsm:jiaoyue')
  .displayName('皎月')
  .color(0xAFECCC) // 效果粒子颜色设置为淡蓝色
  .beneficial() // 归类为有益效果
    .modifyAttribute(
      'minecraft:generic.attack_damage', // 要修改的属性：攻击伤害
      '4ba5894c-af49-4219-8a1e-f1031b5c8f50', // 唯一标识符 UUID
      0.2, // 增加20%攻击力
      "multiply_total" // 按最终值进行乘法操作
    )
})