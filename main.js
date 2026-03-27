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
            destination: "Destination",
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
                id: "",
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