
//business logic for Address Field List
function AddressField() {
  this.Addresses = []
  this currentId = 0
}

AddressField.prototype.addAddress = function(address) {
  address.id = this.assignId();
  this.Addresses.push(address);
}
AddressField.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

//Business logic for Address field
function Address(home, work, email) {
  this.home = home,
  this.work = work,
  this.email = email
}


//User Interface Logic ------------
var addressField = new AddressField();

function displayAddressDetails(addressDetailToDisplay) {
  var addresssFieldList = $("#address");
  var htmlForAddressInfo = "";
  addressDetailToDisplay.addresses.forEach(function(address){
    htmlForAddressInfo += "<li id=" + address.id+ ">" + address.home + " " + address.work + " " + address.email + "</li>";
  });
  addresssFieldList.html(htmlForAddressInfo);
};

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var inputtedHomeAddress = $("input#new-home-address").val();
    var inputtedWorkAddress = $("input#new-work-address").val();
    var inputtedEmailAddress = $("input#new-email-address").val();
    var newAddress = new Address(inputtedHomeAddress, inputtedWorkAddress, inputtedEmailAddress);
    AddressField.addAddress(newContact);
    console.log(AddressField.contacts);
  })
})
