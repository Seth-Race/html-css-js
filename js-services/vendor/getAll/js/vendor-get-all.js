
$(() => {
    vendorGetAll()
        .done(res => {
            console.debug(res);
            display(res);
        })
        .fail(err => console.error(err));
});

const display = (vendors) => {
    let tbody = $("#tbody");
    tbody.empty();
    for(let vendor of vendors){
        let tr = $("<tr></tr>");
        tr.append($(`<td>${vendor.id}</td>`));
        tr.append($(`<td>${vendor.code}</td>`));
        tr.append($(`<td>${vendor.name}</td>`));
        tr.append($(`<td>${vendor.address}</td>`));
        tr.append($(`<td>${vendor.city}, ${vendor.state} ${vendor.zip}</td>`));
        tr.append($(`<td>${vendor.phone}</td>`));
        tr.append($(`<td>${vendor.email}</td>`));
        tbody.append(tr);
    }
}