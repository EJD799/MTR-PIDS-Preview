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

        render(null, null, pidsObj);
    }
    setTimeout(renderFrame, 33);
}

let renderingActive = false;

renderFrame();

class TextObj {
    constructor() {
        this.textContent = null;
        this.textColor = null;
        this.textPos = null;
        this.textScale = null;
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
    draw(ctx) {
        pidsCtx.font = `${54 * this.textScale}px sans-serif`;
        pidsCtx.fillStyle = this.textColor;
        pidsCtx.fillText(this.textContent, this.textPos[0] * 6, this.textPos[1] * 6);
    }
}
const Text = {
    create: function() {
        return new TextObj();
    }
};