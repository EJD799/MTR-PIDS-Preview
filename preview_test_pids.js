include(Resources.id("jsblock:scripts/pids_util.js"));

function render(ctx, state, pids) {
    Text.create("Title text")
        .text("Train Arrivals")
        .color(0xFFFFFF)
        .pos(3, 3)
        .scale(0.75)
        .draw(ctx);

    Text.create("Arrival number")
        .text("1")
        .color(0xFFFFFF)
        .pos(3, 15)
        .scale(0.75)
        .draw(ctx);

    Text.create("Arrival number")
        .text("2")
        .color(0xFFFFFF)
        .pos(3, 40)
        .scale(0.75)
        .draw(ctx);

    Text.create("Arrival line")
        .text(TextUtil.getNonExtraParts(pids.arrivals().get(0).routeName()))
        .color(0xFFFFFF)
        .pos(15, 12)
        .scale(0.6)
        .draw(ctx);

    Text.create("Arrival destination")
        .text(pids.arrivals().get(0).destination())
        .color(0xFFFFFF)
        .pos(15, 22)
        .scale(1.2)
        .draw(ctx);

    Text.create("Arrival ETA")
        .text(TextUtil.getNonCjkParts(PIDSUtil.getETAText(pids.arrivals().get(0).arrivalTime())))
        .color(0xFFFFFF)
        .pos(180, 22)
        .scale(1.2)
        .rightAlign()
        .draw(ctx);

    Text.create("Arrival line")
        .text(TextUtil.getNonExtraParts(pids.arrivals().get(1).routeName()))
        .color(0xFFFFFF)
        .pos(15, 37)
        .scale(0.6)
        .draw(ctx);

    Text.create("Arrival destination")
        .text(pids.arrivals().get(1).destination())
        .color(0xFFFFFF)
        .pos(15, 47)
        .scale(1.2)
        .draw(ctx);

    Text.create("Arrival ETA")
        .text(TextUtil.getNonCjkParts(PIDSUtil.getETAText(pids.arrivals().get(1).arrivalTime())))
        .color(0xFFFFFF)
        .pos(180, 47)
        .scale(1.2)
        .rightAlign()
        .draw(ctx);
}