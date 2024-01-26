import List from "./components/List"
import ListGroup from "./components/ListGroup"
import Management from "./components/Management"

function App(){

    const languages = ['Javascript', "Java", "C++", "Python", "PHP"];
    const footballers = ['Messi', "Marcus", "Jude"]

    return(
        <>
            <ListGroup/>
            <Management/>
            <List title="programming Languages" list={languages}/>
            <List title="Footballers" list={footballers} />

        </>
    )
};

export default App