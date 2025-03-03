function Rendering() {
    const Create = [
        { id: 1, name: "miso", food: "soup", age: 5 },
        { id: 2, name: "tamago", food: "eggs", age: 3 },
        { id: 3, name: "sushi", food: "rice", age: 2 }
    ];

    return (
        <div>
            <h1>Food Lists</h1>
            <ul>
               {Create.map((item)=> (
                <li key={item.id}>{item.name} is nice and he also loves this {item.food}</li>
               ))}
                
            </ul>
        </div>
    );
}

export default Rendering;