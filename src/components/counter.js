import Counter from "react-native-counters";

export default class Counter extends React.Component {
    onChange(number, type) {
    console.log(number, type) // 1, + or -
  }
  
  render() {
    return (
      <Counter start={1} onChange={this.onChange.bind(this)} />
    )
  }
}