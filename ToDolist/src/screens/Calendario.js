import React from 'react';
import { StyleSheet, View, Image, } from 'react-native';
import styleGlobal from '../css/styleGlobal';
import BotaoVoltarMenuPrincipal from '../components/BotaoVoltarMenuPrincipal';
import { ImageBackground } from 'react-native';

import Lista from '../components/Lista';

class Calendario extends React.Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = () => {
        return {
            title: 'TODO',

        }
    }
    VoltarMenuPrincipal = () => {
        this.props.navigation.goBack();
    }
    render() {
        return (
            <ImageBackground source={require('../images/background.png')} style={{ width: '100%', height: '100%' }}>
                <View style={styleGlobal.container} >

                    {/* <View style={{ paddingTop: 80 }}>
                        <Lista tarefas={this.state.tarefas} />
                    </View> */}

                    <View style={styles.ViewBotoes}>
                        <BotaoVoltarMenuPrincipal click={this.VoltarMenuPrincipal} />
                    </View>

                </View>
            </ImageBackground>
        );
    }
}
export default Calendario;
const styles = StyleSheet.create({
    ViewBotoes: {
        position: 'absolute',
        bottom: 30,
        minWidth: "100%",
        justifyContent: "space-evenly",
        alignItems: "flex-end",
        flexDirection: "row"
    }
});