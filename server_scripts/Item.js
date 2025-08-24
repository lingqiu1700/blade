EntityEvents.death("minecraft:phantom", event => {
    if(event.source.actual.isPlayer()) {
      let killer = event.getSource()
      let curios =  killer.player.nbt.ForgeCaps['curios:inventory']
      if(curios.toString().contains('l2hostility:charm_of_looting_2')) {
        killer.player.give("l2complements:captured_wind")
      }
    }
  })

  EntityEvents.death("soulsweapons:day_stalker", event => {
    if(event.source.actual.isPlayer()) {
      let killer = event.getSource()
      let curios =  killer.player.nbt.ForgeCaps['curios:inventory']
      if(curios.toString().contains('enigmaticlegacy:cursed_ring')){
      if(curios.toString().contains('l2hostility:charm_of_looting_3')) {
        killer.player.give("enigmaticlegacy:angel_blessing")
      }
    }
  }
  })

  EntityEvents.death("soulsweapons:night_prowler",event =>{
    if(event.source.actual.isPlayer()) {
      let killer = event.getSource()
      let curios =  killer.player.nbt.ForgeCaps['curios:inventory']
      if(curios.toString().contains('enigmaticlegacy:cursed_ring')){
        if(curios.toString().contains('l2hostility:charm_of_looting_3')){
          killer.player.give("enigmaticlegacy:void_pearl")
        }
      }
    }
  })

  EntityEvents.death("foolish:pyre",event =>{
    if(event.source.actual.isPlayer()) {
      let killer = event.getSource()
      let curios =  killer.player.nbt.ForgeCaps['curios:inventory']
      if(curios.toString().contains('enigmaticlegacy:cursed_ring')){
        if(curios.toString().contains('l2hostility:charm_of_looting_3')){
          killer.player.give("enigmaticlegacy:blazing_core")
        }
      }
    }
  })