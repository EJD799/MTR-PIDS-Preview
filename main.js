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

function renderFrame() {
    if (renderingActive) {
        // Clear the entire canvas
        pidsCtx.clearRect(0, 0, pidsCanvas.width, pidsCanvas.height);

        render();
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
        this.textColor = color;
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
        pidsCtx.fillText(this.textContent, this.textPos[0], this.textPos[1]);
    }
}
const Text = {
    create: function() {
        return new TextObj();
    }
};