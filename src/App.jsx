import Assignment from "./components/Assignment";
import Form2 from "./components/Form2";
import List from "./components/List"
import ListGroup from "./components/ListGroup"
import Management from "./components/Management"

function App(){

    const languages = ['Javascript', "Java", "C++", "Python", "PHP"];
    const footballers = ['Messi', "Marcus", "Jude"]

    return(
        <>
            {/* <ListGroup/>
            <Management/>
            <List title="programming Languages" list={languages}/>
            <List title="Footballers" list={footballers} /> */}

            <Assignment/>

        </>
    )
};

export default App