import { useState } from "react";

function App() {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
  })
  const [checked, setChecked] = useState({
    interest1: false,
    interest2: false,
    interest3: false,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)


  function handleTextBoxChange(event) {
    setContactInfo({
      ...contactInfo,
      [event.target.id]: event.target.value,
    })
  }

  function handleCheckboxChange(event) {
    setChecked({
      ...checked,
      [event.target.id]: !checked[event.target.id],
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(!isSubmitted)
  }
  
  return (
    <main>
      <h1>Hi, I'm Tonny</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input 
            type="text"
            value={contactInfo.name}
            id="name"
            placeholder="name"
            onChange={handleTextBoxChange}
          />
          <label htmlFor="email">Email:</label>
          <input 
            type="text"
            value={contactInfo.email}
            id="email"
            placeholder="email"
            onChange={handleTextBoxChange}
          />
        </div>
        <div>
          <label htmlFor="interest1">interest one</label>
          <input 
            type="checkbox"
            id="interest1"
            checked={checked.interest1}
            aria-checked={checked.interest1}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="interest2">interest two</label>
          <input 
            type="checkbox"
            id="interest2"
            checked={checked.interest2}
            aria-checked={checked.interest2}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="interest3">interest three</label>
          <input 
            type="checkbox"
            id="interest3"
            checked={checked.interest3}
            aria-checked={checked.interest3}
            onChange={handleCheckboxChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {isSubmitted ? <h2>Hey {contactInfo.name}, your form has been submitted!</h2> : null}
    </main>
  );
}

export default App;