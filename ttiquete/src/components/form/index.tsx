import { Alert, View, Text, TextInput, TextInputProps, TouchableOpacity } from "react-native";
import { useState } from "react";
import { styles } from "./styles";
import { useUsersDatabase } from "../../database/useUsersDatabase";
import { router } from "expo-router";

type Props = TextInputProps & { title: string };

function InputWithTitle({ title, ...rest }: Props) {
  return (
    <View style={styles.container_input}>
      <Text style={styles.title}>{title}</Text>
      <TextInput style={styles.inputWithTitle} {...rest} />
    </View>
  );
}

export function FormLogin() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const isDisabled = email.trim() === "" || senha.trim() === "";

    function handleLogin() {
        if (isDisabled) {
        Alert.alert("Erro", "Preencha todos os campos!");
        return;
        }

        // Simulação de login (adicione aqui a lógica de autenticação)
        Alert.alert("Sucesso", "Login realizado!");
        router.push("/(tabs)/home"); // Redireciona para a tela inicial
    }

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <InputWithTitle
            title="Email"
            placeholder="Email"
            placeholderTextColor={"gray"}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
        />
        <InputWithTitle
            title="Senha"
            placeholder="Senha"
            placeholderTextColor={"gray"}
            secureTextEntry={true}
            value={senha}
            onChangeText={setSenha}
        />
        <TouchableOpacity 
            style={styles.buttonResetPassword}
            // onPress={()=> router.push('/teste')}
        >
            <Text style={styles.buttonResetPasswordText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={[styles.buttonLogin, isDisabled && styles.buttonLoginDisabled]}
            onPress={handleLogin}
            disabled={isDisabled}
        >
            <Text style={styles.title}>Entrar</Text>
        </TouchableOpacity>
        <View style={styles.container_separador}>
            <View style={styles.line} />
            <Text style={styles.title}>Ou</Text>
            <View style={styles.line} />
        </View>
        <View style={styles.container_separador}>
            <Text style={styles.title}>Ainda não tem uma conta? </Text>
            <TouchableOpacity onPress={() => router.push("/register")}>
            <Text style={styles.buttonRegisterText}>Cadastre-se</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
}

export function FormRegister() {
    const [numPage, setNumPage] = useState(1);

    const [formData, setFormData] = useState({
        nome: "",
        telefone: "",
        email: "",
        senha: "",
        senhaConfirmacao: "",
        cpf: "",
        nascimento: "",
        cep: "",
        uf: "",
        bairro: "",
        endereco: "",
        complemento: ""
    });

    const usersDatabase = useUsersDatabase();

    const updateField = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    async function create() {
        if (Object.values(formData).some((value) => value.trim() === "")) {
        Alert.alert("Erro", "Todos os campos são obrigatórios!");
        return;
        }

        if (formData.senha !== formData.senhaConfirmacao) {
        Alert.alert("Erro", "As senhas não conferem!");
        return;
        }

        try {
        const response = await usersDatabase.create(formData);
        Alert.alert("Usuário cadastrado com sucesso! ID: " + response.insertedRowId);
        router.push("/(auth)");
        } catch (error) {
        console.log(error);
        }
    }

    function nextPage() {
        setNumPage((prev) => Math.min(prev + 1, 3));
    }

    function prevPage() {
        setNumPage((prev) => Math.max(prev - 1, 1));
    }

    function renderButtons() {
        return (
        <View style={styles.buttonContainer}>
            {numPage === 1 && (
            <View></View>
            )}
            {numPage > 1 && (
            <TouchableOpacity style={styles.buttonPages} onPress={prevPage}>
                <Text>Voltar</Text>
            </TouchableOpacity>
            )}
            {numPage < 3 && (
            <TouchableOpacity style={styles.buttonPages} onPress={nextPage}>
                <Text>Continuar</Text>
            </TouchableOpacity>
            )}
            {numPage === 3 && (
            <TouchableOpacity style={styles.buttonPages} onPress={create}>
                <Text>Cadastrar</Text>
            </TouchableOpacity>
            )}
        </View>
        );
    }

    return (
        <View style={styles.container}>
        {numPage === 1 && (
            <View style={styles.containerPages}>
                <Text style={styles.tittleTheme}>Dados Pessoais</Text>
                <InputWithTitle title="Nome" placeholder="Nome" placeholderTextColor="white" value={formData.nome} onChangeText={(val) => updateField("nome", val)} />
                <InputWithTitle title="Telefone" placeholder="Telefone" placeholderTextColor="white" value={formData.telefone} onChangeText={(val) => updateField("telefone", val)} />
                <InputWithTitle title="Email" placeholder="Email" placeholderTextColor="white" value={formData.email} onChangeText={(val) => updateField("email", val)} />
                <InputWithTitle title="CPF" placeholder="CPF" placeholderTextColor="white" value={formData.cpf} onChangeText={(val) => updateField("cpf", val)} />
                <InputWithTitle title="Nascimento" placeholder="DD/MM/AAAA" placeholderTextColor="white" value={formData.nascimento} onChangeText={(val) => updateField("nascimento", val)} />
            </View>
        )}

        {numPage === 2 && (
            <View style={styles.containerPages}>
                <Text style={styles.tittleTheme}>Endereço</Text>
                <InputWithTitle title="CEP" placeholder="CEP" placeholderTextColor="white" value={formData.cep} onChangeText={(val) => updateField("cep", val)} />
                <InputWithTitle title="Estado (UF)" placeholder="UF" placeholderTextColor="white" value={formData.uf} onChangeText={(val) => updateField("uf", val)} />
                <InputWithTitle title="Bairro" placeholder="Bairro" placeholderTextColor="white" value={formData.bairro} onChangeText={(val) => updateField("bairro", val)} />
                <InputWithTitle title="Endereço" placeholder="Endereço completo" placeholderTextColor="white" value={formData.endereco} onChangeText={(val) => updateField("endereco", val)} />
                <InputWithTitle title="Complemento" placeholder="Ex: apto, bloco, etc." placeholderTextColor="white" value={formData.complemento} onChangeText={(val) => updateField("complemento", val)} />
            </View>
        )}

        {numPage === 3 && (
            <View style={styles.containerPages}>
                <Text style={styles.tittleTheme}>Senha</Text>
                <InputWithTitle title="Senha" placeholder="Senha" placeholderTextColor="white" secureTextEntry value={formData.senha} onChangeText={(val) => updateField("senha", val)} />
                <InputWithTitle title="Confirme sua Senha" placeholder="Repetir senha" placeholderTextColor="white" secureTextEntry value={formData.senhaConfirmacao} onChangeText={(val) => updateField("senhaConfirmacao", val)} />
            </View>
        )}

        {renderButtons()}
        </View>
    );
}
