# dialect-vue

## Para instalar dependencias
```
yarn install
```

### Para correr la web de forma local
```
yarn run serve
```


### Para compilar la web de forma local
```
yarn run build
```
### Para subir la web compilada a firebase
```
firebase deploy --only hosting
```

### Importante!
para que funcione correctamente el desarrollo con la base de datos alojada en la web. hay que usar la versión
1.4.5 de Vuefire.  Vuefire ya no funciona para Realtimedatabase solo para Firestore.
```
npm install --save vuefire@1.4.5
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
