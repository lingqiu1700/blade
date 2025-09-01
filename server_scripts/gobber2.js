ServerEvents.recipes((event) => {
    event.remove({output: 'gobber2:gobber2_glob'});
    event.remove({output: 'gobber2:gobber2_glob_nether'});
    event.remove({output: 'gobber2:gobber2_glob_end'});
    event.remove({output: 'gobber2:gobber2_ingot_nether'});
    event.remove({output: 'gobber2:gobber2_ingot_end'});
    event.remove({output: 'gobber2:gobber2_links_end'});
    event.remove({output: 'origincore:ender_ingot'});
    event.remove({output: 'gobber2:gobber2_helmet_nether'});
    event.remove({output: 'gobber2:gobber2_chestplate_nether'});
    event.remove({output: 'gobber2:gobber2_leggings_nether'});
    event.remove({output: 'gobber2:gobber2_boots_nether'});
    event.remove({output: 'gobber2:gobber2_gooey_apple'});
    event.remove({output: 'gobber2:gobber2_goo'});
    event.remove({output: 'gobber2:gobber2_gooey_bread'});
    event.remove({output: 'gobber2:gobber2_gooey_beef'});
    event.remove({output: 'gobber2:gobber2_gooey_beefstew'});
    event.remove({output: 'gobber2:gobber2_gooey_apple_nether'});
    event.remove({output: 'gobber2:gobber2_goo_nether'});
    event.remove({output: 'gobber2:gobber2_gooey_bread_nether'});
    event.remove({output: 'gobber2:gobber2_gooey_beef_nether'});
    event.remove({output: 'gobber2:gobber2_gooey_beefstew_nether'});
    event.remove({output: 'gobber2:gobber2_foo'});
    event.remove({output: 'gobber2:gobber2_foo_nether'});
    event.remove({output: 'gobber2:gobber2_foo_end'});

    event.smelting(
        'gobber2:gobber2_glob',
        'gobber2:gobber2_globette'
    )

    event.smelting(
        'gobber2:gobber2_glob_nether',
        'gobber2:gobber2_globette_nether'
    )

    event.smelting(
        'gobber2:gobber2_glob_end',
        'gobber2:gobber2_globette_end'
    )

    event.shaped(
        Item.of('gobber2:gobber2_ingot_nether', 3),
        [
            'AB ',
            'BC ',
            '   '
        ],
        {
            A: 'gobber2:gobber2_glob_nether',
            B: 'minecraft:quartz',
            C: 'minecraft:netherite_scrap',
        }
    )

    event.shaped(
        Item.of('gobber2:gobber2_ingot_end', 3),
        [
            'AB ',
            'BC ',
            '   '
        ],
        {
            A: 'gobber2:gobber2_glob_end',
            B: 'minecraft:chorus_fruit',
            C: 'origincore:ender_ingot',
        }
    )

    event.shaped(
        Item.of('gobber2:gobber2_links_end', 8),
        [
            'AAA',
            'BAB',
            'AAA'
        ],
        {
            A: 'gobber2:gobber2_ingot_end',
            B: 'origincore:ender_ingot',
        }
    )

    event.shaped(
        Item.of('origincore:ender_ingot', 1),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'origincore:ender_grain',
            B: 'minecraft:iron_ingot',
        }
    )

    event.shaped(
        Item.of('gobber2:gobber2_helmet_nether', 1),
        [
            'ABA',
            'A A',
            '   '
        ],
        {
            A: 'gobber2:gobber2_ingot_nether',
            B: 'minecraft:netherite_scrap',
        }
    )

    event.shaped(
        Item.of('gobber2:gobber2_chestplate_nether', 1),
        [
            'A A',
            'ABA',
            'AAA'
        ],
        {
            A: 'gobber2:gobber2_ingot_nether',
            B: 'minecraft:netherite_scrap',
        }
    )

    event.shaped(
        Item.of('gobber2:gobber2_leggings_nether', 1),
        [
            'ABA',
            'A A',
            'A A'
        ],
        {
            A: 'gobber2:gobber2_ingot_nether',
            B: 'minecraft:netherite_scrap',
        }
    )

    event.shaped(
        Item.of('gobber2:gobber2_boots_nether', 1),
        [
            '   ',
            'ABA',
            'A A'
        ],
        {
            A: 'gobber2:gobber2_ingot_nether',
            B: 'minecraft:netherite_scrap',
        }
    )

    event.shaped(
        Item.of('gobber2:gobber2_gooey_apple', 32),
        [
            'ABB',
            'BBB',
            'BBB'
        ],
        {
            A: 'gobber2:gobber2_goo',
            B: 'minecraft:apple',
        }
    )

    event.shaped(
        Item.of('gobber2:gobber2_goo', 32),
        [
            'AB ',
            'CD ',
            '   '
        ],
        {
            A: 'gobber2:gobber2_glob',
            B: 'minecraft:slime_ball',
            C: 'minecraft:sugar',
            D: 'minecraft:egg',
        }
    )

    event.shaped(
        Item.of('gobber2:gobber2_gooey_bread', 32),
        [
            'ABB',
            'BBB',
            'BBB'
        ],
        {
            A: 'gobber2:gobber2_goo',
            B: 'minecraft:wheat',
        }
    )

    event.shaped(
        Item.of('gobber2:gobber2_gooey_beef', 32),
        [
            'ABB',
            'BBB',
            'BBB'
        ],
        {
            A: 'gobber2:gobber2_goo',
            B: 'minecraft:cooked_beef',
        }
    )

    event.shaped(
        Item.of('gobber2:gobber2_gooey_beefstew', 32),
        [
            ' A ',
            'BCB',
            ' B '
        ],
        {
            A: 'gobber2:gobber2_goo',
            B: 'minecraft:cooked_beef',
            C: 'minecraft:bowl',
        }
    )

    event.shaped(
        Item.of('gobber2:gobber2_gooey_apple_nether', 32),
        [
            'ABB',
            'BBB',
            'BBB'
        ],
        {
            A: 'gobber2:gobber2_goo_nether',
            B: 'minecraft:golden_apple',
        }
    )

    event.shaped(
        Item.of('gobber2:gobber2_goo_nether', 32),
        [
            'AB ',
            'CD ',
            '   '
        ],
        {
            A: 'gobber2:gobber2_glob_nether',
            B: 'minecraft:slime_ball',
            C: 'minecraft:sugar',
            D: 'minecraft:egg',
        }
    )

    event.shaped(
        Item.of('gobber2:gobber2_gooey_bread_nether', 32),
        [
            'ABB',
            'BBB',
            'BBB'
        ],
        {
            A: 'gobber2:gobber2_goo_nether',
            B: 'minecraft:bread',
        }
    )

    event.shaped(
        Item.of('gobber2:gobber2_gooey_beef_nether', 32),
        [
            'ABB',
            'BBB',
            'BBB'
        ],
        {
            A: 'gobber2:gobber2_goo_nether',
            B: 'minecraft:cooked_beef',
        }
    )

    event.shaped(
        Item.of('gobber2:gobber2_gooey_beefstew_nether', 32),
        [
            ' A ',
            'BCB',
            ' B '
        ],
        {
            A: 'gobber2:gobber2_goo_nether',
            B: 'minecraft:cooked_beef',
            C: 'minecraft:bowl',
        }
    )

    event.shaped(
        Item.of('gobber2:gobber2_foo', 16),
        [
            'ABB',
            'BBB',
            'BBB'
        ],
        {
            A: 'gobber2:gobber2_glob',
            B: 'minecraft:coal',
        }
    )

    event.shaped(
        Item.of('gobber2:gobber2_foo', 16),
        [
            'ABB',
            'BBB',
            'BBB'
        ],
        {
            A: 'gobber2:gobber2_glob',
            B: 'minecraft:charcoal',
        }
    )

    event.shaped(
        Item.of('gobber2:gobber2_foo_nether', 16),
        [
            'ABB',
            'BBB',
            'BBB'
        ],
        {
            A: 'gobber2:gobber2_glob_nether',
            B: 'minecraft:coal',
        }
    )

    event.shaped(
        Item.of('gobber2:gobber2_foo_nether', 16),
        [
            'ABB',
            'BBB',
            'BBB'
        ],
        {
            A: 'gobber2:gobber2_glob_nether',
            B: 'minecraft:charcoal',
        }
    )

    event.shaped(
        Item.of('gobber2:gobber2_foo_end', 16),
        [
            'ABB',
            'BBB',
            'BBB'
        ],
        {
            A: 'gobber2:gobber2_glob_end',
            B: 'minecraft:coal',
        }
    )

    event.shaped(
        Item.of('gobber2:gobber2_foo_end', 16),
        [
            'ABB',
            'BBB',
            'BBB'
        ],
        {
            A: 'gobber2:gobber2_glob_end',
            B: 'minecraft:charcoal',
        }
    )
})