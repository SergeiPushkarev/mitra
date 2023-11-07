# Отборочное задание для соискателей на позицию Junior Frontend developer (React).

Необходимо реализовать SPA (single page application) на React.
Ключевые технологии, которые необходимо использовать
1. React
2. React-bootstrap
3. React-router
4. Axios
5. Redux
6. Redux-saga
7. Git

Описание задачи
Нужно создать сайт с постами, где будут присутст страницы (роута):
1. Список постов (главная страница), где будут располагаться все посты.
2. Обо мне, где будет располагаться краткая инфо o Bac.
3. Подробности о пользователе (куда необходимо информацию о пользователе и список его постов)
Получить данные необходимо через фейковое аp https://jsonplaceholder.typicode.com.

Подробное описание
1. Список постов (главная страница)
1.1. Должна содержать список всех постов
1.2 Каждый пост состоит из заголовка, текста, аватар автора и списка комментариев
1.3 Заголовок и текст брать из арі
1.4 Аватар должен быть одним изображением для всех пользователей, но при клике на него, должен происходи переход на страницу Подробности о пользователе.
1.5 Список комментариев изначально скрыт, доступна лишь кнопка Комментарии
1.6 При нажатии на кнопку Комментарии, должен грузиться из арі и показываться список комментариев к данному посту. При повторном нажатии список должен скрываться
1.7 Комментарий состоит из заголовка (email) и текста
1.8. При загрузке данных с сервера нужно отобразить сперва лоадер, а только потом подгруженный контент (создайте дополнительно искусственную задержку в 0.5 секунд чтобы лоадер повисел подольше).
1.9. Должен присутствовать хэдер с «меню-бургером». При нажатии на него слева должно всплывать навигационное меню, где будет присутствовать 2 ссылки (Список постов и Обо мне), а также отображаться ваш аватар, имя и почтовый адрес.
1.10 Должна присутствовать возможность поиска по заголовку поста, с возможностью очистки поля через крестик.
1.11 Должна присутствовать возможность сортировки по заголовку поста.
1.12 Должна присутствовать пагинация.

2. Обо мне
2.1. Здесь всё просто, расскажите немного о себе. Сделайте эту страницу отдельным роутом, сохранив при этом хэдер и «меню-бургер».

3. Подробности о пользователе (переход при нажатии по аватару у поста)
3.1. Необходимо создать карточку, куда вывести краткую информацию о пользователе. Информация должна соответствовать автору поста.
3.2 Отобразить список постов принадлежащих только данному пользователю, структура самих постов полностью идентична с п.1.2.
3.3. Добавить лоадер по аналогии с п.1.8.
3.4. Сделать кнопку «Назад», при нажатии на которую произойдет переход на главную страницу.

1. В качестве основы можно взять шаблон React App.
2. Вынесите логику работы с сервером в saga-эффекты.
3. Обязательно разбейте логически-независимые элементы страниц на компоненты.
4. На странице Подробности о пользователе данные должны подгружаться даже после обновления этой страницы.
5. Весь интерфейс реализуйте с помощью ші-библиотеки React-bootstrap (используйте компоненты, которые предоставляет эта библиотека).
6. Во время написания кода делайте коммиты почаще (по каждой существенной функции интерфейса).
7. Сделайте обработку ошибок на случай прихода ошибки от сервера.
8. Верстка должна выглядеть хорошо для маленьких и больших экранов устройств.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

