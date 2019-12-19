const __URL = "http://localhost:4000";
let socket = io.connect(__URL);

let mesaj = $("#mesaj");
let baslik = $("#baslik");
let btn = $("#gonder");
let output = $("#output");
let feedback = $("#feedback");

$(btn).click(() => {
    socket.emit("chat", {
        baslik: $(baslik).val(),
        mesaj: $(mesaj).val()
    });
    
    mesaj.value = "";
});

socket.on("chat", data => {
    let text = $(output).html();
    text += `<p><strong>${data.baslik}: </strong>${data.mesaj}</p>`
    $(output).html(text)
    console.log(data)
});

mesaj.on("keypress", () => {
    socket.emit("writing", $(baslik).val());
});

socket.on("writing", data => {
     $(feedback).html(`<p><em>${data} yaziyor...</em></p>`);
});







