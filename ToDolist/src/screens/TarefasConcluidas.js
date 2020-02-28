import React from 'react';
import { connect } from 'react-redux';
import tarefasServices from '../services/tarefasServices';
import { View, Text, Image, ScrollView, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import Lista from '../components/Lista';
import styleGlobal from '../css/styleGlobal';
import { ImageBackground } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { DrawerItems, DrawerActions } from 'react-navigation-drawer';
class TarefasConcluidas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            caixaDeSelecao: false,
            iconeFinalizada:true,
        };

    }

    componentDidMount() {
        // this.getListaDeTarefas();
    }

    tarefasFinalizadas = () => {
        const estaFinalizada = (tarefa) => {
            return tarefa.finalizada === true
        }
        let tarefasFinalizadass = this.state.tarefas.filter(estaFinalizada);
        this.setState({ tarefasFinalizadas: this.state.tarefasFinalizadas = tarefasFinalizadass })
    }

    render() {

        return (

            <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent', }}>

                <ImageBackground source={require('../images/background.png')} style={{ width: '100%', height: '100%', }}>

                    <View style={styleGlobal.container}>
                        <View style={{ width: '100%', flexDirection: 'row', paddingTop: 15, }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.closeDrawer()}
                                style={{
                                    height: 30,
                                    width: 30,
                                    marginLeft: 10,
                                    borderRadius: 100,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <View>
                                    <Image source={require('../images/icon/arrow-left.png')} />
                                </View>
                            </TouchableOpacity>
                            <View style={{ marginLeft: '15%', alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: 20, }}>Tarefas Concluídas</Text>
                            </View>
                        </View>

                        <View style={{ paddingTop: 35 }}>
                            <Lista
                                tarefas={this.props.tarefasFinalizadas}//está pegando o valor do mapStateToProps
                                click={this.abrirModalDeDescrição}
                                caixaDeSelecao={this.state.caixaDeSelecao}
                                iconeFinalizada={this.state.iconeFinalizada}
                            />
                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}

//função para ter acesso ao state do reducers
// essa função vai transformar meu state para props
const mapStateToProps = (state) => {
    return {
        tarefasFinalizadas: state.listaReducer.tarefasFinalizadas
    }
}
//função para mudar o valor da state do reducers
// essa função vai pegar o valor e vai despachar(dispath) vai o state do reducer
const mapDispathToProps = (dispath) => {
    return {
        setTarefasFinalizadas: (tarefasFinalizadas) => {
            dispath({ type: 'ESTA_FINALIZADA', payload: { tarefasFinalizadas } })
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(TarefasConcluidas);