import { useEffect, useState } from "react";
import useBreedList from "../hooks/useBreedList";
import Results from "./Results.jsx";

const animals = ["bird", "cat", "dog", "rabbit", "reptile"];

function SearchParams() {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const [breeds] = useBreedList(animal);

    useEffect(() => {
        requestPets().catch(() => {});
    }, []);

    async function requestPets() {
        const response = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );

        const data = await response.json();
        setPets(data.pets);
    }

    function handleSubmit(event) {
        event.preventDefault();
        requestPets().catch(() => {});
    }

    return (
        <div className="search-params">
            <form onSubmit={handleSubmit}>
                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    id="location"
                    value={location}
                    placeholder="location"
                    onChange={(event) => {
                        setLocation(event.target.value);
                    }}
                />

                <label htmlFor="animal">Animal</label>
                <select
                    id="animal"
                    value={animal}
                    onChange={(event) => {
                        setAnimal(event.target.value);
                    }}
                    onBlur={(event) => {
                        setAnimal(event.target.value);
                    }}
                >
                    <option />
                    {animals.map((animal) => (
                        <option value={animal} key={animal}>
                            {animal}
                        </option>
                    ))}
                </select>

                <label htmlFor="breed">Breed</label>
                <select
                    id="breed"
                    disabled={!breeds.length}
                    value={breed}
                    onChange={(event) => {
                        setBreed(event.target.value);
                    }}
                    onBlur={(event) => {
                        setBreed(event.target.value);
                    }}
                >
                    <option />
                    {breeds.map((breed) => (
                        <option value={breed} key={breed}>
                            {breed}
                        </option>
                    ))}
                </select>

                <button type="submit">Submit</button>
            </form>

            <Results pets={pets} />
        </div>
    );
}

export default SearchParams;
