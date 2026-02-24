// 阻止右键点击Twilight Forest的Uncrafting Table
BlockEvents.rightClicked(event => {
    if (event.block.id === 'twilightforest:uncrafting_table') {
        event.cancel();
    }
});


// 移除所有ProjectE的配方
ServerEvents.recipes(event => {
    event.remove({mod: 'projecte'});
});

ServerEvents.recipes(event => {
    event.remove({output: 'bloodmagic:altar'});
    event.remove({id : 'primeval:day'});
    event.remove({id : 'legendblade:eiily'});
    event.remove({id : 'bloodmagic:hellforged_block'});
    event.remove({output: 'bloodmagic:ingot_hellforged'});
    event.remove({id : 'bloodmagic:largebloodstonebrick'});
    event.remove({output: 'draconicevolution:grinder'});
    event.remove({mod : 'fantasy_ending'});
    event.remove({id : 'slashblade:aeon'});
    event.remove({id : 'celestial_artifacts:prayer_crown'});
    event.remove({output: 'enchantinginfuser:advanced_enchanting_infuser'});
    event.remove({id : 'editenchanting:enchantment_edit_table'});
    event.remove({id: 'l2hostility:curse_of_pride'});
    event.remove({id: 'l2hostility:ring_of_reflection'});
    event.remove({output: 'goety_revelation:valettein'});
    event.remove({id: 'minecraft:lodestone'});
    event.remove({id: 'slashblade:chronos'});
    event.remove({id: 'yakumoblade:vergil'});
    event.remove({id: 'slashblade:nier'});
})
