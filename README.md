- アプリの起動方法
  - Dockerの準備
    - DockerDesktopがインストールされている必要があります。
    - ```docker compose build```
    - ```docker compose up -d```
  - Next.jsの準備
    - Node.jsのコンテナは用意していないので、ローカルにインストールされている必要があります。
    - ```cd src/frontend```
    - ```yarn install```
    - ```yarn dev```
  - MySQLの準備
    - M1Mac用に作ってあります。IntelMacをお使いの方は```docker/mysql/Dockerfile```のFROM命令を```FROM mysql:8.0```と書き換えてください。
    - ```docker compose exec db bash```
    - ```mysql -u root -p```
    - パスワードを求められるので、```pass```と入力。
    - ```CREATE DATABASE tasuku```
    - ```exit```
  - Laravelの準備
    - ```docker compose exec backend bash```
    - ```composer install```
    - ```.env.example```をコピーして、```.env```とする。以下の通り編集。
    - ```DB_CONNECTION=mysql```
    - ```DB_HOST=db```
    - ```DB_PORT=3306```
    - ```DB_DATABASE=tasuku```
    - ```DB_USERNAME=root```
    - ```DB_PASSWORD=pass```
    - ```APP_KEY```が空欄の場合はコンテナ内で```php artisan key:generate```