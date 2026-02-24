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
          A: 'celestial_artifacts:the_end_dust',  // A位材料：
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

  event.shaped(
    Item.of('lkartifacts:knight_upgrade_smithing_template'),
    [
      'ABA',
      'ACA',
      'AAA'
    ],
    {
      A: 'minecraft:iron_block',
      B: '#forge:stone',
      C: 'minecraft:diamond',
    }
  )

  event.shaped(
    Item.of('lkartifacts:slayer_upgrade_smithing_template'),
    [
      'ABA',
      'ACA',
      'AAA'
    ],
    {
      A: 'minecraft:diamond_block',
      B: '#forge:stone',
      C: 'minecraft:netherite_ingot',
    }
  )

  event.shaped(
    Item.of('lkartifacts:lava_upgrade_smithing_template'),
    [
      'ABA',
      'ACA',
      'AAA'
    ],
    {
      A: 'celestial_core:fire_essence',
      B: '#forge:stone',
      C: 'minecraft:diamond',
    }
  )

  event.shaped(
    Item.of('lkartifacts:broken_star_small'),
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'minecraft:diamond',
      B: 'minecraft:iron_nugget',
    }
  )

  event.shaped(
    Item.of('lkartifacts:broken_star_long'),
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'minecraft:diamond_block',
      B: 'minecraft:iron_nugget',
    }
  )

  event.shaped(
    Item.of('lkartifacts:broken_star_big'),
    [
      '   ',
      ' AA',
      ' AA'
    ],
    {
      A: 'lkartifacts:broken_star_long',
    }
  )

  event.shaped(
    Item.of('fantasy_ending:the_domain_of_fade'),
    [
      'ABA',
      'ACA',
      'ABA'
    ],
    {
      A: 'fantasy_ending:fantasy_ending_ingot',
      B: 'fantasy_ending:fantasy_factor',
      C: 'celestial_artifacts:prayer_crown'
    }
  )

  event.shaped(
    Item.of('celestial_artifacts:prayer_crown'),
    [
      'A A',
      'ABA',
      'CDC'
    ],
    {
      A: 'origincore:shine_ingot',
      B: 'minecraft:diamond_block',
      C: 'origincore:the_sky_ingot',
      D: 'celestial_artifacts:cross_necklace'
    }
  )

  event.shaped(
    Item.of('l2hostility:ring_of_reflection'),
    [
      'ABC',
      'DED',
      'FBG'
    ],
    {
      A: 'minecraft:dragon_breath',
      B: 'lkartifacts:dragon_breath_powder',
      C: 'l2hostility:slowness',
      D: 'l2hostility:weakness',
      E: 'l2hostility:wither',
      F: 'l2hostility:levitation',
      G: 'l2hostility:blindness'
    }
  )

  event.shaped(
    Item.of('celestial_artifacts:red_ruby_bracelet'),
    [
      ' A ',
      'ABA',
      ' C '
    ],
    {
      A: 'minecraft:nether_brick',
      B: 'celestial_core:treasure_fragment',
      C: 'goety:soul_ruby'
    }
  )

  event.shaped(
    Item.of('minecraft:lodestone'),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: '#forge:stone',
      B: 'goety:soul_ruby'
    }
  )

  event.shaped(
    Item.of('fantasy_ending:uom_spawn_egg'),
    [
      'ABC',
      'DEF',
      'GHI'
    ],
    {
      A: 'cataclysm:gauntlet_of_guard',
      B: 'cataclysm:remnant_skull',
      C: 'cataclysm:soul_render',
      D: 'cataclysm:abyssal_egg',
      E: 'fantasy_ending:fantasy_factor',
      F: 'fantasy_ending:fantasy_ending_ingot',
      G: 'cataclysm:the_incinerator',
      H: 'goety_revelation:revelation',
      I: 'goety_revelation:ascension_halo'
    }
  )

  event.shaped(
    Item.of('enigmaticlegacy:darkest_scroll'),
    [
      'ABA',
      'ACA',
      'AAA'
    ],
    {
      A: 'minecraft:paper',
      B: 'projecte:dark_matter',
      C: 'enigmaticlegacy:darkest_scroll'
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
    'fantasy_ending:fantasy_ending_ingot',
    ['enigmaticlegacy:evil_ingot','cataclysm:witherite_ingot','cataclysm:cursium_ingot','cataclysm:ignitium_ingot','iceandfire:dragonsteel_fire_ingot','iceandfire:dragonsteel_ice_ingot','iceandfire:dragonsteel_lightning_ingot','enigmaticlegacy:etherium_ingot','gobber2:gobber2_ingot_end']
  )

  event.shapeless(
    '2x minecraft:crying_obsidian', // 输出物品：2个哭泣的黑曜石
    ['minecraft:obsidian', 'minecraft:amethyst_shard','minecraft:obsidian'] // 输入物品：黑曜石和紫水晶碎片
  )

  event.shapeless(
    'xmsm:ibin',
    ['xmsm:goldshi','xmsm:goldshi','xmsm:goldshi','xmsm:goldshi','xmsm:goldshi','xmsm:goldshi','xmsm:goldshi'] // 输入物品：金屎
  )

  event.shapeless(
    '10x xmsm:yinhe',
    ['xmsm:shi']
  )

  event.shapeless(
    '10x xmsm:yinhe',
    ['xmsm:guanglili']
  )

  event.shapeless(
    '10x xmsm:yinhe',
    ['xmsm:anshuang']
  )

  event.shapeless(
    '10x xmsm:yinhe',
    ['xmsm:anlong']
  )

  event.shapeless(
    '10x xmsm:yinhe',
    ['xmsm:guangheipi']
  )

  event.shapeless(
    '10x xmsm:yinhe',
    ['xmsm:shan']
  )

  event.shapeless(
    '10x xmsm:yinhe',
    ['xmsm:dage']
  )

  event.shapeless(
    '10x xmsm:yinhe',
    ['xmsm:guangma']
  )

  event.shapeless(
    '10x xmsm:yinhe',
    ['xmsm:glj']
  )

  event.shapeless(
    '10x xmsm:yinhe',
    ['xmsm:jiaoyue']
  )

  event.shapeless(
    '10x xmsm:yinhe',
    ['xmsm:buqu']
  )

    event.shapeless(
        '8x bloodmagic:largebloodstonebrick',
        ['#forge:stone', 'xmsm:bloodessence'] // 输入物品：石头和血精华
    )

    event.shapeless(
      'xmsm:unclean_blood_essence',
      ['xmsm:bloodessence','goety:unholy_blood']
    )
    .keepIngredient('goety:unholy_blood')

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

    event.custom(
      {
        "type": "goety:ritual", //仪式配方
        "ritual_type": "goety:craft", //制作
        "activation_item": {
          "item": "alexsmobs:blood_sac",
        },
        "craftType": "forge", //制作类型
        "soulCost": 50, //灵魂消耗
        "duration": 20, //持续时间
        "ingredients": [
          {
            "item": "xmsm:bloodclot"
          },
          {
            "item": "xmsm:bloodclot"
          },
          {
            "item": "xmsm:bloodclot"
          },
          {
            "item": "xmsm:bloodclot"
          },
          {
            "item": "xmsm:bloodclot"
          },
          {
            "item": "xmsm:bloodclot"
          },
          {
            "item": "xmsm:bloodclot"
          },
          {
            "item": "xmsm:bloodclot"
          },
          {
            "item": "xmsm:bloodclot"
          },
        ],
        "result": {
          "item": "xmsm:bloodessence"
        }
      }
    )
})

