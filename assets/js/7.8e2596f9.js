(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{205:function(t,a,s){"use strict";s.r(a);var n=s(28),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"drag-n-drop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#drag-n-drop"}},[t._v("#")]),t._v(" Drag'n'Drop")]),t._v(" "),s("p",[t._v("Если нужна drag'n'drop загрузка файлов, в 1С-Битрикс для этого есть готовый класс:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param upload boolean Разрешить загрузку файлов\n * @param medialib boolean\n * @param fileDialog boolean\n * @param cloud boolean\n * @param maxCount int Максимальное количество файлов (0 - без ограничений)\n * @param maxSize int Максимальный размер файла\n * @param allowUpload string Разрешить загрузку (A - все / I - только картинки / F - только файлы)\n * @param allowUploadExt string Разрешенные расширения файлов через запятую (doc, xls, xlsx)\n * @param allowSort string Разрешить сортировать файлы (Y - да / N - нет)\n * @param name string Название, которое будет содержать описание файлов в $_POST\n * @param description boolean Разрешить добавлять описание к файлам \n * @param delete boolean Разрешить удалять файлы \n * @param edit boolean Разрешить редактировать файлы (картинки)\n * @param thumbSize int Размер превью\n **/")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$fileInput")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FileInput"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'upload'")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'allowUpload'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'F'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'medialib'")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'fileDialog'")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'cloud'")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'FILES[n#IND#]'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'delete'")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'description'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'edit'")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'maxCount'")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n* @param $showFiles int/array Идентификатор файла или массив идентификаторов, которые будут выведены в форме загрузки\n**/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$fileInput")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$showFiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),s("p",[t._v("После отправки формы в "),s("code",[t._v("$_POST")]),t._v(" придет массив:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Array\n(\n    [FILES] => Array\n        (\n            [n0] => Array\n                (\n                    [name] => Первый докуумент.docx\n                    [type] => application/vnd.openxmlformats-officedocument.wordprocessingml.document\n                    [tmp_name] => /BXTEMP-2018-01-11/21/bxu/main/d656a066df26990537dd06bb0f085304/file1515654479379/default\n                    [size] => 6977695\n                    [error] => \n                )\n\n            [n1] => Array\n                (\n                    [name] => Второй докуумент.docx\n                    [type] => application/vnd.openxmlformats-officedocument.wordprocessingml.document\n                    [tmp_name] => /BXTEMP-2018-01-11/21/bxu/main/d656a066df26990537dd06bb0f085304/file1515655436787/default\n                    [size] => 20578\n                    [error] => \n                )\n\n        )\n)\n")])])]),s("h2",{attrs:{id:"ограничения"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ограничения"}},[t._v("#")]),t._v(" Ограничения")]),t._v(" "),s("ul",[s("li",[t._v("Сохранять файлы нужно методом "),s("code",[t._v("\\CIBlock::makeFileArray()")]),t._v(". "),s("code",[t._v("\\CFile::MakeFileArray()")]),t._v(" "),s("strong",[t._v("работать не будет")]),t._v(".")]),t._v(" "),s("li",[t._v("Загрузка файлов возможна "),s("strong",[t._v("только зарегистрированным пользователям")]),t._v(". Использование класса для анонимных форм не рекомендуется")])])])}),[],!1,null,null,null);a.default=e.exports}}]);