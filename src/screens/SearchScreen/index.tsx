import { View, Text } from 'react-native'
import React from 'react'
import HeaderBar from '../../components/HeaderBar'
import Search from '../../components/Search'
import UserBox from '../../components/Inbox/UserBox'
import UserSuggestionsBox from '../../components/Inbox/UserSuggestionsBox'
import { useAppContext } from '../../context/AppContext'
import { AuthUser } from '../../constants/AppConstant'

interface SearchScreenProps {
  navigation: any;
}

export default function SearchScreen({ navigation }: SearchScreenProps) {
  const [value, setValue] = React.useState('' as string);
  const {
    peopleData: Data,
    setData: setPeopleData
  } = useAppContext();
  const [filterData, setFilterData] = React.useState(Data);

  React.useEffect(() => {
    if (value.length > 0) {
      const filteredData = Data.filter((item: any) => {
        const username =  item.sender.firstName.toLowerCase().includes(value.toLowerCase()) || item.sender.lastName.toLowerCase().includes(value.toLowerCase());
        if(AuthUser.userName != item.sender.userName) {
          return username;
        }
      });
      setFilterData(filteredData);
    } else {
      setFilterData([]);
    }
  }, [value]);

  
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white'
    }}>
      <HeaderBar
        title=""
        navigation={navigation}
        showBackBtn={true}
        elevated={false}
      />
      <View style={{
        width: '90%',
        alignSelf: 'center'
      }}>
        <Search
          value={value}
          setValue={setValue}
          icon='magnify'
          placeholder='Search'
          borderRadius={10}
        />
      </View>
      <View
        style={{
          width: '100%',
          alignSelf: 'center',
          marginTop: 20
        }}
      >
        {
          filterData.map((item, index) => (
            <UserSuggestionsBox key={index} navigation={navigation} data={item} setData={setPeopleData} />
          ))
        }
      </View>
    </View>
  )
}