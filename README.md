1. ### Add at least 3 Project features. 
- __Course Selection and Credit Calculation:__ We can browse and select courses from the provided carts. As we select courses, the website dynamically calculates the total credit hours. It should enforce a maximum limit of 20 credit hours to ensure students don't exceed their capacity.
- __Course Information Display:__ When we select a course, the website should display detailed information about the course, including the course name. This information helps students make informed choices.
- __Interactive User Interface:__ The website should offer an intuitive and user-friendly interface that allows users to easily add. It should provide real-time updates on credit hours and course details as we make selections, ensuring informative registration process.

***

2. ### Discuss how you managed the state in your assignment project.
- I used local state management within my front-end application to keep track of selections and credit hours of course's cart, remainingHour and totalHour etc. This can be done using state management libraries like React 'useState' hook. When we select a course, the website sends a request to the API to fetch the course details. Storing the data as course name and credit hours in the 'useState', then it shows the details using 'useEffect' function.
