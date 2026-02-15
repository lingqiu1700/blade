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
})
