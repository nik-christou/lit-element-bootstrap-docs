
import { Workbox } from './web_modules/workbox-window/workbox-window.dev.mjs';

if ('serviceWorker' in navigator) {
    
    const wb = new Workbox('/service-worker.js');
    
    wb.addEventListener('installed', (event) => {
      
      // `event.isUpdate` will be true if another version of the service
        // worker was controlling the page when this version was installed.
      if (!event.isUpdate) {
        console.log('Service worker installed for the first time!');  
      }

    });

    wb.addEventListener('activated', (event) => {
        
        // `event.isUpdate` will be true if another version of the service
        // worker was controlling the page when this version was registered.
        if (!event.isUpdate) {
            console.log('Service worker activated for the first time!');
      
          // If your service worker is configured to precache assets, those
          // assets should all be available now.
        }
    });

    wb.addEventListener('message', (event) => {

        if (event.data.type === 'CACHE_UPDATED') {
          const {updatedURL} = event.data.payload;
          console.log(`A newer version of ${updatedURL} is available!`);
        }
        
    });

    // Register the service worker after event listeners have been added.
    wb.register();
}