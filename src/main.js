import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { getTranslationProviders } from './app/i18n-providers';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
if (environment.production) {
    enableProdMode();
}
getTranslationProviders().then(function (providers) {
    var options = { providers: providers };
    platformBrowserDynamic().bootstrapModule(AppModule, options);
});
//# sourceMappingURL=main.js.map