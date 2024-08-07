# edarcode-api

## Arquitectura

- Screaming architecture

## Herramientas

- Express
- TypeScript
- Zod
- Prisma
- PostgreSQL

## Requisitos

Debe tener una **db** lista para consumir y configurar las variables de entorno. Cree el archivo **.env** en la raíz del proyecto:

```
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
```

- **USER:** Nombre del usuario de su base de datos
- **PASSWORD:** Contraseña para el usuario de su base de datos
- **HOST:** Nombre de su host
- **PORT:** Puerto donde se ejecuta su servidor de base de datos
- **DATABASE:** Nombre de la base de datos
- **SCHEMA:** Nombre del esquema dentro de la base de datos

Otras variables de entorno necesarias:

```
PORT=3000

BOSS_NAME="edarcode"
BOSS_EMAIL="email@gmail.com"
BOSS_PASSWORD="******"

NODEMAILER_GMAIL="email@gmail.com"
NODEMAILER_GMAIL_APP_PASSWORD="**** **** **** ****"

SECRET_JWT="******"

API_URL="http://localhost:3000"
```

## Scripts

En el package.json ya existen scripts para resetear, migrar y rellenar la db.

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

Habrá rutas exclusivas para **BOSS**. Tener en cuenta los sgts formatos:

- **name:** 1 a 50 carácteres, sin carácteres especiales, sin números, no empezar con espacio, no finalizar con espacio, sin mayúsculas.

- **username:** 3 y 15 caráteres, sin carácteres especiales, no empezar ni terminar con espacio.

- **email:** Debe ser un email real.

- **role:** Solo "CLIENT" o "BOSS".

- **password:** 6 a 127 carácteres.

- **img:** Cadena de texto en formato url, opcional.

- **page:** Página deseada.

- **take:** Cantidad de registros deseados.

### Módulo welcome

- GET http://localhost:3000

### Módulo user

#### Auth

- POST http://localhost:3000/user/auth/signup

  Permite el resgistro de un usuario. Tener presente:

  - Proporcionar un correo real dado que se enviará un mensaje de confirmación al mismo.

  - Solo se creará el registro si confirma antes de transcurrir 30min.

  - La contraseña se guardará encryptada.

  ```
  BODY
  {
    "name": "edwin ortiz",
    "username": "edarcode",
    "email": "email@gmail.com",
    "password": "******"
  }
  ```

- POST http://localhost:3000/user/auth/login

  Permite **auth** un usuario. Tener presente:

  - Si el login es exitoso se enviará un token valido por 1 semana.

  - Dentro del token habrá información relacionada al usuario como: **id, role, username, img**.

  ```
  BODY
  {
    "email": "correo@gmail.com",
    "password": "******"
  }
  ```

- POST http://localhost:3000/user/auth/refresh-token

  Permite validar el token y refresca si es valido el mismo. Tener presente:

  - Enviar el token por **headers** con la key **Authorization**.

#### client

- PUT http://localhost:3000/user/client/edit

  Actualiza el usuario asociado al token.

  ```
  BODY
  {
    "name": "nuevo nombre",
    "username": "nuevo username",
    "email": "newemail@gmail.com",
    "password": "******"
  }
  ```

- GET http://localhost:3000/user/client/search

  Lee usuarios asociados al query **username** (obligatorio)

- DELETE http://localhost:3000/user/client/delete

  Elimina el usuario asociado al token

#### boss

Debe tener role **BOSS**.

- POST http://localhost:3000/user/boss/create

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

  Posibles filtros (QUERY):

  - **name:**
  - **username:**
  - **email:**
  - **role:**
  - **page:**
  - **take:** Cantidad de resultados por página deseado

- PUT http://localhost:3000/user/boss/update/:id

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

### Módulo follow

#### client

- POST http://localhost:3000/follow/client/follow-to/:id

  Estable un seguimiento de una persona **A** a otra **B**. Se ocupan 2 cosas:

  - **followerId:** Persona que seguirá a alguien, el cúal se tomará del id del token.

  - **followingId:** Persona que será seguida, el cúal debe enviar por params **:id**.

- POST http://localhost:3000/follow/client/unfollow-to/:id

  Elimina el seguimiento de una persona **A** a otra **B**. Se ocupan 2 cosas:

  - **followerId:** Persona que dejará de seguir a alguien, el cúal se tomará del id del token.

  - **followingId:** Persona que dejarán de seguir, el cúal debe enviar por params **:id**.

#### boss

- ...

### Módulo message

#### client

- POST http://localhost:3000/msg/client/send-msg/:id

  Guardará un mensaje enviado de una persona **A** a otra **B**. Se ocupan 3 cosas:

  - **issuerId:** Persona que enviará un msg, el cúal se tomará del **id** del token.

  - **receptorId:** Persona que recibirá un msg. Debe enviarlo por params **:id**.

  - **text:** Cuerpo del mensaje. Debe enviarlo por body.

  ```
  BODY
  {
    "text": "Hola, ¿cómo estás?"
  }
  ```

- POST http://localhost:3000/msg/client/remove-msg

  Esta ruta eliminará un mensaje enviado de una persona **A** a otra **B**. Se ocupan 3 cosas:

  - **issuerId:** Persona que envió un msg, el cúal se tomará del **id** del token.

  - **receptorId:** Persona que recibió el msg.

  - **createdAt:** **Date** exacto en el que se guardo el msg en la **db**.

  El **receptorId y createdAt** debe enviarlo por body:

  ```
  BODY
  {
    "receptorId" : "2ba0fdf2-e11c-4894-9832-9afd362606f8",
    "createdAt" : "2024-08-06 19:22:03.98Z"
  }
  ```

#### boss

- ...
