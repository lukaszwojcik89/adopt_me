/**
 * @jest-environment jsdom
 */

import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import Pet from '../components/Pet.jsx'

test("displays a default thumbnail", async () => {
    const pet = render(<Pet />);

    const perThumbnail = await pet.findByTestId('thumbnail');
    expect(perThumbnail.src).toContain('none.jpg');
})