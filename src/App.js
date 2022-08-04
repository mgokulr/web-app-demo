import AddName from "./components/AddName";
import EditName from "./components/EditName";
import NameView from "./components/NameView";
import { NameProvider, useName } from "./context/NameContext";

function App() {
  return (
    <div class="flex w-screen h-screen">
       <NameProvider>
        <AddName/>
        <NameView/>
        {/* {(editModal)?<EditName/>:<></>} */}
        </NameProvider>
    </div>
  );
}

export default App;
