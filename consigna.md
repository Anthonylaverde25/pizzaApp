## Ejercicio de Búsqueda y Renderizado de Pizzas

### Objetivo

El objetivo de este ejercicio es crear una página web interactiva que permita buscar y renderizar información sobre pizzas utilizando HTML, CSS y JavaScript. Además, se plantea el desafío de almacenar la última pizza buscada en el `localStorage` para que pueda ser mostrada al recargar la página.

### Archivos proporcionados

- **index.html**: Contendrá un formulario con un input numérico y un botón.
- **styles.css**: Archivo de hojas de estilo para dar estilo a la página.
- **index.js**: Contendrá un array de objetos de pizzas con información relevante.

### Pasos a seguir

1. Crear un archivo `index.html` que contenga los siguientes elementos:

   - Un formulario con un input de tipo "number" para ingresar el número de la pizza a buscar.
   - Un botón para ejecutar la búsqueda.
   - Un contenedor (`<div>`) donde se mostrará la información de la pizza buscada o los mensajes de error.

2. Utilizar CSS para estilizar la página de acuerdo a las directrices de diseño.

3. En el archivo `index.js`, crear un array de objetos que representen diferentes pizzas. Cada objeto debe contener propiedades como `id`, `nombre`, `imagen` y `precio`.

4. Agregar un evento de escucha al formulario o al botón para capturar el valor ingresado en el input al momento de enviar el formulario o hacer clic en el botón.

5. Validar el número ingresado:

   - Si el número es válido (existe una pizza con un `id` coincidente), renderizar una tarjeta con la información de la pizza en el contenedor.
   - Si el número no coincide con ningún `id`, renderizar un mensaje de error correspondiente en el contenedor.
   - Si no se ingresa un número, renderizar un mensaje de error diferente en el contenedor.

6. Utilizar el `localStorage` para guardar los datos de la última pizza buscada y encontrada (si aplica).

### Desafío adicional

Guardar en el `localStorage` la información de la última pizza buscada y encontrada solo cuando la búsqueda haya sido exitosa (sin errores). Esto implicará gestionar el almacenamiento y recuperación de datos en el `localStorage` de manera adecuada.

Al recargar la página, verificar si existe información en el `localStorage` sobre la última pizza buscada y, en caso afirmativo, mostrar automáticamente esa pizza en la página sin necesidad de realizar una nueva búsqueda.

### Resultado final

Al finalizar el ejercicio, tendrás una página web que permite buscar información sobre pizzas mediante un formulario. Si se encuentra una pizza con el número ingresado, se mostrarán los detalles de esa pizza en una tarjeta. Si ocurren errores, se mostrarán mensajes de error apropiados. Además, la última pizza buscada exitosamente se almacenará en el `localStorage` y será mostrada al recargar la página.
