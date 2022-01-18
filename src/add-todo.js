import React, {useState} from "react";
import {StyleSheet, TextInput, Button, View} from 'react-native';

const AddTodo = ({addTodo}) => {
    const [newText, setText] = useState('');
    const pressHandler = () => {
        addTodo(newText);
        setText('');
    }
    return (
        <View style={styles.addTodo}>
            <TextInput
                style={styles.input}
                value={newText}
                onChangeText={setText}
                placeholder="Ввудите название дела..."
            />
            <Button style={styles.addButton} onPress={pressHandler} title="Добавить"/>
        </View>
    );
}

export default AddTodo;

const styles = StyleSheet.create({
    addTodo: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        width: '70%',
        borderBottomColor: '#000',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        padding: 5,
    },
    addButton: {
        width: '100%',
        borderColor: 'red',
        borderWidth: 2
    }
});
