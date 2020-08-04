// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  pageTitle: 'Mercado Libre Argentina',
  api: {
    base: 'http://localhost:3000/api',
    searchPath: '/items',
    detailPath: '/items/'
  },
  homePage: {
    message: 'Encontrá lo que necesitas ;)',
  },
  notFoundPage: {
    message: 'Parece que esta página no existe',
    redirectTo: '',
    redirectMessage: 'Ir a la página principal'
  },
  searchBar: {
    placeholder: 'Nunca dejes de buscar',
    logoTitle: 'Página principal',
    searchButtonTitle: 'Buscar'
  },
  resultPage: {
    loadingMsg: 'Buscando las mejores publicaciones',
    noResultMessage: 'No hay publicaciones que coincidan con tu búsqueda.',
    noResultOptions: [
      'Revisá la ortografía de la palabra.',
      'Utilizá palabras más genéricas o menos palabras.',
      'Navegá por las categorías para encontrar un producto similar.'
    ],
  },
  itemList: {
    freeShippingTitle: 'Envío gratis!',
    freeShippingIconPath: '/assets/ic_shipping@2x.png.png',
  },
  itemDetail: {
    descriptionTitle: 'Descripción del producto',
    loadingMsg: 'Obteniendo información',
    notFoundMsg: 'No encontramos el ítem al que intentas acceder =\\'
  },
  error: {
    message: 'Houston! Tenemos un problema =0',
    redirectURL: '',
    redirectMessage: 'Volver a la página principal',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
