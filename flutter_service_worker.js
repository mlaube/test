'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/assets/background-light.png": "d10617805ffe54f053583fc36fe632e1",
"assets/assets/menu.png": "b8cb4812a98891eff564563a1b2ba923",
"assets/assets/chimpanzee.wav": "908ea8c9ccca6aa3f2b12266a96c076f",
"assets/assets/background-dark.png": "269eebe7f0bc0ea878a47ac86ac6e1a5",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "56522c859d8693601c6843dafdc000a4",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.json": "aca1bdeb4301482804b4e26dba116b45",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"main.dart.js": "74a7691c5b478a2de24b65d4475ee4e6",
"version.json": "906fded0c2d0c6064fbaf357ef265b32",
"CNAME": "ff6902829ecd23ce72052a37cba68a8f",
"splash/style.css": "604c5591503fea424cdcd52f2c734c6f",
"splash/img/light-1x.png": "728bb2b010c46367dad258e0507cb85b",
"splash/img/light-3x.png": "4677fb8a1315a15b93560ab6e293aa9e",
"splash/img/dark-2x.png": "7605682e70cc034ea7d5678caad83382",
"splash/img/dark-1x.png": "d35aaf59ea605b5679163975664630a7",
"splash/img/light-4x.png": "2707c57d184f7cec508532bab21f6c5b",
"splash/img/dark-3x.png": "c88cea4d184d47498c63382b367b9194",
"splash/img/dark-4x.png": "ac625160d26d76fac2de635cbdd13ab7",
"splash/img/light-2x.png": "2c967e793e312701e71402c48aff8f78",
"icons/Icon-192.png": "8206e5ef2f1ac5539631b9f7d777982e",
"icons/Icon-maskable-512.png": "2bf28da694b9316761566b1538b2d808",
"icons/Icon-maskable-192.png": "8206e5ef2f1ac5539631b9f7d777982e",
"icons/Icon-512.png": "2bf28da694b9316761566b1538b2d808",
"manifest.json": "c4058aa433e62c9db137e73f168e4f5e",
"index.html": "4b0c1738a42608ea54ac213f84129e22",
"/": "4b0c1738a42608ea54ac213f84129e22",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/13/78bb3941e03240ecb8c32e84b59e472307422d": "4b3a584015f5d48253191ef3efeb5203",
".git/objects/82/fd721977beda72b492df4d04d27504880bfd09": "88f1919415ca7655081248182d8ab84d",
".git/objects/69/a94a52faa67cbca54f668e5dfbf58d6718601a": "1065e511af050624ee22b0ebe2999171",
".git/objects/57/8940f31a090741b9b78751f587bd83f90dceb2": "3bcdaabceac96c2d69a3e9f9d6221ad9",
".git/objects/6f/5024ee86909bc4209ba6f0fad3530e8c3b3098": "de6a72f08cf0064128719a8ff378f7d6",
".git/objects/6f/4074fcc2f5505fdca01e5e881d59853395aa91": "3560f3951c9777dbd4ce0705408f3aaf",
".git/objects/8b/841c2db8d939a03903d58282d6641ee9351f24": "1d97baf94e7007f7605544bdeafcfe9d",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/0b/8216c4855407ae9d4bce38e12fb40523addda5": "063622e2a85c5ffdee7fde2a9d59e4a0",
".git/objects/85/0119e6b6a683d35535feecdc0dbae7614c35ea": "70d4ed8096ad92a277706cc741f483dc",
".git/objects/5b/93f4ede46753784eec372170b453d127a97cf5": "f980c8d9ea1f5667e4f21b29963fc373",
".git/objects/cc/d45aee04c17aa4443f1871ed64319a0f7679e6": "dfc079d094a755f64cccae1251398aa4",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/6d/45657b60c50e4dc4ba03e46ac36bff515415ab": "219748004387de9dba6f08465bbb41b4",
".git/objects/10/48593d74c25d2c6e448dafe70e81fecb4f759f": "60c627f0a96a31c6ffdad7573569adf6",
".git/objects/91/3b3a03e5c43f52ffd8c5ff293dd24bd0b4bd78": "9be0a3460939b8e6d01d19e4b91baa1c",
".git/objects/4f/5c6a6b89eaa50f453722862fe91abe134abe35": "991279991e08b6b32a737f024b4d738e",
".git/objects/e4/e1206a183e952c59dd59c2b303ca4060b93402": "9d4e8d36b3e6c0b4c530b94be6e3d887",
".git/objects/19/c7317e6cf196937831dbbe37cb53f3e8156a6b": "6dbf22bcde3dfa2b762c92c2d8d15b02",
".git/objects/e7/23b595afe9bdf5e94603dc913427e5730fed53": "0ff8b215417cd72c3a4cc26b9586f674",
".git/objects/44/d8a97e72db7c661d10f4a0037731900ab7123c": "29571421fb521c5d5e8292629dbe2802",
".git/objects/98/bbf63b7784056ce2895a3761e2ebecaf4283d8": "a95c618d8d2b8ecb698753cfac6fec9f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/83/122ed1f43943e8602e48c5cdb3ae47dc359e7a": "59b26255cf7197fcd97f83d80343fd43",
".git/objects/47/e0cc82c1f2c23c04e47b624475e6e7c69bc1d2": "bd30908b0c7a07c5e15aed26ad216fae",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/6a/cad12d166b0977ae7f2b5271105f31d3b812ad": "5579664b4c2eadbb9e859448525f6db1",
".git/objects/c0/91053800b424eed5330aa85f99414126535a82": "1451a6ecfcc8e2301b5df8fd2e33381e",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/bc257a716d939437933cb02c2aaca720d11173": "2ec18f752b4e67c035ed9213639bb4ff",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/07/99ceb6deaa3b3426f233a4588819e830751159": "e4b96bf6d3d1471f6b253159740ba0b2",
".git/objects/b3/bfb98dd9805afdc37e5a54abd8cd7825c1baa3": "fde931782620c9b0e4d64e5aac5effce",
".git/objects/d9/79c733376f465b3372a71ab0996602546505ee": "e1e7765b4f9b15822f2b49fd4b0dbc6f",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/14/311b9e950f317b76a881e4948f1e8f9a59e64d": "794239b118f1d3c5604f3f408a1ae4bb",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/ba/472b83b1a53c9d8f9a51a6e1c0b535a9894e8a": "c58c2e6b4956133c3272e709487f2da1",
".git/objects/64/7fb9152dacb189e189fc1dd3f3289b1e81e160": "1ac43ce53e547bfecc130fded9460b9e",
".git/objects/37/22b6d84b377745020c67229ee63b8fc9974084": "035d3352ea45d5192c7bb3df4e9311fc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/remotes/origin/main": "16a1bacb568db31efd4c8dd786ccb515",
".git/refs/heads/main": "16a1bacb568db31efd4c8dd786ccb515",
".git/index": "15ebed3e105549fda748e459f50c2a02",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/logs/refs/remotes/origin/main": "12b72d4df72e95feb36e1f813df09259",
".git/logs/refs/heads/main": "7ae8f8646c98b15daa23aa59b3ef90af",
".git/logs/HEAD": "aaae16740e49f0acd016b254bf6dc871",
".git/COMMIT_EDITMSG": "1591c388e298ed02e1ef91d980159c76",
".git/config": "426e5ff4c50f88d0ddef37e22038cbc0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"favicon.ico": "86b71d5a9e8f15b1ce5e4abed79edf5b"
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
