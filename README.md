# Repositorio

El juego del ahorcado.


El usuario inicia el juego pulsando en el boton empezar. Una vez iniciado el juego, el algoritmo selecciona una palabra aleatoria que el usuario debe 
adivinar. Esta palabra tendrá sus letras sustituidas por guiones, por lo que la unica informacion que tiene el usuario inicialmente es el número de letras.

Para adivinar la palabra, el usuario irá seleccionando letras del teclado virtual que se muestra en la ventana del juego. Si la palabra que el usuario 
debe adivinar contiene la letra seleccionada, el usuario podrá visualizar la letra en la posicion correcta dentro de la palabra; si por el contrario, 
no contiene la letra seleccionada, el usuario perderá una vida y se mostrara en color rojo la letra fallada.

El objetivo del juego es adivinar cada una de las letras que forman la palabra que el usuario debe adivinar sin agotar el número de vidas (6 en este caso)
y en un tiempo inferior a un minuto.
