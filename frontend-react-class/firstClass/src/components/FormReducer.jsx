import React, { useReducer } from "react";

const initialFormState = {
  username: "",
  email: "",
  password: "",
  hasConsented: false,
};

function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET_FORM":
      return initialFormState;
    case "TOGGLE_CONSENT":
      return { ...state, hasConsented: !state.hasConsented };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export default function FormReducer() {
  const [formData, dispatch] = useReducer(formReducer, initialFormState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    dispatch({
      type: "UPDATE_FIELD",
      field: name,
      value: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    dispatch({ type: "RESET_FORM" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg space-y-4"
    >
      <h2 className="text-2xl font-bold text-center">Register</h2>

      <div>
        <label htmlFor="username" className="block font-semibold mb-1">
          Username:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-semibold mb-1">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="password" className="block font-semibold mb-1">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="hasConsented"
          name="hasConsented"
          checked={formData.hasConsented}
          onChange={() => dispatch({ type: "TOGGLE_CONSENT" })}
          className="w-4 h-4"
        />
        <label htmlFor="hasConsented" className="text-sm cursor-pointer font-medium">
          I agree to the terms & conditions
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-bold transition"
      >
        Register
      </button>
    </form>
  );
}
