import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

// this is a top-level await 
(async () => {
    // open the database
    const db = await open({
      filename: '/data/ecommerce.db',
      driver: sqlite3.Database
    })
})()