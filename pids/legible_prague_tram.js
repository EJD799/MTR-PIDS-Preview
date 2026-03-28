importPackage(java.awt);

// Default text size = 9

/*
(A) Station Name - Height 10 - Font Scale 0.75
  --empty block-- - Height 0.1

  --empty block-- - Height 0.1
Monday 1.1.1999   15:00 - Height 5 - Font Scale 0.55
*/

include(Resources.id("jsblock:scripts/pids_util.js"));

function create(ctx, state, pids) {
}

function render(ctx, state, pids) {

  const topBlockHeight = 10;
  const emptyBlockHeight = 0.1;
  const lineThickness = 0.5;
  const desLineThikness = 7.4;
//const lineThickness = 0.5;
  const bottomBlockHeight = 5;

  // Text scaling
  const stationFontScale = 0.75; // Scale 0.75
  const desFontScale = 0.6; // Font size 5.4 - Scale 0.6
  const timeFontScale = 0.55;// Font size 5 - Scale 0.55

  // Position constants
  const stationXPos = 30; //25


  // Custom messages constants
  const msgMarquee = pids.getCustomMessage(1);
  const msgNoArrivals = pids.getCustomMessage(0);
  const msgNoArrivalsOffset = 5;

  // Date helpers
  const currentDateJs = new Date();
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDayName = daysOfWeek[currentDateJs.getDay()];
  const currentDay = String(currentDateJs.getDate());
  const currentMonth = String(currentDateJs.getMonth()+1);
  const currentYear = String(currentDateJs.getFullYear());
  const currentDateString = currentDayName + " " + currentDay + "." + currentMonth + "." + currentYear;


  // Graphic helpers
  const topBorder = (pids.isPlatformNumberHidden()==false)
    ? topBlockHeight+emptyBlockHeight + lineThickness
    : 0;
  const bottomBorder = (msgMarquee == "") // Tests if there is rolling information
    ? pids.height - bottomBlockHeight - emptyBlockHeight - lineThickness
    : pids.height - bottomBlockHeight - emptyBlockHeight - lineThickness - bottomBlockHeight - 1; // 2 is used, to have there slightly larger gap between date/time and rolling info

  const usableSpace = bottomBorder - topBorder;
  const numberOfLines = Math.floor(usableSpace / desLineThikness);

  const firstLineOffset = ((usableSpace - (numberOfLines*desLineThikness))/2) + topBorder + 1; // 1 is used to shift the block for half of the thickness of space between destinations

  // Top part
  if(pids.isPlatformNumberHidden()==false){
    Texture.create("Circle under Platform Number")
    .texture("jsblock:custom_directory/white_circle.png")
    .size(topBlockHeight, topBlockHeight)
    .pos(2,0)
    .draw(ctx);

    if(pids.station()!=null){
      Text.create("Station Name")
      .text(TextUtil.cycleString(pids.station().getName(),80))
      .pos(stationXPos,2)
      .leftAlign()
      .scale(stationFontScale)
      .color(0xFFFFFF)
      .bold()
      .draw(ctx);

      if(pids.arrivals().get(0)!=null){
        Text.create("Platform Number")
        .text(pids.arrivals().get(0).platformName())
        .pos(2+(topBlockHeight/2),2)
        .centerAlign()
        .scale(stationFontScale)
        .color(0x000000)
        .bold()
        .draw(ctx);
      }
    }

    // Lines
    Texture.create("Top Line")
    .texture("jsblock:custom_directory/white.png")
    .size(pids.width, lineThickness)
    .pos(0,topBlockHeight+emptyBlockHeight)
    .draw(ctx);
  }


  Texture.create("Bottom Line")
  .texture("jsblock:custom_directory/white.png")
  .size(pids.width, lineThickness)
  .pos(0,bottomBorder)
  .draw(ctx);

  // Middle Part
  if((msgNoArrivals=="")&&(pids.arrivals().get(0)!=null)){
    for(let i=0;i<numberOfLines;i++) {
      let arrival = pids.arrivals().get(i);
      if(arrival != null) {
        Text.create("Line Number")
        .text(arrival.routeNumber())
        .pos(13.5,firstLineOffset+(desLineThikness*i))
        .rightAlign()
        .scale(desFontScale)
        .color(0xFFFFFF)
        .bold()
        .draw(ctx);

        if(arrival.terminating()==true){
          Text.create("Destination")
          .text("Terminates here")
          .pos(stationXPos,firstLineOffset+(desLineThikness*i))
          .leftAlign()
          .scale(desFontScale)
          .color(0xFFFFFF)
          .bold()
          .draw(ctx);
        }
        else {
          Text.create("Destination")
          .text(TextUtil.cycleString(arrival.destination(),80))
          .pos(stationXPos,firstLineOffset+(desLineThikness*i))
          .leftAlign()
          .scale(desFontScale)
          .color(0xFFFFFF)
          .bold()
          .draw(ctx);
        }

        let eta = (arrival.arrivalTime() - Date.now()) / 60000;
        eta = Math.round(eta);

        if(eta=="0"){
          Text.create("ETA")
          .text("<1")
          .pos(pids.width,firstLineOffset+(desLineThikness*i))
          .rightAlign()
          .scale(desFontScale)
          .color(0xFFFFFF)
          .bold()
          .draw(ctx);
        }
        else
        {
          Text.create("ETA")
          .text(eta)
          .pos(pids.width,firstLineOffset+(desLineThikness*i))
          .rightAlign()
          .scale(desFontScale)
          .color(0xFFFFFF)
          .bold()
          .draw(ctx);
        }

      }
      
    }
  }
  else
  {
    Text.create("Message insted of Departure Board")
    .text(msgNoArrivals)
    // .pos(msgNoArrivalsOffset,topBorder+5)
    .pos(msgNoArrivalsOffset,topBorder+5)
    .leftAlign()
    .size((pids.width*(1/desFontScale))-21,1)
    .wrapText()
    .scale(desFontScale)
    .color(0xFFFFFF)
    .draw(ctx);
  }

  // Bottom part
  if(msgMarquee!="")
  {
    Text.create("Marquee Message")
    .text(msgMarquee)
    .pos(0,pids.height - bottomBlockHeight - bottomBlockHeight - 1)
    .leftAlign()
    .size((pids.width*(1/timeFontScale))-(msgNoArrivalsOffset*(1/timeFontScale)),1)
    .scale(timeFontScale)
    .marquee()
    .color(0xFFFFFF)
    .draw(ctx);
  }

  Text.create("Clock")
  .text(PIDSUtil.formatTime(MinecraftClient.worldDayTime(), true))
  .color(0xFFFFFF)
  .pos(pids.width, pids.height-bottomBlockHeight)
  .scale(timeFontScale)
  .rightAlign()
  .draw(ctx);

  Text.create("Date")
  .text(currentDateString)
  .color(0xFFFFFF)
  .pos(0, pids.height-bottomBlockHeight)
  .scale(timeFontScale)
  .leftAlign()
  .draw(ctx);

}

function dispose(ctx, state, pids) {
}
