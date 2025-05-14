import { useSQLiteContext } from "expo-sqlite";

export type UsersDatabase = {
    id: number,
    nome: string,
    telefone: string,
    email: string,
    senha: string,
    cpf: string,
    nascimento: string,
    cep: string,
    uf: string,
    bairro: string,
    endereco: string,
    complemento: string
};

export function useUsersDatabase(){

    const database = useSQLiteContext()

    // Omit para ignorar o campo id pois ele é autoincremental
    async function create(data: Omit<UsersDatabase, "id">) {
        const statement = await database.prepareAsync("INSERT INTO users (nome, telefone, email, senha, cpf, nascimento, cep, uf, bairro, endereco, complemento) VALUES ($nome, $telefone, $email, $senha, $cpf, $nascimento, $cep, $uf, $bairro, $endereco, $complemento)"
        )
        try {
            const result = await statement.executeAsync({
                $nome: data.nome,
                $telefone: data.telefone,
                $email: data.email,
                $senha: data.senha,
                $cpf: data.cpf,
                $nascimento: data.nascimento,
                $cep: data.cep,
                $uf: data.uf,
                $bairro: data.bairro,
                $endereco: data.endereco,
                $complemento: data.complemento
            })

            const insertedRowId = result.lastInsertRowId.toLocaleString()

            return { insertedRowId }
        } catch (error) {
            throw error            
        } finally {
            await statement.finalizeAsync()
        }

    }
    return {create}
}