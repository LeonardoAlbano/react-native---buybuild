import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { FiilterStatus } from "@/types/FilterStatus";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <View style={styles.form}>
        <Input placeholder="Salve familia" />
        <Button title="Adicionar" />
      </View>

      <View style={styles.content}>
        <Filter status={FiilterStatus.DONE} isActive />
        <Filter status={FiilterStatus.PENDING} isActive={false} />
      </View>
    </View>
  );
}
