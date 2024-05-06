import CommonInput from "../Components/CommonInput/CommonInput";
import CommonPhoneInput from "../Components/CommonPhoneInput/CommonPhoneInput";
import CommonRadio from "../Components/CommonRadio/CommonRadio";
import CommonSelect from "../Components/CommonSelect/CommonSelect";
import CommonUpload from "../Components/CommonUpload/CommonUpload";

export default function ({ choice, data, store }) {
  switch (choice) {
    case "input":
      return <CommonInput data={data} store={store} />;
    case "phoneInput":
      return <CommonPhoneInput data={data} store={store} />;

    case "radioButton":
      return <CommonRadio data={data} store={store} />;

    case "dropdown":
      return <CommonSelect data={data} store={store} />;

    case "upload":
      return <CommonUpload data={data} store={store} />;

    default:
      return "wrong compoenent selected";
  }
}
