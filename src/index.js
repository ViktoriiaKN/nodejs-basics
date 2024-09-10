import path from 'node:path';

// приклад для побудови шляху з його частин
const somePath = path.join('some_folder', 'some_file.txt');
// somePath буде 'some_folder/some_file.txt' на MacOs

// somePath буде 'some_folder\\some_file.txt' на Windows
console.log(somePath);
