function Product(productName, unitPrice, imageName) {
  this.productName = productName;
  this.unitPrice = unitPrice;
  this.imageName = imageName;
  this.purchaseAmount = 
  this.getProductView = function() {
    var output = "<td width='200'>" + this.productName + "<br />"
    + "<img hieght='100' width='80' src='" + this.imageName + "' />" + "<br />"
    + "$" + this.unitPrice + "<br />"
    + "<input class='product_item' id='" + this.productName + "' type='number' />" 
    + "</td>"
    return output;
  };
};

function ProductList() {
  var product1 = new Product("Pepsi", 1.11, "img/pepsi.jpeg");
  var product2 = new Product("Diet Pepsi", 1.12, "img/diet_pepsi.jpeg");
  var product3 = new Product("Mountain Dew", 1.13, "img/mountain_dew.jpeg");
  this.allProducts = [product1, product2, product3];
  this.getProductTable = function() {
    var output = "<tr>";
    for (index = 0; index < productList.allProducts.length; ++index) {
      if (index % 3 == 0) {
        output = output + "</tr><tr>"
      }

      output = output + productList.allProducts[index].getProductView();
    }

    output = output + "</tr>"
    return output;
  };

  this.purcahseAmountValid = function() {
    var valid = false;
    for(var i = 0; i < this.allProducts.length; i++) {
        if ($.isNumeric(this.allProducts[i].purchaseAmount)) {
          if (this.allProducts[i].purchaseAmount > 0) {
            valid = true;
          }
        }
    }

    return valid;
  };

  this.getSubtotalText = function() {
    var text = "";
    var total = 0;
    for(var i = 0; i < this.allProducts.length; i++) {
        if ($.isNumeric(this.allProducts[i].purchaseAmount)) {
          if (this.allProducts[i].purchaseAmount > 0) {
            var subtotal = this.allProducts[i].purchaseAmount * this.allProducts[i].unitPrice;
            total = total + subtotal;
            text = text + this.allProducts[i].purchaseAmount + " Units " 
            + this.allProducts[i].productName + " "
            + " Subtotal: $" + subtotal.toFixed(2) + " <br />";
          }
        }
    }

    text = text + "$Total: " + total.toFixed(2);

    return text;
  };

};