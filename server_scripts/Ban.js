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
})