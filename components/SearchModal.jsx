import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import Close from '../assets/close.svg'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SearchModal = ({ setModalActive }) => {
    const sortProducts = useSelector(state => state.sortProducts)

    return (
        <View style={styles.container} >
            <View style={styles.centeredComponent} >
                <View style={styles.modal}>
                    <View style={styles.headerBox}>
                        <Text style={styles.headerText}>Mis invitados</Text>
                        <TouchableOpacity onPress={() => setModalActive(false)} >
                            <Close />
                        </TouchableOpacity>
                    </View>
                    <ScrollView>
                        {
                            sortProducts?.map(e => (
                                <Text>{e.title}</Text>
                                /*  <GuestCard key={e.id} id={e.id} name={e.name} img={e.img} /> */
                            ))
                        }
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',

    },
    centeredComponent: {
        justifyContent: 'center',
    },
    modal: {
        width: wp('90%'),
        height: hp('50%'),
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        gap: 5,

    },
    headerBox: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerText: {
    },
});

//make this component available to the app
export default SearchModal;
