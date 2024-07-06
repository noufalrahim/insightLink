import { ScrollView, Text, View } from "react-native";
import HeaderBar from "../../../components/HeaderBar";
import { useAppContext } from "../../../context/AppContext";
import GroupBox from "../../../components/Inbox/GroupBox";
import Search from "../../../components/Search";
import FabIcon from "../../../components/Buttons/FAB";

interface GroupsScreenProps {
    navigation: any;
}

export default function GroupsScreen({ navigation }: GroupsScreenProps) {
    const {groupsData: appData, setData: setAppData} = useAppContext();
    return (
        <>
            <HeaderBar showBackBtn={false} title="Groups" navigation={navigation} />
            <View style={{
                padding: 10,
                backgroundColor: 'white'
            }}>
                <Search value={''} setValue={() => { }} icon='magnify' placeholder='Search Groups' />
            </View>
            <ScrollView
            style={{
                backgroundColor: 'white'
            }}
            >
                {
                    appData.map((item, index) => (
                        <GroupBox key={index} navigation={navigation} data={item} setData={setAppData}/>
                    ))
                }
            </ScrollView>
            <FabIcon icon={'plus'} navigation={navigation} onPress={() => {
                console.log('Pressed add')
            }}/>
        </>
    )
}