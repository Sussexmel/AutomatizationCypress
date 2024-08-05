Automatización Cypress

##Descipción
Prueba funcional automatizada (Prueba E2E) de un flujo de compra en la página
URL: https://www.demoblaze.com/
• Agregar dos productos al carrito
• Visualizar el carrito
• Completar el formulario de compra
• Finalizar la compra

##1. Prerequisitos
- Máquina local con el sistema operativo Windows 10-11
- IDE Visual Studio Code version 1.91.1 (user setup)
- Node.js rsion 22.5.1
- NPM version 10.8.2
- Cypress version 13.13.1

##2. Comandos de instalación
- Clonar el repositorio:
    - git clone https://github.com/Sussexmel/AutomatizationCypress.git
- Navegue al directorio del proyecto: cd "Nombre del directorio"
- Instalacion de dependencias:
    - npm install
    - npm install cypress --save-dev
  
##3. Instrucciones para ejecutar los test
- Abra una terminal en la raíz del proyecto y ejecute: npx cypress open
- Esto abrirá la interfaz gráfica de Cypress donde podrá ver y ejecutar los tests.
- Seleccionar E2E y el navegador Chrome 
- Selecciona el archivo ejercicio-automatizacion-e2e.cy.js desde la lista de tests.
- Documentación adicional: Puede encontrar más información y documentación en la pagina oficial de Cypress (https://docs.cypress.io/guides/overview/why-cypress).

##Información adicional
- Si desea ejecutar las pruebas de forma más rápida en el archivo package.json dentro del script/test puede remplazarla línea por : "cypress run --spec cypress/e2e/ejercicio-automatizacion-e2e.cy.js"
- Esto generará evidencia de pruebas de ser el caso.

##Referencia:
-Repositorio en Github: https://github.com/Sussexmel/AutomatizationCypress.git


