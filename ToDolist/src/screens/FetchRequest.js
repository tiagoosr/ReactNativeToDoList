import React from 'react';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';
import axios from 'axios';


import tarefasServices from '../services/tarefasServices';

export default class FetchRequest extends React.Component {

    constructor(props) {
        super(props);
        this.state = { tarefas: [] }
    }

    componentDidMount() {
        // setTimeout(this.setState, 1000)
        axios.get(tarefasServices.getTarefa())
            .then(response => {
                console.log("tarefas:", response.data);
                this.setState({ tarefas: response.data })
            })
            .catch(error => {
                console.log("Não foi possível buscar as tarefas:", error);
            });

        // axios.post("https://tarefas-test.herokuapp.com/tarefas",
        //     // tarefas,
        //     {
        //         // "finalizada": false,
        //         "nome": "eriveltom",
        //         "descricao": "lindo",
        //         "date": "2020-02-08T21:53:00.45",
        //         "icone": 0,
                
        //     })
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }


    render() {

        return (
            <View>

                {(this.state.tarefas.length === 0) && <ActivityIndicator></ActivityIndicator>}
                <FlatList
                    data={this.state.tarefas}
                    renderItem={({ item }) => <Tarefa descricao={item.descricao} />}
                    // renderItem={(value)=>console.log(value)}
                    keyExtractor={(item, index) => item.id.toString()}
                />
            </View>

        );
    }
}


const Tarefa = (props) => {

    return (
        <View style={{ backgroundColor: 'red', alignItems: 'center', }}>
            <Text style={{ color: 'green', fontSize: 50 }}>{props.descricao}</Text>
        </View>
    )
}
