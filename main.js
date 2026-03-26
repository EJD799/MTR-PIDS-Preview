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