const pidsCtx = pidsCanvas.getContext('2d');

function include(url) {
    const script = document.createElement('script'); // 1. Create the script element
    script.src = url; // 2. Set the src attribute to the file path
    script.type = 'text/javascript'; // Optional: specify type

    // 3. Append the script to the DOM (head or body)
    document.head.appendChild(script);
}

const Resources = {
    id: function(name) {
        return name.replace("jsblock:", "");
    },
    getAddonVersion: function(addon) {
        if (addon == "jcm") {
            return "2.1.2";
        } else {
            return null;
        }
    }
};

print = function(t) {
    console.log(t);
};

let pidsData = {
    type: "rv_pids",
    width: 1024,
    height: 512,
    rows: 4,
    customMessages: ["", "", "", ""],
    hiddenArrivals: [false, false, false, false],
    platformNumberHidden: false,
    position: [0, 0, 0],
    keyBlock: false,
    arrivals: [
        {
            destination: "Station 1",
            arrivalTime: Date.now(),
            departureTime: Date.now() + 15000,
            realtime: true,
            terminating: false,
            route: {
                id: "",
                name: "Route Name",
                number: "123",
                color: 0xFF0000,
                circularState: false
            },
            platform: {
                id: "1",
                name: "1"
            },
            cars: [
                "sp1900_cab_1",
                "sp1900_trailer",
                "sp1900_trailer",
                "sp1900_cab_2"
            ]
        },
        {
            destination: "Station 2",
            arrivalTime: Date.now() + 30000,
            departureTime: Date.now() + 45000,
            realtime: true,
            terminating: false,
            route: {
                id: "",
                name: "Route Name",
                number: "124",
                color: 0x0000FF,
                circularState: false
            },
            platform: {
                id: "1",
                name: "1"
            },
            cars: [
                "sp1900_cab_1",
                "sp1900_trailer",
                "sp1900_trailer",
                "sp1900_cab_2"
            ]
        },
        {
            destination: "Station 1",
            arrivalTime: Date.now() + 60000,
            departureTime: Date.now() + 75000,
            realtime: true,
            terminating: false,
            route: {
                id: "",
                name: "Route Name",
                number: "123",
                color: 0xFF0000,
                circularState: false
            },
            platform: {
                id: "1",
                name: "1"
            },
            cars: [
                "sp1900_cab_1",
                "sp1900_trailer",
                "sp1900_trailer",
                "sp1900_cab_2"
            ]
        },
        {
            destination: "Station 2",
            arrivalTime: Date.now() + 90000,
            departureTime: Date.now() + 105000,
            realtime: true,
            terminating: false,
            route: {
                id: "",
                name: "Route Name",
                number: "124",
                color: 0x0000FF,
                circularState: false
            },
            platform: {
                id: "1",
                name: "1"
            },
            cars: [
                "sp1900_cab_1",
                "sp1900_trailer",
                "sp1900_trailer",
                "sp1900_cab_2"
            ]
        },
        {
            destination: "Station 1",
            arrivalTime: Date.now() + 120000,
            departureTime: Date.now() + 135000,
            realtime: false,
            terminating: false,
            route: {
                id: "",
                name: "Route Name",
                number: "123",
                color: 0xFF0000,
                circularState: false
            },
            platform: {
                id: "1",
                name: "1"
            },
            cars: [
                "sp1900_cab_1",
                "sp1900_trailer",
                "sp1900_trailer",
                "sp1900_cab_2"
            ]
        },
        {
            destination: "Station 2",
            arrivalTime: Date.now() + 150000,
            departureTime: Date.now() + 165000,
            realtime: false,
            terminating: false,
            route: {
                id: "",
                name: "Route Name",
                number: "124",
                color: 0x0000FF,
                circularState: false
            },
            platform: {
                id: "1",
                name: "1"
            },
            cars: [
                "sp1900_cab_1",
                "sp1900_trailer",
                "sp1900_trailer",
                "sp1900_cab_2"
            ]
        }
    ]
};

