const palindromo = require('../utils/palindromo');


test('Comprobar palabra 1', () => {
    expect(palindromo("roma")).toBe("amor");
})

test('Comprobar frase', () => {
    expect(palindromo("hola mundo")).not.toBe("hola mundo");
})




describe('palindromo', () => {
    test.each`
      firstValue | secondValue | expectedResult    
      ${"CASA"}       | ${"ASAC"}   
      ${"roma"}       | ${"amor"} 
      ${"C"}          | ${"C"}      
             
   
    `('cheking $firstValue,should return $expectedResult', ({firstValue, expectedResult}) => {
      expect(palindromo(firstValue,)).toBe(expectedResult);
    });
  });