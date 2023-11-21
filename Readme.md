# Личный проект «Шесть городов»

- Студент: [Инна Хаглеева](https://up.htmlacademy.ru/react/14/user/769255).
- Наставник: [Виктор Виноградов](https://htmlacademy.ru/profile/id2404707).

---

_Не удаляйте и не изменяйте папки и файлы:_
_`.editorconfig`, `.gitattributes`, `.gitignore`._

---

### Памятка

#### 1. Зарегистрируйтесь на Гитхабе

Если у вас ещё нет аккаунта на [github.com](https://github.com/join), скорее зарегистрируйтесь.

#### 2. Создайте форк

Откройте репозиторий и нажмите кнопку «Fork» в правом верхнем углу. Репозиторий из Академии будет скопирован в ваш аккаунт.

<img width="769" alt="Press 'Fork'" src="https://cloud.githubusercontent.com/assets/259739/20264045/a1ddbf40-aa7a-11e6-9a1a-724a1c0123c8.png">

Получится вот так:

<img width="769" alt="Forked" src="https://cloud.githubusercontent.com/assets/259739/20264122/f63219a6-aa7a-11e6-945a-89818fc7c014.png">

#### 3. Клонируйте репозиторий на свой компьютер

Будьте внимательны: нужно клонировать свой репозиторий (форк), а не репозиторий Академии. Также обратите внимание, что клонировать репозиторий нужно через SSH, а не через HTTPS. Нажмите зелёную кнопку в правой части экрана, чтобы скопировать SSH-адрес вашего репозитория:

<img width="769" alt="SSH" src="https://cloud.githubusercontent.com/assets/259739/20264180/42704126-aa7b-11e6-9ab4-73372b812a53.png">

Клонировать репозиторий можно так:

```
git clone SSH-адрес_вашего_форка
```

Команда клонирует репозиторий на ваш компьютер и подготовит всё необходимое для старта работы.

#### 4. Начинайте обучение!

---

<a href="https://htmlacademy.ru/intensive/react"><img align="left" width="50" height="50" title="HTML Academy" src="https://up.htmlacademy.ru/static/img/intensive/react/logo-for-github.png"></a>

Репозиторий создан для обучения на профессиональном онлайн‑курсе «[React. Разработка сложных клиентских приложений](https://htmlacademy.ru/intensive/react)» от [HTML Academy](https://htmlacademy.ru).

========================================================================================

## Домашние задания

#### 3.13 Маршрут по тайным тропам

1. Создайте отдельный компонент для страницы «404». Дизайн остаётся на ваше усмотрение. В самом простом случае, это может быть страница с текстом «404 Not Found» и ссылкой для перехода на главную страницу приложения. На эту страницу пользователь будет перенаправлен в случае обращения к несуществующей странице (например, через адресную строку).

2. Импортируйте все необходимые компоненты из пакета react-router-dom (BrowserRouter, Route, Routes).

3. С помощью перечисленных ниже компонентов опишите все маршруты в приложении. По каждому адресу должен отрисовываться соответствующий компонент страницы.
   Main /
   Login /login
   Favorites /favorites
   Offer /offer/:id
   Предусмотрите маршрут для обработки ситуаций, когда пользователь обращается к несуществующей странице (например, с помощью адресной строки). В этом случае он перенаправляется на страницу «404».

4. Создайте компонент для описания приватных маршрутов. Этот компонент должен перенаправлять пользователя на страницу «Login» если он не авторизован. Воспользуйтесь новым компонентом и обновите маршрут для страницы «Favorites». Доступ к этой странице доступен только для авторизованных пользователей. Пока мы не взаимодействуем с настоящим сервером, передавайте компоненту информацию, что пользователь всегда не авторизован. Полноценную реализацию сделаем позже.

========================================================================================

#### 4.21 Обратная сторона реальности

1. В /src создайте новую директорию mocks, а в ней новый файл offers.ts. Опишите в нём тестовые данные для 4 любых предложений по аренде недвижимости (не забудьте включить уникальный идентификатор). Эти данные потребуются как для отрисовки карточек с предложениями в списке, так и для отдельных страниц с полной информацией по предложению аренды. Код для генерации данных писать не нужно. Статичных данных достаточно.
   Обратите внимание, разные наборы данных вы можете описать в разных файлах. Например, в offers.ts оставить только данные по предложениям, а в reviews.ts описать отзывы. И так далее.

2. Подключите созданные моки в index.tsx. Передайте их в виде props основному компоненту приложения (App).

3. Обновите компонент «Карточка предложения». Добавьте возможность получения данных о предложении аренды через props.

4. Создайте новый компонент «Список предложений». Компонент должен отрисовывать карточки с предложениями аренды с помощью компонента «Карточка предложения». Все необходимые данные компонент принимает через props.

5. Добавьте в состояние компонента активную карточку с предложением (объект с данными предложения или только уникальный идентификатор предложения). Под активной карточкой предложения подразумевается карточка, на которую пользователь навёл курсор. Состояние пригодится нам в дальнейшем для реализации отображения маркеров предложений на карте.

6. Передайте моковые предложения по аренде с помощью props компоненту «Главная страница».

7. Обновите код компонента «Главная страница». Отрисуйте предложения по аренде с помощью компонента «Список предложений».

8. Передайте странице «Favorites» через props набор данных (объектов) из моков. Вместо статичной вёрстки, на странице должны отрисовываться карточки предложений.

9. Используя компонент Link и хуки из пакета react-router-dom свяжите страницы приложения. Например, клик по заголовку карточки предложения должен переводить пользователя на страницу «Offer» с подробным описанием предложения по аренде.

10. Создайте новый компонент «Форма отправки комментария». Разметку для компонента вы найдёте в файле offer.html. Реализуйте сохранение введённых в форму данных в state компонента.

11. Замените на странице «Offer» /offer/:id часть разметки на вновь созданный компонент.

========================================================================================

#### 5.18. Больше подробностей (часть 1)

Пришло время подключить к проекту настоящую карту и отобразить на ней предложения по аренде в виде маркеров. В качестве карт мы воспользуемся вариантом от OpenStreetMap, а для удобства взаимодействия с картами пакетом — leaflet.

1. Добавьте в ранее подготовленные тестовые данные координаты объектов для аренды. В качестве координат используйте пары (широта, долгота):

   52.3909553943508, 4.85309666406198
   52.3609553943508, 4.85309666406198
   52.3909553943508, 4.929309666406198
   52.3809553943508, 4.939309666406198
   Все предложения по аренде приведены для города Амстердам.

2. Создайте новый компонент «Карта» и воспользуйтесь в нём пакетом leaflet для отображения карты. Все необходимые данные компонент должен принимать через props. Обратите внимание, карта отрисовывается в контейнере .cities\_\_map. Детали подключения рассмотрены в демонстрации «Подключение Leaflet (TypeScript)»

3. Подключите компонент «Карта» к компоненту «Главная страница». Отобразите на карте все предложения (в виде маркеров) по аренде в Амстердаме.

========================================================================================

#### 6.15. Контроль и ограничения (часть 1)

1. Создайте новый файл для описания редьюсера (например, reducer.ts). Опишите в нём:

-Объект начального состояния: город (используется для отбора списка предложений в определённом городе) и список предложений по аренде.

-Функцию-редьюсер. Она принимает в качестве параметров текущий state и действие (action). Результатом выполнения редьюсера станет новое состояние. Обратите внимание, для именования функций-редьюсеров применяются существительные.

2. Создайте новый файл для описания действий (например, action.ts) и опишите в нём список действий, на основании которых формируется новый state. На данном этапе нам потребуется несколько действий: изменение города и заполнение списка предложений по аренде. Действие для заполнения списка предложений должно поместить в хранилище все предложения по аренде. Пока используем тестовые данные.

3. Инициализируйте (например, в файле src/store/index.ts) новое хранилище с помощью функции configureStore из пакета @reduxjs/toolkit. Оберните основной компонент приложения (App) в <Provider> из пакета react-redux. Через props передайте ему ссылку на созданное хранилище.

4. Напишите код для получения списка предложений по аренде в соответствии с выбранным городом.

5. Создайте новый компонент «Список городов» (если ещё не создали). Компонент получает все необходимые данные через props. Список городов статичен и описан в техническом задании.

6. Подключите компонент «Список городов» к приложению. При выборе города выполняется отрисовка предложений по аренде в соответствии с выбранным городом. Не забудьте обновлять заголовок с количеством предложений, доступных для выбранного города. Например: 312 places to stay in Amsterdam. Не забудьте, что все отрисованные предложения, соответствующие отбору, также должны быть отрисованы на карте в виде маркеров. После загрузки приложения фильтром по умолчанию становится город Paris.

========================================================================================

#### 6.16. Контроль и ограничения (часть 2)

1. Создайте новый компонент «Варианты сортировки» и подключите его к главной странице. В качестве значения по умолчанию для сортировки выставляется «Popular» — карточки с предложениями отображаются в исходном порядке (полученном с сервера или из тестовых данных).

2. Запрограммируйте все варианты для сортировки карточек с предложениями:

Price: low to high. От дешёвых к дорогим.
Price: high to low. От дорогих к дешёвым.
Top rated first. От высокого рейтинга к низкому.

3. Реализуйте поведение, когда при наведении на карточку предложения на карте оранжевым цветом подсвечивается соответствующий маркер.

========================================================================================
Пришло время подключить проект к боевому серверу, избавиться от тестовых данных и попрактиковаться в работе с новыми инструментами: axios и redux-thunk. В этом задании мы сконфигурируем проект для взаимодействия с удалённым сервером, а затем загрузим реальные данные.

#### 7.14. Истина где-то на сервере

1. Отключите и удалите файл с тестовыми данными. Больше они не понадобятся.

2. Создайте новый модуль (например, api.ts), подключите в нём пакет axios, который уже предустановлен в вашем проекте. Опишите функцию для конфигурирования нового экземпляра axios:

- baseURL — основной адрес сервера (URL). Он будет использоваться для всех относительных адресов. Адрес сервера определён в техническом задании к проекту.
- timeout — 5000.

3. В файле src/store/index.ts воспользуйтесь функцией из предыдущего шага и сохраните настроенный экземпляр axios в переменную. Затем обновите конфигурирование хранилища: настройте middleware thunk и передайте в extraArgument экземпляр axios.

4. Напишите код для загрузки и отрисовки списка предложений аренды с сервера. Подробная информация о взаимодействии с сервером приведена в техническом задании. Список предложений должен загружаться при старте приложения.

5. Создайте новый компонент «Спиннер». Компонент должен отображаться, пока происходит загрузка списка предложений по аренде. Дизайн спиннера остаётся на ваше усмотрение.

========================================================================================
