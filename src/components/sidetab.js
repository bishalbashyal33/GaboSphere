import Bottomtab from "./bottomtab";
import Channeltab from "./channeltab";
import Toptab from "./toptab";

function Sidetab(){

    return(
        <div className="absolute top-0 left-[56px] flex overflow-hidden scrollbar-hide w-[400px] h-screen bg-slate-500 text-white">
       <Toptab></Toptab>
       <Bottomtab/>
       <div className="flex flex-1 mb-64">
        <Channeltab/>
       </div>
        </div>

    );
}

export default Sidetab;