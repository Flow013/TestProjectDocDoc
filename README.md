# DocDoc Test Project
Тестовое приложение написанное для собеседования в DocDoc

## Установка
```javascript
    npm install
```

## Запуск
Development:
npm start

Prodaction build:
npm run build

## Tech Stack

- npm only
- react scripts ts
- antd
- redux + saga
- ramda ( https://habr.com/ru/post/349468/ )
- tslint

## Архитектура и code style

! camelCase only (кроме css селекторов)
! директории с маленькой буквы
! файлы с заглавной

методы в react классах arrowOnly (пример: someHandler = () => {})

- view (компоненты ui)
  - assets(шрифты, иконки) 
  - components(dump компоненты) *
  - pages(сущности разбитые по страницам приложения в браузере, основные части приложения подключаемые через router)
    - users
    - cats
    - market
    ... и т п 
- workflows (модули отвечающие за логику приложения)
  - actions *
  - reducers
  - sagas 
- helpers *
- api (связующее звено между приложением и внешними источниками данных, таких как api, localStorage, mocks и т п) 
- models ( модели данных, сущности описывающие свойства приложения и поля отображаемых им сущностей ) *

В директориях помеченных * рекомендуется придерживаться структуры представленной в pages (группировка по смысловым сущностям)
Если у двух смысловых сущностей есть общая часть, рекомендуется выносить её в папку common




