#ionic sidemenu with tabs and shared data

This example app demonstrates how you can build an ionic app, which has a sidemenu, where you can select different options. The main screen of the application is split into tabs, each tab with its own template and controller.
The application uses $stateprovider and $urlRouterProvider to create a stable routing/navigation infrastructure.
Additionally, a side menu entry, that is selected is shared between the different tabs of the application.
One use case for such a navigation is for example a selection of projects from the sidemenu, and then keeping the content of the tabs based on the selected project, such as a task tab and a calendar tab, etc.

## install

Make sure to have ionic installed.
For gulp to work, you need additional packages

### additional gulp tasks

you need the following packages installed for gulp, to minify javascript, images etc.

```
npm install gulp-uglify gulp-ng-annotate gulp-clean gulp-imagemin gulp-jshint gulp-html-replace gulp-angular-templatecache
```
