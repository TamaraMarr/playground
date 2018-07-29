var obj = {
    log: ['example','test'],

    get latest() { // pseudo-property
      if (this.log.length == 0) return undefined;
      return this.log[this.log.length - 1];
    }
  }

  console.log(obj.latest); // "test"

  Object.defineProperty(obj, 'first', { get: function() { return this.log[0]; } });
  
  console.log(obj.first) // 'example'