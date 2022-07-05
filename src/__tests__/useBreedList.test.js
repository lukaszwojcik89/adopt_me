/**
 * @jest-environment jsdom
 */

import { expect, test } from '@jest/globals';
import { renderHook } from "@testing-library/react";
import useBreedList from '../hooks/useBreedList.js';

// function getBreedList(animal){
//     let list;
    
//     function TestComponent() {
//         list = useBreedList(animal);
//         return null;
//     }
//     render(<TestComponent />);
//     return list;
// }


test("gives an empty list with no animal", async () => {
    const {result} = renderHook(() => useBreedList(""));

    const [breedList, status] = result.current;
    expect(breedList).toHaveLength(0);
    expect(status).toBe("unloaded");
    
})