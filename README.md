# Ombrio

**Full-Stack Toolchain for Professional Self-Publishers**

## Features

* Left-side slider/Binder
* Right-side file metadata
* Center editor
* Local storage
* [ProWritingAid API?](https://prowritingaid.com/en/App/API)

## Courses

* [React - The Complete Guide (incl Hooks, React Router, Redux)](https://www.udemy.com/react-the-complete-guide-incl-redux/learn/lecture/8268510)
* [Learn Modern Javascript (Build & Test Real Apps Now)](https://www.udemy.com/modern-javascript-from-the-beginning/)
* [Beginning Modern JavaScript (Includes 10 Real Projects)](https://www.udemy.com/modern-javascript-from-the-beginning/)
* [React Front To Back, Traversy](https://www.udemy.com/react-front-to-back/)

## Plugins

* Use Electron for desktop because gives access to the filesystem.
* [Reusable JS components](https://github.com/teambit/bit)

### React

* [State of React 2019](https://blog.bitsrc.io/state-of-react-state-management-in-2019-779647206bbc)
* [React Context API replacing Redux?](https://blog.bitsrc.io/react-context-api-a-replacement-for-redux-6e20790492b3)
* [React Desktop](https://github.com/gabrielbull/react-desktop) - React UI Components for macOS High Sierra and Windows 10

### Database
* [Building an offline-first app with React and RxDB](https://blog.logrocket.com/building-an-offline-first-app-with-react-and-rxdb-e97a1fa64356)
* [rxdb](https://github.com/pubkey/rxdb) - A realtime Database for the Web

### Editor
* [Monoco Editor](https://microsoft.github.io/monaco-editor/index.html) - if using Markdown. [this](https://github.com/Microsoft/monaco-editor)
* [DraftJS](https://draftjs.org/) if using React [this](https://jpuri.github.io/react-draft-wysiwyg/#/)
* [Quill for Angular BSD](https://github.com/KillerCodeMonkey/ngx-quill)

### Desktop / Electron

* [Electron Forge w/ React](https://electronforge.io/templates)
* [PhotonKit (outdated)](http://photonkit.com/) for Electron (look & Feel) check out [this](https://discuss.atom.io/t/what-framework-you-are-using-to-style-your-electron-app/60199/2) for CSS Frameworks with Electron
* [Awesome Electron](https://github.com/sindresorhus/awesome-electron) for links to cool things with Electron.
* [7 Famous Desktop Apps Using Electron JS Framework](https://brainhub.eu/blog/electron-framework-example-apps/)

### PouchDB and CouchDB

PouchDB is a pure JavaScript NoSQL database that can be synced with a remote CouchDB database to create an [offline first](http://offlinefirst.org/) application.If you're not comfortable using PouchDB's map/reduce API you can use [pouchdb-find](https://github.com/nolanlawson/pouchdb-find). This is included by default.

In order to sync the local and remote databases when the application launches follow the instructions below:

**Local PouchDB**

If you do not require the use of CouchDB on a remote server simply leave the variables in `.env` blank. By default this will use a local PouchDB database.

**Remote CouchDB**

Syncing your application to a remote CouchDB database is easy. Ensure you have CouchDB installed on a remote server and that you've secured it (I suggest reading [this guide](http://guide.couchdb.org/draft/security.html)). If you need a server to play around with you can get $10 free from Digital Ocean by following [this link](https://m.do.co/c/dde4646baa31).

Once you have CouchDB installed and secured you can configure your application by entering the `host`, `username` and `password` in the `.env` file.

    COUCH_PROTOCOL=http
    COUCH_HOST=192.168.0.1
    COUCH_PORT=5984
    COUCH_DB=app
    COUCH_USERNAME=username
    COUCH_PASSWORD=secret_password

**Add CORS Configuration**

[See here](https://github.com/pouchdb/add-cors-to-couchdb) for more details on why this step is required.

Run the following command, replacing the `host`, `username` and `password`:

    npm run add-cors http://127.0.0.0:5984 --username user --password secret_password

**Finished**

Neuron will now automatically sync the remote database to the local one when the application launches, and will keep in sync when data is changed in the database. By default the database sync is bidirectional.

For more information on replication see [the docs](https://pouchdb.com/guides/replication.html).
