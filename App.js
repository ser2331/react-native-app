import React, {useState} from "react";
import {StyleSheet, View} from 'react-native';
import Navbar from "./src/navbar";
import AddTodo from "./src/add-todo";
import Todo from "./src/todo";

export default function App() {
    const [todos, setTodos] = useState([]);
    const addTodo = (title) => {
        const newTodo = {
            id: Date.now().toString(),
            date: new Date(),
            title,
        };

        setTodos((prefTodos) => [
            ...prefTodos,
            newTodo,
        ]);
    };

    return (
        <View>
            <Navbar title={'Todo List'}/>
            <View style={styles.container}>
                <AddTodo addTodo={addTodo}/>
            </View>
            <View>
                {
                    todos.map(({id, title, date}) =>
                        <Todo  title={title} id={id} date={date} key={id}/>
                    )
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
});
