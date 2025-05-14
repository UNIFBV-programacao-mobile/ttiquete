import { SQLiteDatabase } from "npx expo install expo-sqlite"

export async function initializeDatabase(database: SQLiteDatabase) {
    await database.execAsync(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            telefone TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            senha TEXT NOT NULL,
            cpf TEXT,
            nascimento TEXT,
            cep TEXT,
            uf TEXT,
            bairro TEXT,
            endereco TEXT,
            complemento TEXT
        )
    `)
}