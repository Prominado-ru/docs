(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{219:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"система-контроnя-версия"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#система-контроnя-версия"}},[s._v("#")]),s._v(" Система контроля версия")]),s._v(" "),a("h2",{attrs:{id:"преимущества"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#преимущества"}},[s._v("#")]),s._v(" Преимущества")]),s._v(" "),a("ul",[a("li",[s._v("Всегда доступна резервная копия на любую точку развития проекта. Всегда есть возможность откатиться назад")]),s._v(" "),a("li",[s._v("В системе видно кто, когда и зачем внес правки ("),a("strong",[s._v("ДОЛЖЕН")]),s._v(" присутствовать комментарий с кратким описанием изменений. Если изменения связаны с задачей в кор. портале - писать номер задачи)")]),s._v(" "),a("li",[s._v("Благодаря комментариям проще следить за историей проекта, понимать когда и зачем был внедрен функционал и как он должен работать.")])]),s._v(" "),a("ol",{attrs:{start:"0"}},[a("li",[s._v("Зарегистрироваться на "),a("a",{attrs:{href:"https://gitlab.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitLab"),a("OutboundLink")],1),s._v(" и прислать логин "),a("a",{attrs:{href:"https://github.com/saundefined",target:"_blank",rel:"noopener noreferrer"}},[s._v("@saundefined"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("Создаем Git-репозиторий")]),s._v(" "),a("li",[s._v("Открываем проект в PhpStorm\nМеню VCS -> Integrate VCS\nVCS -> Git -> Remotes Добавляем удаленный репозиторий ссылкой вида https://gitlab.com/prominado/project_name.git\nСодаем .gitignore с содержимым")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v(".idea\n.htaccess\n/bitrix/\n/upload/\n.txt\n*.log\n*.xml\n.gitignore\n/.access.php\n/.top.menu.php\nurlrewrite.php\n*.config\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[s._v("Созадем первый коммит\nПравой кнопкой по корню проекта\nДобавляем все файлы в гит: Git -> Add\nОпять правой кнопкой по корню Git -> Commit Directory\nПишем комментарий -> Commit & Push")])]),s._v(" "),a("li",[a("p",[s._v("Качаем изменения\nПравой кнопкой по корню -> Git -> Pull")])]),s._v(" "),a("li",[a("p",[s._v("Настраиваем сервер\nЗаходим по ssh в папку проекта")])])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" user@host.ru\n")])])]),a("p",[s._v("Создаем ssh-ключи, чтобы не вводить каждый раз пароль и изменения подтягивались по крону")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" .ssh\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" .ssh\n\nssh-keygen\n")])])]),a("p",[s._v("passphrase оставляем пустой")]),s._v(" "),a("p",[s._v("после окончания генерации ключа вводим:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.ssh/id_rsa.pub\n")])])]),a("p",[s._v("получившийся ключ добавляем сюда: https://gitlab.com/profile/keys")]),s._v(" "),a("p",[s._v("переходим в папку с проектом, инициируем Git и добавляем к нему удаленный репозиторий")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/www/host.ru\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin git@gitlab.com:prominado/project_name.ru.git\n")])])]),a("p",[s._v("получаем изменения")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout master\n")])])]),a("p",[s._v("дальше вешаем на крон каждую минуту")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/www/host.ru/ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/www/host.ru/ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard origin/master\n")])])]),a("p",[s._v("Теперь, если какие то изменения попадают в нашу мастер ветку, то они автоматически попадают на сайт 😃")])])}),[],!1,null,null,null);t.default=e.exports}}]);