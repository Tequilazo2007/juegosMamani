const CACHE_NAME = 'mamani-cache-v2';
const urlsToCache = [
  './',
  './index.html',
  './app.js',
  './manifest.json',
  './img/app_icon.webp',
  './audio/bgm_menu.mp3',
  './audio/bgm_mapa.mp3',
  './audio/bgm_combate.mp3',
  './audio/bgm_tienda.mp3',
  './audio/bgm_campamento.mp3',
  './audio/bgm_evento.mp3',
  './audio/bgm_cutscene.mp3',
  './audio/bgm_tutorial.mp3',
  './audio/bgm_recompensa.mp3',
  './audio/bgm_victoria.mp3',
  './audio/bgm_gameover.mp3',
  './audio/sfx_hover.mp3',
  './audio/sfx_click.mp3',
  './audio/sfx_confirmar.mp3',
  './audio/sfx_confirmar_epico.mp3',
  './audio/sfx_retroceder.mp3',
  './audio/sfx_ataque.mp3',
  './audio/sfx_escudo.mp3',
  './audio/sfx_curacion.mp3',
  './audio/sfx_dano_jugador.mp3',
  './audio/sfx_dano_enemigo.mp3',
  './audio/sfx_fin_turno.mp3',
  './audio/sfx_huir.mp3',
  './audio/sfx_enemigo_ataca.mp3',
  './audio/sfx_nodo.mp3',
  './audio/sfx_entrar_combate.mp3',
  './audio/sfx_entrar_tienda.mp3',
  './audio/sfx_entrar_evento.mp3',
  './audio/sfx_entrar_campamento.mp3',
  './audio/sfx_compra.mp3',
  './audio/sfx_error.mp3',
  './audio/sfx_descanso.mp3',
  './audio/sfx_mejora.mp3',
  './audio/sfx_eleccion.mp3',
  './audio/sfx_evento_bien.mp3',
  './audio/sfx_evento_mal.mp3',
  './audio/sfx_recompensa.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true })
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

