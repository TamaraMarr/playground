const root = document.querySelector(':root');

const rootStyles = getComputedStyle(root);

const red = rootStyles.getPropertyValue('--red');

root.style.setProperty('--red', 'green')

const yellow = rootStyles.getPropertyValue('yellow');

root.style.setProperty('--yellow', 'purple');
