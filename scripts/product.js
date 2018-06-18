function Product(productName, unitPrice, imageName) {
  this.productName = productName;
  this.unitPrice = unitPrice;
  this.imageName = imageName;
  this.getProductView = function() {
    var output = "<td width='200'>" + this.productName + "<br />"
    + "<img hieght='75' width='75' src='" + this.imageName + "' />" + "<br />"
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
};