/// <reference types="cypress" />

import { add, add_element_to_array, sum_array } from "../../src/utils";

describe("Unit Test Application Code", function () {
  before(() => {
    // check if the import worked correctly
    expect(add, "add").to.be.a("function");
  });

  context("utils", function () {
    it("can add numbers", function () {
      expect(add(1, 2)).to.eq(3);
    });
    it("can add element to array", function () {
      expect(add_element_to_array([2], 2)).to.deep.eq([2, 2]);
    });
    it("can sum array", function () {
      expect(sum_array([1, 2, 3])).to.eq(6);
    });
  });
});
