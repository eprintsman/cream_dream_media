
$('.minus_btn').on("click touchend tap",function () {
    $(this).on("click touchend tap",minusKindOf($(this).attr('class').slice(-1)));
});


$('.plus_btn').on("click touchend tap",function () {
    $(this).on("click touchend tap",plusKindOf($(this).attr('class').slice(-1)));
});

function minusKindOf(i) {
    var N = parseInt($(".goods_quantity_" + i).text(), 10);
    var total = parseInt($(".total_price_value").text().split(' ')[0], 10);
    var price = parseInt($(".goods_coast_" + i).text().split(' ')[0], 10);

    if (N > 0) {
        $(".goods_quantity_" + i).text(N - 1);
        $(".total_price_value").text(total - price + " P");
    }
}

function plusKindOf(i) {
    var N = parseInt($(".goods_quantity_" + i).text(), 10);
    var total = parseInt($(".total_price_value").text().split(' ')[0], 10);
    var price = parseInt($(".goods_coast_" + i).text().split(' ')[0], 10);

    if (N < 10) {
        $(".goods_quantity_" + i).text(N + 1);
        $(".total_price_value").text(total + price + " P");
    }
}
