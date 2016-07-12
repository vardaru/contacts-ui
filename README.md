# ContactsUi
ContactsUi uygulaması [ContactService](https://github.com/vardaru/ContactService) uygulaması ile birlikte çalışmak üzere geliştirilmiştir. 

Proje Angular-CLI kullanılar geliştirilmiştir. [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.8.

Projeye öncelikle:
angular2-material tasarım özellikleri eklenmiştir. Bunun için projeye:
npm install --save @angular2-material/core ile ilgili paketler (core, sidenav, icon, list, button vb) eklenmiştir [angular2-material](https://github.com/angular/material2/tree/master/src/components)  

Bu işlemlerden sonra system-config.ts dosyasında göreceğiniz değişiklikler yapılmıştır.
Ardından index.html e Bootstrap css eklenmiştir.

### Bileşenler

Projede dört ana bileşen bulunmaktadır, app.component, contactlist.component, contacteditor.component ve contact.service 
Bileşenlerin isimleri @angular dünyasında kabul görmüş ilkelere uygun verilmiştir. 

contactlist deki @Output ve contacteditor deki @Input dekoratörleri veri göndermek (event ile) ve veri almak için kullanılmışlardır. Angular 2'de hiyerarşik bileşenler arasında veri alışverişi bu yolla yapılmaktadır.
Diğer yandan contact.service  bileşenin kullanımına dikkat edilmelidir. Servisler @Injectable dekoratörü ile işaretlenirler ve bileşenlere constructor()lar vasıtasıyla inject edilirler.
pipes dizini altındaki pipes kullanılmamıştır. Sadece yer tutucu olarak konulmuştur. Onun yerine "built-in" "uppercase" pipe kullanımıştır. Soyadlar küçük harfle yazılsa bile gösterim anında büyük harfle yazılmaktadır.  

 
## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/route/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
