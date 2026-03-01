# Passenger Counter App

Una aplicación web para contar pasajeros en el metro en tiempo real. Este proyecto es la introducción práctica a JavaScript: conectar lógica de programación con una interfaz HTML ya construida.

![App screenshot](./02.%20Let's%20build%20a%20passenger%20counter%20app/station.jpg)

## Resultado Final

La app permite a un operario de metro:

- **Contar** pasajeros con un botón mientras entran
- **Guardar** el conteo de cada tanda y reiniciar a cero
- **Ver el historial** de entradas anteriores en pantalla

## Tecnologías

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## Estructura del Proyecto

```
passenger-counter/
├── index.html
├── index.css
├── index.js
└── station.jpg
```

---

## Cómo Empezar

### 1. Haz un fork del repositorio

Un **fork** crea una copia del repositorio en tu cuenta de GitHub. Así puedes hacer cambios sin afectar el original.

1. Ve a la página del repositorio en GitHub.
2. Haz clic en el botón **Fork** (arriba a la derecha).
3. Selecciona tu cuenta como destino.

GitHub creará una copia en `https://github.com/tu-usuario/counter-passengers`.

### 2. Clona el fork a tu máquina

Clonar descarga el repositorio a tu ordenador para poder trabajar con él en local.

```bash
git clone https://github.com/tu-usuario/counter-passengers.git
```

Accede a la carpeta del proyecto:

```bash
cd counter-passengers
```

### 3. Abre el proyecto en VS Code

```bash
code .
```

### 4. Lanza la app en el navegador

Abre `index.html` con **Live Server** (clic derecho → _Open with Live Server_) o con la extensión **Five Server**. La app estará disponible en `http://127.0.0.1:5500`.

> **¿Tienes cambios del repositorio original?** Puedes sincronizarlos con:
>
> ```bash
> git remote add upstream https://github.com/usuario-original/counter-passengers.git
> git pull upstream main
> ```

---

## Paso a Paso

### Paso 1: Punto de partida — HTML y CSS ya hechos

El HTML de la aplicación está ya construido. Antes de escribir nada en JavaScript, lee y entiende qué hay en `index.html`:

```html
<html>
  <head>
    <link rel="stylesheet" href="index.css" />
  </head>
  <body>
    <h1>People entered:</h1>
    <h2 id="count-el">0</h2>
    <button id="increment-btn" onclick="increment()">INCREMENT</button>
    <button id="save-btn" onclick="save()">SAVE</button>
    <p id="save-el">Previous entries:</p>
    <script src="index.js"></script>
  </body>
</html>
```

**Qué observar:**

- El `<h2 id="count-el">` muestra el contador. Lo modificaremos desde JS.
- Los botones ya tienen `onclick="increment()"` y `onclick="save()"` — llaman a funciones que aún no existen.
- El `<p id="save-el">` mostrará el historial de entradas guardadas.
- El `<script src="index.js">` vincula el archivo JavaScript con la página.

---

### Paso 2: Tu primera variable en JavaScript

Crea el archivo `index.js` y escribe tu primera variable. Necesitamos un contador que empiece en cero:

```js
let count = 0;

console.log(count);
```

**Conceptos:**

- `let` declara una variable que puede cambiar de valor.
- El nombre `count` es descriptivo: siempre nombra las variables por lo que representan.
- `console.log()` imprime en la consola del navegador — tu herramienta de debugging desde ahora.

**Abre la consola del navegador** (F12 → Console) y comprueba que aparece `0`.

---

### Paso 3: Operaciones matemáticas básicas

JavaScript puede hacer cálculos. Prueba estas operaciones antes de continuar:

```js
let firstBatch = 5;
let secondBatch = 7;
let total = firstBatch + secondBatch;

console.log(total); // 12
```

Los operadores disponibles son `+`, `-`, `*`, `/`. Pruébalos en la consola.

---

### Paso 4: Reasignar e incrementar

Una variable puede cambiar de valor. Así incrementamos el contador manualmente:

```js
let count = 0;
count = count + 1;
console.log(count); // 1
count = count + 1;
console.log(count); // 2
```

`count = count + 1` toma el valor actual, le suma 1 y guarda el resultado en la misma variable.

---

### Paso 5: El botón y el evento onclick

Abre `index.html` y verás que el botón ya tiene `onclick="increment()"`. Esto significa: _"cuando alguien haga clic, ejecuta la función llamada `increment`"_.

El problema es que esa función todavía no existe en `index.js`. Si pulsas el botón ahora, la consola mostrará un error.

---

### Paso 6: Tu primera función

Las funciones agrupan código que se puede ejecutar varias veces. Crea la función `increment`:

```js
let count = 0;

function increment() {
  count = count + 1;
  console.log(count);
}
```

**Anatomía de una función:**

```
function nombreDeLaFuncion() {
    // código que se ejecuta al llamarla
}
```

Pulsa el botón ahora. En la consola debería aparecer `1`, `2`, `3`... con cada clic.

**¿Por qué funciona?**
Cuando el usuario hace clic, el navegador ejecuta `increment()`. La función accede a la variable `count` (que existe fuera de ella), la incrementa y la imprime.

---

### Paso 7: Mostrar el contador en pantalla — El DOM

Imprimir en consola está bien para debugging, pero el usuario no ve la consola. Necesitamos **actualizar el HTML** desde JavaScript.

Aquí entra el **DOM** (Document Object Model): la representación del HTML como objetos JavaScript que podemos leer y modificar.

```js
let countEl = document.getElementById("count-el");
```

`document.getElementById("count-el")` busca en el HTML el elemento con `id="count-el"` (el `<h2>`) y lo guarda en una variable. Ahora `countEl` _es_ ese elemento HTML.

---

### Paso 8: Actualizar el texto con `textContent`

Con la referencia al elemento, podemos cambiar su texto usando `textContent`:

```js
let count = 0;
let countEl = document.getElementById("count-el");

function increment() {
  count = count + 1;
  countEl.textContent = count;
}
```

**Ahora sí:** el número en pantalla cambia con cada clic en el botón INCREMENT.

**Nota:** También existe `innerText`. La diferencia práctica es que `textContent` es más directo y no interpreta CSS. Para texto plano, usa `textContent`.

---

### Paso 9: El operador `+=`

`count = count + 1` es tan común que existe una forma abreviada:

```js
count += 1;
// es exactamente igual a:
count = count + 1;
```

Actualiza tu función:

```js
function increment() {
  count += 1;
  countEl.textContent = count;
}
```

---

### Paso 10: Variables de tipo string

Hasta ahora solo hemos usado números. Para el historial de entradas necesitamos texto — en programación se llaman **strings**.

```js
let greeting = "Hola, bienvenido";
let name = "Operario del metro"; // también funcionan las comillas simples

console.log(greeting);
console.log(name);
```

Un número y un string son cosas distintas:

```js
console.log(5 + 3); // 8  (suma numérica)
console.log("5" + "3"); // "53" (concatenación de texto)
console.log(typeof 5); // "number"
console.log(typeof "5"); // "string"
```

---

### Paso 11: Concatenación de strings

Para construir el texto del historial, necesitamos unir strings. Se hace con `+`:

```js
let count = 12;
let entry = count + " - ";
console.log(entry); // "12 - "
```

Cuando sumas un número y un string, JavaScript convierte el número a string y los concatena.

---

### Paso 12: Crear la función `save`

La función `save` debe:

1. Añadir el conteo actual al historial visible en pantalla
2. Reiniciar el contador a cero

Primero, añade la referencia al párrafo del historial:

```js
let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
```

Luego escribe la función:

```js
function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}
```

**Línea por línea:**

- `let countStr = count + " - "` — crea el texto a añadir, ej: `"14 - "`
- `saveEl.textContent += countStr` — usa `+=` para **añadir** al texto existente sin borrarlo
- `countEl.textContent = 0` — muestra 0 en pantalla
- `count = 0` — reinicia la variable

---

### Paso 13: Código final completo

**`index.html`**

```html
<html>
  <head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
    />
    <link rel="stylesheet" href="index.css" />
  </head>
  <body>
    <h1>People entered:</h1>
    <h2 id="count-el">0</h2>
    <button id="increment-btn" onclick="increment()">INCREMENT</button>
    <button id="save-btn" onclick="save()">SAVE</button>
    <p id="save-el">Previous entries:</p>
    <script src="index.js"></script>
  </body>
</html>
```

**`index.js`**

```js
let count = 0;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}
```

---

## Conceptos Aprendidos

| Concepto         | Qué es                           | Ejemplo                                    |
| ---------------- | -------------------------------- | ------------------------------------------ |
| `let`            | Declara una variable             | `let count = 0`                            |
| `function`       | Agrupa código reutilizable       | `function increment() { ... }`             |
| `onclick`        | Evento que conecta HTML con JS   | `onclick="increment()"`                    |
| `getElementById` | Selecciona un elemento del DOM   | `document.getElementById("count-el")`      |
| `textContent`    | Modifica el texto de un elemento | `countEl.textContent = count`              |
| `+=`             | Incrementa o concatena           | `count += 1` / `saveEl.textContent += str` |
| String           | Tipo de dato para texto          | `"14 - "`                                  |
| Concatenación    | Unir strings con `+`             | `count + " - "`                            |

---

## Errores Frecuentes

**El botón no hace nada y la consola muestra un error**  
Comprueba que el nombre de la función en `onclick="..."` coincide exactamente con el nombre de la función en JS. JavaScript distingue mayúsculas y minúsculas.

**El contador no aparece en pantalla**  
Verifica que el `id` en `getElementById("count-el")` coincide exactamente con el `id` en el HTML.

**Al guardar, el historial se borra en lugar de acumularse**  
Usa `+=` en lugar de `=` al actualizar `saveEl.textContent`.

**El contador no vuelve a 0 después de guardar**  
No olvides actualizar tanto la variable (`count = 0`) como el elemento HTML (`countEl.textContent = 0`). Son dos cosas distintas: la variable JS y lo que se muestra en pantalla.

---

## Extensiones del Proyecto

Una vez que la app funciona, pon a prueba tu comprensión:

- [ ] Añadir un botón **DECREMENT** que reste 1 al contador
- [ ] Impedir que el contador baje de 0
- [ ] Mostrar el número total de pasajeros guardados junto al historial
- [ ] Añadir la hora actual a cada entrada guardada (`new Date().toLocaleTimeString()`)
- [ ] Limpiar el historial con un botón **RESET ALL**

---

## Recursos

- [MDN: getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
- [MDN: textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
- [MDN: Funciones](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions)
- [Curso original en Scrimba](https://scrimba.com/learn/learnjavascript)
