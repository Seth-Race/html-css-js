$(() => {

    $("#save").on("click", () => {
        create();
    })
});

const create = () => {
    let vendor = {};
    vendor.id = "0";
    vendor.code = $("#dCode").val();
    vendor.name = $("#dName").val();
    vendor.address = $("#dAddress").val();
    vendor.city = $("#dCity").val();
    vendor.state = $("#dState").val();
    vendor.zip = $("#dZip").val();
    vendor.phone = $("#dPhone").val();
    vendor.email = $("#dEmail").val();

    vendorAdd(vendor)
        .done(res => {
            console.debug(res)
            .console.log("Added new Vendor!")
        })
        .fail(err => console.error(err));
}