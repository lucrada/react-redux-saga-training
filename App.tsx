/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { testAction } from './actions';

function App(): React.JSX.Element {
  const dispatch = useDispatch();
  const testState = useSelector((state) => state.test);

  const [display, setDisplay] = React.useState('none');
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button onPress={() => {
        setDisplay('flex');
        dispatch(testAction());
      }} title="Fetch users list" />
      {testState.users.length === 0 ? <Text style={{display}}>Loading...</Text> : testState.users.map(item => <Text key={item.id}>{ item.name}</Text>)}
    </View>
  );
}

export default App;
