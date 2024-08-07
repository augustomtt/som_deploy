'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"manifest.json": "fd091ea5bc8f3ccc10f74bd67179fb6a",
"index.html": "97b4c7b5fc8d74194f572eb9f34c8584",
"/": "97b4c7b5fc8d74194f572eb9f34c8584",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon-flutter.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_bootstrap.js": "55f6e0abf02ff4057e946958c46b8d02",
"icons/Icon-192-flutter.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "247774644936c05ed397cd48c801e38d",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"assets/AssetManifest.bin.json": "f0c1472a5033b0b11cb655b31d6829c4",
"assets/AssetManifest.bin": "317df3dd2d59bf42b2b4d58871f653a5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/assets/Datos-Diabetes-Etiquetados.csv": "77a781d9bd6bc17b5b0067edeefe294f",
"assets/assets/Datos-Diabetes-Etiquetados-Nuevos.csv": "62b3a80bbfdb8fbe64be45843a0dcccb",
"assets/assets/logo2.png": "f26488639732439003e01c5a2eb4f2a3",
"assets/assets/Datos-Resonancia-TEST2-ConIdentificador.csv": "0f1384435e8a8092e393d27a219ba939",
"assets/assets/Entrenamiento-Diabetes-Etiquetados-Menos.json": "d04d2c89a5c4a8b5e2b8a00a1178c05f",
"assets/assets/Menos-Datos-Resonancia-TRAIN-ConIdentificador.csv": "f97dff10a90cf9233819d75367cba605",
"assets/assets/01-Train-Resonancia-TRAIN-ConIdentificador.json": "1e5b086cc5bbd4257565bfeb791f141a",
"assets/assets/Datos-Resonancia-TRAIN-ConIdentificador.csv": "8e142429dc3f85d0d8288a4810e7f22a",
"assets/assets/archivo.xlsx": "89afd7ccb7a1f421e14b4e105e3d2371",
"assets/assets/resultadoPrueba.json": "8b4b41ac318715a4060b360c8195f938",
"assets/assets/Deportes.csv": "3f9bfd964ad45cc5097bdd2f8f0fb289",
"assets/assets/logo.png": "247774644936c05ed397cd48c801e38d",
"assets/assets/salidaColoresOutput1.csv": "1da5b54cbec59313ee43f7d6330ca8ea",
"assets/assets/Datos-Animales.csv": "310545647a4cce0b5e61b1eec0553ab0",
"assets/assets/Datos-Diabetes-Etiquetados-Menos.csv": "40a3d0329554a47bf6004f791369196f",
"assets/assets/Datos-Animales-Missing.csv": "d9a28af013b2d35db27697df755a5880",
"assets/assets/01-train-2024-07-09%252011_24_29.577.json": "c15d04c60d907108ede3d9c27701c840",
"assets/assets/Datos-Resonancia-TRAIN.csv": "b8c3d0b783ceb85c6782604d265e2028",
"assets/assets/Entrenamiento-Diabetes-Etiquetados-Menos-7x12.json": "21ad5b327d43078552587d1057e909bd",
"assets/assets/Datos-Resonancia-TEST1-ConIdentificadores.csv": "c121604b33c45910fa5b648fdfe8a53d",
"assets/assets/Datos-Diabetes.csv": "93a7fda7fa6761896adfc7e578e779c9",
"assets/assets/archivo.csv": "e4ee435ba917fd71f66df6e855c9c2f4",
"assets/assets/salidaColoresOutput.csv": "b29744e757537e537acf41aa9973cc75",
"assets/fonts/MaterialIcons-Regular.otf": "700e5ba77b7019ccd4094bdf6f61b620",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "275abdcc30cdf87ce5c21a0b465d39da",
"assets/AssetManifest.json": "2b75fa232d44ef17da081350f8cb910b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"version.json": "1b54e2a3234c960b14570093b877822b",
"main.dart.js": "27b0cb56c2c5eac5511bf6febb960256",
"favicon.png": "247774644936c05ed397cd48c801e38d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
