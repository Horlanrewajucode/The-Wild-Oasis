import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCabin from "../features/cabins/AddCabins";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>FIlter / Sort</p>
      </Row>
      <Row type="vertical">
        <CabinTable />
       <AddCabin/>
      </Row>
    </>
  );
}

export default Cabins;
