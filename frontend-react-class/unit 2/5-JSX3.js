
// 1. Basic JSX element
const Example1 = () => <h1>Hello, world!</h1>;

// 2. JSX with a variable
const name = "Alice";
const Example2 = () => <p>Hello, {name}!</p>;

// 3. JSX with an expression
const Example3 = () => <p>2 + 2 = {2 + 2}</p>;

// 4. JSX with attributes
const Example4 = () => <img src="https://via.placeholder.com/100" alt="Placeholder" />;

// 5. JSX with inline styles
const Example5 = () => <div style={{ color: 'blue', fontWeight: 'bold' }}>Styled Text</div>;

// 6. JSX with conditional rendering
const isLoggedIn = true;
const Example6 = () => (
    <div>
        {isLoggedIn ? <span>Welcome back!</span> : <span>Please log in.</span>}
    </div>
);

// 7. JSX with array mapping
const items = ['Apple', 'Banana', 'Cherry'];
const Example7 = () => (
    <ul>
        {items.map(item => <li key={item}>{item}</li>)}
    </ul>
);

// 8. JSX with fragments
const Example8 = () => (
    <>
        <h2>Title</h2>
        <p>Description goes here.</p>
    </>
);

// 9. JSX with event handling
const Example9 = () => (
    <button onClick={() => alert('Button clicked!')}>Click Me</button>
);

// 10. JSX with custom components and props
const Greeting = ({ name }) => <span>Hello, {name}!</span>;
const Example10 = () => <Greeting name="Bob" />;

// Export all examples for demonstration
export {
    Example1,
    Example2,
    Example3,
    Example4,
    Example5,
    Example6,
    Example7,
    Example8,
    Example9,
    Example10
};


