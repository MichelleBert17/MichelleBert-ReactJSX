[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/_tvCaYuY)
# React and JSX Introduction

## Getting Started

- Run `npm install` to install dependencies
- Run `npm run dev` to start the dev server
- Open `http://localhost:5173` in a browser

### Important Files/Folders

- `src`: All javascript/jsx code goes in this directory
- `src/assets`: Any static assets such as images that are loaded through the javascript files goes here.
- `index.html`: This is the html file that appears when the dev server starts up.
- `src/app.jsx`: The is the main app component for the entire app.

### Important Commands

- `npm run dev`: Starts dev server with Hot Module Reloading on port 5173. Anytime a file changes, the changes will automatocally be reflected in the browser
- `npm run lint`: Run the lint checker with eslint to check for known linting issues
- `npm run build`: Outputs the production files into the `dist` folder

# Instructions

This project is broken up into 7 steps, from starting the project to deploying it in Netlify. Each step includes a screenshot of what your project should look like after completing the step. The images use Lorum Ipsum placeholder text, but you are expected to write out content as specified in the steps.

## Step 1 - Setup

- In the `src/main.jsx` file add the necessary react code to render the App component on the page.
- Use the correct method for React 19. Do not use the deprecated `ReactDOM.render()`

**When the task is complete the app should look like this:**
<img width="438" height="236" alt="task-0-complete" src="https://github.com/user-attachments/assets/a1ef2cc4-9fc6-405c-89bb-f7525f1f9bee" />

If the App component is not rendered correctly you will see “React not rendered”

## Step 2 - Site Header

**Greeting Component**
- Create a react component called Greeting. Store it in `src/components/Greeting.jsx`
- The greeting component should return an `h1` element with the class name `greeting`
- Inside the `h1` element render an image and some text that will change based on the time of day:
  - If it is between 6am and 11:59am render the `src/assets/day.svg` image and the text “Good Morning!”
  - If it is between 12pm and 4:59pm render the `src/assets/day.svg` image and the text “Good Afternoon!”
  - If it is between 5pm and 8:59pm render the `src/assets/evening.svg` image and the text “Good Evening!”
  - Any other time render the `src/assets/night.svg` and the text “Good Night!”
 
**Social Links Component**
- Create a react component called `SocialLinks`. Store it in `src/components/SocialLinks.jsx`
- The SocialLinks component should return a `div` element with the class name `social-links`
- Inside the `div` element render two links:
  - The first should render the `src/assets/linkedin.svg`. When clicked it should open your linked in profile **in another tab**.
  - The second should render the `src/assets/github.svg`. When clicked it should open your repository containing the code for this project **in another tab**.
 
**Header Component**
- Create a react component called `Header`. Store it in `src/components/Header.jsx`
- The Header component should return a `nav` element
- Inside the nav element render the `Greeting` element and the `SocialLinks` element.
- Add the `Header` element to the `App` component.

**When the task is complete the app should look like this:**
<img width="954" height="359" alt="task-1-complete" src="https://github.com/user-attachments/assets/e890bc60-3bf3-4942-8684-36a75bd617fc" />

## Step 3 - Sections

**Section Component**
- Create a react component called `Section`. Store it in `src/components/Section.jsx`
- Given the following JSX:
```
<Section title="foo">
Sed nec diam magna. Nam nec nisi id nisi cursus vehicula.
</Section>
```
The component should render with html:
```
<div class="section">
  <h1>foo</h1>
    Sed nec diam magna. Nam nec nisi id nisi cursus vehicula.
</div>
```

**What is react section**
- Add a section component to the `App` component
- The title prop of the section component should be “What is react?”
- Between the opening and closing section tags write a paragraph explaining react. (This is graded for correctness.)

**Benefits of react section**
- Add another section component to the `App` component
- The title prop of the section component should be “Benefits of react”
- Between the opening and closing section tags put an unordered list with 5 list items.
- Each list item should contain a benefit to using react. (This is graded for correctness)

