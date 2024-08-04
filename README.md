# edarcode-api

## Arquitectura

- Screaming architecture

## Herramientas

- Express
- Zod
- Prisma
- PostgreSQL

## Requisitos

Debe tener la database lista para consumir y configurar las variables de entorno. Cree el archivo .env en la raíz del proyecto y dígite las sgt variable de entorno:

```
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
```

- **USER:** nombre del usuario de su base de datos
- **PASSWORD:** contraseña para el usuario de su base de datos
- **HOST:** nombre de su host (para el entorno local, es localhost)
- **PORT:** puerto donde se ejecuta su servidor de base de datos (normalmente 5432para PostgreSQL)
- **DATABASE:** nombre de la base de datos
- **SCHEMA:** nombre del esquema dentro de la base de datos

Otras variables de entorno necesarias:

```
PORT=3000

BOSS_NAME="edarcode"
BOSS_EMAIL="email@gmail.com"
BOSS_PASSWORD="***"

NODEMAILER_GMAIL="email@gmail.com"
NODEMAILER_GMAIL_APP_PASSWORD="**** **** **** ****"

SECRET_JWT="***"
```

## Scripts

En el package.json ya existen scripts para resetear, migrar, llenar la db con data fake.

- instalar dependencias:

```
npm i
```

- rellenar la db:

```
npm run dbnew
```

- luego

```
npm run dev
```

## Rutas

### módulo welcome

- http://localhost:3000

### módulo user

#### client

- POST http://localhost:3000/user/client/auth/signup

Debe proporcionar un correo real dado que se enviará un mensaje de confirmación al mismo, solo se creará el registro cuando haya confirmado. Su contraseña se guardará encryptada.

```
{
  "name": "edarcode",
  "email": "correo@gmail.com",
  "password": "******"
}
```

- POST http://localhost:3000/user/client/auth/login

Si el login es exitoso se enviará un token valido por 1 semana, y dentro del mismo información relacionada al usuario como: id, role, username, img.

```
BODY
{
  "email": "correo@gmail.com",
  "password": "******"
}
```

- POST http://localhost:3000/user/client/auth/refresh-token

ocupa que envies un token valido para poder enviar un nuevo token

```

```

#### boss

Las rutas **boss** están protegidas. Debe enviar el token por **headers** con la key **Authorization**, además debe tener role BOSS

- POST http://localhost:3000/user/boss/create

  - **name:** 1 a 50 carácteres, sin carácteres especiales, sin números, no empezar con espacio, no finalizar con espacio, sin mayúsculas.

  - **username:** 3 y 15 caráteres, sin carácteres especiales, no empezar ni terminar con espacio.

  - **role:** solo "CLIENT" o "BOSS".

  - **password:** 6 a 127 carácteres.

  - **img:** cadena de texto en formato url, opcional.

```
BODY
{
  "name": "fake name",
  "username": "fakeusername",
  "email": "fake@gmail.com",
  "password": "123456",
  "role": "CLIENT",
  "img": "https:www.img.com"
}
```

- GET http://localhost:3000/user/boss/read

  posibles filtros (QUERY):

  - **name:**
  - **username:**
  - **email:**
  - **role:**
  - **page:**
  - **take:** cantidad de resultados por página deseado

- POST http://localhost:3000/user/boss/update/:id

```
BODY
{
  "name": "fake name two",
  "username": "fakeusername2",
  "email": "fake2@gmail.com",
  "password": "1234567",
  "role": "CLIENT",
  "img": "https:www.img.com"
}
```

- POST http://localhost:3000/user/boss/delete/:id
