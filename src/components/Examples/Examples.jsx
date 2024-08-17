import TabButton from "../TabButton"
import { EXAMPLES } from "../../data"
import {Tabs} from "../Tabs";
export const Examples = ({handleClick,selectTopic}) => {

    return(
    <>
    <h2>Examples</h2>
    <Tabs buttonsContainer="menu" buttons={<> <TabButton isSelected={selectTopic == "components"} click={()=>handleClick('components')}>Components</TabButton>
        <TabButton isSelected={selectTopic == "jsx"} click={()=>handleClick('jsx')}>JSX</TabButton>
        <TabButton  isSelected={selectTopic == "props"} click={()=>handleClick('props')}>Props</TabButton>
        <TabButton isSelected={selectTopic == "state"} click={()=>handleClick('state')}>State</TabButton></>}>
    </Tabs>

    {!selectTopic && <p>Please select a topic</p>}
    {selectTopic && (
    <div id="tab-content">
    <h3>{EXAMPLES[selectTopic].title}</h3>
    <p>{EXAMPLES[selectTopic].description}</p>
    <pre>
    {EXAMPLES[selectTopic].code}
    </pre>
  </div>
    )}
    </>
    )
}