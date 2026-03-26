include(Resources.id("jsblock:scripts/pids_util.js"));

function render(ctx, state, pids) {
    Text.create("Test")
        .text("Hello world")
        .color(0x000000)
        .pos(3, 40)
        .scale(1)
        .draw(ctx);
}