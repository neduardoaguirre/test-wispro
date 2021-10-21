# Test Wispro

## Deploy

[Link](https://testwispro.netlify.app/)

## Uso de la aplicación

### Online

Acceder [aquí](https://testwispro.netlify.app/).
Hay un usuario de prueba creado, se ingresa con:

- mail: test@test.com
- contraseña: Pass1234

También es posible crear una cuenta [aquí](https://testwispro.netlify.app/crear-cuenta) y acceder.

### Clonando el proyecto

```sh
$ git clone https://github.com/neduardoaguirre/test-wispro.git
```

### Instalar dependencias

```sh
$ cd test-wispro
$ npm install
```

### Variable de entorno

1.  Encontrará un archivo llamado `.env.example` en el directorio raíz del proyecto.
2.  Cree un nuevo archivo copiando y pegando el archivo y luego renombrándolo simplemente a `.env`
    `` sh
    $ cp .env.example .env
    ''
3.  Cambie los valores del archivo .env de la siguiente manera:
    ````sh
      REACT_APP_BACKEND_URL=https://warm-waters-33638.herokuapp.com/
        ```
    ````

### Correr la aplicación

```sh
npm run start
```

Abra [http://localhost:3000](http://localhost:3000) con su navegador preferido para comenzar a utilizar la aplicación.

## Tecnologías Usadas

- React JS
- JSX
- React Router DOM
- Context
- CSS3
- Boostrap
- Axios
- Sweetalert2
- React Icons
- Ant Design Charts
