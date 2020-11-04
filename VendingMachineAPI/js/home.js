let ds = new DataService();

var totalDollar = 0;
var gridNumber = 1;
var itemSelected;
var itemId;

// formats the number into dollar format
var numUSD = new Intl.NumberFormat('en-US', {
    style: "currency",
    currency: "USD"
});

// Function to format item to be addded to each cell
function formatItemList(item) {
    //onClick="selectItem('${item.name}')"
    let itemDiv = `<div class="cell" data-index=" ${gridNumber} - ${item.name} " data-itemid='${item.id}'>` + gridNumber + `<br/><br/>${item.name}<br/>${numUSD.format(item.price)}<br/><br/>Quantity Left: ${item.quantity}</div>`
    gridNumber++;
    return itemDiv;

}
//callback function which adds item info into each cell from the list of items
function refreshItems(items) {
    gridNumber = 1;
    let listOfItems = $("#itemsList");
    listOfItems.empty();

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        $(listOfItems).append(formatItemList(item));

    }

}

function addDollar(event) {
    totalDollar += 1;
    $("#dollarInput").val(numUSD.format(totalDollar));
    // alert(totalDollar);

}

function addQuarter(event) {
    totalDollar += 0.25;
    $("#dollarInput").val(numUSD.format(totalDollar));
    // alert(totalDollar);

}

function addDime(event) {
    totalDollar += 0.10;
    $("#dollarInput").val(numUSD.format(totalDollar));
    // alert(totalDollar);

}

function addNickel(event) {
    totalDollar += 0.05;
    $("#dollarInput").val(numUSD.format(totalDollar));
    // alert(totalDollar);

}

function errorFunc(msg) {
    message(msg.responseJSON.message);
}

function returnChange() {
    //reset everything to default
    $('#changeMessage').val('');
    message('');
    $('#item').val('');
    $("#dollarInput").val(numUSD.format(0));
    ds.displayItems(refreshItems, errorFunc);
}

function selectItem() {
    itemSelected = $(this).data('index');
    itemId = $(this).data('itemid');
    // itemId = $('item').val();
    $('#item').val(itemSelected);
    // $('#item').val(itemId);
    // console.log(itemId);
}

function purchaseItem() {

    itemSelected = $('#item').val();
    // alert(itemSelected);
    // console.log(itemSelected);
    if (itemSelected == '') {
        message("Please make a selection");
    } else {
        // totalDollar = $("#dollarInput").val();
        // alert("vend items");
        ds.buyItems(totalDollar, itemId, getChange, errorFunc);
        //refresh the items list
        ds.displayItems(refreshItems, errorFunc);
        $('#item').val('');
        $("#dollarInput").val(numUSD.format(0));
        totalDollar = 0;
        message("Thank You!!!");
        $(this).data('itemid').empty();
        

    }
}

//updates the message input field
function message(msg) {
    // console.log(msg);
    $('#messages').val(msg);
}

// shows the change info for the coins
function getChange(coins) {

    let quarter = coins.quarters;
    let dime = coins.dimes;
    let nickel = coins.nickels;
    let penny = coins.pennies;
    var changeMessage = "";

    if (quarter > 0) {
        changeMessage += quarter + " quarter(s), ";
    }
    if (dime > 0) {
        changeMessage += dime + " dime(s), ";
    }
    if (nickel > 0) {
        changeMessage += nickel + " nickel(s),";
    }
    if (penny > 0) {
        changeMessage += penny + " penny(s)";
    }

    $('#changeMessage').val(changeMessage);

    // console.log(coins);
}

function resetChangeAndMessageBox() {



}


$(document).ready(function () {

    // alert("wassup");
    // refreshItems(ds.getItems());
    ds.displayItems(refreshItems, errorFunc);

    //Adding money handler
    $(document).on('click', '#addDollar', addDollar);
    $(document).on('click', '#addQuarter', addQuarter);
    $(document).on('click', '#addDime', addDime);
    $(document).on('click', '#addNickel', addNickel);

    //Purchase item
    $(document).on('click', '.cell', selectItem);
    $(document).on('click', '#makePurchase', purchaseItem);

    //return change
    $(document).on('click', '#changeReturn', returnChange);


});