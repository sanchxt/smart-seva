import { useSelector } from "react-redux";
import SidebarItems from "../components/SidebarItems";
import PostPrescription from "../components/PostPrescription";

const UploadPrescription = () => {
  const { currentUser } = useSelector((state: any) => state.user);

  return (
    <div className="flex flex-row">
      <SidebarItems activeClass="upload" />
      <div className="flex flex-col mx-auto">
        <PostPrescription />

        <div>
          {currentUser.currentPrescription !== "" ? (
            <div>hey</div>
          ) : (
            <div>Bye</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadPrescription;
