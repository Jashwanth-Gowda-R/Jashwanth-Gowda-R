'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "426313f2f3133c2f20415344c4a22df3",
"index.html": "2c73e60f73880f7e7b838f8371d29661",
"/": "2c73e60f73880f7e7b838f8371d29661",
"main.dart.js": "65e999767f83bbc366f0ba2168956b6e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/config": "9a96478f5afbc73e2b4f9feba4f0c79e",
".git/objects/95/10943f52ce550a910028a1380fa908a26b2b66": "53f4a7e93468097062fe40bdc81ebfab",
".git/objects/0c/898c0af8f57e08ed1ca711f37c19e0fe27c70b": "8cf16e1131005b67ffd22202e5e79f6f",
".git/objects/3b/15bf962e052701f855597b2665cd0b2021f45b": "fa7dd8df1d05a96dadc85dec4ea3bbf5",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/56/0b06931daa3c3f3768c1200f7b57f7c2ce5194": "8229ca0b263464a359813ea00fb2c26e",
".git/objects/93/eb6acffe5839c8669a695af22137e8017e727e": "f29b203493d74349b44db0b4391cb52f",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/93/06e69092a7cc6830acc931e93d32a1829af07a": "50e94db60f2ce2a541011230139ff043",
".git/objects/94/00d668aa0547d0abf42eaf9871b4b3bf52638c": "5b6cc259336da6a87ded0cffd7b18d52",
".git/objects/33/5e2e3fbb7f96b9f5660d7ebb37151b50bb1bc8": "2f712d577e342be9b01376021b7abf10",
".git/objects/b4/46bef621306b1e8df38fc69f4f633a18aeb5b1": "7c9deb65f4a3091b70ed4b59e24a1e4d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/cdfbd4fdcd684d577a2f58e2cb4b73b1c836ab": "06c32f996a7e6e3dbc65f622ac3ba0a7",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/082548b0d600072028069d86a88b08c4552304": "d87cdb134801eef5e3d96d80b0bbd7d1",
".git/objects/ee/6755163dc47aa5c9a9326bcdf9dd59a3e9d3d8": "17a59c48b224bb316fe940bad8acc305",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/62/1db4e40adb536ec049826e07b9c2e6fac61093": "17d09a36eb1ac5bb552a0ce017a2a217",
".git/objects/53/0f036ff334bfd14fb95363c863f1a589b25d33": "2083e94fd990a81dc28f7fc3633c80ac",
".git/objects/5b/029c6853c72640462f3f3239b5619bd229ec7f": "d712e35cabc6b4edbe3c70e27c1eb61f",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/39/95cdd40cc41aaefab80c4e38abeaff4e2e3893": "f94370f0a1b127ea34212fcf6ddbaacb",
".git/objects/63/adb9857cebf0c0c2c8ac21dc5fdabc567acd07": "960e9e20a7b17b666bbdd5cf063d04c6",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/dd/765ca74f2f4957e0f8c9b661173983e79833d2": "781d262a749a0f51314fda70f17e86ef",
".git/objects/dc/a44b0919f5392c0453fea766a2ec20793cb5b8": "c375d928831c65f0fbe780e3962328cc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/de/62f53d9c221e4f8604ffbc6a4b390db2c58809": "2857bd494a1afe697a4cdd91cb274697",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/ec051185ca3a5139ac1f7f4f3603d3a8760b1a": "6d3815f2d33787a1fa0a2e3ed7233610",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/76ae79da7e36d844db6a87e3aca8b7ea3b865c": "4eee563714f0128204de59ddfa34d7e1",
".git/objects/cd/f8483ca3c656d8f827424b1310b635ae104738": "d940b18211869d13e0b862f45b840d01",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/f9/bb480c66267f25cd16c6d1b5a38941f181362c": "fa7fe0aac759c3d95f41320a5fc88f97",
".git/objects/e8/9aed5cbb74c9ffce9533071189f6915941344b": "b06f94226b76b778e099c6d8c5819875",
".git/objects/fa/4fe203c5567cf13a27db76488e958412be3933": "ad9b392a0379a8f5474921449977429b",
".git/objects/ff/e88eac6590424143722fbe3df2031a6e388529": "938ef5f4ce5830e2965072c238399bd9",
".git/objects/ff/dc333d57204e26bbfb53114403e4d09f8406e5": "ee9ce1fefaabf5029e359d4718801de3",
".git/objects/e7/de52a842fe369befd702ee32c725f0ce9a7202": "9adf3b8ead9c5c0b2dfaa24826afbe48",
".git/objects/46/d1f350aaa002a30cd6d06a0072779279f5ad44": "0ca54d5ebcdbefc604047e8012dbcceb",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/85/43ea19764714a0a932012abd3568d23f4930bd": "846029b5ad85381da61a34bc6a83b1d8",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/78/af1d13d9ee64263f0b0125d8864820d19cf176": "767438248e7cb20c1fe1f6ebe63728a7",
".git/objects/7a/dbfdb4ba9fd3843cfcfa8ca0035a7a87d767c9": "62b22a2f04bb1957ca0c4b63804f6998",
".git/objects/8e/b81d2bb9a67d389fde5a02da55474ec1be1892": "37a69df772ff263963b9e097c9a5fad5",
".git/HEAD": "643637979e7129b8c5da81ec9243ce92",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "02cf060994cfd7fa6f7b3a811d4f0e38",
".git/logs/refs/heads/master": "585ee33db6df290cdbdc24bac6a310ce",
".git/logs/refs/heads/portfolio": "e9dd3876cf645f71b8d0c12d4b8e16c2",
".git/logs/refs/remotes/origin/portfolio": "c9174a104a812d959f7487266ed94212",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "fc0d11b2472056337355916e2bc6ba98",
".git/refs/heads/portfolio": "875bdeba11678551ebb6496e3c17eac1",
".git/refs/remotes/origin/portfolio": "875bdeba11678551ebb6496e3c17eac1",
".git/index": "2aa7c822919280a97bbbd0a89c796c55",
".git/COMMIT_EDITMSG": "1f56e59204c59ce4d4605c84e6deeed0",
"assets/project3.jpg": "96ac83eea93dc210fa1d4c30044e7f87",
"assets/project2.jpg": "85dee06470fc86cd2dd8bc9da6d3fa5c",
"assets/project1.jpg": "acb28abb725048a1abda78cbc7fab415",
"assets/AssetManifest.json": "0719e3ecf72b91128f66b201742a181b",
"assets/NOTICES": "bef5d45468d4566cd41e6345e95ab6a5",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/project3.jpg": "96ac83eea93dc210fa1d4c30044e7f87",
"assets/assets/project2.jpg": "85dee06470fc86cd2dd8bc9da6d3fa5c",
"assets/assets/project1.jpg": "acb28abb725048a1abda78cbc7fab415",
"assets/assets/jash.jpeg": "23cc1c4de11826fe652cc488720f1e19"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
