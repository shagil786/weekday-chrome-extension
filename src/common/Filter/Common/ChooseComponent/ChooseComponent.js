import InputBox from "../InputBox/InputBox";
import SingleSelect from "../SingleSelect/SingleSelect";

export default function ({ choice, data, store }) {
  switch (choice) {
    case "input":
      return <InputBox data={data} store={store} />;

    case "dropdown":
      return <SingleSelect data={data} store={store} />;

    default:
      return "wrong compoenent selected";
  }
}
