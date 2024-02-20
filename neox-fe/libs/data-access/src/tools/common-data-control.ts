import isEqual from 'lodash-es/isEqual';

export interface ICommonDataControl {
  [key: string]: any;

  convertStringToDate(data: string): Date | null;

  copyValuesFrom(data: object): void;

  extractDifferentValuesFrom(object: object): string[];

  compareWith(object: object, escapeProps?: string[]): boolean;

  cloneSerialized(): this;
}

export abstract class CommonDataControl implements ICommonDataControl {
  [key: string]: any;

  /**
   * Compares the current instance with another object, excluding specific keys.
   * @param object The object to compare against.
   * @param escapeProps Keys to be excluded from the comparison.
   * @returns Returns `true` if the objects are equal after excluding `escapeProps`, otherwise `false`.
   */
  compareWith(object: object, escapeProps?: string[]): boolean {
    const thisObject = JSON.parse(JSON.stringify(this));
    const newObject = JSON.parse(JSON.stringify(object));
    delete thisObject.id;
    delete newObject.id;
    if (escapeProps) {
      escapeProps.forEach((prop) => {
        delete thisObject[prop];
        delete newObject[prop];
      });
    }
    return isEqual(thisObject, newObject);
  }

  /**
   * Extracts keys whose values are different from those in another object.
   * @param data The object against which values are compared.
   * @returns An array of keys that have different values.
   */
  extractDifferentValuesFrom(data: object): string[] {
    const returnValue: string[] = [];
    const thisObject = JSON.parse(JSON.stringify(this));
    const externalObject = JSON.parse(JSON.stringify(data));
    delete thisObject.id;
    delete externalObject.id;
    const externalKeys = Object.keys(externalObject);
    const thisKeys = Object.keys(thisObject);

    externalKeys.forEach((extKey) => {
      // loop only through the same keys, (props)
      if (thisKeys.find((thisKey) => thisKey === extKey)) {
        if (
          thisObject[extKey] !== externalObject[extKey] &&
          typeof thisObject[extKey] !== 'object'
        ) {
          returnValue.push(extKey);
        }
      }
    });
    return returnValue;
  }

  /**
   * Converts a string to a Date object if possible.
   * @param data The string representing a date.
   * @returns A Date instance if the conversion is successful, otherwise `null`.
   */
  convertStringToDate(data: any): Date | null {
    const rawDate = Date.parse(data);
    if (
      typeof data === 'string' &&
      !isNaN(rawDate) &&
      !data.startsWith('000')
    ) {
      return new Date(rawDate);
    } else {
      return null;
    }
  }

  /**
   * Copies values from the provided object to the current instance. Only properties that already exist in the current instance will be updated.
   * @param data The object from which values are to be copied.
   * @returns The current instance with values updated from the provided object.
   */
  copyValuesFrom(data: any): any {
    if (typeof data !== 'object' || data === null) {
      return this;
    }

    const dataKeys = Object.keys(data);
    const thisKeys = Object.keys(this);

    dataKeys.forEach((dKey) => {
      if (thisKeys.find((tKey) => tKey === dKey)) {
        if (dKey.includes('Date') && !(data[dKey] instanceof Date)) {
          this[dKey] = this.convertStringToDate(data[dKey]);
        } else {
          if (this[dKey] instanceof CommonDataControl) {
            this[dKey].copyValuesFrom(data[dKey]);
          } else if (Array.isArray(this[dKey])) {
            this[dKey] = JSON.parse(JSON.stringify(data[dKey]));
          } else {
            this[dKey] = data[dKey];
          }
        }
      }
    });

    return this;
  }

  /**
   * Creates a deep copy of the current instance using serialization.
   * @returns A new instance that is a deep copy of the current one.
   */
  cloneSerialized(): this {
    return JSON.parse(JSON.stringify(this));
  }
}
