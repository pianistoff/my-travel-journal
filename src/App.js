import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

export default function App() {
    const cards = data.map((card) => <Card key={card.id} {...card} />);
    return (
        <div className="app">
            <Header />
            <div className="card-list">{cards}</div>
        </div>
    );
}
