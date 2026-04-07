include(Resources.id("jsblock:scripts/pids_util.js"));
var eta;

function create(ctx, state, pids) {
    print("Hello World ^^");
}

function render(ctx, state, pids) {
    Texture.create("Background")
    .texture("jsblock:textures/rectangle.png")
    .size(pids.width, pids.height)
    .color(0x383838)
    .draw(ctx);

    try {
        if (pids.type == "pids_1a") {
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

            Texture.create("arrival_first Circle Colored")
            .texture("jsblock:textures/rectangle.png")
            .pos(10,10)
            .size(175, 25)
            .color(pids.arrivals().get(0).routeColor())
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

            Texture.create("line between arrivals")
            .texture("jsblock:textures/rectangle.png")
            .pos(0,34)
            .size(pids.width, 1)
            .color(0x2e2e2e)
            .draw(ctx);

            Texture.create("arrival_first Circle Colored")
            .texture("jsblock:textures/rectangle.png")
            .pos(10,35)
            .size(175, 25)
            .color(pids.arrivals().get(1).routeColor())
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
        } else if (pids.type == "rv_pids" || pids.type == "rv_pids_sil_1" || pids.type == "rv_pids_sil_2") {
            Texture.create("Background")
            .texture("jsblock:textures/cta_station_pids.png")
            .size(pids.width, pids.height)
            .draw(ctx);

            Text.create()
            .text("Next trains at " + pids.station().getName())
            .color(0xFFFFFF)
            .pos(5, 18.5)
            .scale(0.4)
            .draw(ctx);

            for (let i = 0; i < 5; i++) {
                Texture.create("arrival_first Circle Colored")
                .texture("jsblock:textures/rectangle.png")
                .pos(3.75, 26.25 + (i * 9.75))
                .size(66.4, 8.75)
                .color(pids.arrivals().get(i).routeColor())
                .draw(ctx);

                Text.create("Arrival line")
                .text(TextUtil.getNonExtraParts(pids.arrivals().get(i).routeName()))
                .color(0xFFFFFF)
                .pos(5, 24 + (i * 9.75))
                .scale(0.3)
                .draw(ctx);

                Text.create("Arrival destination")
                .text(pids.arrivals().get(i).destination())
                .color(0xFFFFFF)
                .pos(5, 28.5 + (i * 9.75))
                .scale(0.6)
                .draw(ctx);

                Text.create("Arrival ETA")
                .text(TextUtil.getNonCjkParts(PIDSUtil.getETAText(pids.arrivals().get(i).arrivalTime())))
                .color(0xFFFFFF)
                .pos(67, 27.5 + (i * 9.75))
                .scale(0.6)
                .rightAlign()
                .draw(ctx);
            }
        } else {
            Text.create()
            .text("This PIDS type is not supported")
            .color(0xFFFFFF)
            .pos(5, 5)
            .scale(0.8)
            .draw(ctx);
        }

    } catch(err) {
        Text.create("Arrival route")
        .text("Arrival information temporarily unavailable")
        .color(0xFFFFFF)
        .pos(5, 5)
        .scale(0.8)
        .draw(ctx);
    }
}

function dispose(ctx, state, pids) {
    print("Goodbye World ^^;");
}