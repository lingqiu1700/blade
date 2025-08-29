// 监听服务器配方事件---注释是ai写的
ServerEvents.recipes(event => {

  // 自定义合成配方：合成刷怪笼（Spawner）
  event.shaped(
      Item.of('minecraft:spawner'),  // 输出物品：刷怪笼
      [
          'ABA',  // 第一行：以A、B、A排列
          'BCB',  // 第二行：B、C、B
          'ABA'   // 第三行：A、B、A
      ],
      {
          A: 'born_in_chaos_v1:ethereal_spirit',  // A位材料：以太之灵（来自born_in_chaos_v1模组）
          B: 'goety:cursed_cage',                 // B位材料：诅咒笼（来自goety模组）
          C: 'l2complements:soul_flame'           // C位材料：灵魂之火（来自l2complements模组）
      }
  )

  // 自定义合成配方：合成凋零骷髅头颅（Wither Skeleton Skull）
  event.shaped(
      Item.of('minecraft:wither_skeleton_skull'),  // 输出物品：凋零骷髅头
      [
          'DDD',  // 第一行：D、D、D
          'EFE',  // 第二行：E、F、E
          'DDD'   // 第三行：D、D、D
      ],
      {
          D: 'minecraft:coal_block',      // D位材料：煤炭块
          E: 'minecraft:diamond',         // E位材料：钻石
          F: 'iceandfire:witherbone'       // F位材料：凋零之骨（来自冰与火模组）
      }
  )


  event.shaped(
    Item.of('xmsm:goldshi'),  //输出物品：金屎
    [
        'AAA',
        'ABA',
        'AAA'
    ],
    {
        A: 'minecraft:gold_ingot',  // A位材料：金锭
        B: 'alexscaves:guano'  // B位材料：屎
    }
  )

  event.shaped(
    Item.of('xmsm:jinghua'),  // 输出物品：答辩精华
    [
        'AAA',
        'AAA',
        'AAA'
    ],
    {
        A: 'alexscaves:guano'  // A位材料：屎
    }
  )

  event.shaped(
    Item.of('xmsm:jinghua'),  // 输出物品：答辩精华
    [
        'AAA',
        'AAA',
        'AAA'
    ],
    {
        A: 'xmsm:dabian'  // B位材料：屎
    }
  )

  event.shaped(
    Item.of('xmsm:dabian'),  // 输出物品：大便
    [
        'AAA',
        ' B ',
        '   '
    ],
    {
        A: 'minecraft:bone_meal',  // A位材料：骨粉
        B: 'minecraft:soul_soil'  // B位材料：灵魂土
    }
  )

    event.shaped(
    Item.of('xmsm:goldshi'),  //输出物品：金屎
    [
        'AAA',
        'ABA',
        'AAA'
    ],
    {
        A: 'minecraft:gold_ingot',  // A位材料：金锭
        B: 'xmsm:dabian'  // B位材料：屎
    }
  )

  event.shaped(
    Item.of('bloodmagic:altar'),  // 输出物品：血魔法祭坛
    [
        'A A',
        'ABA',
        'CCC'
    ],
    {
        A: '#forge:stone',
        B: 'xmsm:bloodessence',
        C: 'minecraft:gold_block'  // C位材料：金块
    }
  )

  event.shaped(
    Item.of('projecte:dm_helmet'),  // 输出物品：暗物质头盔
    [
        'AAA',
        'ABA',
        '   '
    ],
    {
        A: 'goety:dark_ingot',
        B: 'projecte:dark_matter'  // B位材料：暗物质
    }
  )

  event.shaped(
    Item.of('projecte:dm_chestplate'),  // 输出物品：暗物质胸甲
    [
        'ABA',
        'AAA',
        'AAA'
    ],
    {
        A: 'goety:dark_ingot',  // A位材料：暗金属锭
        B: 'projecte:dark_matter'  // B位材料：暗物质
    }
  )

  event.shaped(
    Item.of('projecte:dm_leggings'),  // 输出物品：暗物质护腿
    [
        'AAA',
        'ABA',
        'A A'
    ],
    {
        A: 'goety:dark_ingot',  // A位材料：暗金属锭
        B: 'projecte:dark_matter'  // B位材料：暗物质
    }
  )

  event.shaped(
    Item.of('projecte:dm_boots'),  // 输出物品：暗物质靴子
    [
        '   ',
        'ABA',
        'A A'
    ],
    {
        A: 'goety:dark_ingot',  // A位材料：暗金属锭
        B: 'projecte:dark_matter'  // B位材料：暗物质
    }
  )

  event.shaped(
    Item.of('foolish:stellar_upgrade_template'),  // 输出物品：星辰升级模板
    [
        'AAA',
        'ABA',
        'AAA'
    ],
    {
        A: 'foolish:stardust',  // A位材料：星辰
        B: 'foolish:hoolowstone'  // B位材料：空心石
    }
  )

  event.shaped(
    Item.of('bloodmagic:blankrune', 4),
    [
        'AAA',
        'ABA',
        'AAA'
    ],
    {
        A: '#forge:stone',  // A位材料：石头
        B: 'xmsm:bloodessence'  // B位材料：血精华
    }
  )

  event.shaped(
    Item.of('bloodmagic:speedrune', 2),
    [
        'ABA',
        'CDC',
        'ABA'
    ],
    {
        A: '#forge:stone',  // A位材料：石头
        B: 'bloodmagic:blankrune',  // B位材料：空白符文
        D: 'xmsm:bloodessence',  // D位材料：血精华
        C: 'minecraft:sugar'  // C位材料：糖
    }
  )

  event.shaped(
    Item.of('bloodmagic:sacrificerune', 2),
    [
        'ABA',
        'CDC',
        'ABA'
    ],
    {
        A: '#forge:stone',  // A位材料：石头
        B: 'bloodmagic:blankrune',  // B位材料：空白符文
        D: 'xmsm:bloodessence',  // D位材料：血精华
        C: 'minecraft:gold_ingot'  // C位材料：金锭
    }
  )

  event.shaped(
    Item.of('bloodmagic:selfsacrificerune', 2),
    [
        'ABA',
        'CDC',
        'ABA'
    ],
    {
        A: '#forge:stone',  // A位材料：石头
        B: 'bloodmagic:blankrune',  // B位材料：空白符文
        D: 'xmsm:bloodessence',  // D位材料：血精华
        C: 'minecraft:glowstone_dust'  // C位材料：萤石粉
    }
  )

  event.shaped(
    Item.of('bloodmagic:dislocationrune', 2),
    [
        'ABA',
        'CDC',
        'ABA'
    ],
    {
        A: '#forge:stone',  // A位材料：石头
        B: 'bloodmagic:blankrune',  // B位材料：空白符文
        D: 'xmsm:bloodessence',  // D位材料：血精华
        C: 'minecraft:water_bucket'  // C位材料：水桶
    }
  )

  event.shaped(
    Item.of('bloodmagic:altarcapacityrune', 2),
    [
        'ABA',
        'CDC',
        'ABA'
    ],
    {
        A: '#forge:stone',  // A位材料：石头
        B: 'bloodmagic:blankrune',  // B位材料：空白符文
        D: 'xmsm:bloodessence',  // D位材料：血精华
        C: 'minecraft:bucket'  // C位材料：桶
    }
  )

  // 自定义熔炉熔炼配方：腐肉烧制成皮革
  event.smelting(
      'minecraft:leather',        // 输出物品：皮革
      'minecraft:rotten_flesh'    // 输入物品：腐肉
  )

  event.smelting(
    'minecraft:wither_skeleton_skull',        // 输出物品：凋零骷髅头颅
    'minecraft:skeleton_skull'    // 输入物品：骷髅头颅
  )

  event.shapeless(
    '2x minecraft:crying_obsidian', // 输出物品：2个哭泣的黑曜石
    ['minecraft:obsidian', 'minecraft:amethyst_shard','minecraft:obsidian'] // 输入物品：黑曜石和紫水晶碎片
  )

  event.shapeless(
    '4x born_in_chaos_v1:holiday_candy', // 输出物品：4个节日糖果
    ['minecraft:sugar', 'minecraft:sugar','born_in_chaos_v1:marigolds'] // 输入物品：糖和金盏花
  )

  event.shapeless(
    'xmsm:ibin',
    ['xmsm:goldshi','xmsm:goldshi','xmsm:goldshi','xmsm:goldshi','xmsm:goldshi','xmsm:goldshi','xmsm:goldshi'] // 输入物品：金屎
  )

    event.shapeless(
        '8x bloodmagic:largebloodstonebrick',
        ['#forge:stone', 'xmsm:bloodessence'] // 输入物品：石头和血精华
    )

  event.smithing(
    'projecte:dark_matter', // 输出物品：暗物质
    'foolish:stellar_upgrade_template', // 底物品：星辰升级模板
    'xmsm:dark_matter', // 输入物品：未完成的暗物质
    'foolish:star_shard'// 消耗物品：星之碎片
  )

  event.smithing(
    'projecte:rm_helmet', // 输出物品：红物质头盔
    'xmsm:bloodmoban', // 底物品：血模板
    'projecte:dm_helmet', // 输入物品：暗物质头盔
    'projecte:red_matter' // 消耗物品：红物质
  )

  event.smithing(
    'projecte:rm_chestplate', // 输出物品：红物质胸甲
    'xmsm:bloodmoban', // 底物品：血模板
    'projecte:dm_chestplate', // 输入物品：暗物质胸甲
    'projecte:red_matter' // 消耗物品：红物质
    )


    event.smithing(
    'projecte:rm_leggings', // 输出物品：红物质护腿
    'xmsm:bloodmoban', // 底物品：血模板
    'projecte:dm_leggings', // 输入物品：暗物质护腿
    'projecte:red_matter' // 消耗物品：红物质
    )

    event.smithing(
    'projecte:rm_boots', // 输出物品：红物质靴
    'xmsm:bloodmoban', // 底物品：血模板
    'projecte:dm_boots', // 输入物品：暗物质靴
    'projecte:red_matter' // 消耗物品：红物质
    )

      event.custom(
        {
            "type":"goety:ritual",
            "ritual_type":"goety:craft",
            "activation_item":{
                "item":"xmsm:ibin"
            },
            "craftType":"forge",
            "soulCost":100,
            "duration":20,
            "ingredients":[
                    {"item": "xmsm:jinghua"},
                    {"item": "xmsm:jinghua"},
                    {"item": "xmsm:jinghua"},
                    {"item": "xmsm:jinghua"},
                    {"item": "xmsm:jinghua"},
                    {"item": "xmsm:jinghua"},
                    {"item": "xmsm:jinghua"},
                    {"item": "xmsm:jinghua"},
                    {"item": "xmsm:jinghua"},
                    {"item": "xmsm:jinghua"},
                    {"item": "xmsm:jinghua"},
                    {"item": "xmsm:jinghua"}
            ],
        "result":{
            "item": "xmsm:shi"
        }
    })
})



ServerEvents.recipes(event => {
    event.shaped(
    Item.of('xmsm:bloodclot'),// 输出物品：血块
    [
        'AAA',
        'AAA',
        'AAA'
    ],
    {
        A: 'xmsm:coagulatedclot',// A位材料：凝血块
    }
  )
});
