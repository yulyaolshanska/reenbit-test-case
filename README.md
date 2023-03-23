# Reenbit-test-case

## https://rickandmotry.netlify.app/

## Available Scripts

In the project directory, you can run:

### `npm i`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\

Used technologies:

- ReactJS
- TypeScript
- Redux
- RTK Query
- Styled components

<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" title="React" alt="React" width="40"         height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg" title="TypeScript" **alt="TypeScript" width="40"   height="40"/>&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" title="Redux" alt="Redux " width="40" height="40"/>&nbsp;
</div>
<div>

## **Маршрутизація**

- **_/_** - публічний-необмежений, переадресує на сторінку **_CharactersPage_**
- **_/details/:id_** - публічний-необмежений, переадресує на сторінку **_CharacterDetailsPage_**,
- **_/login_** - публічний-необмежений, переадресує на сторінку **_LogInPage_**

## ТЗ

- Адаптивний дизайн .
- При старті аплікації у користувача має йти запит до API і відмальовуватись
  список персонажів з мультфільму. Список персонажів має бути відсортований
  по імені.
- Клікнувши на окремого персонажа має йти запит по окремому персонажу і бути
  перенаправлення на інший роут з більш детальною інформацією про нього.
- Кнопка “go back” має перенаправляти на попередній роут зі списком персонажів.
- Пошук серед персонажів по їх імені. (при введені імені персонажу
  список має фільтруватись і показувати лише співпадіння з пошуком, список
  персонажів також має бути відсортований по імені).
- При перезавантаженні сторінки чи переході по роутам дані пошуку мають
  зберігатись.
- Логін через GMAIL та Facebook</div>
