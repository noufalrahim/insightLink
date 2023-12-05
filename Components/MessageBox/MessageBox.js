import { Text, View, StyleSheet } from 'react-native';
import TickMark from '../Tick/Tick';
import { useEffect, useState } from 'react';
function MessageBox({ flexposition, color, ...props }) {
    const [showName, setShowName] = useState(false);
    useEffect(() => {
        if (props.mode === 'group') {
            setShowName(true);
        }
    }, [])
    return (
        <View style={[styles.messageBox,
        {
            backgroundColor: `${color}`,
            alignSelf: `${flexposition}`,
        },
        flexposition === 'flex-end' ? {
            borderTopLeftRadius: 10,
        } : {
            borderTopRightRadius: 10,
        },
        flexposition === 'flex-end' && props.mode === 'group' ? {
            borderTopRightRadius: 10,
            borderBottomRightRadius: 0,
        } :
        flexposition === 'flex-start' && props.mode === 'group' ? {
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 0,
        } : 
        flexposition === 'flex-end' && props.mode !== 'group' ? {
            borderBottomRightRadius: 10,
        } :
        flexposition === 'flex-start' && props.mode !== 'group' ? {
            borderBottomLeftRadius: 10,
        } :
        {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
        }
        ]}>
            {showName && (<View style={styles.nameContainer}>
                <Text style={[styles.name, {color: `${props.textColor.color}`}]}>{props.senderName}</Text>
            </View>
            )}
            <View style={styles.horizontal}>
                <Text style={[styles.messageText, {
                    color: `${props.textColor.color}`
                }]}>{props.message}</Text>
                <Text style={styles.time}>{props.time}</Text>
                <View style={styles.tick}>
                    <TickMark color={"grey"} />
                </View>
            </View>
        </View>
    )
}

export default MessageBox;

const styles = StyleSheet.create({
    messageBox: {
        marginLeft: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginRight: 10,
        padding: 10,
        marginTop: 5,
        maxWidth: '80%',
    },
    time: {
        fontSize: 10,
        color: 'gray',
        alignSelf: 'flex-end',
        marginTop: 5,
        marginLeft: 5,

    },
    messageText: {
        fontSize: 16,
        color: 'black',
        alignSelf: 'flex-start',
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        maxWidth: '80%',
    },
    tick: {
        alignSelf: 'flex-end',
        marginTop: 5,
        marginLeft: 5
    },
    horizontal: {
        flexDirection: 'row',
    },
    nameContainer: {
        marginLeft: 5,
        marginBottom: 5,
    },
    name: {
        fontSize: 15,
    }
})