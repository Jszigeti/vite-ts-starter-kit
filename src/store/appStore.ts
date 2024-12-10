import { Store } from "@tanstack/store";

// Define the structure of the app state here
// This serves as a template for how to organize your global state in the application.
export const appStore = new Store({
  // 'user' could represent the authenticated user's data, initialized as null
  user: null, // Start with 'null' until the user data is fetched
  isAuthenticated: false, // A flag to track whether the user is authenticated
  // You can add more properties to the state depending on your needs (e.g., settings, theme, etc.)
});

// Example of how to use the store in a component:
// import { useStore } from "@tanstack/react-store";

// 1. How to access data from the store
// The `useStore` hook allows you to access specific parts of the state.
// const UserProfile = () => {
//   const user = useStore(appStore, (state) => state.user);

//   return (
//     <div>
//       {/* Render the user data if available */}
//       {user ? <h1>Welcome, {user.name}</h1> : <h1>Loading user data...</h1>}
//     </div>
//   );
// };

// 2. How to update data in the store
// Use `setState` to update specific parts of the global state.
// const UpdateUserButton = () => {
//   const updateUser = () => {
//     appStore.setState((state) => ({
//       ...state,
//       user: { name: "John Doe", age: 30 },
//       isAuthenticated: true, // Update the authentication status when user data is set
//     }));
//   };

//   return <button onClick={updateUser}>Update User</button>;
// };
