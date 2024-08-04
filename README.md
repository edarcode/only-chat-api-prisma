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

Están dividas por modulos:

### WELCOME

- http://localhost:3000

### USER

Las rutas **boss** están protegidas.

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

```
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

Debe enviar el token por **headers** con la key **Authorization**, además debe tener role BOSS

- POST http://localhost:3000/user/boss/create

name: 1 a 50 carácteres, sin carácteres especiales, sin números, no empezar con espacio, no finalizar con espacio, sin mayúsculas.

username: 3 y 15 caráteres, sin carácteres especiales, no empezar ni terminar con espacio.

role: solo "CLIENT" o "BOSS"

password: 6 a 127 carácteres.

img: cadena de texto en formato url.

```
{
  "name": "fake name",
  "username": "fakeusername",
  "email": "fake@gmail.com",
  "password": "123",
  "isAuth": true,
  "role": "CLIENT"
}
```

- GET http://localhost:3000/user/boss/read

```

```

- POST http://localhost:3000/user/boss/modify/:id

```
{
  "name": "fake two",
  "email": "fake2@gmail.com",
  "password": "edar123",
  "isAuth": false,
  "role": "ADMIN"
}
```

- POST http://localhost:3000/user/boss/delete/:id

```

```
