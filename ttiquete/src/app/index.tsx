import { Redirect } from "expo-router";
//redirecionar para o login como pagina inicial
export default function Index() {
  return <Redirect href="/(auth)/login" />;
}
