/* eslint-disable no-param-reassign */
import { Platform } from 'react-native';

const rnfs = require('react-native-fs');
const SQLite = require('../thirdparty/react-native-sqlite-storage/sqlite');

class Database {
  constructor(dbPath, callback) {
    if (Platform.OS === 'ios') {
      const documentsPath = rnfs.DocumentDirectoryPath;
      if (dbPath.startsWith(documentsPath)) {
        // eslint-disable-next-line no-param-reassign
        dbPath = dbPath.substr(documentsPath.length);
      }
    }
    const name = dbPath;
    this._db = SQLite.openDatabase({ name, location: 'Documents' }, () => {
      callback(null);
    }, (err) => {
      callback(err);
    });
  }

  run(sql, values, callback) {
    //
    if (values) {
      values = values.map((value) => {
        if (value instanceof Date) {
          return value.valueOf();
        }
        return value;
      });
    }
    this._db.executeSql(sql, values, (results) => {
      callback(null, results);
    }, (err) => {
      callback(err);
    });
  }

  all(sql, values, callback) {
    return this.run(sql, values, (err, results) => {
      if (err) {
        callback(err);
      } else {
        //
        const resultRows = [];
        const rows = results?.rows;
        if (rows) {
          for (let i = 0; i < rows.length; i++) {
            const row = results.rows.item(i);
            resultRows.push(row);
          }
        }
        //
        callback(null, resultRows);
      }
    });
  }

  close(callback) {
    this._db.close(() => {
      callback();
    }, callback);
  }
}

export default {
  Database,
};
