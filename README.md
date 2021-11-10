# Icons

Package containing BestDoctor icons, wrapped in React components

[Demo page](https://best-doctor.github.io/react-icons/)

## Installation

`$ yarn add @bestdoctor/icons`

# Как добавить (обновить) иконку

- В репе в папку **icons-sources**/ добавляем svg иконку.
- Коммитим с сообщением `feat: add (or update) icon <IconName>`
- Пушим в ветку `master`, или `beta` и ждем пока выполнится workflow
- Если вы хотите отредактировать фавиконку, это делается **src/favIcons.** Важно что иконки из этой папки никак не обрабатываются, поэтому за их содержимое и экспорт отвечает исключительно разработчик

## Требования к иконкам

- Цвет иконки (например свойства fill) должен быть `#2D3748`, чтобы svgr мог заменить это значение на `props.color`. Настроить замену атрибутов можно в `.svgrrc.js`

## Что произойдет во время выполнения пайпа

- svgr из иконок в /**icons-sources**/ сгенерирует React компоненты и положит в **src/icons**
- rollup соберет пакет
- standard-version бампнет версию
    - Если запушить в ветку beta, то standard-version бампнет бета версию
- пакет запаблишится в npm
    - Если запушить в ветку beta, то пакет запаблишится с тегом бета
- будет собран проект демо страницы и запаблишен на Github Pages

## Как дорабатывать демо страницу

- клонируем репозиторий react-icons
- устанавливаем зависимости: `yarn`
- собираем пакет `yarn build`
- заходим в папку demo
    - устанавливаем зависимости: `yarn`
    - проект готов к работе. можно запустить с помощью `yarn start`

## Contributing

We would love you to contribute to our project. It's simple:

* Create an issue with bug you found or proposal you have.
  Wait for approve from maintainer.
* Create a pull request. Make sure all checks are green.
* Fix review comments if any.
* Be awesome.