const pidsObj = {
    arrivals: function() {
        return {
            get: function(number) {
                return {
                    destination: function() {
                        return pidsData.arrivals[number].destination;
                    },
                    arrivalTime: function() {
                        return pidsData.arrivals[number].arrivalTime;
                    },
                    departureTime: function() {
                        return pidsData.arrivals[number].departureTime;
                    },
                    deviation: function() {
                        return null;
                    },
                    realtime: function() {
                        return pidsData.arrivals[number].realtime;
                    },
                    departureIndex: function() {
                        return 0;
                    },
                    terminating: function() {
                        return pidsData.arrivals[number].terminating;
                    },
                    route: function() {
                        
                    },
                    routeId: function() {
                        return pidsData.arrivals[number].route.id;
                    },
                    routeName: function() {
                        return pidsData.arrivals[number].route.name;
                    },
                    routeNumber: function() {
                        return pidsData.arrivals[number].route.number;
                    },
                    routeColor: function() {
                        return pidsData.arrivals[number].route.color;
                    },
                    circularState: function() {
                        return pidsData.arrivals[number].route.circularState;
                    },
                    platform: function() {

                    },
                    platformId: function() {
                        return pidsData.arrivals[number].platform.id;
                    },
                    platformName: function() {
                        return pidsData.arrivals[number].platform.name;
                    },
                    carCount: function() {
                        return pidsData.arrivals[number].cars.length;
                    },
                    cars: function() {
                        return pidsData.arrivals[number].cars.map(n => ({
                            getVehicleId: function() {
                                return n;
                            },
                            getOccupancy: function() {
                                return 0;
                            }
                        }));
                    }
                };
            },
            mixedCarLength: function() {
                return;
            },
            platforms: function() {
                return;
            }
        };
    },
    station: function() {

    },
    isKeyBlock: function() {
        return pidsData.keyBlock;
    },
    blockPos: function() {
        return {
            x: pidsData.position[0],
            y: pidsData.position[1],
            z: pidsData.position[2]
        };
    },
    isPlatformNumberHidden: function() {
        return pidsData.platformNumberHidden;
    },
    isRowHidden: function(row) {
        return pidsData.hiddenArrivals[row];
    },
    getCustomMessage: function(row) {
        return pidsData.customMessages[row];
    },
    width: pidsData.width,
    height: pidsData.height,
    rows: pidsData.rows,
};

function renderFrame() {
    if (renderingActive) {
        // Clear the entire canvas
        pidsCtx.clearRect(0, 0, pidsCanvas.width, pidsCanvas.height);

        try {
            render(null, null, pidsObj);
        } catch(e) {}
    }
    setTimeout(renderFrame, 33);
}

let renderingActive = false;

renderFrame();

class TextObj {
    constructor() {
        this.textContent = "";
        this.textColor = 0xFFFFFF;
        this.textPos = [0, 0];
        this.textScale = 1;
        this.isBold = false;
        this.isItalic = false;
        this.isShadowed = false;
        this.textAlign = "left";
    }
    text(content) {
        this.textContent = content;
        return this;
    }
    color(color) {
        if (typeof color === "number") {
            this.textColor = "#" + color.toString(16).padStart(6, "0");
        } else {
            this.textColor = color;
        }
        return this;
    }
    pos(x, y) {
        this.textPos = [x, y];
        return this;
    }
    scale(value) {
        this.textScale = value;
        return this;
    }
    size(x, y) {
        return this;
    }
    leftAlign() {
        this.textAlign = "left";
        return this;
    }
    rightAlign() {
        this.textAlign = "right";
        return this;
    }
    centerAlign() {
        this.textAlign = "center";
        return this;
    }
    bold() {
        this.isBold = true;
        return this;
    }
    italic() {
        this.isItalic = true;
        return this;
    }
    shadowed() {
        this.isShadowed = true;
        return this;
    }
    font(font) {
        return this;
    }
    fontMC() {
        return this;
    }
    marquee() {
        return this;
    }
    wrapText() {
        return this;
    }
    scaleXY() {
        return this;
    }
    stretchXY() {
        return this;
    }

    draw(ctx) {
        let fontPrefix = "";
        if (this.isBold) {
            fontPrefix += "bold ";
        }
        if (this.isItalic) {
            fontPrefix += "italic ";
        }
        if (this.isShadowed) {
            pidsCtx.font = `${fontPrefix}${54 * this.textScale}px sans-serif`;
            pidsCtx.textAlign = this.textAlign;
            pidsCtx.fillStyle = 0x111111;
            pidsCtx.fillText(this.textContent, this.textPos[0] * 6 + 2, this.textPos[1] * 6 + 30 + 2);
        }
        pidsCtx.font = `${fontPrefix}${54 * this.textScale}px sans-serif`;
        pidsCtx.textAlign = this.textAlign;
        pidsCtx.fillStyle = this.textColor;
        pidsCtx.fillText(this.textContent, this.textPos[0] * 6, this.textPos[1] * 6 + 30);
    }
}
const Text = {
    create: function() {
        return new TextObj();
    }
};