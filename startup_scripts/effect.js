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
    event.create('xmsm:glj_effect') // 创建新的效果粒子
        .displayName('高洁的誓言') // 设置效果名称
        .color(0xFF69B4) // 效果粒子颜色设置为粉色
        .beneficial() // 归类为有益效果
        .modifyAttribute(
            'minecraft:generic.armor', // 要修改的属性：盔护甲值
            'f0ac5096-9f8d-480a-a3ef-68516521e9ba', // 唯一标识符 UUID
            0.01, // 增加1%护甲值
            "multiply_total" // 按最终值进行乘法操作
        )
        .modifyAttribute(
            'minecraft:generic.armor_toughness', // 要修改的属性：盔甲韧性
            '27742048-9dd6-49cf-9c35-ca017163837c', // 唯一标识符 UUID
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

StartupEvents.registry('mob_effect', event => {
  event.create('xmsm:mianyi')
  .displayName('免疫')
  .color(0x00FFFF) // 效果粒子颜色设置为青色
  .beneficial() // 归类为有益效果
})

StartupEvents.registry('mob_effect', event => {
  event.create('xmsm:ghp')
  .displayName('龙之自尊')
  .color(0x8B4513) // 效果粒子颜色设置为马鞍棕色
  .beneficial() // 归类为有益效果
  .modifyAttribute(
    'l2damagetracker:damage_reduction',
    'd4e5f6a7-b8c9-0d1e-2f3-4a5b6c7d8e9f', // 唯一标识符 UUID
    -0.2, // 减少20%所受伤害
    "multiply_total"
  )
})

StartupEvents.registry('mob_effect', event => {
  event.create('xmsm:shixue')
  .displayName('嗜血')
  .color(0x8B0000) // 效果粒子颜色设置为深红色
  .beneficial() // 归类为有益效果
    .modifyAttribute(
      'minecraft:generic.attack_damage', // 要修改的属性：攻击伤害
      '2c3d4e5f-6a7b-8c9d-0e1f-2a3b4c5d6e7f', // 唯一标识符 UUID
      0.05, // 增加5%攻击力
      "multiply_total" // 按最终值进行乘法操作
    )
    .modifyAttribute(
        'minecraft:generic.movement_speed', // 要修改的属性：速度movement_speed
        'f1e2d3c4-b5a6-7980-1a2b-3c4d5e6f7g8h', // 唯一标识符 UUID
        0.01, // 增加 0.1 的速度
        "multiply_total" // 按最终值进行乘法操作
    )
})

StartupEvents.registry('mob_effect', event => {
  event.create('xmsm:yuxue')
  .displayName('浴血')
  .color(0xFF6347) // 效果粒子颜色设置为番茄红
  .beneficial() 
    .modifyAttribute(
      'slashblade:slashblade_damage',
      'a1b2c3d4-e5f6-7a8b-9c0d-e1f2g3h4i5j6', // 唯一标识符 UUID
      0.1,
      "multiply_total"
    )
})

StartupEvents.registry('mob_effect', event => {
  event.create('xmsm:dun')
  .displayName('盾护')
  .color(0xFFD700) // 效果粒子颜色设置为金色
  .beneficial() // 归类为有益效果
    .modifyAttribute(
      'l2damagetracker:damage_absorption',
      'f9e8d7c6-b5a4-3210o9n8m7l6', // 唯一标识符 UUID
      5,
      "addition" // 按最终值进行加法操作
    )
})

StartupEvents.registry('mob_effect', event => {
  event.create('xmsm:diamond')
  .displayName('钻石的加护')
  .color(0x00FFFF) // 效果粒子颜色设置为青色
  .beneficial() // 归类为有益效果
    .modifyAttribute(
      'minecraft:generic.max_health', // 要修改的属性：最大生命值
      'a1b2c3d4-e5f6-7a8b-9c0d-e1f2g3h4i5j6', // 唯一标识符 UUID
      20, // 增加10点最大生命值
      "addition" // 按最终值进行加法操作
    )
})

StartupEvents.registry('mob_effect', event => {
  event.create('xmsm:ironwood')
  .displayName('铁木的庇护')
  .color(0x228B22) // 效果粒子颜色设置为森林绿
  .beneficial() // 归类为有益效果
    .modifyAttribute(
      'minecraft:generic.max_health', // 要修改的属性：最大生命值
      'd4e5f6a7-b8c9-0d1e-2f3-4a5b6c7d8e9f', // 唯一标识符 UUID
      10, // 增加5点最大生命值
      "addition" // 按最终值进行加法操作
    )
})

StartupEvents.registry('mob_effect', event => {
  event.create('xmsm:fiery')
  .displayName('炽热的加护')
  .color(0xFF4500) // 效果粒子颜色设置为橙红色
  .beneficial() // 归类为有益效果
    .modifyAttribute(
      'minecraft:generic.max_health', // 要修改的属性：最大生命值
      'b3c4d5e6-f7g8-h9i0-j1k2-l3m4n5o6p7q8', // 唯一标识符 UUID
      25, // 增加点12.5最大生命值
      "addition" // 按最终值进行加法操作
    )
})

StartupEvents.registry('mob_effect', event => {
  event.create('xmsm:sakura')
  .displayName('樱花的祝福')
  .color(0xFFB6C1) // 效果粒子颜色设置为浅粉色
  .beneficial() // 归类为有益效果
    .modifyAttribute(
      'minecraft:generic.max_health', // 要修改的属性：最大生命值
      'c1b2c3d4-e5f6-7a8b-9c0d-e1f2g3h4i5j6', // 唯一标识符 UUID
      10, // 增加5点最大生命值
      "addition" // 按最终值进行加法操作
    )
})


StartupEvents.registry('mob_effect', event => {
  event.create('xmsm:knight')
  .displayName('骑士的守护')
  .color(0x708090) // 效果粒子颜色设置为石板灰
  .beneficial() // 归类为有益效果
  .modifyAttribute(
    'minecraft:generic.armor', // 要修改的属性：护甲
    'e3f4g5h6-i7j8-k9l0-m1n2-o3p4q5r6s7t8', // 唯一标识符 UUID
    16, // 增加16点护甲值
    "addition" // 按最终值进行加法操作
  )
  .modifyAttribute(
    'minecraft:generic.armor_toughness', // 要修改的属性：护甲韧性
    'u8v9w0x1-y2z3-a4b5-c6d7-e8f9g0h1i2j3', // 唯一标识符 UUID
    4, // 增加4点护甲韧性
    "addition" // 按最终值进行加法操作
  )
  .modifyAttribute(
    'minecraft:generic.movement_speed', // 要修改的属性：速度movement_speed
    'k4l5m6n7-o8p9-q0r1-s2t3-u4v5w6x7y8z9', // 唯一标识符 UUID
    -0.1, // 减少10%的速度
    "multiply_total" // 按最终值进行乘法操作
  )
})


StartupEvents.registry('mob_effect', event => {
  event.create('xmsm:netherite')
  .displayName('下界合金的庇护')
  .color(0x2F4F4F) // 效果粒子颜色设置为暗灰色
  .beneficial() // 归类为有益效果
  .modifyAttribute(
    'minecraft:generic.max_health', // 要修改的属性：最大生命值
    'a1b2c3d4-e5f6-7a8b-9c0d-e1f2g3h4i5j6', // 唯一标识符 UUID
    40, // 增加20点最大生命值
    "addition" // 按最终值进行加法操作
  )
})


StartupEvents.registry('mob_effect', event => {
  event.create('xmsm:etherium')
  .displayName('以太的庇护')
  .color(0x9370DB) // 效果粒子颜色设置为中紫色
  .beneficial() // 归类为有益效果
  .modifyAttribute(
    'minecraft:generic.attack_speed', // 要修改的属性：攻击速度
    'd4e5f6a7-b8c9-0d1e-2f3-4a5b6c7d8e9f', // 唯一标识符 UUID
    1.0, // 增加100%攻击速度
    "multiply_total" // 按最终值进行乘法操作
  )
})


StartupEvents.registry('mob_effect', event => {
  event.create('xmsm:dragonheart')
  .displayName('龙的庇护')
  .color(0xFF8C00) // 效果粒子颜色设置为深橙色
  .beneficial() // 归类为有益效果
  .modifyAttribute(
    'minecraft:generic.max_health', // 要修改的属性：最大生命值
    'b3c4d5e6-f7g8-h9i0-j1k2-l3m4n5o6p7q8', // 唯一标识符 UUID
    50, // 增加25点最大生命值
    "addition" // 按最终值进行加法操作
  )
  .modifyAttribute(
    'minecraft:generic.attack_damage', // 要修改的属性：攻击伤害
    'r9s0t1u2-v3w4-x5y6-z7a8-b9c0d1e2f3g4', // 唯一标识符 UUID
    0.2, // 增加20%攻击力
    "multiply_total" // 按最终值进行乘法操作
  )
  .modifyAttribute(
    'minecraft:generic.movement_speed', // 要修改的属性：速度movement_speed
    'h1i2j3k4-l5m6-n7o8-p9q0-r1s2t3u4v5w6', // 唯一标识符 UUID
    0.1, // 增加 10% 的速度
    "multiply_total" // 按最终值进行乘法操作
  )
  .modifyAttribute(
    'l2damagetracker:damage_reduction',
    'x7y8z9a0-b1c2-d3e4-f5g6-h7i8j9k0l1m2', // 唯一标识符 UUID
    -0.15, // 减少15%所受伤害
    "multiply_total"
  )
})

StartupEvents.registry('mob_effect', event => {
  event.create('xmsm:ether')
  .displayName('永恒')
  .color(0x4B0082) // 效果粒子颜色设置为靛蓝色
  .beneficial() // 归类为有益效果
  .modifyAttribute(
    'minecraft:generic.max_health', // 要修改的属性：最大生命值
    'c1b2c3d4-e5f6-7a8b-9c0d-e1f2g3h4i5j6', // 唯一标识符 UUID
    70, // 增加35点最大生命值
    "addition" // 按最终值进行加法操作
  )
  .modifyAttribute(
    'l2damagetracker:crit_rate', // 要修改的属性：暴击率
    'd4e5f6a7-b8c9-0d1e-2f3-4a5b6c7d8e9f', // 唯一标识符 UUID
    '0.3', // 增加30%暴击率
    "addition" // 按最终值进行加法操作
  )
  .modifyAttribute(
    'l2damagetracker:bow_strength',
    'a1b2c3d4-e5f6-7a8b-9c0d-e1f2g3h4i5j6',
    2.0,
    "multiply_total"
  )
})

StartupEvents.registry('mob_effect', event => {
  event.create('xmsm:slayer_helmet')
  .displayName('猎杀效果')
  .color(0x696969) // 效果粒子颜色设置为暗淡灰色
  .beneficial() // 归类为有益效果
  .modifyAttribute(
    'minecraft:generic.attack_damage', // 要修改的属性：攻击伤害
    'e3f4g5h6-i7j8-k9l0-m1n2-o3p4q5r6s7t8', // 唯一标识符 UUID
    0.15, // 增加15%攻击力
    "multiply_total" // 按最终值进行乘法操作
  )
  .modifyAttribute(
    'minecraft:generic.attack_speed', // 要修改的属性：攻击速度
    'u8v9w0x1-y2z3-a4b5-c6d7-e8f9g0h1i2j3', // 唯一标识符 UUID
    1.0, // 增加100%攻击速度
    "multiply_total" // 按最终值进行乘法操作
  )
  .modifyAttribute(
    'fantasy_ending:evasion', // 要修改的属性：闪避
    'k4l5m6n7-o8p9-q0r1-s2t3-u4v5w6x7y8z9', // 唯一标识符 UUID
    0.1, // 增加10%闪避
    "addition" // 按最终值进行加法操作
  )
  .modifyAttribute(
    'l2damagetracker:crit_rate', // 要修改的属性：暴击率
    'j3i2h1g0-f9e8-d7c6-b5a4-3210o9n8m7l6', // 唯一标识符 UUID
    '0.2', // 增加20%暴击率
    "addition" // 按最终值进行加法操作
  )
})

StartupEvents.registry('mob_effect', event => {
  event.create('xmsm:stellar')
  .displayName('星辰的庇护')
  .color(0xFFD700) // 效果粒子颜色设置为金色
  .beneficial() // 归类为有益效果
  .effectTick((entity, lvl) => {
    if (entity.age % 20 != 0) return
      entity.heal(10 * lvl)
    })
  .modifyAttribute(
    'minecraft:generic.max_health', // 要修改的属性：最大生命值
    'k4l5m6n7-o8p9-q0r1-s2t3-u4v5w6x7y8z9', // 唯一标识符 UUID
    250, // 增加250点最大生命值
    "addition" // 按最终值进行加法操作
  )
  .modifyAttribute(
    'fantasy_ending:evasion', // 要修改的属性：闪避
    'z9y8x7w6-v5u4-t3s2-r1q0-p9o8n7m6l5k4', // 唯一标识符 UUID
    0.2, // 增加20%闪避
    "addition" // 按最终值进行加法操作
  )
  .modifyAttribute(
    'minecraft:generic.movement_speed', // 要修改的属性：速度movement_speed
    'j3i2h1g0-f9e8-d7c6-b5a4-3210o9n8m7l6', // 唯一标识符 UUID
    0.2, // 增加 0.2 的速度
    "multiply_total" // 按最终值进行乘法操作
  )
.modifyAttribute(
  'l2damagetracker:damage_reduction',
  'your-uuid-here',
  -0.3, // 负值表示减少
  "multiply_total"
)
  .modifyAttribute(
    'l2damagetracker:crit_rate', // 要修改的属性：暴击率
    'z1y2x3w4-v5u6-t7s8-r9q0-p1o2n3m4l5k6', // 唯一标识符 UUID
    '0.4', // 增加40%暴击率
    "addition" // 按最终值进行加法操作
  )
  .modifyAttribute(
    'l2damagetracker:crit_damage', // 要修改的属性：暴击伤害
    'j6i5h4g3-f2e1-d0c9-b8a7-6543o2n1m0l9', // 唯一标识符 UUID
    '1.5', // 增加150%暴击伤害
    "addition" // 按最终值进行加法操作
  )
  .modifyAttribute(
  'minecraft:generic.armor', // 要修改的属性：护甲
  'e3f4g5h6-i7j8-k9l0-m1n2-o3p4q5r6s7t8', // 唯一标识符 UUID
  2.8, // 增加280%点护甲值
  "multiply_total" // 按最终值进行乘法操作
  )
  .modifyAttribute(
    'minecraft:generic.armor_toughness', // 要修改的属性：护甲韧性
    'u8v9w0x1-y2z3-a4b5-c6d7-e8f9g0h1i2j3', // 唯一标识符 UUID
    2.5, // 增加250%点护甲韧性
    "multiply_total" // 按最终值进行乘法操作
  )
  .modifyAttribute(
    'forge:step_height_addition', // 要修改的属性：额外的跳跃高度
    'k4l5m6n7-o8p9-q0r1-s2t3-u4v5w6x7y8z9', // 唯一标识符 UUID
    5.0, // 增加5格跳跃高度
    "addition" // 按最终值进行加法操作
  )
  .modifyAttribute(
    'l2damagetracker:damage_absorption',
    'j3i2h1g0-f9e8-d7c6-b5a4-3210o9n8m7l6',
    2.0, // 增加200%伤害吸收
    "multiply_total"
  )
})

StartupEvents.registry('mob_effect', event => {
  event.create('xmsm:dragon')
  .displayName('龙之力量')
  .color(0xFF6347) // 效果粒子颜色设置为番茄红
  .beneficial() // 归类为有益效果
  .modifyAttribute(
    'minecraft:generic.attack_damage', // 要修改的属性：攻击伤害
    'a1b2c3d4-e5f6-7a8b-9c0d-e1f2g3h4i5j6', // 唯一标识符 UUID
    0.25, // 增加25%攻击力
    "multiply_total" // 按最终值进行乘法操作
  )
  .modifyAttribute(
    'minecraft:generic.movement_speed', // 要修改的属性：速度movement_speed
    'd4e5f6a7-b8c9-0d1e-2f3-4a5b6c7d8e9f', // 唯一标识符 UUID
    0.2, // 增加 0.2 的速度
    "multiply_total" // 按最终值进行乘法操作
  )
  .modifyAttribute(
    'minecraft:generic.max_health', // 要修改的属性：最大生命值
    'b3c4d5e6-f7g8-h9i0-j1k2-l3m4n5o6p7q8', // 唯一标识符 UUID
    300, // 增加150点最大生命值
    "addition" // 按最终值进行加法操作
  )
  .modifyAttribute(
    'l2damagetracker:crit_damage', // 要修改的属性：暴击伤害
    'c1b2c3d4-e5f6-7a8b-9c0d-e1f2g3h4i5j6', // 唯一标识符 UUID
    '2.0', // 增加200%暴击伤害
    "addition" // 按最终值进行加法操作
  )
  .modifyAttribute(
    'l2damagetracker:crit_rate', // 要修改的属性：暴击率
    'd4e5f6a7-b8c9-0d1e-2f3-4a5b6c7d8e9f', // 唯一标识符 UUID
    '1.0', // 增加100%暴击率
    "addition" // 按最终值进行加法操作
  )
  .modifyAttribute(
    'minecraft:generic.attack_speed', // 要修改的属性：攻击速度
    'b3c4d5e6-f7g8-h9i0-j1k2-l3m4n5o6p7q8', // 唯一标识符 UUID
    1.0, // 增加100%攻击速度
    "addition" // 按最终值进行乘法操作
  )
  .modifyAttribute(
    'l2damagetracker:damage_reduction',
    'e3f4g5h6-i7j8-k9l0-m1n2-o3p4q5r6s7t8',
    -0.4, // 负值表示减少
    "multiply_total"
  )
  .modifyAttribute(
    'minecraft:generic.armor', // 要修改的属性：护甲
    'u8v9w0x1-y2z3-a4b5-c6d7-e8f9g0h1i2j3', // 唯一标识符 UUID
    3.0, // 增加300%点护甲值
    "multiply_total" // 按最终值进行乘法操作
  )
  .modifyAttribute(
    'minecraft:generic.armor_toughness', // 要修改的属性：护甲韧性
    'k4l5m6n7-o8p9-q0r1-s2t3-u4v5w6x7y8z9', // 唯一标识符 UUID
    2.8, // 增加280%点护甲韧性
    "multiply_total" // 按最终值进行乘法操作
  )
  .modifyAttribute(
    'l2damagetracker:magic_damage',
    'j3i2h1g0-f9e8-d7c6-b5a4-3210o9n8m7l6',
    3.0, // 增加300%魔法伤害
    "multiply_total"
  )
  .modifyAttribute(
    'l2damagetracker:damage_absorption',
    'z9y8x7w6-v5u4-t3s2-r1q0-p9o8n7m6l5k4',
    3.0, // 增加300%伤害吸收
    "multiply_total"
  )
})

StartupEvents.registry('mob_effect', event => {
  event.create('xmsm:sculkium')
  .displayName('幽匿的庇护')
  .color(0x4B0082) // 效果粒子颜色设置为靛蓝色
  .beneficial() // 归类为有益效果
  .modifyAttribute(
    'miecraft:generic.movement_speed', // 要修改的属性：速度movement_speed
    'd4e5f6a7-b8c9-0d1e-2f3-4a5b6c7d8e9f', // 唯一标识符 UUID
    0.3, // 增加 0.3 的速度
    "multiply_total" // 按最终值进行乘法操作
  )
  .modifyAttribute(
    'minecraft:generic.attack_damage', // 要修改的属性：攻击伤害
    'b3c4d5e6-f7g8-h9i0-j1k2-l3m4n5o6p7q8', // 唯一标识符 UUID
    0.5, // 增加50%攻击力
    "multiply_total" // 按最终值进行乘法操作
  )
  .modifyAttribute(
    'l2damagetracker:damage_absorption',
    'a1b2c3d4-e5f6-7a8b-9c0d-e1f2g3h4i5j6',
    3.0, // 增加300%伤害吸收
    "multiply_total"
  )
  .modifyAttribute(
    'l2damagetracker:crit_rate', // 要修改的属性：暴击率
    'd4e5f6a7-b8c9-0d1e-2f3-4a5b6c7d8e9f', // 唯一标识符 UUID
    '0.6', // 增加60%暴击率
    "addition" // 按最终值进行加法操作
  )
  .modifyAttribute(
    'l2damagetracker:crit_damage', // 要修改的属性：暴击伤害
    'b3c4d5e6-f7g8-h9i0-j1k2-l3m4n5o6p7q8', // 唯一标识符 UUID
    '2.0', // 增加200%暴击伤害
    "addition" // 按最终值进行加法操作
  )
  .modifyAttribute(
    'minecraft:generic.max_health', // 要修改的属性：最大生命值
    'a1b2c3d4-e5f6-7a8b-9c0d-e1f2g3h4i5j6', // 唯一标识符 UUID
    350, // 增加350点最大生命值
    "addition" // 按最终值进行加法操作
  )
  .modifyAttribute(
    'minecraft:generic.armor', // 要修改的属性：护甲
    'd4e5f6a7-b8c9-0d1e-2f3-4a5b6c7d8e9f', // 唯一标识符 UUID
    4.0, // 增加400%点护甲值
    "multiply_total" // 按最终值进行乘法操作
  )
  .modifyAttribute(
    'minecraft:generic.armor_toughness', // 要修改的属性：护甲韧性
    'b3c4d5e6-f7g8-h9i0-j1k2-l3m4n5o6p7q8', // 唯一标识符 UUID
    3.5, // 增加350%点护甲韧性
    "multiply_total" // 按最终值进行乘法操作
  )
  .modifyAttribute(
    'forge:step_height_addition', // 要修改的属性：额外的跳跃高度
    'a1b2c3d4-e5f6-7a8b-9c0d-e1f2g3h4i5j6', // 唯一标识符 UUID
    7.0, // 增加7格跳跃高度
    "addition" // 按最终值进行加法操作
  )
  .modifyAttribute(
    'l2damagetracker:magic_damage',
    'd4e5f6a7-b8c9-0d1e-2f3-4a5b6c7d8e9f',
    4.0, // 增加400%魔法伤害
    "multiply_total"
  )
  .modifyAttribute(
    'l2damagetracker:damage_reduction',
    'b3c4d5e6-f7g8-h9i0-j1k2-l3m4n5o6p7q8',
    -0.7, // 负值表示减少
    "multiply_total"
  )
  .modifyAttribute(
    'forge:swim_speed',
    'a1b2c3d4-e5f6-7a8b-9c0d-e1f2g3h4i5j6',
    0.5, // 增加50%游泳速度
    "multiply_total"
  )
  .modifyAttribute(
    'minecraft:generic.attack_speed', // 要修改的属性：攻击速度
    'd4e5f6a7-b8c9-0d1e-2f3-4a5b6c7d8e9f', // 唯一标识符 UUID
    1.5, // 增加150%攻击速度
    "multiply_total" // 按最终值进行乘法操作
  )
  .modifyAttribute(
    'slashblade:slashblade_damage',
    'b3c4d5e6-f7g8-h9i0-j1k2-l3m4n5o6p7q8',
    2.5, // 增加250%斩击伤害
    "multiply_total"
  )
})

StartupEvents.registry('mob_effect', event => {
  event.create('xmsm:lava')
  .displayName('熔岩的庇护')
  .color(0xFF4500) // 效果粒子颜色设置为橙红色
  .beneficial() // 归类为有益效果
  .modifyAttribute(
    'l2damagetracker:fire_damage',
    'a1b2c3d4-e5f6-7a8b-9c0d-e1f2g3h4i5j6',
    3.0, // 增加300%火焰伤害
    "multiply_total"
  )
  .modifyAttribute(
    'minecraft:generic.max_health', // 要修改的属性：最大生命值
    'd4e5f6a7-b8c9-0d1e-2f3-4a5b6c7d8e9f', // 唯一标识符 UUID
    120, // 增加120点最大生命值
    "addition" // 按最终值进行加法操作
  )
  .modifyAttribute(
    'minecraft:generic.armor', // 要修改的属性：护甲
    'b3c4d5e6-f7g8-h9i0-j1k2-l3m4n5o6p7q8', // 唯一标识符 UUID
    1.2, // 增加120%点护甲值
    "multiply_total" // 按最终值进行乘法操作
  )
  .modifyAttribute(
    'minecraft:generic.armor_toughness', // 要修改的属性：护甲韧性
    'a1b2c3d4-e5f6-7a8b-9c0d-e1f2g3h4i5j6', // 唯一标识符 UUID
    1.0, // 增加100%点护甲韧性
    "multiply_total" // 按最终值进行乘法操作
  )
  .modifyAttribute(
    'l2damagetracker:damage_reduction',
    'd4e5f6a7-b8c9-0d1e-2f3-4a5b6c7d8e9f',
    -0.2, // 负值表示减少
    "multiply_total"
  )
  .modifyAttribute(
    'l2damagetracker:explosion_damage',
    'b3c4d5e6-f7g8-h9i0-j1k2-l3m4n5o6p7q8',
    2.0, // 增加200%爆炸伤害
    "multiply_total"
  )
  .modifyAttribute(
    'minecraft:generic.movement_speed', // 要修改的属性：速度movement_speed
    'a1b2c3d4-e5f6-7a8b-9c0d-e1f2g3h4i5j6', // 唯一标识符 UUID
    0.15, // 增加 15% 的速度
    "multiply_total" // 按最终值进行乘法操作
  )
  .modifyAttribute(
    'l2damagetracker:crit_rate', // 要修改的属性：暴击率
    'd4e5f6a7-b8c9-0d1e-2f3-4a5b6c7d8e9f', // 唯一标识符 UUID
    '0.25', // 增加25%暴击率
    "addition" // 按最终值进行加法操作
  )
})


StartupEvents.registry('mob_effect', event => {
  event.create('xmsm:soularmor')
  .displayName('灵魂的庇护')
  .color(0x800080) // 效果粒子颜色设置为紫色
  .beneficial() // 归类为有益效果
  .modifyAttribute(
    'minecraft:generic.max_health', // 要修改的属性：最大生命值
    'b3c4d5e6-f7g8-h9i0-j1k2-l3m4n5o6p7q8', // 唯一标识符 UUID
    140, // 增加140点最大生命值
    "addition" // 按最终值进行加法操作
  )
  .modifyAttribute(
    'minecraft:generic.movement_speed', // 要修改的属性：速度movement_speed
    'a1b2c3d4-e5f6-7a8b-9c0d-e1f2g3h4i5j6', // 唯一标识符 UUID
    0.25, // 增加 25% 的速度
    "multiply_total" // 按最终值进行乘法操作
  )
  .modifyAttribute(
    'l2damagetracker:damage_reduction',
    'd4e5f6a7-b8c9-0d1e-2f3-4a5b6c7d8e9f',
    -0.15, // 负值表示减少
    "multiply_total"
  )
  .modifyAttribute(
    'l2damagetracker:crit_rate', // 要修改的属性：暴击率
    'b3c4d5e6-f7g8-h9i0-j1k2-l3m4n5o6p7q8', // 唯一标识符 UUID
    '0.3', // 增加30%暴击率
    "addition" // 按最终值进行加法操作
  )
  .modifyAttribute(
    'minecraft:generic.attack_speed', // 要修改的属性：攻击速度
    'a1b2c3d4-e5f6-7a8b-9c0d-e1f2g3h4i5j6', // 唯一标识符 UUID
    0.5, // 增加50%攻击速度
    "multiply_total" // 按最终值进行乘法操作
  )
  .modifyAttribute(
    'minecraft:generic.armor', // 要修改的属性：护甲
    'd4e5f6a7-b8c9-0d1e-2f3-4a5b6c7d8e9f', // 唯一标识符 UUID
    1.4, // 增加140%点护甲值
    "multiply_total" // 按最终值进行乘法操作
  )
  .modifyAttribute(
    'minecraft:generic.armor_toughness', // 要修改的属性：护甲韧性
    'b3c4d5e6-f7g8-h9i0-j1k2-l3m4n5o6p7q8', // 唯一标识符 UUID
    1.2, // 增加120%点护甲韧性
    "multiply_total" // 按最终值进行乘法操作
  )
  .modifyAttribute(
    'celestisynth:celestial_damage',
    'a1b2c3d4-e5f6-7a8b-9c0d-e1f2g3h4i5j6',
    2.0, // 增加200%天体伤害
    "multiply_total"
  )
})


StartupEvents.registry('mob_effect', event => {
  event.create('xmsm:dragonsteel_fire')
  .displayName('龙火焰的庇护')
  .color(0xFF8C00) // 效果粒子颜色设置为深橙色
  .beneficial() // 归类为有益效果
  .modifyAttribute(
    'l2damagetracker:fire_damage',
    'd4e5f6a7-b8c9-0d1e-2f3-4a5b6c7d8e9f',
    4.0, // 增加400%火焰伤害
    "multiply_total"
  )
  .modifyAttribute(
    'minecraft:generic.max_health', // 要修改的属性：最大生命值
    'b3c4d5e6-f7g8-h9i0-j1k2-l3m4n5o6p7q8', // 唯一标识符 UUID
    200, // 增加200点最大生命值
    "addition" // 按最终值进行加法操作
  )
  .modifyAttribute(
    'minecraft:generic.armor', // 要修改的属性：护甲
    'a1b2c3d4-e5f6-7a8b-9c0d-e1f2g3h4i5j6', // 唯一标识符 UUID
    2.0, // 增加200%点护甲值
    "multiply_total" // 按最终值进行乘法操作
  )
  .modifyAttribute(
    'minecraft:generic.armor_toughness', // 要修改的属性：护甲韧性
    'd4e5f6a7-b8c9-0d1e-2f3-4a5b6c7d8e9f', // 唯一标识符 UUID
    1.5, // 增加150%点护甲韧性
    "multiply_total" // 按最终值进行乘法操作
  )
  .modifyAttribute(
    'l2damagetracker:damage_reduction',
    'b3c4d5e6-f7g8-h9i0-j1k2-l3m4n5o6p7q8',
    -0.15, // 负值表示减少
    "multiply_total"
  )
  .modifyAttribute(
    'l2damagetracker:crit_rate', // 要修改的属性：暴击率
    'a1b2c3d4-e5f6-7a8b-9c0d-e1f2g3h4i5j6', // 唯一标识符 UUID
    '0.35', // 增加35%暴击率
    "addition" // 按最终值进行加法操作
  )
  .modifyAttribute(
    'l2damagetracker:crit_damage', // 要修改的属性：暴击伤害
    'd4e5f6a7-b8c9-0d1e-2f3-4a5b6c7d8e9f', // 唯一标识符 UUID
    '1.8', // 增加180%暴击伤害
    "addition" // 按最终值进行加法操作
  )
})

StartupEvents.registry('mob_effect', event => {
  event.create('xmsm:dragonsteel_ice')
  .displayName('龙冰霜的庇护')
  .color(0x1E90FF) // 效果粒子颜色设置为道奇蓝
  .beneficial() // 归类为有益效果
  .modifyAttribute(
    'l2damagetracker:damage_absorption',
    'b3c4d5e6-f7g8-h9i0-j1k2-l3m4n5o6p7q8',
    2.0, // 增加200%伤害吸收
    "multiply_total"
  )
  .modifyAttribute(
    'minecraft:generic.max_health', // 要修改的属性：最大生命值
    'a1b2c3d4-e5f6-7a8b-9c0d-e1f2g3h4i5j6', // 唯一标识符 UUID
    200, // 增加200点最大生命值
    "addition" // 按最终值进行加法操作
  )
  .modifyAttribute(
    'minecraft:generic.armor', // 要修改的属性：护甲
    'd4e5f6a7-b8c9-0d1e-2f3-4a5b6c7d8e9f', // 唯一标识符 UUID
    2.0, // 增加200%点护甲值
    "multiply_total" // 按最终值进行乘法操作
  )
  .modifyAttribute(
    'minecraft:generic.armor_toughness', // 要修改的属性：护甲韧性
    'b3c4d5e6-f7g8-h9i0-j1k2-l3m4n5o6p7q8', // 唯一标识符 UUID
    1.5, // 增加150%点护甲韧性
    "multiply_total" // 按最终值进行乘法操作
    )
    .modifyAttribute(
    'l2damagetracker:damage_reduction',
    'b3c4d5e6-f7g8-h9i0-j1k2-l3m4n5o6p7q8',
    -0.15, // 负值表示减少
    "multiply_total"
  )
  .modifyAttribute(
    'l2damagetracker:crit_rate', // 要修改的属性：暴击率
    'a1b2c3d4-e5f6-7a8b-9c0d-e1f2g3h4i5j6', // 唯一标识符 UUID
    '0.35', // 增加35%暴击率
    "addition" // 按最终值进行加法操作
  )
})

StartupEvents.registry('mob_effect', event => {
  event.create('xmsm:lunar_stone')
  .displayName('月影的庇护')
  .color(0xC0C0C0) // 效果粒子颜色设置为银色
  .beneficial() // 归类为有益效果
  .modifyAttribute(
    'minecraft:generic.speed', // 要修改的属性：速度movement_speed
    'd4e5f6a7-b8c9-0d1e-2f3-4a5b6c7d8e9f', // 唯一标识符 UUID
    0.2, // 增加 20% 的速度
    "multiply_total" // 按最终值进行乘法操作
  )
  .modifyAttribute(
    'l2damagetracker:magic_damage',
    'b3c4d5e6-f7g8-h9i0-j1k2-l3m4n5o6p7q8',
    0.5, // 增加50%魔法伤害
    "multiply_total"
  )
  .modifyAttribute(
    'minecraft:generic.max_health', // 要修改的属性：最大生命值
    'a1b2c3d4-e5f6-7a8b-9c0d-e1f2g3h4i5j6', // 唯一标识符 UUID
    20, // 增加20点最大生命值
    "addition" // 按最终值进行加法操作
  )
})

StartupEvents.registry('mob_effect', event => {
  event.create('xmsm:rouse')
  .displayName('神之力')
  .color(0xFF69B4) // 效果粒子颜色设置为热粉色
  .beneficial()
  .modifyAttribute(
    'minecraft:generic.attack_damage', // 要修改的属性：攻击伤害
    'a1b2c3d4-e5f6-7a8b-9c0d-e1f2g3h4i5j6', // 唯一标识符 UUID
    0.5, // 增加50%攻击力
    "multiply_total" // 按最终值进行乘法操作
  )
  .modifyAttribute(
    'slashblade:slashblade_damage',
    'b3c4d5e6-f7g8-h9i0-j1k2-l3m4n5o6p7q8',
    2.5, // 增加150%斩击伤害
    "multiply_total"
  )
  .modifyAttribute(
    'l2damagetracker:damage_reduction',
    'd4e5f6a7-b8c9-0d1e-2f3-4a5b6c7d8e9f',
    -0.2, // 负值表示减少
    "multiply_total"
  )
})