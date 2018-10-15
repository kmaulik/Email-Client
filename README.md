Email-Client

Using React, Redux, a state-less GraphQL server, and a MySQL database, we need a simple
email client which can:
● lists emails
● filter emails by status: READ, UNREAD, or ALL.
● allows you to select emails by checkbox
● and allows you mark all checked emails as READ
● The list has pagination. Each page can only display 5 emails, but there are in the
database.
● Click an email which will open the email in a modal. This is not a route transition. The
modal opens on top of the list, so the email list is still visible in the background, but it’s
covered by a semi-transparent black screen


Running 

git clone https://github.com/kmaulik/Email-Client.git
npm i
npm start
open http://localhost:3000


To Running server
node server/app.js
open http://localhost:4000/graphql


Create Database In MySQL: email_client
import email_client.sql file in MySQL database

