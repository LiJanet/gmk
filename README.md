# ГидроМонтажКомплект
Сайт-лендинг из 3 разделов

##сборка

* На компьютере должен быть установлен [node.js](https://nodejs.org/en/download/) вместе с _npm_, таким образом, чтобы их напрямую можно было вызвать из консоли. Версию ноды после установки можно посмотреть так:

    node -v

* Проект использует сборщик `gulp` версии 4, его нужно установить глобально, с флагом `-g`, предварительно грохнув старую версию

    npm uninstall gulp -g
    npm uninstall gulp-cli -g
    npm install gulpjs/gulp#4.0 -g

Проверить версию `gulp` после установки (можно и перед установкой) можно так

    gulp -v
Во-первых, не должно ругнуться, что такого испольнительного файла нет, а во-вторых, должно выдать вразумительную строку, нечто вроде

    CLI version 1.2.2

Если спросить такое после локальной установки `gulp` в папке проекта (см. ниже), то выдаст еще и версию самого `gulp`

    Local version 4.0.0-alpha.2

* Переходим в консоли в корень проекта (команда `cd "путь/к/проекту"` или сразу стартуем консоль в нужной папке) и устанавливаем все зависимости

    npm install

Выдаст длиннющую древовидную портянку со списком установленных модулей, возможно с несколькими предупреждениями (`WARN`), главное чтобы не было ошибок (`ERROR`) 

* Стартуем сборщик/монитор из консоли в папке проекта

    gulp

Должен выдать нечто вроде

    ...
    Starting 'process:html'...
    Finished 'process:html' after 525 ?s
    Starting 'finish:html'...
    Finished 'compile:css:sass' after 40 ms
    Starting 'compile:css:clean'...
    Finished 'compile:css:clean' after 7.22 ms
    Finished 'compile:css' after 49 ms
    Finished 'process:css' after 50 ms
    Starting 'finish:css'...
    Finished 'finish:css' after 12 ms
    Finished 'build:css' after 143 ms
    Finished 'finish:html' after 38 ms
    Finished 'build:html' after 156 ms
    Finished 'prepare:res' after 189 ms
    Starting 'process:res'...
    Finished 'process:res' after 1.16 ms
    Starting 'finish:res'...
    Finished 'finish:res' after 32 ms
    Finished 'build:res' after 226 ms
    Starting 'inject'...
    gulp-inject Nothing to inject into contacts.html.
    gulp-inject 1 files into contacts.html.
    gulp-inject Nothing to inject into index.html.
    gulp-inject 1 files into index.html.
    gulp-inject Nothing to inject into service.html.
    gulp-inject 1 files into service.html.

Скрипт дальше остается активным (консолька открытой), не трогаем его, он обслуживает сервер и мониторит изменения в исходниках. Сервер доступен из браузера [отсюда](http://localhost:8080)  