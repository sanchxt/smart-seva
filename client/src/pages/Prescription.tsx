import PrescriptionTable from "../components/PrescriptionTable";
import SidebarItems from "../components/SidebarItems";

const Prescription = () => {
  return (
    <div className="flex flex-row">
      <SidebarItems activeClass="prescription" />
      <PrescriptionTable />
    </div>
  );
};

export default Prescription;
