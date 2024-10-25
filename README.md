Architecture

Modular Frontend React app:

\*\*\* Resumes

use Supabase, Generating types using Supabase CLI

Сортировка, фильтрация на Сервер сайд (Supabase пришлет мне отфильтрованные данные)

- Пагинация

\*\*\* Vacancies

Сортировка, фильтрация на Клиенте

React-Query

Оптимизированно время загрузки данных с сервера, Для загрузки индивидуальных резюме использованы данные как initial state из общего запроса списка резюме (из query cache, pull query data approach), далее в фоновом режиме подгружается актуальный на данную секунду инфо

или(выбрали этот)
Grab data list resume and optimistically push it into the query cache

- Optimistic Updates (В Профиле),сразу используются данные для показа юзеру которые отправлены на сервер, еще до того как сервер даст ответ
- Prefetch Paginated Queries
