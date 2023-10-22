Object.prototype.isObject = function (obj) {
  return typeof obj === 'object' && obj !== null;
};

Object.prototype.isEmpty = function (obj) {
  return Object.keys(obj).length === 0;
};

const flattenObject = (obj) => {
  if (!Object.isObject(obj)) {
    throw new Error('Данные должны быть объектом');
  }

  if (Object.isEmpty(obj)) return obj;

  const result = {};

  function recurse(current, prop) {
    if (isObject(current)) {
      for (const key in current) {
        recurse(current[key], prop ? prop + '.' + key : key);
      }
    } else {
      result[prop] = typeof current;
    }
  }

  recurse(obj, '');
  return result;
};

const testObj = {
  foo: {
    bar: {
      baz: {
        end: [1, 5, 'y'],
      },
    },
  },

  end: Symbol('ii'),
};

console.log(flattenObject(testObj));
