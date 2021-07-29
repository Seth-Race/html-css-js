let topics = [
    { name: "Git/GitHub", rating: 4 },
    { name: "SQL", rating: 5 },
    { name: "Java/C#", rating: 3 }
];



$(() => {
    console.log("The HTML is loaded!");
    display();
    $("button#toggle").on("click", () => {
        toggle();
    });
    $("button#hide").on("click", () =>{
        $("table").fadeToggle();
    });
    
});

let red = true;
const toggle = () => {
    if(red){  
        $("th").css("color", "red").css("fontStyle", "italic").css("fontSize", "1em");
} else {
    $("th").css("color", "green").css("fontStyle", "normal").css("fontSize", "2em");
}
red = !red;
}

const display = () => {
    let tbody = $("#tbody");
    for(let topic of topics){
        let tr = $("<tr></tr>");
        let tdName = $(`<td>${topic.name}</td>`);
        tr.append(tdName);
        let tdRating = $(`<td>${topic.rating}</td>`);
        tr.append(tdRating);
        tbody.append(tr);
    }
}