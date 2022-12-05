import { Text, View, Button, FlatList } from "react-native";
import RadioForm from "react-native-simple-radio-button";
import { useState } from "react";
import styles from "./styledComponent";

const radioButtonsData = [
  {
    id: "1",
    label: "On Bill Due Date",
    value: "On Bill Due Date",
    selected: true,
  },
  {
    id: "2",
    label: "Every Day",
    value: "Every Day",
    selected: false,
  },
  {
    id: "3",
    label: "Weekly",
    value: "Weekly",
    selected: false,
  },
  {
    id: "4",
    label: "Monthly",
    value: "Monthly",
    selected: false,
  },
];
const tabs = [
  { tabId: "5", tabName: "Every Week" },
  { tabId: "6", tabName: "Monthly" },
];

const weeks = [
  { weekName: "Sun", weekId: "7" },
  { weekName: "Mon", weekId: "8" },
  { weekName: "Tue", weekId: "9" },
  { weekName: "Wed", weekId: "10" },
  { weekName: "Thu", weekId: "11" },
  { weekName: "Fri", weekId: "12" },
  { weekName: "Sat", weekId: "13" },
];
const Login = () => {
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  const [selectedTab, setSelectedTab] = useState(tabs[0].tabName);
  const [selectedWeek, setSelectedWeek] = useState(weeks[0].weekName);
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.textHeading}>Create Reminder</Text>
        <Text style={styles.textPara}>
          Loream Ipsum Dolor Sit Amet, Consetetur Sadipscing
        </Text>
        <Text style={styles.textPara2}>Step 02: Set Reminder Frequently</Text>
      </View>
      <View style={styles.container3}>
        <Text style={styles.textParaa}>1. Set Reminder Frequency</Text>

        <RadioForm
          radio_props={radioButtons}
          formHorizontal={false}
          labelHorizontal={true}
          buttonColor={"#2196f3"}
          animation={true}
          labelColor={"#ffffff"}
          onPress={(e) => console.log(e)}
          color={"green"}
        />
      </View>
      <View style={styles.container4}>
        <FlatList
          data={tabs}
          keyExtractor={(item) => item.tabId}
          horizontal={true}
          renderItem={({ item }) => {
            const color = item.tabName === selectedTab ? "#ffffff" : "grey";
            return (
              <Text
                style={{ color: `${color}`, marginRight: 10 }}
                onPress={() => {}}
              >
                {item.tabName}
              </Text>
            );
          }}
        />
      </View>
      <View style={styles.container5}>
        <FlatList
          data={weeks}
          horizontal={true}
          keyExtractor={(item) => item.weekId}
          renderItem={({ item }) => {
            const color = item.weekName === selectedWeek ? "#ffffff" : "grey";
            return (
              <Text style={{ color: `${color}`, marginRight: 10 }}>
                {item.weekName}
              </Text>
            );
          }}
        />
      </View>
      <Text style={styles.textParaa}>2. Select Reminders Method</Text>

      <Text style={styles.textPara}>
        An SMS will be sent every week on Sun & Fri
      </Text>
      <Button
        onPress={() => {}}
        title="Next"
        color="#38aae2"
        width="100%"
        style={styles.buttonEl}
      />
    </View>
  );
};
export default Login;
