include(Resources.id("jsblock:scripts/pids_util.js"));
var eta;

function create(ctx, state, pids) {
    print("Hello World ^^");
}

function render(ctx, state, pids) {
    if (pids.type == "rv_pids" || pids.type == "rv_pids_sil_1" || pids.type == "rv_pids_sil_2") {
        Texture.create("top bar")
        .texture("jsblock:textures/rectangle.png")
        .size(pids.width, 10.5)
        .color(0x009dff)
        .draw(ctx);

        Text.create()
        .text("LN  CAR   DESTINATION   MIN")
        .color(0xFFFFFF)
        .pos(0, 3)
        .scale(1.25)
        .draw(ctx);

        for (let i = 0; i < pids.rows; i++) {
            let arrival = pids.arrivals().get(i);
            if (arrival != null) {
                Texture.create("route color")
                .texture("jsblock:textures/circle.png")
                .size(12, 12)
                .pos(2.75, i * 16.75 + 11.75)
                .color(pids.arrivals().get(i).routeColor())
                .draw(ctx);

                Text.create("Arrival route")
                .text(TextUtil.cycleString(arrival.routeNumber()))
                .color(0xFFFFFF)
                .pos(8.5, i * 16.75 + 15)
                .scale(0.75)
                .centerAlign()
                .draw(ctx);

                let carCountColor = 0xFFFFFF;
                if (arrival.carCount() > 6) {
                    carCountColor = 0x00FF00;
                }

                Text.create("Arrival length")
                .text(TextUtil.cycleString(arrival.carCount()))
                .color(carCountColor)
                .pos(27, i*16.75+15.5)
                .scale(1.25)
                .draw(ctx);

                Text.create("Arrival destination")
                .text(TextUtil.cycleString(arrival.destination()))
                .color(0xFFFFFF)
                .pos(48, i*16.75+15.5)
                .scale(1.25)
                .draw(ctx);

                if (TextUtil.getNonCjkParts(PIDSUtil.getETAText(arrival.arrivalTime())).replace(" sec","s").replace(" mins","").replace(" min","") == "") {
                    Text.create("Arrival time")
                    .text("ARR")
                    .color(0xFFFFFF)
                    .pos(135, i*16.75+15.5)
                    .rightAlign()
                    .scale(1.25)
                    .draw(ctx);
                } else {
                    Text.create("Arrival time")
                    .text(TextUtil.getNonCjkParts(PIDSUtil.getETAText(arrival.arrivalTime())).replace(" sec","s").replace(" mins","").replace(" min",""))
                    .color(0xFFFFFF)
                    .pos(135, i*16.75+15.5)
                    .rightAlign()
                    .scale(1.25)
                    .draw(ctx);
                }
            }
        }
    } else {
        Text.create()
        .text("This PIDS type is not supported")
        .color(0xFFFFFF)
        .pos(5, 5)
        .scale(0.8)
        .draw(ctx);
    }
}

function dispose(ctx, state, pids) {
    print("Goodbye World ^^;");
}