const isUpperCase = require('../utils/esmayuscula');

test('Comprobar mayuscula True', () => {
    expect(isUpperCase("HOLA")).toBe(true);
})

test('Comprobar mayuscula False', () => {
    expect(isUpperCase("hola")).toBe(false);
})



describe('esmayuscula', () => {
    test.each`
      firstValue | secondValue | expectedResult    
      ${"CASA"}       | ${true}   
      ${"casa"}      | ${false}       
      ${"Casa"}       | ${false}        
   
    `('cheking $firstValue,should return $expectedResult', ({firstValue, expectedResult}) => {
      expect(isUpperCase(firstValue,)).toBe(expectedResult);
    });
  });