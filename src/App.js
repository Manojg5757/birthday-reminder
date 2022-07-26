import "./style.css"
import Card from "./components/Card";
import contacts from "./components/contacts"
import "./App.css"

export default function App() {
  return (
    <div className="App">
      {contacts.map((contact) => {
        return (
          <Card 
          key={contact.id} 
          name={contact.name} 
          img={contact.imageURL}
          dob={contact.DOB}
          />
        );
      })}
    </div>
  );
}
