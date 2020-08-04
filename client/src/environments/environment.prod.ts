export const environment = {
  production: true,
  pageTitle: 'Mercado Libre Argentina',
  api: { // Fill with production info
    base: '',
    searchPath: '',
    detailPath: ''
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
    subtitle: 'Completo Único!',
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
