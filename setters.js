var language = {
    set current(name) { // current is not defined and any attempts to access it will result in undefined
        this.log.push(name);
    },
    log: []
}

language.current = 'EN';
console.log(language.log); // ['EN']

language.current = 'FA';
console.log(language.log); // ['EN', 'FA']