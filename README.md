# User Management Application
This is a user management application developed using React and Material UI. The application adheres to the principles of 'Clean Architecture' which ensures a scalable and maintainable code base. It is structured around the MVVM (Model-View-ViewModel) architectural model.

<br>

**Live:** [User Management App with Netlify](https://www.example.com)

<br>

## 1. Interface
![Screenshot-1](docs\images\screenshot-1.png)

<br>

## 2. Description
People are listed by role (or all of them) in a one-page interface. The user can make this switch with tabs in the `Navbar`. It also has a search input that can dynamically update the list by keyword (search by username or e-mail). Programmed to maximize the user experience, the user has the flexibility to add a new person or update an existing person's information. In both cases, `Feedback` is provided in the bottom left corner of the screen, informing the user about the result of their action. Existing people can also be deleted individually or selectively multiple. In case of multiple deletions, the `DeleteModal` opens. In any case, a maximum of 10 contacts are displayed in the interface. If there are more than 10 records as a result of the search or selected tabs, the user can view them with the help of `Pagination`.

On the React side, state management is provided using the Context API. This approach aims to minimize the need for "prop drilling" by distributing shared state across components.

<br>

## 3. Features
- User-friendly interface
- Elegant design
- Be able to add new contacts
- Filterable contacts
- Username-based validation
- Multiple deletions
- Editable contact information
- Paginable layout

<br>

## 4. Foldering and Code Structure
This application is developed following the MVVM (Model-View-ViewModel) architecture. In this context, MVVM separates the user interface(UI) into three core components: 

- Model: Represents data and business logic.
- View: Represents the UI (User Interface).
- ViewModel: Acts as a bridge between the Model and View, handling UI-specific logic and data binding.

1. Model includes:
    1. `User.js`: A data model for each 'user' in the `db.json` file that simulates the database.
    2. `data\db.json`: Contact data in JSON format simulating a database.

<br>

2. ViewModels includes:
    1. `Modals`
        1. `DeleteModal`: Logic of the modal that gets confirmation from the user for multiple deletions.
        2. `EditModal`: The logic of the `UserForm` modal to update people's information.
        3. `FeedbackModal`: The logic of the component that gives an alert according to whether the operation is "successful" or "unsuccessful" as a result of "username" validation when adding a new contact or updating contact information.
        4. `UserForm`: The logic of the form modal that opens when the "Add New User" button is clicked. Contains the logic for adding a new person.


    2. `UserDatatable`
        1. `NavbarViewModel`: The logic of the `Navbar` component in `View`. This logic updates the `activeTab` state in the container component `Interface.jsx` to list by tabs.
        2. `SearchBarViewModel`: The logic of the search input. This logic interacts with the container component `Interface.jsx` for dynamic person listing.
        3. `UserTableViewModel`: Important component that *almost* shares the main application logic with `Interface.jsx`, contains the logic of the `UserTable` component and `Pagination`, interacts with `Edit` and `Delete` modals.

<br>

3. Context includes:
    1. `UserContext.jsx`: For state management.

<br>

4. Hooks includes:
    1. `useData.jsx`: For sharing state.

<br>

5. utils includes:
    1. `checkFormData.js`: In order to identify people on React and to make the application realistic, the elements of the `Users` array must have a unique property. In the context of this application, this property is 'id' representing the username. This function checks whether the username has already been taken on new saves and update operations. 

<br>

## 5. Concerns

*Including the full library in development bundles can slow startup times, particularly with "named imports" from @mui/icons-material, which can be up to six times slower than "default imports".*

This paragraph is a warning from Material UI's official site. Therefore, in the application, all Material UI imports are done using "default imports". If you would like to review: [https://mui.com/material-ui/guides/minimizing-bundle-size](https://mui.com/material-ui/guides/minimizing-bundle-size)

<br>

## 6. Other screenshots
![Screenshot-2](docs\images\screenshot-2.png)

<br>

![Screenshot-3](docs\images\screenshot-3.png)

<br>

![Screenshot-4](docs\images\screenshot-4.png)

<br>

![Screenshot-5](docs\images\screenshot-5.png)