import BottomBar from "./components/BottomBar/bottombar.component";
import FlowChart from "./components/Flowchart/flowchart.component";
import TopBar from "./components/TopBar/topbar.component";

const DegreeView = (): JSX.Element => {
    return <>
        <TopBar />
        <FlowChart />
        <BottomBar />
    </>    
};

export default DegreeView;