#import supports.app_object as app_object_support
import pyodbc
import support.app_object as app_object
import pandas as pd

def connectDB():
    return pyodbc.connect(app_object.app.config['SQLALCHEMY_DATABASE_URI'])


def executeSQL(sql):
    conn = connectDB()
    try:
        return conn.execute(sql)
    except Exception as e:
        raise e


def getValueFromDb(sql):
    rows = executeSQL(sql)
    for row in rows:
        return row[0]
    return None

def getDictResultset(sql):
    return {row[0]: row[1] for row in executeSQL(sql)}


def getJSONResultset(sql):
    return executeSQL(sql).first()[0]


def getDataframeResultSet(sql):
    return pd.read_sql(sql, connectDB())


def tableExists(tablename, schema='public'):
    return getValueFromDb(f'''SELECT count(1) from (
   SELECT FROM information_schema.tables 
   WHERE  table_schema = '{schema}'
   AND    table_name   = '{tablename}'
   ) a''') == 1
