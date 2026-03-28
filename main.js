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

const pidsSizes = {
    "rv_pids": {
        true: {
            w: 136,
            h: 76,
            rows: 4
        },
        css: {
            w: 512,
            h: 286
        },
        canvas: {
            w: 1024,
            h: 572
        }
    },
    "lcd_pids": {
        true: {
            w: 133,
            h: 72,
            rows: 4
        },
        css: {
            w: 512,
            h: 277
        },
        canvas: {
            w: 1024,
            h: 554
        }
    },
    "pids_1a": {
        true: {
            w: 186,
            h: 60,
            rows: 2
        },
        css: {
            w: 512,
            h: 165
        },
        canvas: {
            w: 1024,
            h: 330
        }
    },
};

pidsSizeMenu.addEventListener("change", function(e) {
    pidsCanvas.style.width = `${pidsSizes[pidsSizeMenu.value].css.w}px`;
    pidsCanvas.style.height = `${pidsSizes[pidsSizeMenu.value].css.h}px`;
    pidsCanvas.setAttribute("width", pidsSizes[pidsSizeMenu.value].canvas.w);
    pidsCanvas.setAttribute("height", pidsSizes[pidsSizeMenu.value].canvas.h);
});



let pidsData;
function resetPIDSData() {
    pidsData = {
        type: pidsSizeMenu.value,
        width: pidsSizes[pidsSizeMenu.value].true.w,
        height: pidsSizes[pidsSizeMenu.value].true.h,
        rows: pidsSizes[pidsSizeMenu.value].true.rows,
        customMessages: ["", "", "", ""],
        hiddenArrivals: [false, false, false, false],
        platformNumberHidden: false,
        position: [0, 0, 0],
        keyBlock: false,
        station: "Station 3",
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
                    name: "1",
                    dwellTime: 15000
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
                    name: "1",
                    dwellTime: 15000
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
                    name: "1",
                    dwellTime: 15000
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
                    name: "1",
                    dwellTime: 15000
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
                    name: "1",
                    dwellTime: 15000
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
                    name: "1",
                    dwellTime: 15000
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
}
resetPIDSData();

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
                        return {
                            getName: function() {
                                return pidsData.arrivals[number].route.name;
                            },
                            getId: function() {
                                return pidsData.arrivals[number].route.id;
                            },
                            getColor: function() {
                                return pidsData.arrivals[number].route.color;
                            },
                            getCircularState: function() {
                                return pidsData.arrivals[number].route.circularState;
                            },
                            getPlatforms: function() {
                                return null;
                            }
                        };
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
                        return {
                            getName: function() {
                                return pidsData.arrivals[number].platform.name;
                            },
                            getId: function() {
                                return pidsData.arrivals[number].platform.id;
                            },
                            getDwellTime: function() {
                                return pidsData.arrivals[number].platform.dwellTime;
                            }
                        };
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
                let mixed = false;
                let previous = 0;
                for (let i = 0; i < pidsData.arrivals.length; i++) {
                    if (i != 0 && previous != pidsData.arrivals[i].cars.length) {
                        mixed = true;
                        break;
                    }
                    previous = pidsData.arrivals[i].cars.length;
                }
                return mixed;
            },
            platforms: function() {
                return pidsData.arrivals.map(n => ({
                    getName: function() {
                        return n.platform.name;
                    },
                    getId: function() {
                        return n.platform.id;
                    },
                    getDwellTime: function() {
                        return n.platform.dwellTime;
                    }
                }));
            }
        };
    },
    station: function() {
        return pidsData.station;
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
            pidsCtx.fillText(this.textContent, this.textPos[0] * 7.3 + 22, this.textPos[1] * 7.3 + 72);
        }
        pidsCtx.font = `${fontPrefix}${54 * this.textScale}px sans-serif`;
        pidsCtx.textAlign = this.textAlign;
        pidsCtx.fillStyle = this.textColor;
        pidsCtx.fillText(this.textContent, this.textPos[0] * 7.3 + 20, this.textPos[1] * 7.3 + 70);
    }
}
const Text = {
    create: function() {
        return new TextObj();
    }
};

function getWrappedItem(list, index) {
    return list[index % list.length];
}

textCycle = 0;
function updateTextCycle() {
    textCycle += 1;
    setTimeout(updateTextCycle, 2000);
}
updateTextCycle();


class TextureObj {
    constructor() {
        this.texturePath = "";
        this.textureColor = 0xFFFFFF;
        this.texturePos = [0, 0];
        this.textureSize = [0, 0];
    }
    texture(path) {
        this.texturePath = path.replace("jsblock:textures/", "");
        return this;
    }
    color(color) {
        if (typeof color === "number") {
            this.textureColor = "#" + color.toString(16).padStart(6, "0");
        } else {
            this.textureColor = color;
        }
        return this;
    }
    pos(x, y) {
        this.texturePos = [x, y];
        return this;
    }
    size(w, h) {
        this.textureSize = [w, h];
        return this;
    }
    uv() {
        return this;
    }
    matrices() {
        return this;
    }

    draw(ctx) {
        const img = textureResources[this.texturePath];
        if (!img) return; // not loaded yet

        const [x, y] = this.texturePos;
        const [w, h] = this.textureSize;

        // Draw scaled image
        pidsCtx.drawImage(img, x * 7.3 + 20, y * 7.3 + 40, w * 7.3, h * 7.3);

        // Apply tint (skip if white = no tint)
        if (this.textureColor && this.textureColor !== "#ffffff") {
            pidsCtx.globalCompositeOperation = "source-atop";
            pidsCtx.fillStyle = this.textureColor;
            pidsCtx.fillRect(x * 7.3 + 20, y * 7.3 + 40, w * 7.3, h * 7.3);
            pidsCtx.globalCompositeOperation = "source-over";
        }
    }
}
const Texture = {
    create: function() {
        return new TextureObj();
    }
};

let textureResources = {};

async function loadTexture(path, arrayBuffer) {
    const blob = new Blob([arrayBuffer], { type: "image/png" });
    const bitmap = await createImageBitmap(blob);
    textureResources[path] = bitmap;
}

document.getElementById("importTextureBtn").onclick = () => {
    document.getElementById("textureFileInput").click();
};

document.getElementById("textureFileInput").onchange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Ask user for a name
    let name = prompt("Enter texture name:", file.name);
    if (!name) return;

    // Optional: normalize like your texture() method
    name = name.replace("jsblock:textures/", "");

    // Read file as ArrayBuffer
    const buffer = await file.arrayBuffer();

    // Load into your system
    await loadTexture(name, buffer);

    console.log("Loaded texture:", name);

    // Reset input so same file can be selected again later
    e.target.value = "";
};