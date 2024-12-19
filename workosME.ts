
#3/chargemaps
'''ubuntu debian
    '''couchdb

# DECLARE LISTS
tokens_list = []
dorks_list = []
queries_list = []
organizations_list = []
users_list = []
keywords_list = [

    environment.prod.ts

    import {openchargemaps} from './openchargemaps.environment';
    
    export const environment = {
      production: false,
      baseUrl: 'http://localhost:8080/',
      ...openchargemaps
    };
    
    
    export const openchargemaps = {
        openchargemaps: {
          API_KEY: 'XXXX-XXXX-XXXX-XXXX-XXXXXXXX'
      };
      

      For production, I have created the environment variable on heroku: OPENCHARGEMAPS_API_KEY : XXXX-XXXX-XXXX-XXXXXXXXXXX

And finalyy I import this in my components this way :

import {environment} from '../../environments/environment';

baseUrl = environment.baseUrl + 'ev/v1/auth/users/';
APIKey = environment.openchargemaps.API_KEY;

For info this is my version of Angular :

ng --version

Angular CLI: 10.1.7
Node: 14.15.0
OS: win32 x64

Angular: 10.1.6
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router
Ivy Workspace: Yes

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1001.7
@angular-devkit/build-angular   0.1001.7
@angular-devkit/core            10.1.7
@angular-devkit/schematics      10.1.7
@angular/cli                    10.1.7
@angular/google-maps            11.1.0
@schematics/angular             10.1.7
@schematics/update              0.1001.7
rxjs                            6.6.3
typescript                      4.0.5