import React from "react";
import {View, StyleSheet, Text } from "react-native";

const Todo = ({title, date}) => {
    return (
        <View style={styles.todo}>
            <Text style={styles.title}>
                {title}
            </Text>
            <View style={styles.date}>
                <Text style={styles.textDate}>
                    {date.toDateString()}
                </Text>
            </View>

        </View>
    );
};

export default Todo;

const styles = StyleSheet.create({
    todo: {
        padding: 15,
        borderWidth: 3,
        borderColor: '#eee',
        borderRadius: 50,
    },

    title: {
        fontSize: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },

    date: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    textDate: {
        fontSize: 8,
    }
});