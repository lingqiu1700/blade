ServerEvents.recipes(event => {
    event.custom(
        {
          "type": "goety:ritual", //仪式配方
          "ritual_type": "goety:summon", //召唤
          "activation_item": {
            "item": "born_in_chaos_v1:evil_carved_pumpkin" //邪恶南瓜
          },
          "craftType": "sabbath", //仪式类型
          "entity_to_summon": "born_in_chaos_v1:lord_pumpkinhead", //召唤的实体(这里是南瓜领主)
          "soulCost": 100, //每秒灵魂消耗
          "duration": 10, //持续时间
          "ingredients": [
            {
              "item": "born_in_chaos_v1:orbofthe_summoner"  //材料
            },
            {
              "item": "born_in_chaos_v1:transmuting_elixir" 
            },
            {
              "item": "born_in_chaos_v1:holiday_candy"
            },
            {
              "item": "born_in_chaos_v1:holiday_candy"
            }
          ],
          "result": {
            "item": "goety:jei_dummy/none" //不要管这个
          }
        })
    
    event.custom(
      {
        "type": "goety:ritual", //仪式配方
        "ritual_type": "goety:summon", //召唤
        "activation_item": {
          "item": "callfromthedepth_:deadblindsoul" //死盲灵魂
        },
        "craftType": "sabbath", //仪式类型
        "entity_to_summon": "callfromthedepth_:agonysoul", //召唤的实体
        "soulCost": 200, //每秒灵魂消耗 
        "duration": 30, //持续时间
        "ingredients": [
          {
            "item": "callfromthedepth_:fullsoul"  //材料
          },
          {
            "item": "callfromthedepth_:energyinfernopowder" 
          },
          {
            "item": "callfromthedepth_:energyinfernopowder"
          },
          {
            "item": "callfromthedepth_:sculkhearth"
          }
        ],
        "result": {
          "item": "goety:jei_dummy/none" //不要管这个
        }
      }
    )
    
    event.custom(
      {
        "type": "goety:ritual", //仪式配方
        "ritual_type": "goety:summon", //召唤
        "activation_item": {
          "item": "soulsweapons:withered_demon_heart" 
        },
        "craftType": "sabbath", //仪式类型
        "entity_to_summon": "callfromthedepth_:deepdarkestspawn", //召唤的实体
        "soulCost": 100, //每秒灵魂消耗
        "duration": 10, //持续时间
        "ingredients": [
          {
            "item": "callfromthedepth_:soulingot"  //材料
          },
          {
            "item": "callfromthedepth_:depth" 
          },
          {
            "item": "callfromthedepth_:soulingot"
          },
          {
            "item": "enigmaticlegacy:soul_crystal"
          }
        ],
        "result": {
          "item": "goety:jei_dummy/none" //不要管这个
        }
      }
    )

    event.custom(
      {
        "type": "goety:ritual", //仪式配方
        "ritual_type": "goety:summon", //召唤
        "activation_item": {
          "item": "irons_spellbooks:wayward_compass" //激活物品
        },
        "craftType": "sabbath", //仪式类型
        "entity_to_summon": "irons_spellbooks:dead_king", //召唤的实体(这里是死王)
        "soulCost": 300, //每秒灵魂消耗
        "duration": 60, //持续时间
        "ingredients": [
          {
            "item": "twilightforest:alpha_yeti_trophy"
          },
          {
            "item": "twilightforest:naga_trophy"
          },
          {
            "item": "twilightforest:lich_trophy"
          },
          {
            "item": "twilightforest:minoshroom_trophy"
          },
          {
            "item": "twilightforest:snow_queen_trophy"
          },
          {
            "item": "twilightforest:ur_ghast_trophy"
          },
          {
            "item": "twilightforest:hydra_trophy"
          },
          {
            "item": "twilightforest:knight_phantom_trophy"
          }
        ],
        "result": {
          "item": "goety:jei_dummy/none" //不要管这个
        }
      }
    )

    event.custom(
      {
        "type": "goety:ritual", //仪式配方
        "ritual_type": "goety:craft", //制作
        "activation_item":{
          "item": "projecte:dark_matter" //激活物品
        },
        "craftType":"forge", //制作类型
        "soulCost":100, //灵魂消耗
        "duration":200, //持续时间
        "ingredients":[
          {"item": "xmsm:bloodessence"}, //血精华
          {"item": "xmsm:bloodessence"},
          {"item": "xmsm:bloodessence"},
          {"item": "xmsm:bloodessence"},
          {"item": "xmsm:bloodessence"},
          {"item": "xmsm:bloodessence"},
        ],
        "result":{
          "item": "projecte:red_matter" //输出物品
        }
      }
    )

    event.custom(
      {
        "type": "goety:ritual", //仪式配方
        "ritual_type": "goety:craft", //制作
        "activation_item": {
          "item": "minecraft:nether_star" //激活物品
        },
        "craftType": "forge", //制作类型
        "soulCost": 200, //灵魂消耗
        "duration": 20, //持续时间
        "ingredients": [
          {"item": "celestial_core:warden_sclerite"}, //输入物品
          {"item": "minecraft:sculk_shrieker"},
          {"item": "goety:dark_ingot"},
          {"item": "celestial_core:warden_sclerite"}, //输入物品
          {"item": "minecraft:sculk_shrieker"},
          {"item": "goety:dark_ingot"},
          {"item": "celestial_core:warden_sclerite"}, //输入物品
          {"item": "minecraft:sculk_shrieker"},
          {"item": "goety:dark_ingot"},
        ],
        "result": {
          "item": "xmsm:dark_matter" //输出物品
        }
      }
    )
})