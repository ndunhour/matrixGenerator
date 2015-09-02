function generator(rowLen,colLen) {

  var container = [];

  for ( var i = 0; i < rowLen; i++) {
    var row = [];
    container.push(row);

    for ( var j = 0; j < colLen; j++) {
      var number = Math.floor((Math.random() * 100));
      row.push(number);


    }
  }
  console.log(container);
  container.sort();
  console.log(container);
}
generator(3,3);