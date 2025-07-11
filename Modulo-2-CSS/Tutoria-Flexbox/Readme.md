# 🚀 Flexbox - Guía Práctica

## 📚 Contexto

Flexbox es una herramienta de CSS diseñada para crear diseños más eficientes y responsivos. Permite alinear, distribuir y ordenar elementos de manera sencilla tanto en una dimensión (horizontal o vertical) como en múltiples tamaños de pantalla.

En este ejemplo, vamos a construir una cuadrícula responsive para una tienda de ropa, que:

* 🖥️ En escritorio muestra los productos en **dos columnas**.
* 📱 En dispositivos móviles se acomoda en **una columna**.
* 🔥 Todo esto **sin media queries**, solo usando Flexbox.

---

## 🎯 Objetivos de la clase

* Comprender cómo funciona Flexbox.
* Crear un diseño responsivo usando solo Flexbox.
* Aplicar las propiedades principales de Flexbox de forma práctica.

---

## 🛠️ Propiedades Clave de Flexbox

### 🔥 En el **Contenedor Padre**:

| Propiedad         | Descripción                                                            |
| ----------------- | ---------------------------------------------------------------------- |
| `display: flex;`  | Activa Flexbox en el contenedor.                                       |
| `flex-direction`  | Dirección de los ítems: `row` (horizontal) o `column` (vertical).      |
| `flex-wrap`       | Permite que los ítems pasen a la siguiente línea si no caben (`wrap`). |
| `justify-content` | Alineación horizontal (inicio, centro, espacio entre, etc.).           |
| `align-items`     | Alineación vertical (inicio, centro, etc.).                            |
| `gap`             | Espacio entre los elementos (reemplaza el uso de `margin`).            |

### 🔥 En los **Ítems Hijos**:

| Propiedad     | Descripción                                                                     |
| ------------- | ------------------------------------------------------------------------------- |
| `flex-grow`   | Permite que el ítem **crezca** si hay espacio libre (`1` sí, `0` no).           |
| `flex-shrink` | Permite que el ítem **se encoja** si no cabe (`1` sí, `0` no).                  |
| `flex-basis`  | Tamaño base ideal antes de crecer o encoger (ej: `300px`, `50%`).               |
| `flex`        | Shorthand de los tres: `flex: grow shrink basis;`. Ejemplo: `flex: 1 1 300px;`. |

---

## 🔍 Explicación de `flex: 1 1 300px;`

| Parte             | Significado                                      |
| ----------------- | ------------------------------------------------ |
| **1 (grow)**      | ✅ Puede crecer si hay espacio.                   |
| **1 (shrink)**    | ✅ Puede encogerse si no cabe.                    |
| **300px (basis)** | 🎯 Tamaño base que intenta mantener como mínimo. |

✔️ Traducción:
*"Intento medir 300px. Si sobra espacio, puedo crecer. Si falta espacio, puedo encogerme."*

---

## 🚀 Ejemplo práctico

### 🔗 HTML + CSS embebido (sin media queries):

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tienda Flexbox</title>
    <style>
        body {
            background-color: #f3f3f3;
            font-family: Arial, sans-serif;
            padding: 20px;
        }

        h1 {
            text-align: center;
            margin-bottom: 30px;
            color: #333;
        }

        .tienda {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
        }

        .producto {
            background-color: #4CAF50;
            color: white;
            padding: 40px;
            text-align: center;
            border-radius: 10px;
            flex: 1 1 300px;
            max-width: 400px;
        }
    </style>
</head>
<body>

    <h1>Tienda de Ropa</h1>

    <div class="tienda">
        <div class="producto">Producto 1</div>
        <div class="producto">Producto 2</div>
        <div class="producto">Producto 3</div>
        <div class="producto">Producto 4</div>
        <div class="producto">Producto 5</div>
        <div class="producto">Producto 6</div>
    </div>

</body>
</html>
```

---

## 📱 🔥 Resultado:

* En escritorio → ✅ Dos columnas (si hay espacio suficiente).
* En móvil → ✅ Una columna (se adapta solo sin media queries).
* Mantiene el mismo orden visual en todos los dispositivos.

---

## 🚩 Beneficios de Flexbox:

* ✅ Menos código.
* ✅ Más control sobre alineación y distribución.
* ✅ Responsive natural con `flex-wrap` y `flex-basis`.
* ✅ No hace falta usar media queries en estructuras simples.

---

## 📌 Recursos recomendados:

* [CSS Tricks - Guía completa de Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [Flexbox Froggy - Juego interactivo](https://flexboxfroggy.com/#es)
* [Flexbox Defense - Otro juego](http://www.flexboxdefense.com/)

---

## 💡 Conclusión:

Flexbox es una herramienta extremadamente poderosa para diseños de una dimensión (filas o columnas). Entender bien cómo funcionan `flex-grow`, `flex-shrink` y `flex-basis` te permite crear interfaces flexibles, limpias y responsive de forma sencilla.

---

## 🚀 Powered by

👨‍🏫 Tutor: *\[Ivan Iraldi]*
🎯 Desafío Latam - Tutoría G99

---
