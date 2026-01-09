# Simple API JWT

API para consumir un servicio de Auth con JWT.

## Instalación

```sh
npm install
```

## Uso

```sh
npm run dev
```

## Endpoints

### Pizzas

```sh
GET /api/pizzas
```

### Pizza (única)

```sh
GET /api/pizzas/:id
```

### Auth

```sh
POST /api/auth/login
POST /api/auth/register
```

body:

```json
{
  "email": "test@example.com",
  "password": "123123"
}
```

### Checkout & Profile

Esta ruta requiere un token JWT en el header, el token se obtiene en el endpoint de Auth explicado en el item siguiente (JWT).

Además puedes enviar un carrito con los productos a comprar, esto es solo una simulación, no se guarda en la base de datos.

```sh
POST /api/checkouts
```

body:

```json
{
  "cart": [...]
}
```

Endpoint para obtener el perfil del usuario autenticado. Necesitas enviar el token JWT en el header.

```sh
GET /api/auth/me
```

## JWT

Para obtener el token JWT, se debe hacer una petición a `/api/auth/login` o a `/api/auth/register` con el body correspondiente.

El token JWT se debe enviar en el header `Authorization` de la siguiente manera:

```sh
Authorization Bearer token_jwt
```

Ejemplo con fetch:

```js
await fetch("http://localhost:5000/api/checkout", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer token_jwt`,
  },
  body: JSON.stringify({
    cart: carrito,
  }),
});
```
