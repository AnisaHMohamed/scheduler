import React from "react";

import axios from "axios"

import { getByText } from "@testing-library/react";





import { render, cleanup, waitForElement, fireEvent, prettyDOM, getAllByTestId, getByAltText, getByPlaceholderText, queryByText} from "@testing-library/react";

import Application from "components/Application";

afterEach(cleanup);

describe("Application", () => {

// it("defaults to Monday and changes the schedule when a new day is selected", async () => {
//   const { getByText } = render(<Application />);
//   await waitForElement(() => getByText("Monday"));
//   fireEvent.click(getByText("Tuesday"));
//   expect(getByText("Leopold Silvers")).toBeInTheDocument();
// })

// it("loads data, books an interview and reduces the spots remaining for Monday by 1", () => {
//   const { container } = render(<Application />);
//   console.log(prettyDOM(container));
// });

// it("loads data, books an interview and reduces the spots remaining for Monday by 1", async () => {
//   const { container } = render(<Application />);

//   await waitForElement(() => getByText(container, "Archie Cohen"));

//   console.log(prettyDOM(container));
// });

// it("loads data, books an interview and reduces the spots remaining for Monday by 1", async () => {
//   const { container } = render(<Application />);

//   await waitForElement(() => getByText(container, "Archie Cohen"));

//   console.log(prettyDOM(container));
// });

// it ("returns all test id's in the container", async () => {
//   const { container } = render(<Application />);
//   await waitForElement(() => {
//     const appointments = getAllByTestId(container, "appointment");
//     console.log('APPOINTMENTS', prettyDOM(appointments));
//     return appointments
//   })
// })
// it ("all appointment test_ids", async () => {
//   const { container } = render(<Application />);
//   await waitForElement(()=>{ 
//   const appointments = getAllByTestId(container, "appointment")[0];
//   console.log(prettyDOM(appointments));
//   return appointments


// })
  
// })


// it("loads data, books an interview and reduces the spots remaining for Monday by 1", async () => {
//   const { container, debug } = render(<Application />);

//   await waitForElement(() => getByText(container, "Archie Cohen"));

//   const appointments = getAllByTestId(container, "appointment");
//   const appointment = appointments[0];

//   fireEvent.click(getByAltText(appointment, "Add"));

//   fireEvent.change(getByPlaceholderText(appointment, /enter student name/i), {
//     target: { value: "Lydia Miller-Jones" }
//   });
//   fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));

//   fireEvent.click(getByText(appointment, "Save"));
//   expect(getByText(appointment, "Saving")).toBeInTheDocument();
//   await waitForElement(() => queryByText(appointment, "Lydia Miller-Jones"));

//   console.log(prettyDOM(appointment));

// });

it("loads data, books an interview and reduces the spots remaining for Monday by 1", async () => {
  const { container, debug } = render(<Application />);

  await waitForElement(() => getByText(container, "Archie Cohen"));

  const appointments = getAllByTestId(container, "appointment");
  const appointment = appointments[0];

  fireEvent.click(getByAltText(appointment, "Add"));

  fireEvent.change(getByPlaceholderText(appointment, /enter student name/i), {
    target: { value: "Lydia Miller-Jones" }
  });
  fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));

  fireEvent.click(getByText(appointment, "Save"));
  expect(getByText(appointment, "Saving")).toBeInTheDocument();
  await waitForElement(() => queryByText(appointment, "Lydia Miller-Jones"));

  // console.log(prettyDOM(appointment));

  const day = getAllByTestId(container, "day").find(day =>
    queryByText(day, "Monday")
  );
  
  console.log(prettyDOM(day));
  getByText(day, 'no spots remaining')
});

  // it("get all day test_id", async () => {
  //   const { container }= render(<Application />)

  //   await waitForElement( () => {
  //     console.log('CONTAINER', prettyDOM(container));
  //     const day = getAllByTestId(container, "day").find(blahDay =>
  //       queryByText(blahDay, "Monday")
  //     )
      
  //     console.log('DAY', prettyDOM(day));
  //   }
      
  //   )
  // })
})



