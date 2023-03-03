import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import ActionCard from './Components/ActionCard';
import ContactList from './Components/ContactList';
import ElevatedCard from './Components/ElevatedCard';
import FancyCard from './Components/FancyCard';
import FlatCards from './Components/FlatCards';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCard />
        <FancyCard />
        <ActionCard />
        <ContactList/>
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;
