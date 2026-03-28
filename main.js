bulmaSelectmenu.attachMenu(pidsSizeMenu);

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

Array.prototype.toArray = function() {
    return this;
};

function importPackage(pack) {

}
const java = {
    awt: null
};

const MinecraftClient = {
    worldDayTime: function() {
        return 6000;
    }
};

let pidsSizes = {
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
        },
        multiplier: 7.53,
        textYOffset: 15
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
        },
        multiplier: 7.7,
        textYOffset: 15
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
        },
        multiplier: 5.5,
        textYOffset: 5
    },
};

pidsSizeMenu.addEventListener("change", function(e) {
    pidsCanvas.style.width = `${pidsSizes[pidsSizeMenu.value].css.w}px`;
    pidsCanvas.style.height = `${pidsSizes[pidsSizeMenu.value].css.h}px`;
    pidsCanvas.setAttribute("width", pidsSizes[pidsSizeMenu.value].canvas.w);
    pidsCanvas.setAttribute("height", pidsSizes[pidsSizeMenu.value].canvas.h);
    resetPIDSData();
    pidsObj.width = pidsData.width;
    pidsObj.height = pidsData.height;
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
                if (number > pidsData.arrivals.length - 1) {
                    return null;
                } else {
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
                                    let platforms = [];
                                    for (let i = 0; i < 6; i++) {
                                        platforms.push({
                                            getPlatformId: function() {
                                                return i;
                                            },
                                            getStationId: function() {
                                                return null;
                                            },
                                            getStationName: function() {
                                                return `Station ${i}`;
                                            },
                                            getDestination: function() {
                                                return `Destination ${i}`;
                                            },
                                        });
                                    }
                                    return platforms;
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
                }
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
        return {
            getName: function() {
                return pidsData.station;
            }
        };
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
        } catch(e) {
            console.error(e);
        }
    }
    setTimeout(renderFrame, 33);
}

let renderingActive = false;

renderFrame();

class TextObj {
    constructor() {
        this.textContent = "";
        this.textColor = "#FFFFFF";
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
            pidsCtx.font = `${fontPrefix}${7.4 * pidsSizes[pidsSizeMenu.value].multiplier * this.textScale}px Helvetica, sans-serif`;
            pidsCtx.textAlign = this.textAlign;
            pidsCtx.fillStyle = 0x111111;
            pidsCtx.fillText(this.textContent, this.textPos[0] * pidsSizes[pidsSizeMenu.value].multiplier + 2, this.textPos[1] * pidsSizes[pidsSizeMenu.value].multiplier + 22 + pidsSizes[pidsSizeMenu.value].textYOffset);
        }
        pidsCtx.font = `${fontPrefix}${7.4 * pidsSizes[pidsSizeMenu.value].multiplier * this.textScale}px Helvetica, sans-serif`;
        pidsCtx.textAlign = this.textAlign;
        pidsCtx.fillStyle = this.textColor;
        pidsCtx.fillText(this.textContent, this.textPos[0] * pidsSizes[pidsSizeMenu.value].multiplier, this.textPos[1] * pidsSizes[pidsSizeMenu.value].multiplier + 20 + pidsSizes[pidsSizeMenu.value].textYOffset);
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
        this.textureColor = null;
        this.texturePos = [0, 0];
        this.textureSize = [0, 0];
    }
    texture(path) {
        this.texturePath = path.replace("jsblock:", "");
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
        pidsCtx.drawImage(img, x * pidsSizes[pidsSizeMenu.value].multiplier, y * pidsSizes[pidsSizeMenu.value].multiplier, w * pidsSizes[pidsSizeMenu.value].multiplier, h * pidsSizes[pidsSizeMenu.value].multiplier);

        // Apply tint (skip if white = no tint)
        if (this.textureColor && this.textureColor !== "#ffffff") {
            pidsCtx.globalCompositeOperation = "source-atop";
            pidsCtx.fillStyle = this.textureColor;
            pidsCtx.fillRect(x * pidsSizes[pidsSizeMenu.value].multiplier, y * pidsSizes[pidsSizeMenu.value].multiplier, w * pidsSizes[pidsSizeMenu.value].multiplier, h * pidsSizes[pidsSizeMenu.value].multiplier);
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
    name = name.replace("jsblock:", "");

    // Read file as ArrayBuffer
    const buffer = await file.arrayBuffer();

    // Load into your system
    await loadTexture(name, buffer);

    console.log("Loaded texture:", name);

    let listItem = document.createElement("li");
    listItem.innerHTML = name;
    textureList.appendChild(listItem);

    // Reset input so same file can be selected again later
    e.target.value = "";
};

//include(prompt("Enter PIDS URL: "));


function setupPage(number) {
    if (number == 1) {
        setupPage1.classList.remove("hidden");
        setupPage2.classList.add("hidden");
        setupPage3.classList.add("hidden");
    }
    if (number == 2) {
        setupPage1.classList.add("hidden");
        setupPage2.classList.remove("hidden");
        setupPage3.classList.add("hidden");
    }
    if (number == 3) {
        setupPage1.classList.add("hidden");
        setupPage2.classList.add("hidden");
        setupPage3.classList.remove("hidden");
    }
}

function exitSetup() {
    setupDlg.classList.remove("is-active");
}

async function getArrayBufferFromURL(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch: " + res.status);
    return await res.arrayBuffer();
}

const examplePIDS = [
    {
        js: "pids/wmata_pids.js",
        textures: [],
        textureNames: [],
        pidsType: "rv_pids"
    },
    {
        js: "pids/cta_pids.js",
        textures: [
            "textures/us_pids_pack/cta_arrivalbox.png"
        ],
        textureNames: [
            "textures/cta_arrivalbox.png"
        ],
        pidsType: "pids_1a"
    },
    {
        js: "pids/legible_prague_tram.js",
        textures: [
            "textures/legible_tram/white.png",
            "textures/legible_tram/white_circle.png"
        ],
        textureNames: [
            "custom_directory/white.png",
            "custom_directory/white_circle.png"
        ],
        pidsType: "pids_1a"
    },
    {
        js: "pids/uk_led_1a.js",
        textures: [
            "textures/uk_led_pids/black.png"
        ],
        textureNames: [
            "textures/black.png"
        ],
        pidsType: "pids_1a"
    }
];

async function selectExamplePIDS(item) {
    include(examplePIDS[item].js);

    for (let i = 0; i < examplePIDS[item].textures.length; i++) {
        let file = await getArrayBufferFromURL(examplePIDS[item].textures[i]);
        let name = examplePIDS[item].textureNames[i];
        await loadTexture(name, file);
        console.log("Loaded texture:", name);
    }

    pidsSizeMenu.value = examplePIDS[item].pidsType;
    pidsSizeMenu.dispatchEvent(new Event('change', { bubbles: true }));

    exitSetup();
}

function setCustomCode() {
    let code = editor.getValue();
    let scriptTag = document.createElement("script");
    scriptTag.innerHTML = code;
    document.body.appendChild(scriptTag);
}