import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

import { useUsersDatabase } from "../../database/useUsersDatabase"; // Certifique-se de que essa importação existe
import { InputWithTitle } from "../../components/input/index";

export default function Index() {
  const { nome } = useLocalSearchParams();

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
    complemento: "",
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
      Alert.alert(
        "Usuário cadastrado com sucesso! ID: " + response.insertedRowId
      );
      router.push("/(auth)/login");
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

  function loginPage() {
    router.push("/(auth)/login");
  }

  function renderButtons() {
    return (
      <View style={styles.buttonContainer}>
        {numPage === 1 && (
          <TouchableOpacity style={styles.buttonPages} onPress={loginPage}>
            <Text>Voltar</Text>
          </TouchableOpacity>
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
      <LinearGradient
        colors={["#35306d", "transparent"]}
        style={styles.background}
        />
      <Image
        source={require("../../assets/images/logo_ttiquete.png")}
        style={styles.image}
        />

        <Text>{nome}</Text>
      {numPage === 1 && (
        <View style={styles.containerPages}>
          <Text style={styles.tittleTheme}>Dados Pessoais</Text>
          <InputWithTitle
            title="Nome"
            placeholder="Nome"
            placeholderTextColor="white"
            value={formData.nome}
            onChangeText={(val) => updateField("nome", val)}
          />
          <InputWithTitle
            title="Telefone"
            placeholder="Telefone"
            placeholderTextColor="white"
            value={formData.telefone}
            onChangeText={(val) => updateField("telefone", val)}
          />
          <InputWithTitle
            title="Email"
            placeholder="Email"
            placeholderTextColor="white"
            value={formData.email}
            onChangeText={(val) => updateField("email", val)}
          />
          <InputWithTitle
            title="CPF"
            placeholder="CPF"
            placeholderTextColor="white"
            value={formData.cpf}
            onChangeText={(val) => updateField("cpf", val)}
          />
          <InputWithTitle
            title="Nascimento"
            placeholder="DD/MM/AAAA"
            placeholderTextColor="white"
            value={formData.nascimento}
            onChangeText={(val) => updateField("nascimento", val)}
          />
        </View>
      )}

      {numPage === 2 && (
        <View style={styles.containerPages}>
          <Text style={styles.tittleTheme}>Endereço</Text>
          <InputWithTitle
            title="CEP"
            placeholder="CEP"
            placeholderTextColor="white"
            value={formData.cep}
            onChangeText={(val) => updateField("cep", val)}
          />
          <InputWithTitle
            title="Estado (UF)"
            placeholder="UF"
            placeholderTextColor="white"
            value={formData.uf}
            onChangeText={(val) => updateField("uf", val)}
          />
          <InputWithTitle
            title="Bairro"
            placeholder="Bairro"
            placeholderTextColor="white"
            value={formData.bairro}
            onChangeText={(val) => updateField("bairro", val)}
          />
          <InputWithTitle
            title="Endereço"
            placeholder="Endereço completo"
            placeholderTextColor="white"
            value={formData.endereco}
            onChangeText={(val) => updateField("endereco", val)}
          />
          <InputWithTitle
            title="Complemento"
            placeholder="Ex: apto, bloco, etc."
            placeholderTextColor="white"
            value={formData.complemento}
            onChangeText={(val) => updateField("complemento", val)}
          />
        </View>
      )}

      {numPage === 3 && (
        <View style={styles.containerPages}>
          <Text style={styles.tittleTheme}>Senha</Text>
          <InputWithTitle
            title="Senha"
            placeholder="Senha"
            placeholderTextColor="white"
            secureTextEntry
            value={formData.senha}
            onChangeText={(val) => updateField("senha", val)}
          />
          <InputWithTitle
            title="Confirme sua Senha"
            placeholder="Repetir senha"
            placeholderTextColor="white"
            secureTextEntry
            value={formData.senhaConfirmacao}
            onChangeText={(val) => updateField("senhaConfirmacao", val)}
          />
        </View>
      )}

      {renderButtons()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 25,
    backgroundColor: "#5d56c2",
  },

  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },

  image: {
    alignSelf: "center",
    width: "50%",
    height: "15%",
    resizeMode: "contain",
  },

  containerPages: {
    justifyContent: "center",
  },

  input: {
    width: "100%",
    height: 52,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
    padding: 15,
    fontSize: 16,
  },

  inputWithTitle: {
    width: "100%",
    height: 52,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    padding: 15,
    fontSize: 16,
    color: "white",
  },

  title: {
    fontSize: 14,
    color: "white",
  },

  tittleTheme: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    height: 40,
  },

  // Estilização do botão

  buttonLogin: {
    width: "100%",
    height: 52,
    backgroundColor: "#E15610",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonRegister: {
    color: "white",
  },

  buttonRegisterText: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },

  buttonLoginDisabled: {
    backgroundColor: "#ccc", // Cor cinza quando o botão está desativado
  },

  buttonResetPassword: {
    alignSelf: "flex-start",
    height: 40,
  },

  buttonResetPasswordText: {
    fontSize: 14,
    color: "white",
    fontWeight: "regular",
  },

  buttonContainer: {
    flexDirection: "row", // Alinha os botões na horizontal
    justifyContent: "space-between", // Distribui os botões uniformemente
    marginTop: 20, // Adiciona espaçamento superior
    alignItems: "flex-end",
  },

  buttonPages: {
    width: "45%",
    height: 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  // Separador

  container_separador: {
    flexDirection: "row", // Alinha os elementos na horizontal
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginVertical: 10,
    gap: 5,
  },

  line: {
    flex: 1, // As linhas ocupam todo o espaço disponível
    height: 1, // Define a altura da linha
    backgroundColor: "#ccc", // Cor da linha
  },
});