BlockEvents.rightClicked(event => {
    // 避免副手触发两次
    if (event.hand == "OFF_HAND") return;

    let player = event.getPlayer();
    if (player == null) return;

    let item = event.getItem();

    // 判断手中物品 + 被右键的方块
    if (item.id === 'xmsm:unclean_blood_essence'
        && event.block.id === 'gobber2:gobber2_block_end') {

        item.shrink(1);

        //破坏方块并掉落 bloodmagic:dungeon_metal
        event.block.popItem('bloodmagic:dungeon_metal');

        event.level.destroyBlock(event.block.pos, false);
    }
});





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


ServerEvents.recipes(event => {
  // 合成配方：primeval:day
  event.custom({
    "type": "slashblade:shaped_blade",
    "blade": "primeval:day", // 合成后刀的内部ID
    "category": "equipment",
    "key": {
      // A - primeval:real
      "A": {
        "type": "slashblade:blade",
        "item": "slashblade:slashblade",
        "request": {
          "kill": 250,
          "name": "primeval:real",
          "proud_soul": 2000,
          "refine": 7
        }
      },
      // B - primeval:calendar_system
      "B": {
        "type": "slashblade:blade",
        "item": "slashblade:slashblade",
        "request": {
          "kill": 250,
          "name": "primeval:calendar_system",
          "proud_soul": 2000,
          "refine": 7
        }
      },
      // C - primeval:speak
      "C": {
        "type": "slashblade:blade",
        "item": "slashblade:slashblade",
        "request": {
          "kill": 250,
          "name": "primeval:speak",
          "proud_soul": 2000,
          "refine": 7
        }
      },
      // D - primeval:value
      "D": {
        "type": "slashblade:blade",
        "item": "slashblade:slashblade",
        "request": {
          "kill": 250,
          "name": "primeval:value",
          "proud_soul": 2000,
          "refine": 7
        }
      },
      // E - primeval:rule
      "E": {
        "type": "slashblade:blade",
        "item": "slashblade:slashblade",
        "request": {
          "kill": 250,
          "name": "primeval:rule",
          "proud_soul": 2000,
          "refine": 7
        }
      },
      // F - primeval:significance
      "F": {
        "type": "slashblade:blade",
        "item": "slashblade:slashblade",
        "request": {
          "kill": 250,
          "name": "primeval:significance",
          "proud_soul": 2000,
          "refine": 7
        }
      },
      // G - primeval:dignity
      "G": {
        "type": "slashblade:blade",
        "item": "slashblade:slashblade",
        "request": {
          "kill": 250,
          "name": "primeval:dignity",
          "proud_soul": 2000,
          "refine": 7
        }
      },
      // H - 龙蛋
      "H": {
        "item": "fantasy_ending:fantasy_ending_ingot"
      },
      // V - primeval:revelation
      "V": {
        "type": "slashblade:blade",
        "item": "slashblade:slashblade",
        "request": {
          "kill": 7,
          "name": "primeval:revelation",
          "proud_soul": 7000,
          "refine": 7
        }
      }
    },
    "pattern": [
      "CDE",
      "BHF",
      "AVG"
    ],
    // 结果必须是 slashblade:slashblade，刀的实际属性由 "blade" 字段决定
    "result": {
      "item": "slashblade:slashblade"
    },
    "show_notification": true
  })

  // 合成配方：aeon
  event.custom({
    "type": "slashblade:shaped_blade",
    "blade": "slashblade:aeon", // 合成后刀的内部ID
    "category": "equipment",
    "key": {
      "A": {
        "type": "slashblade:blade",
        "item": "slashblade:slashblade",
        "request": {
          "kill": 35000,
          "name": "legendblade:nihilbxex",
          "proud_soul": 1500000,
          "refine": 150
        }
      },
      "B": {
        "item": "goety_revelation:ascension_halo"
      },
      "C": {
        "type": "slashblade:blade",
        "item": "slashblade:slashblade",
        "request": {
          "kill": 50000,
          "name": "prinegorerouse:protogenoi_blade",
          "proud_soul": 4000000,
          "refine": 500
        }
      },
      "D": {
        "item": "enigmaticlegacy:the_cube"
      },
      "E":{
        "item": "fantasy_ending:the_domain_of_fade"
      },
      "F": {
        "type": "slashblade:blade",
        "item": "slashblade:slashblade",
        "request": {
          "kill": 15000,
          "name": "primeval:day",
          "proud_soul": 600000,
          "refine": 60
        }
      },
      "G": {
        "type": "slashblade:blade",
        "item": "yakumoblade:slashblade",
        "request": {
          "kill": 20000,
          "name": "yakumoblade:dragonhexagram",
          "proud_soul": 800000,
          "refine": 80
        }
      },
      "H": {
        "item": "celestial_artifacts:abyss_will_badge"
      },
      "V": {
        "type": "slashblade:blade",
        "item": "slashblade:slashblade",
        "request": {
          "kill": 10000,
          "name": "primeval:miracle",
          "proud_soul": 300000,
          "refine": 30
        }
      },
    },
    "pattern":[
      "DEH",
      "BCF",
      "AVG"
    ],
    "result": {
      "item": "slashblade:slashblade"
    },
    "show_notification": true
  })

  event.custom({
    "type": "slashblade:shaped_blade",
    "blade": "slashblade:aeon", // 合成后刀的内部ID
    "category": "equipment",
    "key": {
      "A": {
        "type": "slashblade:blade",
        "item": "slashblade:slashblade",
        "request": {
          "kill": 35000,
          "name": "legendblade:nihilbxex",
          "proud_soul": 1500000,
          "refine": 150
        }
      },
      "B": {
        "item": "goety_revelation:ascension_halo"
      },
      "C": {
        "type": "slashblade:blade",
        "item": "slashblade:slashblade",
        "request": {
          "kill": 50000,
          "name": "prinegorerouse:protogenoi_blade",
          "proud_soul": 4000000,
          "refine": 500
        }
      },
      "D": {
        "item": "enigmaticlegacy:the_cube"
      },
      "E":{
        "item": "fantasy_ending:the_domain_of_fade"
      },
      "F": {
        "type": "slashblade:blade",
        "item": "slashblade:slashblade",
        "request": {
          "kill": 15000,
          "name": "primeval:day",
          "proud_soul": 600000,
          "refine": 60
        }
      },
      "G": {
        "type": "slashblade:blade",
        "item": "yakumoblade:slashblade",
        "request": {
          "kill": 20000,
          "name": "yakumoblade:foxhexagram",
          "proud_soul": 800000,
          "refine": 80
        }
      },
      "H": {
        "item": "celestial_artifacts:abyss_will_badge"
      },
      "V": {
        "type": "slashblade:blade",
        "item": "slashblade:slashblade",
        "request": {
          "kill": 10000,
          "name": "primeval:miracle",
          "proud_soul": 300000,
          "refine": 30
        }
      },
    },
    "pattern":[
      "DEH",
      "BCF",
      "AVG"
    ],
    "result": {
      "item": "slashblade:slashblade"
    },
    "show_notification": true
  })

  // 合成配方：真阎魔刀
  event.custom({
    "type": "slashblade:shaped_blade",
    "blade": "yakumoblade:vergil",
    "category": "equipment",
    "key": {
      "A": {
        "item": "yakumoblade:umle"
      },
      "B": {
        "item": "slashblade:proudsoul_trapezohedron"
      },
      "C": {
        "item": "minecraft:nether_star"
      },
      "D": {
        "item": "minecraft:netherite_ingot"
      },
      "E": {
        "item": "minecraft:dragon_breath"
      },
      "F": {
        "type": "slashblade:blade",
        "item": "slashblade:slashblade",
        "request": {
          "kill": 2000,
          "name": "slashblade:yamato",
          "proud_soul": 40000,
          "refine": 5
        }
      }
    },
    "pattern": [
      "ABC",
      "DEB",
      "FDA"
    ],
    "result": {
      "item": "slashblade:slashblade"
    },
    "show_notification": true
  })

  // 合成配方：尼尔
  event.custom({
  "type": "slashblade:shaped_blade",
  "blade": "slashblade:nier",
  "category": "equipment",
  "key": {
    "B": {
      "type": "slashblade:blade",
      "item": "yakumoblade:slashblade",
      "request": {
        "kill": 4000,
        "name": "yakumoblade:vergil",
        "proud_soul": 50000,
        "refine": 100
      }
    },
    "P": {
      "item": "slashblade:proudsoul_trapezohedron"
    },
    "S": {
      "item": "mowziesmobs:ice_crystal"
    },
    "C": {
      "item": "foolish:sacilic_heart"
    },
    "D": {
      "item": "mowziesmobs:wrought_axe"
    },
    "E": {
      "item": "mowziesmobs:sol_visage"
    }
  },
  "pattern": [
    "PSP",
    "CBD",
    "PEP"
  ],
  "result": {
    "item": "slashblade:slashblade"
  },
  "show_notification": true
})
})