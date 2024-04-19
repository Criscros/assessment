#Tiempo de prueba: 50 minutos 

Objetivo: Construir una aplicación web react que muestre el listado de días festivos en Colombia y México para el 2024

#Instrucciones:

1. Crea un react app 

2. Crea tres vistas, cada una con su respectiva URL usando la librería "react-router-dom" 
Home | Ruta: / 
Colombia | Ruta: /Colombia
Mexico | Ruta: /Mexico

3. Home debe renderizar una vista con links o botones que permitan al usuario ingresar a la URL de Colombia o a la ruta de México 

4. Las urls de Colombia y México, deben renderizar una vista que se conecte al API de Calendarific, extraiga la información de todos los días festivos del 2024 para el país en cuestión y muestre una tabla con todos los festivos del país. (Hay que asumir que esta información es cambiante por lo que se debe consultar el API siempre que se renderiza la vista)
 
La tabla debe contener las siguientes columnas: 
Nombre de Festivo
Fecha (Formato: “Año / Mes / Dia” )
Descripción

La tabla debe estar en orden descendente segun la fecha. 

La fila que contenga el próximo festivo, asumiendo la fecha actual como la fecha en que se realiza la prueba, debe tener texto Rojo

Por último, cada vista debe permitir al usuario regresar la ruta de Home

Otros:

Se puede usar cualquier tipo de librería o toolkit frontend como bootstrap o ant. Entre más agradable visualmente la aplicación, mejor. 

La documentación del API de Calendarific es encuentra en el siguiente link: https://calendarific.com/api-documentation

El API KEY de Calendarific: DU6OKC0XfoP5aESXBw5Di4WttXlWftqT