**When the task is complete the app should look like this:**
<img width="934" height="568" alt="task-2-complete" src="https://github.com/user-attachments/assets/9f96fe95-6d7f-4930-b7c9-bc02c953e8a4" />

## Step 4 - Helpful Resources

**Open Link Component:**
- Create a react component called `OpenLink`. Store it in `src/components/OpenLink.jsx`
- The component has one prop: `link`
- The component should render an anchor tag with the `open.svg` image.
- When the component is clicked, the value for the link prop should be opened **in another tab**.

**Copy Link Component:**
- Create a react component called `CopyLink`. Store it in `src/components/CopyLink.jsx`
- The component has one prop: `link`
- The component should render an image tag with the class name “copy” and contains the `copy.svg` image.
- When the component is clicked, the value for the link prop should be <ins>copied to the users clipboard<ins>.

**Helpful Resource Component**:
- Create a react component called `HelpfulResource`. Store it in `src/components/HelpfulResource.jsx`
- The component has two props:
  - `link`: a url that links to helpful information
  - `label`: text that describes the helpful information
- The component should render a `div` with the class name “helpful-resource”
- Inside the div render the label prop, followed by an `OpenLink` component and a `CopyLink` component.
  - The `link` prop from `HelpfulResource` should be passed to `OpenLink` and `CopyLink`.
 
**Helpful Resource Section:**
- Add another `Section` component to the `App` component
- The title prop of the section component should be “Helpful resources”
- Between the opening and closing section tags put 3 `HelpfulResource` components.
- The `HelpfulResource` components should link to articles, videos or courses you found helpful for learning react. (This will be graded for correctness. Do not link to non react things)

**When the task is complete the app should look like this:**
<img width="928" height="846" alt="task-3-complete" src="https://github.com/user-attachments/assets/155e3145-eb71-45f1-8d14-29e32e39a27c" />


## Step 5 - About Me

**About Me Component:**
- Create a react component called `AboutMe`. Store it in `src/components/AboutMe.jsx`
- The AboutMe component should render a div with the class name “about-me”.
- Inside the div render an image that contains a professional picture of you. (Think something you would feel comfortable putting on linked in).
- Inside the div and after the image, render a paragraph with a short bio about yourself. Things to include in the bio:
  - Your name.
  - Your spec.
  - What trimester you are in.
  - Your favorite languages or technologies to work with.
  - What you want to do after school.
  - Some of your non school/work related hobbies.
- Add the `AboutMe` component to your `App` component.

**When the task is complete the app should look like this:**
<img width="833" height="951" alt="task-4-complete" src="https://github.com/user-attachments/assets/a400ac0a-ba86-49ea-b694-ee48e21b0c61" />


## Step 6 - Footer

**Footer Component:**
- Create a react component called `Footer`. Store it in `src/components/Footer.jsx`
- The `Footer` component should render a `footer` html element.
- Inside the footer element add an unordered list.
- Import `assets/links.json` and loop through the array of data rendering a list item in the unordered list for each item in the array.
- The label value should be the visible text in the list item. Clicking the text should open the link value.
- Under the unordered list render “© 2025 Atlas School”. The year should not be hard-coded, use javascript date class to get the current year.
- Add the `Footer` component to the `App` component.

**When the task is complete the app should look like this:**
<img width="708" height="879" alt="task-5-complete" src="https://github.com/user-attachments/assets/850f1c3c-3e88-4d51-a48e-e49f8b3f9abc" />


## Step 7 - Deploy Application

- Deploy application to Netlify
- Optional: change site name to: “atlas-react-jsx-[FIRST-INITIAL][LAST-NAME]”
- Copy the url and paste it into the input field in Blackboard.
- App should be accessible from url provided and meets all project requirements.

# Submission

You should now have a finished React App that is hosted on Netlify! Check in your finished app and submit the Netlify link to Blackboard!
