import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Keyboard,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Lista de Tarefas' }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detalhe Tarefa' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');
  const taskInputRef = useRef(null);

  const addTask = () => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, { id: tasks.length.toString(), title: taskText }]);
      setTaskText('');
      taskInputRef.current.clear(); // Limpa o texto no input
      Keyboard.dismiss(); // Fecha o teclado
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={taskInputRef}
        style={styles.input}
        placeholder="Digite uma tarefa"
        onChangeText={(text) => setTaskText(text)}
        onSubmitEditing={addTask} // Adiciona esta linha
      />
      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Text style={styles.addButtonText}>Adicionar Tarefa</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.taskItem}
            onPress={() => navigation.navigate('Detail', { title: item.title })}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const DetailScreen = ({ route }) => {
  const { title } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.detailText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  addButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  taskItem: {
    padding: 10,
    backgroundColor: 'lightblue',
    margin: 5,
    borderRadius: 5,
  },
  detailText: {
    fontSize: 20,
  },
});
