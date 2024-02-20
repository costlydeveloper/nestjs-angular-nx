import { CommonDataControl } from './common-data-control';

class ConcreteDataControl extends CommonDataControl {
  a = 0;
  b = 0;
}

describe('ConcreteDataControl', () => {
  let instance: ConcreteDataControl;

  beforeEach(() => {
    instance = new ConcreteDataControl();
  });

  describe('convertStringToDate', () => {
    it('should convert a valid date string to a Date object', () => {
      const dateString = '2021-01-01';
      const result = instance.convertStringToDate(dateString);
      expect(result).toBeInstanceOf(Date);
      expect(result).toEqual(new Date(dateString));
    });

    it('should return null for invalid date strings', () => {
      const invalidDateString = 'invalid-date';
      const result = instance.convertStringToDate(invalidDateString);
      expect(result).toBeNull();
    });
  });

  describe('compareWith', () => {
    it('should return true for identical objects', () => {
      const obj1 = { a: 1, b: 2 };
      instance.copyValuesFrom(obj1);
      expect(instance.compareWith(obj1)).toBe(true);
    });

    it('should return false for different objects', () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { a: 3, b: 4 };
      instance.copyValuesFrom(obj1);
      expect(instance.compareWith(obj2)).toBe(false);
    });
  });

  describe('extractDifferentValuesFrom', () => {
    it('should return an empty array for identical objects', () => {
      const obj = { a: 1, b: 2 };
      instance.copyValuesFrom(obj);
      expect(instance.extractDifferentValuesFrom(obj)).toEqual([]);
    });

    it('should return an array of keys for different values', () => {
      const obj = { a: 1, b: 2 };
      const differentObj = { a: 2, b: 2 }; // Only 'a' is different
      instance.copyValuesFrom(obj);
      expect(instance.extractDifferentValuesFrom(differentObj)).toEqual(['a']);
    });
  });

  describe('cloneSerialized', () => {
    it('should create a deep clone of the instance', () => {
      const obj = { a: 3, b: 4 };
      instance.copyValuesFrom(obj);
      const clone = instance.cloneSerialized();
      expect(clone).toEqual(instance);
      expect(clone).not.toBe(instance); // Ensure it's a deep clone, not the same reference
    });
  });
});
