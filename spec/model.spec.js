var model = require('../model.js');

describe("Model test", function () {
  it("scitani", function () {
    model.num1 = 3;
    model.oper = '+';
    model.num2 = 2;
    expect(model.doit()).toBe(5);
  });
  it("odcitani", function () {
    model.num1 = 3;
    model.oper = '-';
    model.num2 = 2;
    expect(model.doit()).toBe(1);
  });

  it("nasobeni", function () {
    model.num1 = 3;
    model.oper = '*';
    model.num2 = 2;
    expect(model.doit()).toBe(6);
  });

  it("deleni", function () {
    model.num1 = 6;
    model.oper = '/';
    model.num2 = 2;
    expect(model.doit()).toBe(3);

    model.num1 = 0;
    model.oper = '/';
    model.num2 = 6;
    expect(model.doit()).toBe(0);

    model.num1 = 6;
    model.oper = '/';
    model.num2 = 0;
    expect(model.doit()).toBePositiveInfinity();

    model.num1 = -6;
    model.oper = '/';
    model.num2 = 0;
    expect(model.doit()).toBeNegativeInfinity();
  });

  it("clear", function () {
    model.num1 = -6;
    model.oper = '/';
    model.num2 = 54;
    model.clear()
    expect(model.num1).toBe(0);
    expect(model.num2).toBe(0);
  });

  it("sin", function () {
    model.num1 = Math.PI / 2;
    model.oper = 'sin';
    expect(model.doit()).toBe(1);
  });


  /*
  
    model.num1 = -6;
    model.oper = '/';
    model.num2 = 54;
    model.clear()
    console.log('clear: ' + (model.num1 == 0));
    console.log('clear: ' + (model.num2 == 0));
  
    model.num1 = Math.PI / 2;
    model.oper = 'sin';
    console.log('sin: ' + (model.doit() == 1))
  
  */
});