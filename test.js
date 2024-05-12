const fs = require('fs');
const { parseString } = require('https://unpkg.com/xml2js@0.4.23/./lib/xml2js/lib/xml2js.min.js'); // Загружаем xml2js из CDN
const uuid = require('https://cdn.jsdelivr.net/npm/uuid@8.3.2/dist/umd/uuidv4.min.js');

// Функция для замены UUID
function replaceUuid(obj) {
    if (Array.isArray(obj)) {
        obj.forEach(item => replaceUuid(item));
    } else if (obj !== null && typeof obj === 'object') {
        for (let key in obj) {
            if (key === 'id') {
                obj[key] = uuid.v4();
            } else {
                replaceUuid(obj[key]);
            }
        }
    }
}

// Проверяем передан ли аргумент - путь к XML-файлу
if (process.argv.length !== 3) {
    console.log("Использование: node script.js <путь_к_XML_файлу>");
    process.exit(1);
}

const xmlFile = process.argv[2];

// Проверяем, существует ли указанный файл
fs.access(xmlFile, fs.constants.F_OK, (err) => {
    if (err) {
        console.error("Указанный файл не найден.");
        process.exit(1);
    }

    // Чтение XML-файла
    fs.readFile(xmlFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Ошибка при чтении файла:', err);
            return;
        }

        // Парсинг XML в объект
        parseString(data, (err, result) => {
            if (err) {
                console.error('Ошибка при парсинге XML:', err);
                return;
            }

            // Замена UUID во всех элементах <id>
            replaceUuid(result);

            // Преобразование объекта обратно в XML
            const updatedXml = data.replace(/<id>.*?<\/id>/g, () => `<id>${uuid.v4()}</id>`);

            // Запись обновленного XML в файл
            fs.writeFile(xmlFile, updatedXml, (err) => {
                if (err) {
                    console.error('Ошибка при записи в файл:', err);
                    return;
                }
                console.log('UUID успешно заменены во всех элементах <id>.');
            });
        });
    });
});
