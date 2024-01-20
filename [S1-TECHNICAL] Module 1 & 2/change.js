function changeColors() {
    const body = document.body;
    const bgColorPicker = document.getElementById("bgColorPicker");
    const textColorPicker = document.getElementById("textColorPicker");

    
    const bgColor = bgColorPicker.value;
    const textColor = textColorPicker.value;

    body.style.backgroundColor = bgColor;
    body.style.color = textColor;
}
