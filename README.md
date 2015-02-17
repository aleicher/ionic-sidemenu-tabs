#ionic sidemenu with tabs and shared data

This example app demonstrates how you can build an ionic app, which has a sidemenu, where you can select different options. The main screen of the application is split into tabs, each tab with its own template and controller.
The application uses $stateprovider and $urlRouterProvider to create a stable routing/navigation infrastructure.
Additionally, a side menu entry, that is selected is shared between the different tabs of the application.
One use case for such a navigation is for example a selection of projects from the sidemenu, and then keeping the content of the tabs based on the selected project, such as a task tab and a calendar tab, etc.

## install

Make sure to have ionic installed, as well as gulp.

To install all the dependencies, run:

    npm install

also install all the bower dependencies:

    bower install

then, run the project with gulp:

    gulp

### gulp tasks

the gulp system is taken from:

- http://www.thomasmaximini.com/2015/02/10/speeding-up-ionic-app-development-with-gulp.html

- https://github.com/tmaximini/ionic-gulp-seed


The following gulp commands do exist:

| gulp command | shortcut | what it does |
| ------------ | -------- | ------------ |
| gulp         |          | run local development server, start watchers, auto reload browser on change, targetfolder /tmp |
| gulp --build | gulp -b  | create a build from current /app folder, minify assets, targetfolder /www |
| gulp --emulate <platform> | gulp -e <platform> | run a build first, then ionic emulate <platform>. defaults to ios |
| gulp --run <platform> | gulp -r <platform> | run a build first, then ionic run <platform>. defaults to ios |



