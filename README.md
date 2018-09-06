# ionic-basics
ionic basics curso de udemi

https://angular.io/tutorial

Importante definir las Pages de la aplicacion antes de comenzar el desarrollo.

* El http.get cambia en con respecto a lo visto en el curso ya que no es requerido realizar el llamado al metodo map es explicado en el curso
* Los Controller Alert, Popover, Loadding es correcto utilizar un provider que los genere para no duplicar codigo.
* El width-x de los ion-col cambio por Col-x 
* El ide no reconoce los metodos ionview en sus diferentes estados aunque es facil ubicarlos en la documentacion https://ionicframework.com/docs/api/navigation/NavController/
* El navPush cambia un poco de lo mostrado en el curso a lo que muestra la documentacion de la ultima version activa.
* En el curso siempre hacen referencia a Service pero en la ultima version hacen uso de los provider describen el mismo comportamiento.
* Luego de generar un provider con el comando "ionic generate provider x" es necesario agregar en el AppModule.ts import {HttpClientModule} from '@angular/common/http'; y HttpClientModule al imports:[] 
* Para generar una API key con google es necesaria una tdc.
* Sebm-google es el componente de una version vieja de Angular el componente que se debe utilizar es agm-map y la documentacion se encuentra en esta web https://angular-maps.com/
* En el uso de la camara recomiendo utilizar lo que aparece en este blog https://blog.ng-classroom.com/blog/ionic2/camera-and-ionic/ es igual de sencillo y funciona sin problemas dentro de las preguntas del curso despliegan unas soluciones muy complejas las verifique y me dieron error al intentar escribir en el sistema de archivos.
* El uso del almacenamiento SQLite esta mas sencillo este blog https://blog.ng-classroom.com/blog/ionic2/sqlite-and-ionic/ 


