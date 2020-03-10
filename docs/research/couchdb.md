# PouchDB and CouchDB

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
