import type {ConnectionOptions} from 'mysql2'
 
const mysqlConfig  ={
host:'localhost',
port:3306,
user:'root',
password:'123456',
database:'itemall'
} as ConnectionOptions

export {mysqlConfig}
