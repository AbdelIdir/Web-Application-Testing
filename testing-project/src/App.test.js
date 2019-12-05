import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import * as rtl from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';


afterEach(rtl.cleanup)
// beforeEach, beforeAll, afterAll

it('shows that the word is present ', () => {
  // step 3 - mount the component we want to test
  const wrapper = rtl.render(<App />)
  // step 4 - capture the element of interest BY "READABLE" PROPERTY
  // we normally care about the readable text
  // or the aria attributes (screen readers)
  const learnReactElement = wrapper.queryByText(/balls/i)
  // step 5 - assert that the element is there
  expect(learnReactElement).toBeInTheDocument()
});
