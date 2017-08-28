Shree Ganesh 27 Aug

src - https://www.youtube.com/watch?v=3QR8p03eKAk
      https://angular.io/guide/i18n

1) add this into scripts in package.json
     "i18n": "ng-xi18n"

2) Add attribute i18n in this way
        <h1 i18n="site header|An introduction header for this sample@@introductionHeader">Hello i18n!</h1>
      site header - meaning
      An introduction... - description
      @@introductionHeader - id for translation entry


3)  run  npm run i18n --  --i18nFormat=xlf  --outFile=messages.xlf
      this arguments can be skipped by setting default format as xlf,
        but I dont know how to do this.
    This step will produce a messages.xlf file in root path

    In this file you can see the enteries for all of yours translations like this
          <trans-unit id="introductionHeader" datatype="html">
            <source>Hello i18n!</source>
            <context-group purpose="location">
              <context context-type="sourcefile">src\app\app.component.ts</context>
              <context context-type="linenumber">6</context>
            </context-group>
            <note priority="1" from="description">An introduction header for this sample</note>
            <note priority="1" from="meaning">site header</note>
          </trans-unit>


4)  Copy this messages.xlf into src > locale(create new folder name locale in /app)
      as messages.es.xlf

5) Update the target element as desired translation


6) ng xi18n -l es --progress --verbose


7) create a new file src/systemjs-text-plugin.js
      /*
        SystemJS Text plugin from
        https://github.com/systemjs/plugin-text/blob/master/text.js
      */
      exports.translate = function (load) {
        if (this.builder && this.transpiler) {
          load.metadata.format = 'esm';
          return 'exp' + 'ort var __useDefault = true; exp' + 'ort default ' + JSON.stringify(load.source) + ';';
        }

        load.metadata.format = 'amd';
        return 'def' + 'ine(function() {\nreturn ' + JSON.stringify(load.source) + ';\n});';
      }
8) cREATE i18n-providers.ts
      import { TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID, MissingTranslationStrategy } from '@angular/core';
      import { CompilerConfig } from '@angular/compiler';

      export function getTranslationProviders(): Promise<Object[]> {

        // Get the locale id from the global
        const locale = document['locale'] as string;

      // return no providers if fail to get translation file for locale
      const noProviders: Object[] = [];

      // No locale or U.S. English: no translation providers
      if (!locale || locale === 'en-US') {
        return Promise.resolve(noProviders);
      }

      // Ex: 'locale/messages.es.xlf`
      const translationFile = `./locale/messages.${locale}.xlf`;

      return getTranslationsWithSystemJs(translationFile)
        .then( (translations: string ) => [
        { provide: TRANSLATIONS, useValue: translations },
        { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
        { provide: LOCALE_ID, useValue: locale },
      ])
      .catch(() => noProviders); // ignore if file not found
      }

      declare var System: any;

      function getTranslationsWithSystemJs(file: string) {
        return System.import(file + '!text'); // relies on text plugin
      }

9) Then update the main.ts as

    import { enableProdMode } from '@angular/core';
    import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
    import { getTranslationProviders } from './app/i18n-providers';

    import { AppModule } from './app/app.module';
    import { environment } from './environments/environment';

    if (environment.production) {
      enableProdMode();
    }
    getTranslationProviders().then(providers => {
      const options = {providers}
      platformBrowserDynamic().bootstrapModule(AppModule, options);

    })




Extras


Internationalization to attributes
<img [src]="logo" i18n-title title="Angular logo" />


Handle singular and plural

Select among alternative texts

Nesting pluralization and selection expressions
