import { View, ScrollView } from 'react-native'
import React from 'react'
import UserBox from '../../../components/Inbox/UserBox'
import HeaderBar from '../../../components/HeaderBar'
import FabIcon from '../../../components/Buttons/FAB';
import { useAppContext } from '../../../context/AppContext';
import Stories from '../../../components/Stories';
import Search from '../../../components/Search';
import { AuthUser } from '../../../constants/AppConstant';
import getData from '../../../api/Data/getData';

interface InboxScreenProps {
  navigation: any;
}

export default function PeopleScreen({ navigation }: InboxScreenProps) {
  const { peopleData: appData, setData: setAppData } = useAppContext();
  const headerIcons = [{}];

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white'
        }}
      >
        <HeaderBar showBackBtn={false} title="Peoples" navigation={navigation} />
        <View style={{
          padding: 10,
          backgroundColor: 'white'
        }}>
          <Search value={''} setValue={() => { }} icon='magnify' placeholder='Search Peoples' />
        </View>

        {/* <View
          style={{
            backgroundColor: 'white',
            padding: 10,
            marginVertical: 5,
          }}
        >
          <Stories navigation={navigation} data={appData} />
        </View> */}
        <ScrollView
          style={{
            backgroundColor: 'white'
          }}
        >
          {
            appData.map((item, index) => (
              item.sender.userName !== AuthUser.userName && (
                <UserBox
                  key={index}
                  navigation={navigation}
                  data={item}
                  setData={setAppData}
                  navigationDestination='Chat'
                />
              )

            ))
          }
        </ScrollView>
        <FabIcon icon={'magnify'} navigation={navigation} onPress={() => {
          navigation.navigate('SearchScreen')
        }} />
      </View>
    </>
  )
}